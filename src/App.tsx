import React from "react";

import Header from "./components/Header";
import Cta from "./components/Cta";
import FoodList from "./components/FoodList";
import Cta2 from "./components/Cta2";
import TextList from "./components/TextList";
import SectionDivider from "./components/SectionDivider";
import Footer from "./components/Footer";
import CarouselItem, { CarouselItemType } from "./components/CarouselItem";
import FoodListItemContent, {
    FoodListItemContentProps
} from "./components/FoodListItemContent";
/*import FoodTypeListItemContent, {
    FoodTypeListItemContentProps
} from "./components/FoodTypeListItemContent";*/
//import CarouselFoodTypeItem from "./components/CarouselFoodTypeItem";

import foodList1Img1 from "./assets/images/list1/item1.jpeg";
import foodList1Img2 from "./assets/images/list1/item2.jpeg";
import foodList1Img3 from "./assets/images/list1/item3.jpeg";
import foodList1Img4 from "./assets/images/list1/item4.jpg";
import foodList1Img5 from "./assets/images/list1/item5.jpg";
import foodList1Img6 from "./assets/images/list1/item6.jpg";

import foodList2Img1 from "./assets/images/list2/item1.jpg";
import foodList2Img2 from "./assets/images/list2/item2.jpg";
import foodList2Img3 from "./assets/images/list2/item3.jpg";
import foodList2Img4 from "./assets/images/list2/item4.jpeg";

import foodList3Img1 from "./assets/images/list3/item1.jpeg";
import foodList3Img2 from "./assets/images/list3/item2.jpeg";

