import React from "react";

import "./styles.css";

const SectionDivider: React.FC = () => {
    return (
        <div
            style={{
                paddingLeft: "var(--global-padding)",
                paddingRight: "var(--global-padding)"
            }}
        >
            <hr className="section-divider" />
        </div>
    );
};

export default SectionDivider;
