import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from './Root.module.css'
const Footer = () => {
  return (
    <div className="bg-light py-3">
      <Container>
        <Row className="d-flex justify-content-between align-items-center py-4">
          <Col md="4" xs="12" className="">
            <div className="">
              <Link
                to="/"
                className="logo-img fw-bold text-black"
                style={{ textDecoration: "none" }}
              >
                Tastebite
              </Link>
              <p className=" my-3" style={{lineHeight:"25px"}}>
                "Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups,Lorem ipsum is placeholder text.
              </p>
            </div>
          </Col>
          <Col md="1" xs="12"></Col>
          <Col
            md="7" xs="12"
            className="">
            <Row>
              <Col md="4" xs="4" className={classes["f-txt"]}>
                <div className="">
                  <h6 className="text-black mb-3">Tastebite</h6>
                  <p>About us</p>
                  <p>Career</p>
                  <p>Contact us</p>
                  <p>Feedback</p>
                </div>
              </Col>
              <Col md="4" xs="4" className={classes["f-txt"]}>
              <div>
                  <h6 className="text-black mb-3">Tastebite</h6>
                  <p>About us</p>
                  <p>Career</p>
                  <p>Contact us</p>
                  <p>Feedback</p>
                </div>
              </Col>
              <Col md="4" xs="4" className={classes["f-txt"]}>
              <div>
                  <h6 className="text-black mb-3">Tastebite</h6>
                  <p>About us</p>
                  <p>Career</p>
                  <p>Contact us</p>
                  <p>Feedback</p>
                </div>
              </Col>
            </Row>
              
            </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm="6" className="d-flex align-items-center ">
            <div className=" text-black">© 2020 Tastebite - All rights reserved</div>
          </Col>
          <Col
            sm="6"
            
            className={classes.social}
          >
            <div style={{ cursor: "pointer" }}>
              <i className="fa-brands fa-facebook-f "></i>
            </div>
            <div style={{ cursor: "pointer" }} >
              <i className="fa-brands fa-twitter ms-3"></i>
            </div>
            <div style={{ cursor: "pointer" }}>
              <i className="fa-brands fa-instagram ms-3"></i>
            </div>
            <div style={{ cursor: "pointer" }} >
              <i className="fa-brands fa-youtube ms-3"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
