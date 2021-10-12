import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

import { RiSendPlaneFill } from "react-icons/ri";
import * as emailjs from "emailjs-com";
import AppHelper from "../../helper/app-helper";

import loader from "../../assets/images/loader.gif";
import colors from "../../config/colors";
import { Background, ToastMsgs } from "../../components";

function ContactPage(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [params, setParams] = useState({
        name: "",
        email: "",
        message: "",
        mobileNumber: "01171111111",
    });
    const [submitBtn, setSubmitBtn] = useState(true);
    const [status, setStatus] = useState(null);

    const { name, email, message, mobileNumber } = params;

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            reply_to: email,
            to_name: "Pjay",
            message: message,
        };

        if (name === "" || email === "" || message === "") {
            setSubmitBtn(true);
        } else {
            if (mobileNumber !== "01171111111") {
                setParams({
                    name: "",
                    email: "",
                    message: "",
                    mobileNumber: "",
                });
                setStatus("success");
            } else {
                emailjs
                    .send(
                        AppHelper.SERVICE_ID,
                        AppHelper.TEMPLATE_ID,
                        templateParams,
                        AppHelper.USER_ID
                    )
                    .then(
                        function (response) {
                            setStatus("success");
                            setParams({
                                name: "",
                                email: "",
                                message: "",
                                mobileNumber: "",
                            });
                        },
                        function (error) {
                            setStatus("failed");
                        }
                    );
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setParams((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (name === "" || email === "" || message === "") {
            setSubmitBtn(true);
        } else {
            setSubmitBtn(false);
        }
    }, [name, email, message]);

    return (
        <Background>
            <Container fluid>
                <Row>
                    {status === "success" ? (
                        <ToastMsgs
                            message={`Thank you ${name}! Your message has been sent. I will get back to you as soon as possible.`}
                            status="success"
                        />
                    ) : status === "failed" ? (
                        <ToastMsgs
                            message={`Something went wrong when sending your message. Please try again.`}
                            status="failed"
                        />
                    ) : null}
                    <Col className="px-0" style={styles.container}>
                        {isLoading ? (
                            <div style={styles.loader}>
                                <img
                                    src={loader}
                                    alt="loader"
                                    width={`${100}px`}
                                    height={`${100}px`}
                                />
                            </div>
                        ) : (
                            <div
                                className="formContainer"
                                style={{ borderRadius: 15 }}
                            >
                                <Form
                                    style={styles.form}
                                    onSubmit={(e) => handleSubmit(e)}
                                >
                                    <p className="formTitle">
                                        Feel free to get in touch with me. I am
                                        open to discussing new projects or
                                        oppoturnities.
                                    </p>

                                    <Row>
                                        <Form.Group
                                            controlId="formBasicName"
                                            as={Col}
                                            className="col-12"
                                        >
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                value={params.name}
                                                required
                                                autoComplete="off"
                                                onChange={(e) =>
                                                    handleChange(e)
                                                }
                                                style={styles.input}
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            controlId="formBasicEmail"
                                            as={Col}
                                            className="col-12"
                                        >
                                            <Form.Control
                                                name="email"
                                                type="email"
                                                placeholder="Email"
                                                required
                                                value={params.email}
                                                autoComplete="off"
                                                onChange={(e) =>
                                                    handleChange(e)
                                                }
                                                style={styles.input}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group controlId="formBasicMessage">
                                        <Form.Control
                                            name="message"
                                            type="text"
                                            placeholder="Message"
                                            required
                                            value={params.message}
                                            as="textarea"
                                            rows={5}
                                            autoComplete="off"
                                            onChange={(e) => handleChange(e)}
                                            style={styles.input}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicMobileNumber">
                                        <Form.Control
                                            name="mobileNumber"
                                            type="number"
                                            placeholder="Mobile Number"
                                            value={params.mobileNumber}
                                            required
                                            autoComplete="off"
                                            onChange={(e) => handleChange(e)}
                                            style={styles.mobileNumber}
                                        />
                                    </Form.Group>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        style={styles.submitButton}
                                        disabled={submitBtn}
                                        className="float-end"
                                    >
                                        <RiSendPlaneFill size={25} />
                                    </Button>
                                </Form>
                            </div>
                        )}

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d138754.01325232544!2d120.93187932611312!3d14.48509595662147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sen!2sph!4v1627999789456!5m2!1sen!2sph"
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            title={"Google Map"}
                            onLoad={() => {
                                setIsLoading(false);
                            }}
                        ></iframe>
                    </Col>
                </Row>
            </Container>
        </Background>
    );
}

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        overflow: "hidden",
    },
    loader: {
        position: "absolute",
    },
    form: {
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "5%",
        texAlign: "left",
    },
    input: {
        marginBottom: "20px",
        backgroundColor: colors.primary,
        color: `${colors.white} !important`,
        fontSize: "14px",
        padding: "15px",
        fontWeight: "500",
        letterSpacing: "22.54%",
        position: "relative",
    },
    mobileNumber: {
        marginBottom: "20px",
        backgroundColor: colors.white,
        color: `${colors.white} !important`,
        fontSize: "13px",
        zIndex: -1,
        border: "none",
        position: "absolute",
        top: 10,
        left: 10,
        height: 0,
        width: 0,
    },

    submitButton: {
        height: "45px",
        width: "45px",
        borderRadius: "50%",
        backgroundColor: colors.primary,
        border: "none",
        textAlign: "left",
        padding: "10px",
    },
};

export default ContactPage;
