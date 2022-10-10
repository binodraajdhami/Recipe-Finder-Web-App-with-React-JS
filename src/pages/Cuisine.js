import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// import APIs Key
import apis from '../Apis';

// import components
import Card from "./../components/Card";

const Cuisine = () => {
    const params = useParams();
    const [cuisine, setCuisine] = useState([]);

    const getCuisine = async (name) => {
        const result = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apis.myAPIs.key}&cuisine=${name}&number=8`);
        const data = await result.json();
        setCuisine(data.results);
    }

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);

    return (
        <motion.div className="wrapper wrapper-cuisine"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="cuisine-list">
                {
                    cuisine.length > 0
                        ? cuisine.map((item, i) => {
                            return (
                                <div key={i} className="cuisine-item">
                                    <Card item={item} />
                                </div>
                            )
                        })
                        : 'No any data found to you query!'
                }
            </div>
        </motion.div>
    )
}

export default Cuisine;