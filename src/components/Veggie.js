import React, { useEffect, useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// import APIs Key
import apis from '../Apis';

// import components
import Card from "./Card";

const Veggie = () => {
    const [veggie, setVeggie] = useState([]);
    const matches = useMediaQuery('(max-width:767px)');

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {
        const checkItem = localStorage.getItem('veggie');

        if (checkItem) {
            setVeggie(JSON.parse(checkItem));
        } else {
            const result = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apis.myAPIs.key}&tags=vegetarian&number=9`);
            const data = await result.json();

            localStorage.setItem('veggie', JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }
    }

    return (
        <div className="wrapper wrapper-veggie">
            <h3>Veggie Recipes</h3>
            <Splide options={{
                perPage: matches ? 3 : 4,
                arrows: false,
                pagination: false,
                drag: "free",
            }}>
                {
                    veggie.map((item, i) => {
                        return (
                            <SplideSlide key={i}>
                                <Card item={item} />
                            </SplideSlide>
                        )
                    })
                }
            </Splide>

        </div>
    )
}

export default Veggie;