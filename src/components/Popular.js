import React, { useEffect, useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// import components
import Card from "./Card";

const Popular = () => {
    const [popular, setPopular] = useState([]);
    const matches = useMediaQuery('(max-width:767px)');

    if (matches) {
        console.log('True');
    } else {
        console.log('True');
    }

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {

        const checkItem = localStorage.getItem('popular');

        if (checkItem) {
            setPopular(JSON.parse(checkItem));
        } else {
            const result = await fetch('https://api.spoonacular.com/recipes/random?apiKey=059e0b6f22f64350a4d1565e68af1bf8&number=9');
            const data = await result.json();

            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes);
        }
    }

    return (
        <div className="wrapper wrapper-popular">
            <h3>Popular Recipes</h3>
            <Splide options={{
                perPage: matches ? 2 : 3,
                arrows: false,
                pagination: false,
                drag: "free",
            }}>
                {
                    popular.map((item, i) => {
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

export default Popular;