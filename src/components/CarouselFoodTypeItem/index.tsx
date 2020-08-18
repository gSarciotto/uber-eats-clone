import React, { ReactNode } from "react";
import { CarouselItemType } from "../CarouselItem";

import "./styles.css";

export interface CarouselFoodTypeItemProps {
    children: ReactNode;
}

const CarouselFoodTypeItem = React.forwardRef<
    CarouselItemType,
    CarouselFoodTypeItemProps
>(function CarouselItem(props: CarouselFoodTypeItemProps, ref) {
    return (
        <li className="carousel-item carousel-food-type-item" ref={ref}>
            {props.children}
        </li>
    );
});

export default CarouselFoodTypeItem;
