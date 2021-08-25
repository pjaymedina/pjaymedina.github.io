import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import colors from "../../config/colors";

import spendrite from "../../assets/portfolio/spendrite.png";
import pocketqueue from "../../assets/portfolio/pocketqueue.png";
import itoolbox from "../../assets/portfolio/itoolbox.png";

const portfolioData = [
    {
        projName: "SpendRite",
        title: "Capstone Project | Budget Tracker Web App",
        language: "Javascript",
        framework: "Next.js / React.js",
        database: "MongoDB",
        others: "Rest API, Chart.js, Google Login Integration",
        image: spendrite,
    },
    {
        projName: "Pocket Queue",
        title: "Pocket Queue | Mobile Queueing App",
        language: "Javascript",
        framework: "React.js",
        database: "MongoDB",
        others: "Rest API, Chart.js, Google Login Integration",
        image: pocketqueue,
    },
    {
        projName: "iToolbox PH",
        title: "iToolbox Landing Page Mobile Responsive",
        language: "Javascript",
        framework: "React.js",
        database: "N/A",
        others: "N/A",
        image: itoolbox,
    },
];

function PortfolioPage(props) {
    return (
        <ReactFullpage
            scrollOverflow={true}
            sectionsColor={[colors.white, colors.background, colors.white]}
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
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                );
            }}
        />
    );
}

export default PortfolioPage;
