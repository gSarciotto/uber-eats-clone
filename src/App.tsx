import React from "react";

import Header from "./components/Header";
import Cta from "./components/Cta";
//import FoodList from "./components/FoodList";
import Cta2 from "./components/Cta2";
import TextList from "./components/TextList";
import SectionDivider from "./components/SectionDivider";
import Footer from "./components/Footer";

function App(): JSX.Element {
    const cities: string[] = [
        "Atlanta",
        "Dallas-Fort Worth",
        "New York City",
        "Sacramento",
        "Austin",
        "Denver",
        "Orange County",
        "San Diego",
        "Baltimore-Maryland",
        "Las Vegas",
        "Palm Springs",
        "San Francisco Bay Area",
        "Boston",
        "Los Angeles",
        "Philadelphia",
        "Seattle",
        "Charlotte",
        "Miami",
        "Phoenix",
        "Tampha Bay",
        "Chicago",
        "Minneapolis - St. Paul",
        "Portland",
        "Washington D.C."
    ];

    const countries: string[] = [
        "United States",
        "Canada",
        "Chile",
        "Belgium",
        "Spain",
        "Poland",
        "Switzerland",
        "Ecuador",
        "Brazil",
        "United Kingdom",
        "Colombia",
        "Ireland",
        "Mexico",
        "Australia",
        "New Zealand",
        "Argentina",
        "France",
        "Italy",
        "Taiwan (ROC)",
        "Sweden",
        "Japan",
        "Portugal",
        "South Africa",
        "Guatemala"
    ];

    return (
        <div>
            <Header />
            <Cta />
            {
                //<FoodList title="Food Delivery in San Francisco Bay Area" />
            }
            <SectionDivider />
            <Cta2 />
            <SectionDivider />
            <TextList
                title="Cities Near Me"
                additionalText="View all 500+ cities"
                textArray={cities}
            />
            <SectionDivider />
            <TextList title="Countries with Uber Eats" textArray={countries} />
            <Footer />
        </div>
    );
}

export default App;
