import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class movieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title ? props.title : "",
      director: props.director ? props.director : "",
      year: props.year ? props.year : "",
      genre: props.genre ? props.genre : "",
      description: props.description ? props.description : "",
      genres: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3786/genre/list")
      .then((genresData) => {
        const genres = genresData.data;
        this.setState({ genres });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const movieData = {
      title: this.state.title,
      director: this.state.director,
      year: this.state.year,
      genre: this.state.genre,
      description: this.state.description,
    };

    this.props.handleSubmit(movieData);
    this.setState({
      title: "",
      director: "",
      year: "",
      genre: "",
      description: "",
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="director">Director</Form.Label>
            <Form.Control
              name="director"
              type="text"
              id="director"
              value={this.state.director}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="year">Released Year</Form.Label>
            <Form.Control
              name="year"
              type="text"
              id="year"
              value={this.state.year}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="genre">Genre</Form.Label>
            <Form.Control
              as="select"
              name="genre"
              id="genre"
              value={this.state.genre}
              onChange={this.handleChange}
            >
              <option>Select</option>
              {this.state.genres.map((genre) => {
                return (
                  <option key={genre._id} value={genre._id}>
                    {genre.name}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="description"
              id="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
