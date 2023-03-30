import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import { Button, Modal, Container} from "react-bootstrap";
import blankHeadshot from "../components/blankshot.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import rtHeadshot from "../components/teixeira.png";


function MyModal({ showModal, toggleModal }) {
  return (
    <Modal className="bio-modal" show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Prof. Rafael Teixeira</Modal.Title>
      </Modal.Header>
      <Modal.Body className="">
      <Container>
      <Row>
      <Col className="col-6 text-center">
      <img className="round-img my-2 mx-auto" style={{width: "200px", height: "200px", borderRadius: "100px"}} src={rtHeadshot} alt={"Rafael Teixeira"} />
      </Col>
      <Col className="col-6 text-center">
      <a className="mt-5 btn btn-primary" href="mailto:teixeirar@cofc.edu">Contact</a>
      <p className="mt-2">Other Links Coming Soon!</p>
      </Col>
      </Row>
      <Row>
      <Col className="col-6 text-center">
      <h3 className="pb-1">Prof. Rafael Teixeira</h3>
      </Col>
      </Row>
      <Row>
      <p className="text-center">
        Rafael Teixeira is an assistant professor in supply chain management at the School of Business, College of Charleston. He received his Ph.D. in Supply Chain Management from Clemson University. He taught undergraduate and graduate level courses for seven years at Unisinos Business School (Brazil) before joining the College of Charleston. Before joining the academia, he worked for six years in the biggest telecommunication carrier of Brazil as data analyst and B2B business account manager. His research interests are business-to-business service supply chain with emphasis on technology, exploring the interaction between buyers and suppliers and the food supply chain. His research has been published in journals like Industrial Marketing Management, International Journal of Retail and Distribution Management, Service Business, Operations Research Management, Transportation Journal, International Journal of Production Economics, International Journal of Service Technology and Management, Food Control, among others.
      </p>
      </Row>
      </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


export function About() {
  const [showModal, setShowModal] = useState(false);


  const toggleModal = () => {
    setShowModal(!showModal);
  };


  return (
    <>
      <MyModal showModal={showModal} toggleModal={toggleModal} />
      <Container className="mt-4">
        <Row>
          <h3 className="text-center">About SupplyChainNews</h3>
        </Row>
        <Row>
          <p className="text-center mx-auto col-md-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Row>
        <Row>
          <p className="text-center mx-auto col-md-7">
            Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Row>
        <Row>
          <h3 className="my-3 text-center">The Team</h3>
        </Row>
        <Row>
          <div className="mr-1" />
        </Row>
        <Row>
          <Col>
            <Card className="mx-auto text-center" style={{ width: '14rem' }}>
              <Card.Img variant="top" src={rtHeadshot} />
              <Card.Body>
                <Card.Title>Prof. Rafael Teixeira</Card.Title>
                <Card.Text>
                  Research Lead
                </Card.Text>
                <Button variant="primary" onClick={toggleModal}>Learn More</Button>


              </Card.Body>
            </Card>
          </Col>


          <Col>
            <Card className="mx-auto text-center" style={{ width: '14rem' }}>
              <Card.Img variant="top" src={blankHeadshot} />
              <Card.Body>
                <Card.Title>Sebastiano Ronchi</Card.Title>
                <Card.Text>
                  Research Assistant
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>


          <Col>
            <div className="ml-1" />
          </Col>


          <Col>
            <Card className="mx-auto text-center" style={{ width: '14rem' }}>
              <Card.Img variant="top" src={blankHeadshot} />
              <Card.Body>
                <Card.Title>Dillon Tartt</Card.Title>
                <Card.Text>
                  Full-Stack Developer
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>


          <Col>
            <Card className="mx-auto text-center" style={{ width: '14rem' }}>
              <Card.Img variant="top" src={blankHeadshot} />
              <Card.Body>
                <Card.Title>James Grooms</Card.Title>
                <Card.Text>
                  Back-End Developer
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>


          <Col>
            <Card className="mx-auto text-center" style={{ width: '14rem' }}>
              <Card.Img variant="top" src={blankHeadshot} />
              <Card.Body>
                <Card.Title>Ren Menchaca</Card.Title>
                <Card.Text>
                  Front-End Developer
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <div className="my-3"></div>
        </Row>
      </Container>
    </>
  );
}
