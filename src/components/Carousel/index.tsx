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
    lastClickDirection: "left" | "right" | "none";
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
            if (lastClickDirection === "none") return;
            let scrollToElementIndex = 0;
            const scrollIntoViewOptions: ScrollIntoViewOptions = {
                behavior: "auto", //smooth option doesnt work on chrome for some reason. To overcome it, used the scroll-behavior: smooth on the .css
                block: "center"
            };
            if (lastClickDirection === "right") {
                scrollToElementIndex = calculateNewLastElementInView(
                    numberOfRightClicks,
                    viewportModifier,
                    refsArray.length
                );
                // scroll to the end so that we can view all the elements in the current "page" and not only the first one
                scrollIntoViewOptions.inline = "end";
            } else if (lastClickDirection === "left") {
                scrollToElementIndex = calculateNewFirstElementInView(
                    numberOfRightClicks,
                    viewportModifier,
                    refsArray.length
                );
                // scroll to the start so that we can view all the elements in the current "page" and not only the last one
                scrollIntoViewOptions.inline = "start";
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
