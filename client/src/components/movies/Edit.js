import React from "react";
import axios from "axios";
import MovieForm from "./Form";
import { Container } from "react-bootstrap";

export default class EditMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:3786/movies/show/${id}`).then((response) => {
      const movie = response.data;

      this.setState({ movie });
    });
  }
  handleSubmit = (movieData) => {
    axios
      .put(
        `http://localhost:3786/movies/update/${this.state.movie._id}`,
        movieData
      )
      .then((response) => {
        const movie = response.data;
        this.props.history.push(`/Get-Movies/${movie._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <Container>
          <h2>Edit Movie</h2>
          {Object.keys(this.state.movie).length !== 0 && (
            <MovieForm {...this.state.movie} handleSubmit={this.handleSubmit} />
          )}
        </Container>
      </div>
    );
  }
}
