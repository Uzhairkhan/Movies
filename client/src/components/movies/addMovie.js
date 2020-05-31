import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";

export default function addMovie(props) {
  const handleSubmit = (movieData) => {
    axios
      .post("http://localhost:3786/movies/add", movieData)
      .then((response) => {
        console.log(response);
        const id = response.data._id;
        props.history.push(`/Get-Movies/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Container>
        <h2>Add a Movie</h2>
        <Form handleSubmit={handleSubmit} />
        <Link to="/Get-Movies">back</Link>
      </Container>
    </div>
  );
}
