import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import deleteImage from "../../CarouselImages/DeleteImage.png";

export default class movieShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:3786/movies/show/${id}`)
      .then((movieData) => {
        const movie = movieData.data;
        this.setState({ movie });
      })
      .catch((err) => console.log(err));
  }

  handleDelete = () => {
    const { _id } = this.state.movie;
    axios
      .delete(`http://localhost:3786/movies/delete/${_id}`)
      .then((deletedMovie) => {
        console.log(deletedMovie);
        this.props.history.push("/Get-Movies");
      })
      .catch((err) => console.log(err));
  };

  render() {
    const genre = ((this.state.movie || {}).genre || {}).name;
    const { _id, title, description, director, year } = this.state.movie;

    return (
      <div>
        <Container>
          <Row id="add-movie">
            <Col id="movie-title">
              <h2>{title}</h2>
            </Col>
            <Col>
              <Link style={{ padding: "20px" }} to={`/movies/edit/${_id}`}>
                Edit Movie
              </Link>
              <Button variant="danger" onClick={this.handleDelete}>
                <img src={deleteImage} alt="" />
              </Button>
            </Col>
          </Row>
          <hr />

          <Row>
            <Col>
              <h5>Description</h5>
              <p>{description}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Year of Release --- {year}</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Director --- {director}</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Genre --- {genre}</h5>
            </Col>
          </Row>

          <Link to="/Get-Movies">back</Link>
        </Container>
      </div>
    );
  }
}
