import React, { ReactNode, useEffect } from "react";

import "./styles.css";

import { CarouselItemType } from "../CarouselItem";
import {
    calculateNewLastElementInView,
    calculateNewFirstElementInView
} from "./utils";

interface CarouselProps {
    children: ReactNode;
    numberOfRightClicks: number;
    viewportModifier: number;
    refsArray: React.RefObject<CarouselItemType>[];
    lastClickDirection: "left" | "right";
}

const Carousel = React.forwardRef<HTMLUListElement, CarouselProps>(
    function Carousel(props: CarouselProps, ref) {
        const {
            numberOfRightClicks,
            viewportModifier,
            refsArray,
            lastClickDirection
        } = props;

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
                refOfScrollToElement.current.scrollIntoView(
                    scrollIntoViewOptions
                );
            }
        }, [
            numberOfRightClicks,
            refsArray,
            lastClickDirection,
            viewportModifier
        ]);

        return (
            <ul className="carousel" ref={ref}>
                {props.children}
            </ul>
        );
    }
);

export default Carousel;
