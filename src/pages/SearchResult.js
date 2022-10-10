import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// import APIs Key
import apis from '../Apis';

// import components
import Card from "./../components/Card";

const SearchResult = () => {
    const params = useParams();
    const [search, setSearch] = useState([]);

    const getSearch = async (query) => {
        const result = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apis.myAPIs.key}&query=${query}&number=8`);
        const data = await result.json();
        setSearch(data.results);
    }

    useEffect(() => {
        getSearch(params.query);
    }, [params.query]);

    return (
        <motion.div className="wrapper wrapper-cuisine"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="cuisine-list">
                {
                    search.length > 0
                        ? search.map((item, i) => {
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

export default SearchResult;