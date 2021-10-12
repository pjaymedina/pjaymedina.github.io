import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Slide from "react-reveal/Slide";

import profile from "../../assets/images/profile.png";
import { Background, Socials } from "../../components";

function HomePage(props) {
    return (
        <Background>
            <Container fluid className="fluidContainer">
                <Row className="d-flex justify-content-center align-items-left">
                    <Col className="col-12 col-lg-12 col-xl-6 homeContainer">
                        <Slide left>
                            <h3 className="f700 textSecondary fSubtitle">
                                Hi! I'm
                            </h3>
                            <h3 className="f700 textPrimary fTitle">
                                Pjay Medina
                            </h3>
                            <h4 className="f800 textSecondary fText">
                                Front-end Developer
                            </h4>
                        </Slide>
                        <Slide bottom>
                            <Socials className="socials" />
                        </Slide>
                    </Col>

                    <Col>
                        <Slide right cascade delay={300}>
                            <Image
                                src={profile}
                                alt="Profile"
                                fluid
                                className="image"
                            />
                        </Slide>
                    </Col>
                </Row>
            </Container>
        </Background>
    );
}

export default HomePage;
