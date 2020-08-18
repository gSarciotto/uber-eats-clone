import React from "react";

import "./styles.css";

export interface FoodListItemContentProps {
    title: string;
    information: string;
    rating: string;
    imageSource: string;
    tags: string;
}

const FoodListItemContent: React.FC<FoodListItemContentProps> = (
    props: FoodListItemContentProps
) => {
    return (
        <div className="food-list-item-container">
            <div>
                <img src={props.imageSource} alt={props.title} />
                <div>
                    <a href="#">{props.title}</a>
                    <span>{props.information}</span>
                </div>
                <div
                    className={
                        Number(props.rating) > 4.5
                            ? "food-list-item-highlight-ratings"
                            : ""
                    }
                    id="food-list-item-ratings"
                >
                    {props.rating}
                </div>
            </div>
            <p>{props.tags}</p>
        </div>
    );
};

export default FoodListItemContent;
