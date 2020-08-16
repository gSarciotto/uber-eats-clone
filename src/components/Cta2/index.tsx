import React from "react";

import "./styles.css";

import { ReactComponent as Img1 } from "../../assets/images/cta2-1.svg";
import { ReactComponent as Img2 } from "../../assets/images/cta2-2.svg";
import { ReactComponent as Img3 } from "../../assets/images/cta2-3.svg";

const Cta2: React.FC = () => {
    return (
        <section className="cta2">
            <div>
                <Img1 />
                <h2>Feed your employees</h2>
                <a>Create a business account</a>
            </div>
            <div>
                <Img2 />
                <h2>Your restaurant, delivered</h2>
                <a>Add your restaurant</a>
            </div>
            <div>
                <Img3 />
                <h2>Deliver the eats</h2>
                <a>Sign up to deliver</a>
            </div>
        </section>
    );
};

export default Cta2;
