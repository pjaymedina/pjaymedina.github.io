import React from "react";
import { Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import { Background, Socials } from "../../components";

function index(props) {
    return (
        <Background>
            <Container fluid className="fluidContainer">
                <Row className="aboutContainer">
                    <Fade bottom>
                        <h3 className="f700 textPrimary pageTitle">About me</h3>
                        <p className="textPrimary f400 fAbout">
                            I am an aspiring Frontend Developer from the
                            Philippines.
                        </p>
                        <p className="textPrimary f400 fAbout">
                            I enjoy taking complex problems and turning them
                            into simple and beautiful interface. I also love the
                            logic and structure of coding and always strive to
                            write efficient and reusable codes in Reactjs and
                            React Native.
                        </p>
                        <p className="textPrimary f400 fAbout">
                            When I am not coding you'll find me in Pjaywalker
                            doing travel videos.
                        </p>
                    </Fade>
                    <Slide bottom>
                        <Socials className="aboutSocials" />
                    </Slide>
                </Row>
            </Container>
        </Background>
    );
}

export default index;
