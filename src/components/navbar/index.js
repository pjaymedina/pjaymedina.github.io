import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { CgClose, CgMenuLeft } from "react-icons/cg";
import Slide from "react-reveal/Slide";

import colors from "../../config/colors";

function NavBar({ path }) {
    const [showNav, setShowNav] = useState(false);
    const [navbg, setNavBg] = useState("background2");
    const [name, setName] = useState("menuContainerClose");

    useEffect(() => {
        if (path === "/" || path === "/about") {
            setNavBg("background1");
        } else if (path === "/portfolio" || path === "/contact") {
            setNavBg("background2");
        } else {
            setNavBg("background3");
        }
    }, [path]);

    console.log(showNav);

    return (
        <>
            <Navbar expand="lg" sticky="top">
                <Container className={`navbarContainer ${navbg}`}>
                    <Navbar.Brand href="/" className="navBrandMargin">
                        <h2 style={styles.pjay} className="navBrand">
                            pjay.
                            <span style={styles.me} className="navBrand">
                                me
                            </span>
                        </h2>
                    </Navbar.Brand>
                    <Button
                        bsPrefix="menuIcon"
                        onClick={() => {
                            setShowNav(!showNav);
                            setName("menuContainerOpen");
                        }}
                    >
                        <CgMenuLeft size={30} className="menuIcon" />
                    </Button>
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-end"
                    >
                        <Nav className="f700 textPrimary" activeKey={path}>
                            <Nav.Link href="/about" className="navLink">
                                About Me
                            </Nav.Link>
                            <Nav.Link href="/skills" className="navLink">
                                Skills
                            </Nav.Link>
                            <Nav.Link href="/portfolio" className="navLink">
                                Portfolio
                            </Nav.Link>
                        </Nav>
                        <Button style={styles.contactButton} href="/contact">
                            CONTACT ME
                        </Button>
                    </Navbar.Collapse>
                </Container>

                <Slide right when={showNav}>
                    <div className={name}>
                        <Button
                            bsPrefix="menu"
                            onClick={() => {
                                setShowNav(false);
                                setName("menuContainerClose");
                            }}
                            className="text-right"
                        >
                            <CgClose size={30} className="menuClose" />
                        </Button>

                        <Nav className="f700 textPrimary" activeKey={path}>
                            <Nav.Link href="/about" className="navLink">
                                About Me
                            </Nav.Link>
                            <Nav.Link href="/skills" className="navLink">
                                Skills
                            </Nav.Link>
                            <Nav.Link href="/portfolio" className="navLink">
                                Portfolio
                            </Nav.Link>
                        </Nav>
                        <Button style={styles.contactButton} href="/contact">
                            CONTACT ME
                        </Button>
                    </div>
                </Slide>
            </Navbar>
        </>
    );
}

const styles = {
    contactButton: {
        backgroundColor: colors.primary,
        color: colors.white,
        borderColor: colors.primary,
        borderRadius: 10,
        padding: "6px 12px",
        fontWeight: "700",
        marginLeft: "5px",
        marginTop: "7px",
    },
    me: {
        color: colors.secondary,
    },
    pjay: {
        color: colors.primary,
    },
};

export default NavBar;
