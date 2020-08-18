import React, { useState, useEffect, useRef } from "react";

import "./styles.css";

// da pra fazer o carousel receber uma lista de itens (pode ser por child msm) e renderizar conforme a media query (teria que pegar por aqui msm)
// Outro jeito seria com css msm, e qndo tu clica no botao tu seta uma variavel no css e utiliza essa variavel pra posicionar os elementos certos e jogar o resto pra fora da tela e dar overflow hidden

import img1 from "../../assets/images/item1.jpeg";

//import leftArrow from "../../assets/icons/arrow-left.svg";
import { ReactComponent as LeftArrow } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/arrow-right.svg";
import {
    calculateNewLastElementInView,
    calculateNewFirstElementInView,
    calculateExpectedNewIndexOfLastElementInView
} from "./utils";

const Carousel: React.FC = () => {
    // TODO: make the viewportModifier according to the screensize (get it from the css, define the value with media queries), make buttons disabled when at the limits
    const [viewportModifier, setViewportModifier] = useState(1);
    const [disabledLeft, setDisabledLeft] = useState(true);
    const [disabledRight, setDisabledRight] = useState(false); //we actually need to set the true initial state at an useEffect, since if we have less items than the viewportModifier, we should start with the right button disabled
    const [refsArray, setRefsArray] = useState<
        React.RefObject<HTMLLIElement>[]
    >([
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef()
    ]);

    const carouselRef = React.createRef<HTMLUListElement>();

    const [numberOfRightClicks, setNumberOfRightClicks] = useState(0);
    const [lastClickDirection, setLastClickDirection] = useState("");

    const handleRightClick = (): void => {
        // limit the number of right clicks so that when we get to the last element and click again we dont need to keep clicking left until it moves again
        console.log("right");
        if (
            calculateExpectedNewIndexOfLastElementInView(
                numberOfRightClicks,
                viewportModifier
            ) >=
            refsArray.length - 1
        ) {
            setDisabledRight(true);
            return;
        }
        if (disabledLeft) {
            setDisabledLeft(false);
        }
        setNumberOfRightClicks(numberOfRightClicks + 1);
        setLastClickDirection("right");
    };

    const handleLeftClick = (): void => {
        console.log("left");
        if (numberOfRightClicks === 0) {
            setDisabledLeft(true);
            return;
        }
        if (disabledRight) {
            setDisabledRight(false);
        }
        setNumberOfRightClicks(numberOfRightClicks - 1);
        setLastClickDirection("left");
    };

    useEffect(() => {
        //create a custom hook with the state and this
        if (carouselRef.current) {
            const styles = window.getComputedStyle(carouselRef.current);
            const viewp = styles.getPropertyValue("--viewport-modifier");
            setViewportModifier(Number(viewp) || 1);
        }
    }, []);

    useEffect(() => {
        let scrollToElementIndex = 0;
        const scrollIntoViewOptions: ScrollIntoViewOptions = {
            behavior: "smooth"
        };
        if (lastClickDirection === "right") {
            scrollToElementIndex = calculateNewLastElementInView(
                numberOfRightClicks,
                viewportModifier,
                refsArray.length
            );
            // scroll to the end so that we can view all the elements in the current "page" and not only the first one
            scrollIntoViewOptions.block = "end";
        } else if (lastClickDirection === "left") {
            scrollToElementIndex = calculateNewFirstElementInView(
                numberOfRightClicks,
                viewportModifier,
                refsArray.length
            );
            // scroll to the start so that we can view all the elements in the current "page" and not only the last one
            scrollIntoViewOptions.block = "start";
        }
        const refOfScrollToElement = refsArray[scrollToElementIndex];
        if (refOfScrollToElement.current) {
            refOfScrollToElement.current.scrollIntoView(scrollIntoViewOptions);
        }
    }, [numberOfRightClicks, refsArray, lastClickDirection, viewportModifier]);

    return (
        <section className="food-section">
            <h2>Food Delivery in San Francisco Bay Area</h2>
            <div>
                <button
                    className="carousel-arrow-button"
                    onClick={handleLeftClick}
                    disabled={disabledLeft}
                >
                    <LeftArrow aria-label="Move backwards" />
                </button>
                <button
                    className="carousel-arrow-button"
                    onClick={handleRightClick}
                    disabled={disabledRight}
                >
                    <RightArrow aria-label="Move forwards" />
                </button>
            </div>
            <ul className="carousel" ref={carouselRef}>
                <li className="carousel-item" ref={refsArray[0]}>
                    <div className="test-div">
                        <p>Item 1</p>
                    </div>
                </li>
                <li className="carousel-item" ref={refsArray[1]}>
                    <div className="test-div">
                        <p>Item 2</p>
                    </div>
                </li>
                <li className="carousel-item" ref={refsArray[2]}>
                    <div className="test-div">
                        <p>Item 3</p>
                    </div>
                </li>
                <li className="carousel-item" ref={refsArray[3]}>
                    <div className="test-div">
                        <p>Item 4</p>
                    </div>
                </li>
                <li className="carousel-item" ref={refsArray[4]}>
                    <div className="test-div">
                        <p>Item 5</p>
                    </div>
                </li>
                <li className="carousel-item" ref={refsArray[5]}>
                    <div className="test-div">
                        <p>Item 6</p>
                    </div>
                </li>{" "}
                <li className="carousel-item" ref={refsArray[6]}>
                    <div className="test-div">
                        <p>Item 7</p>
                    </div>
                </li>
                <li className="carousel-item" ref={refsArray[7]}>
                    <div className="test-div">
                        <p>Item 8</p>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Carousel;
