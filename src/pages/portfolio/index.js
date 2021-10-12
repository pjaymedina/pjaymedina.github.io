import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Button } from "react-bootstrap";

import colors from "../../config/colors";

import spendrite from "../../assets/portfolio/spendrite.png";
import pocketqueue from "../../assets/portfolio/pocketqueue.png";
import itoolbox from "../../assets/portfolio/itoolbox.png";
import tarago from "../../assets/portfolio/tarago.png";
import { Background } from "../../components";

const portfolioData = [
    {
        projName: "TaraGo",
        title: "Landing Page",
        language: "Javascript",
        framework: "React.js",
        database: "",
        others: "",
        image: tarago,
        site: "https://www.tarago.app",
    },
    {
        projName: "Pocket Queue",
        title: "Pocket Queue | Mobile Queueing App",
        language: "Javascript",
        framework: "React.js",
        database: "MongoDB",
        others: "Rest API, Chart.js, Google Login Integration",
        image: pocketqueue,
        site: "",
    },
    {
        projName: "SpendRite",
        title: "Capstone Project | Budget Tracker Web App",
        language: "Javascript",
        framework: "Next.js / React.js",
        database: "MongoDB",
        others: "Rest API, Chart.js, Google Login Integration",
        image: spendrite,
        site: "",
    },
    {
        projName: "iToolbox PH",
        title: "iToolbox Landing Page Mobile Responsive",
        language: "Javascript",
        framework: "React.js",
        database: "N/A",
        others: "N/A",
        image: itoolbox,
        site: "",
    },
];

function PortfolioPage(props) {
    return (
        <Background>
            <ReactFullpage
                scrollOverflow={true}
                sectionsColor={[
                    colors.white,
                    colors.background,
                    colors.white,
                    colors.background,
                ]}
                navigation
                render={({ state, fullpageApi }) => {
                    return (
                        <div id="fullpage-wrapper">
                            {portfolioData.map(
                                (
                                    {
                                        projName,
                                        title,
                                        language,
                                        framework,
                                        database,
                                        others,
                                        image,
                                        site,
                                    },
                                    index
                                ) => {
                                    return (
                                        <div
                                            className={
                                                index === 0
                                                    ? `section imagePortfolio section1`
                                                    : `section imagePortfolio section`
                                            }
                                            style={{
                                                backgroundImage: `url(${image})`,
                                            }}
                                            key={index}
                                        >
                                            <div className="portfolioInfo fText textPrimary f400">
                                                <h3 className="poftfolioTitle f700">
                                                    {projName}
                                                </h3>
                                                <p className="fSubTitle f700">
                                                    {title}
                                                </p>
                                                <p>{language}</p>
                                                <p>{framework}</p>
                                                <p>
                                                    {database === "N/A"
                                                        ? null
                                                        : database}
                                                </p>
                                                <p>
                                                    {others === "N/A"
                                                        ? null
                                                        : others}
                                                </p>
                                                {site && (
                                                    <Button
                                                        style={
                                                            styles.contactButton
                                                        }
                                                        href={site}
                                                        target="_blank"
                                                    >
                                                        Visit Site
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    );
                }}
            />
        </Background>
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
};

export default PortfolioPage;
