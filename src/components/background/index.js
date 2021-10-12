import React from "react";
import { useLocation } from "react-router-dom";

function Background({ children }) {
    let location = useLocation();

    return (
        <div
            className={
                location.pathname === "/"
                    ? "background1 App"
                    : location.pathname === "/about"
                    ? "background1 App"
                    : "App"
            }
        >
            {children}
        </div>
    );
}

export default Background;