/*import foodTypeAmerican from "./assets/images/typelist/american.jpg";
import foodTypeChinese from "./assets/images/typelist/chinese.jpg";
import foodTypeDesserts from "./assets/images/typelist/desserts.jpg";
import foodTypeFastFood from "./assets/images/typelist/fastfood.jpg";
import foodTypeHealthy from "./assets/images/typelist/healthy.jpg";
import foodTypeIndian from "./assets/images/typelist/indian.jpg";
import foodTypeItalian from "./assets/images/typelist/italian.jpg";
import foodTypeMexican from "./assets/images/typelist/mexican.jpg";
import foodTypePizza from "./assets/images/typelist/pizza.jpg";
import foodTypeSushi from "./assets/images/typelist/sushi.jpg";
import foodTypeThai from "./assets/images/typelist/thai.jpg";*/

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

    const foodListData1: FoodListItemContentProps[] = [
        {
            title: "Starbucks (Polk Street)",
            imageSource: foodList1Img1,
            information: "$1.49 Delivery Fee • 20-30 Min • $",
            rating: "4.7",
            tags: "Cafe • Coffee & Tea • Breakfast and Brunch • Bakery"
        },
        {
            title: "McDonald's® (Fillmore)",
            imageSource: foodList1Img2,
            information: "$2.99 Delivery Fee • 10-20 Min • $",
            rating: "4.5",
            tags: "American • Fast Food • Burgers"
        },
        {
            title: "Jack in the Box (400 Geary St)",
            imageSource: foodList1Img3,
            information: "$2.99 Delivery Fee • 15-25 Min • $",
            rating: "4.4",
            tags: "American • burger • Fast Food"
        },
        {
            title: "The Posh Bagel - Sutter St.",
            imageSource: foodList1Img4,
            information: "$3.99 Delivery Fee • 25-35 Min • $",
            rating: "4.8",
            tags: "Breakfast and Brunch • Sandwich"
        },
        {
            title: "Project Juice (Chestnut)",
            imageSource: foodList1Img5,
            information: "$4.99 Delivery Fee • 30-40 Min • $",
            rating: "4.9",
            tags: "Juice and Smoothies • Vegan Friendly • Vegetarian Friendly"
        },
        {
            title: "Carl's Jr. (1 Hallidie Plaza)",
            imageSource: foodList1Img6,
            information: "$2.99 Delivery Fee • 25-35 Min • $",
            rating: "4.5",
            tags: "Fast Food • Burgers • American"
        }
    ];

    const foodListData2: FoodListItemContentProps[] = [
        {
            title: "All Nite Pizza",
            imageSource: foodList2Img1,
            information: "$2.49 Delivery Fee • $",
            rating: "5.0",
            tags: "Pizza"
        },
        {
            title: "Cool Cravings - Divisadero",
            imageSource: foodList2Img2,
            information: "$1.49 Delivery Fee • $",
            rating: "New",
            tags: "American • Breakfast and Brunch • Salads"
        },
        {
            title: "SF Rinse Cafe",
            imageSource: foodList2Img3,
            information: "$0.49 Delivery Fee • $",
            rating: "New",
            tags: "Cafe"
        },
        {
            title: "Breakfast Pizza",
            imageSource: foodList2Img4,
            information: "$0.49 Delivery Fee • $",
            rating: "New",
            tags: "Pizza • Breakfast and Brunch"
        }
    ];

    const foodListData3: FoodListItemContentProps[] = [
        {
            title: "McDonald's® (Potrero)",
            imageSource: foodList3Img1,
            information: "$1.49 Delivery Fee • $",
            rating: "4.6",
            tags: "American • Fast Food • Burgers"
        },
        {
            title: "McDonald's® (Sutter St)",
            imageSource: foodList3Img1,
            information: "$1.49 Delivery Fee • $",
            rating: "4.6",
            tags: "American • Fast Food • Burgers"
        },
        {
            title: "McDonald's® (Fillmore)",
            imageSource: foodList3Img1,
            information: "$1.49 Delivery Fee • $",
            rating: "4.5",
            tags: "American • Fast Food • Burgers"
        },
        {
            title: "McDonald's® (2801 Mission St)",
            imageSource: foodList3Img1,
            information: "$1.49 Delivery Fee • $",
            rating: "4.6",
            tags: "American • Fast Food • Burgers"
        },
        {
            title: "Jack in the Box (4649 Geary Blvd)",
            imageSource: foodList3Img2,
            information: "$2.49 Delivery Fee • $",
            rating: "4.4",
            tags: "American • burger • Fast Food"
        },
        {
            title: "Jac in the Box (400 Geary St)",
            imageSource: foodList3Img2,
            information: "$1.49 Delivery Fee • $",
            rating: "4.4",
            tags: "American • burger • Fast Food"
        }
    ];

    /*const foodTypeListData: FoodTypeListItemContentProps[] = [
        {
            title: "Pizza",
            imageSource: foodTypePizza
        },
        {
            title: "Chinese",
            imageSource: foodTypeChinese
        },
        {
            title: "Mexican",
            imageSource: foodTypeMexican
        },
        {
            title: "Sushi",
            imageSource: foodTypeSushi
        },
        {
            title: "Indian",
            imageSource: foodTypeIndian
        },
        {
            title: "Thai",
            imageSource: foodTypeThai
        },
        {
            title: "Desserts",
            imageSource: foodTypeDesserts
        },
        {
            title: "American",
            imageSource: foodTypeAmerican
        },
        {
            title: "Fast Food",
            imageSource: foodTypeFastFood
        },
        {
            title: "Healthy",
            imageSource: foodTypeHealthy
        },
        {
            title: "Italian",
            imageSource: foodTypeItalian
        }
    ];*/

    const foodList1RefsArray: React.RefObject<CarouselItemType>[] = [];
    const foodList2RefsArray: React.RefObject<CarouselItemType>[] = [];
    const foodList3RefsArray: React.RefObject<CarouselItemType>[] = [];
    /*const foodTypeListRefsArray: React.RefObject<CarouselItemType>[] = [];*/
    for (let i = 0; i < foodListData1.length; i++) {
        foodList1RefsArray.push(React.createRef());
    }
    for (let i = 0; i < foodListData2.length; i++) {
        foodList2RefsArray.push(React.createRef());
    }
    for (let i = 0; i < foodListData3.length; i++) {
        foodList3RefsArray.push(React.createRef());
    }
    /*for (let i = 0; i < foodTypeListData.length; i++) {
        foodTypeListRefsArray.push(React.createRef());
    }*/

    return (
        <div>
            <Header />
            <Cta />
            <FoodList
                title="Food Delivery in San Francisco Bay Area"
                refsArray={foodList1RefsArray}
                viewportMultiplier={1}
            >
                {foodList1RefsArray.map((ref, index) => (
                    <CarouselItem key={index} ref={ref}>
                        <FoodListItemContent {...foodListData1[index]} />
                    </CarouselItem>
                ))}
            </FoodList>
            <SectionDivider />
            <Cta2 />
            <SectionDivider />
            <FoodList
                title="Pizza Delivery in San Francisco Bay Area"
                refsArray={foodList2RefsArray}
                viewportMultiplier={1}
            >
                {foodList2RefsArray.map((ref, index) => (
                    <CarouselItem key={index} ref={ref}>
                        <FoodListItemContent {...foodListData2[index]} />
                    </CarouselItem>
                ))}
            </FoodList>
            <SectionDivider />
            <TextList
                title="Cities Near Me"
                additionalText="View all 500+ cities"
                textArray={cities}
            />
            <SectionDivider />
            <FoodList
                title="Fast Food Delivery in San Francisco Bay Area"
                refsArray={foodList3RefsArray}
                viewportMultiplier={1}
            >
                {foodList3RefsArray.map((ref, index) => (
                    <CarouselItem key={index} ref={ref}>
                        <FoodListItemContent {...foodListData3[index]} />
                    </CarouselItem>
                ))}
            </FoodList>
            <SectionDivider />
            {/*<FoodList
                title="Food Near Me"
                refsArray={foodTypeListRefsArray}
                viewportMultiplier={2}
            >
                {foodTypeListRefsArray.map((ref, index) => (
                    <CarouselFoodTypeItem key={index} ref={ref}>
                        <FoodTypeListItemContent {...foodTypeListData[index]} />
                    </CarouselFoodTypeItem>
                ))}
            </FoodList>
                <SectionDivider />*/}
            <TextList title="Countries with Uber Eats" textArray={countries} />
            <Footer />
        </div>
    );
}

export default App;
