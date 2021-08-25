import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import { RiMailSendFill, RiMailCloseFill } from "react-icons/ri";

import colors from "../../config/colors";

function ToastMsgs({ status, message }) {
    const [show, setShow] = useState(true);
    return (
        <div aria-live="polite" aria-atomic="true" className="toast-div">
            <Fade left>
                <Toast
                    onClose={() => setShow(false)}
                    show={show}
                    delay={9000}
                    autohide
                    className="bg-light"
                >
                    <Toast.Body style={styles.toastBody}>
                        {status === "success" ? (
                            <RiMailSendFill
                                size={35}
                                style={styles.successIcon}
                            />
                        ) : (
                            <RiMailCloseFill
                                size={35}
                                style={styles.errorIcon}
                            />
                        )}{" "}
                        <p style={styles.message}>{message}</p>
                    </Toast.Body>
                </Toast>
            </Fade>
        </div>
    );
}

const styles = {
    errorIcon: {
        color: colors.error,
        marginRight: "10px",
    },
    message: {
        fontSize: "12px",
        textAlign: "left",
    },
    successIcon: {
        color: colors.primary,
        marginRight: "10px",
    },
    toastBody: {
        display: "flex",
    },
};

export default ToastMsgs;
