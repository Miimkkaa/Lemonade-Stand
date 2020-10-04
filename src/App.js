import React from 'react';
import logo from './logo.svg';
import styles from './App.css';
import { Router, Link, Switch, Route } from 'react-router-dom';
import GetLemonade from "./Lemonade/getLemonade";
import MainPage from "./MainPage/mainpage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"

function App() {
  return (

      <div className="page">
        <Container fluid className="container">
          <Row>
            <Col>
              <div className="spacer"></div>
            </Col>
          </Row>

          <Row>
            <Col class={styles.navigation}>
              <Nav className="justify-content-md-center mx-auto" activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/getLemonade">Get lemonade</Nav.Link>
                </Nav.Item>
              </Nav>
              <hr style={{borderColor: '#f57333', opacity: '0.3'}}/>
            </Col>
          </Row>
          <Row class={styles.content}>
            <Col className="content">
              <div >
            <Switch>
              <Route exact path='/' component={MainPage}/>
              <Route path='/getLemonade' component={GetLemonade}/>
            </Switch>
              </div>
            </Col>
          </Row>



        </Container>




      </div>





  );
}

export default App;
