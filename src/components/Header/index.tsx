import React from "react";

import "./styles.css";

import logo from "../../assets/images/logo.svg";

const Header: React.FC = () => {
    return (
        <nav id="header">
            <img src={logo} alt="Uber Eats Logo" />
            <div>
                <a href="#">Create account</a>
                <a href="#" id="sign-in">
                    Sign in
                </a>
            </div>
        </nav>
    );
};

export default Header;
