import React, { useState } from "react";

import "./styles.css";

import locationSvg from "../../assets/icons/location.svg";

const Cta: React.FC = () => {
    // add clear button when something is written on the input
    // later maybe add the cta images but rotate them in small screens so they be on top and bottom
    const [inputText, setInputText] = useState("");

    const inputRef = React.createRef<HTMLInputElement>(); // this is to focus the input when the clear button is triggered.

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setInputText(e.target.value);
    };

    const handleClearButtonEvent = (): void => {
        setInputText("");
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div id="cta-container">
            <main id="cta-content">
                <h2>Your favorite food, delivered with Uber</h2>
                <div>
                    <img src={locationSvg} aria-hidden="true"></img>
                    <input
                        placeholder="Enter delivery address"
                        value={inputText}
                        onChange={handleInputChange}
                        ref={inputRef}
                    />
                    {inputText !== "" && (
                        <button
                            type="button"
                            className="clear-button"
                            onClick={handleClearButtonEvent}
                        >
                            Clear
                        </button>
                    )}
                </div>
                <button type="button" className="cta-button">
                    Find Food
                </button>
            </main>
        </div>
    );
};

export default Cta;
