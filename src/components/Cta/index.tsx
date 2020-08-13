import React, { useState } from "react";

import "./styles.css";

import locationSvg from "../../assets/icons/location.svg";
import cta1 from "../../assets/images/cta-background-1.svg";
import cta2 from "../../assets/images/cta-background-2.svg";

const Cta: React.FC = () => {
    // TODO: clean/refactor the css and adjust image sizes in mobile
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
            <div className="cta-images-container cta-img2-container">
                <img src={cta2} alt="Food ilustration" className="cta-img2" />
            </div>
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
            <div className="cta-images-container cta-img1-container">
                <img src={cta1} alt="Food ilustration" className="cta-img1" />
            </div>
        </div>
    );
};

export default Cta;
