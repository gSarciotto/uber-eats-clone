import React from "react";

import "./styles.css";

interface TextListProps {
    title: string;
    additionalText?: string;
    textArray: string[];
}

const TextList: React.FC<TextListProps> = (props: TextListProps) => {
    return (
        <section className="text-list-section">
            <div>
                <h2>{props.title}</h2>
                {props.additionalText && (
                    <a href="#" className="text-list-additional-text">
                        {props.additionalText}
                    </a>
                )}
            </div>
            <ul>
                {props.textArray.map((text) => (
                    <li key={text}>
                        <a href="#">{text}</a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TextList;
