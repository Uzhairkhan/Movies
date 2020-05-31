import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./components/Home";
import movieList from "./components/movies/ListMovies";
import movieShow from "./components/movies/movieShow";
import addMovie from "./components/movies/addMovie";
import editMovie from "./components/movies/Edit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div id="main">
          <Container>
            <Row>
              <Col id="nav-brand">Mverve Movies</Col>
              <Col id="main-nav">
                <ul>
                  <li>
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/Get-Movies">
                      Get Movies
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>

        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/Get-Movies" component={movieList} exact={true} />
          <Route path="/Get-Movies/:id" component={movieShow} />
          <Route path="/movies/add" component={addMovie} />
          <Route path="/movies/edit/:id" component={editMovie} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
