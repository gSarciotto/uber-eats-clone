import React from "react";

import Header from "./components/Header";
import Cta from "./components/Cta";
//import FoodList from "./components/FoodList";
import Cta2 from "./components/Cta2";

function App(): JSX.Element {
    return (
        <div>
            <Header />
            <Cta />
            {
                //<FoodList title="Food Delivery in San Francisco Bay Area" />
            }
            <Cta2 />
        </div>
    );
}

export default App;
