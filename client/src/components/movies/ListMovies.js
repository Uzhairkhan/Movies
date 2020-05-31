import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, CardDeck } from "react-bootstrap";
import axios from "axios";
import defaultImg from "../../CarouselImages/defaultImage.png";

export default class ListMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3786/movies/list")
      .then((movieData) => {
        const movies = movieData.data;
        this.setState({ movies });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Container>
          <Row id="add-movie">
            <Col>
              <h2>Movies Listing</h2>
            </Col>
            <Col>
              <Link to="/movies/add">Add a Movie</Link>
            </Col>
          </Row>
          <hr />

          <CardDeck>
            {this.state.movies.map((movie) => {
              return (
                <Card className="cards" key={movie._id}>
                  <Card.Img src={defaultImg} />
                  <Card.Body>
                    <Card.Title id="titles">{movie.title}</Card.Title>
                    {/* <Card.Text>{movie.description}</Card.Text> */}
                  </Card.Body>
                  <Button variant="success">
                    <Link to={`/Get-Movies/${movie._id}`} className="nav-link">
                      {" "}
                      View Details
                    </Link>
                  </Button>
                </Card>
              );
            })}
          </CardDeck>
        </Container>
      </div>
    );
  }
}
