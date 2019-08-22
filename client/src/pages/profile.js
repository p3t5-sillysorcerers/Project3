import React, { useContext } from "react";
import IdentityContext from '../../src/identity-context';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button, Container, Col, Row, Jumbotron, ListGroup, Card, Nav} from "react-bootstrap"
// import ProfileInfo from '../components/Profile Info';
import ProfImage from '../components/User Profile Card/Card Image';
// import ListGroup from "react-bootstrap/ListGroup";
import axios from 'axios';
// import Button from "react-bootstrap/Button";
import "./profile.css";
import User from '../User'
import CurrentJams from "../components/JamList"

function Profile(){

      const value = useContext(IdentityContext);
      console.log(value);
        return (
            <>
            <NavBar />
            <Container>
            <Jumbotron>
  <Row>    
    <Col sm={2}> <ProfImage />
    </Col>
    <Col sm={10}>
    <Card className="bg-light text-white" >
  <Card.Img src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2018/03/03103805/big-concert-audience-listening-to-music-at-festival-picture-id485343244.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title></Card.Title>
    <Card.Text>
      <User></User>
    </Card.Text>
    <Card.Text>Last updated 1 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
</Col>

  </Row>
  </Jumbotron> 
  <Row>
    <Col sm={2}><Card >
  <Card.Header>Featured</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card></Col>
    <Col sm={10}><Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
  </Row>
</Container>

            <div className="container profilestyling">
                <div className="userProfile">
                    <div className="row">
                    </div>

                </div>
            </div>
          <Footer />  
          </>
        )
    }


export default Profile;

