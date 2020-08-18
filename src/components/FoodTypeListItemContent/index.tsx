import React from "react";

import "./styles.css";

export interface FoodTypeListItemContentProps {
    title: string;
    imageSource: string;
}

const FoodTypeListItemContent: React.FC<FoodTypeListItemContentProps> = (
    props: FoodTypeListItemContentProps
) => {
    return (
        <div className="food-type-list-item-container">
            <img src={props.imageSource} alt={props.title} />
            <p>{props.title}</p>
        </div>
    );
};

export default FoodTypeListItemContent;
