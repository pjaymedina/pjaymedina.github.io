import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import Flip from "react-reveal/Flip";
import { Background } from "../../components";

import skills from "../../data/skills";

function SkillsPage(props) {
    return (
        <Background>
            <Container fluid className="fluidContainer">
                <Row className="skillsContainer">
                    <h3 className="f700 textPrimary pageTitle">Tech Stack</h3>
                    {skills.map((item, index) => {
                        return (
                            <Col className="skillsFlipBox col-3" key={index}>
                                <div className="skillsFlipBoxInner">
                                    <div className="skillsflipBoxFront">
                                        <Flip left cascade>
                                            <Image
                                                src={item.image}
                                                alt="skills"
                                                style={{ borderRadius: 10 }}
                                                className="skillsImage"
                                            />
                                        </Flip>
                                    </div>
                                    <div
                                        className="skillsflipBoxBack"
                                        style={{ borderRadius: 10 }}
                                    >
                                        <p className="skillsText ">
                                            {item.name}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </Background>
    );
}

export default SkillsPage;
