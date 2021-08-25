import React from "react";
import { FaGitlab, FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import Roll from "react-reveal/Roll";

const socials = [
    {
        href: "https://gitlab.com/pjaym",
        icon: <FaGitlab size={25} />,
    },
    {
        href: "https://www.linkedin.com/in/precious-joy-pjay-medina-835b0789/",
        icon: <FaLinkedinIn size={25} />,
    },
    {
        href: "https://www.facebook.com/pjayadamos/",
        icon: <FaFacebookF size={25} />,
    },
    {
        href: "https://github.com/pjaymedina/",
        icon: <FaGithub size={25} />,
    },
];

function Socials({ className }) {
    return (
        <div className={className}>
            {socials.map(({ href, icon }, index) => {
                return (
                    <Roll bottom key={index}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="icon"
                            key={index}
                        >
                            {icon}
                        </a>
                    </Roll>
                );
            })}
        </div>
    );
}

export default Socials;
