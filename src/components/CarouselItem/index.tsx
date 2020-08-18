import React, { ReactNode } from "react";

import "./styles.css";

export type CarouselItemType = HTMLLIElement;

interface CarouselItemProps {
    children: ReactNode;
}

const CarouselItem = React.forwardRef<CarouselItemType, CarouselItemProps>(
    function CarouselItem(props: CarouselItemProps, ref) {
        return (
            <li className="carousel-item" ref={ref}>
                {props.children}
            </li>
        );
    }
);

export default CarouselItem;
