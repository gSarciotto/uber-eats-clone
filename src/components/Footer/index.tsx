import React from "react";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import applestore from "../../assets/images/applestore.svg";
import playstore from "../../assets/images/playstore.png";

import { ReactComponent as FbLogo } from "../../assets/icons/logo-facebook.svg";
import { ReactComponent as InstragramLogo } from "../../assets/icons/logo-instagram.svg";
import { ReactComponent as TwitterLogo } from "../../assets/icons/logo-twitter.svg";

import { ReactComponent as LanguagueSvg } from "../../assets/icons/language.svg";

import "./styles.css";

const Footer: React.FC = () => {
    const aboutUberTextArray = [
        "Read our blog",
        "Buy gift cards",
        "Create a business account",
        "Add your restaurant",
        "Sign up to deliver"
    ];
    const getHelpTextArray = [
        "Read FAQS",
        "View all cities",
        "View all countries",
        "Restaurants near me"
    ];
    return (
        <footer className="footer">
            <div className="footer-main">
                <div>
                    <Logo id="footer-logo" />
                    <div className="footer-stores-buttons-container">
                        <a href="#">
                            <img
                                src={applestore}
                                alt="Download on the App Store"
                            />
                        </a>
                        <a href="#">
                            <img
                                src={playstore}
                                alt="Download on Google Play"
                            />
                        </a>
                    </div>
                </div>
                <ul>
                    <li>
                        <a href="#">About Uber Eats</a>
                    </li>
                    {aboutUberTextArray.map((text) => (
                        <li key={text}>
                            <a href="#">{text}</a>
                        </li>
                    ))}
                </ul>
                <ul>
                    <li>
                        <a href="#">Get Help</a>
                    </li>
                    {getHelpTextArray.map((text) => (
                        <li key={text}>
                            <a href="#">{text}</a>
                        </li>
                    ))}
                    <li>
                        <a href="#" className="footer-list-language-item">
                            <LanguagueSvg />
                            English
                        </a>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="footer-end">
                <div>
                    <a href="#">
                        <FbLogo />
                    </a>
                    <a href="#">
                        <InstragramLogo />
                    </a>
                    <a href="#">
                        <TwitterLogo />
                    </a>
                </div>
                <div>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms</a>
                    <a href="#">Pricing</a>
                    <span>© 2020 Uber Technologies Inc.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
