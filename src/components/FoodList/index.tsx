import React, { useState, useEffect, createRef, ReactNode } from "react";

import "./styles.css";

import { ReactComponent as LeftArrow } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/arrow-right.svg";

import { calculateExpectedNewIndexOfLastElementInView } from "../Carousel/utils"; //move it later to a common folder

import { CarouselItemType } from "../CarouselItem";
import Carousel from "../Carousel";

interface FoodListProps {
    title: string;
    viewportMultiplier: number;
    refsArray: React.RefObject<CarouselItemType>[];
    children: ReactNode;
}

const FoodList: React.FC<FoodListProps> = (props: FoodListProps) => {
    const [numberOfRightClicks, setNumberOfRightClicks] = useState(0);
    const [viewportModifier, setViewportModifier] = useState(1);
    const [disabledLeft, setDisabledLeft] = useState(true);
    const [disabledRight, setDisabledRight] = useState(false); //we actually need to set the true initial state at an useEffect, since if we have less items than the viewportModifier, we should start with the right button disabled
    const [lastClickDirection, setLastClickDirection] = useState<
        "left" | "right" | "none"
    >("none");

    const carouselRef = createRef<HTMLUListElement>();

    const refsArray = props.refsArray;

    useEffect(() => {
        //create a custom hook with the state and this
        if (carouselRef.current) {
            const styles = window.getComputedStyle(carouselRef.current);
            const viewp = styles.getPropertyValue("--viewport-modifier");
            setViewportModifier(
                props.viewportMultiplier * Number(viewp) ||
                    props.viewportMultiplier
            );
        }
    }, []);

    useEffect(() => {
        //Disable right button if all elements fit in a single view
        if (viewportModifier >= refsArray.length) setDisabledRight(true);
    }, [viewportModifier]);

    useEffect(() => {
        if (lastClickDirection === "right") {
            if (
                calculateExpectedNewIndexOfLastElementInView(
                    numberOfRightClicks,
                    viewportModifier
                ) >=
                refsArray.length - 1
            ) {
                setDisabledRight(true);
            }
            if (disabledLeft) setDisabledLeft(false);
        } else {
            if (numberOfRightClicks === 0) {
                setDisabledLeft(true);
            }
            if (disabledRight) setDisabledRight(false);
        }
    }, [numberOfRightClicks, lastClickDirection]);

    const handleRightClick = (): void => {
        // limit the number of right clicks so that when we get to the last element and click again we dont need to keep clicking left until it moves again
        if (
            calculateExpectedNewIndexOfLastElementInView(
                numberOfRightClicks,
                viewportModifier
            ) >=
            refsArray.length - 1
        ) {
            return;
        }
        setNumberOfRightClicks(numberOfRightClicks + 1);
        setLastClickDirection("right");
    };

    const handleLeftClick = (): void => {
        if (numberOfRightClicks === 0) {
            return;
        }
        setNumberOfRightClicks(numberOfRightClicks - 1);
        setLastClickDirection("left");
    };

    return (
        <section className="food-list">
            <h2>{props.title}</h2>
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
            <Carousel
                ref={carouselRef}
                numberOfRightClicks={numberOfRightClicks}
                viewportModifier={viewportModifier}
                lastClickDirection={lastClickDirection}
                refsArray={refsArray}
            >
                {props.children}
            </Carousel>
        </section>
    );
};

export default FoodList;
