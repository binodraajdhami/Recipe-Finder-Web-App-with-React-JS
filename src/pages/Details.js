import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// import APIs Key
import apis from '../Apis';

const Details = () => {
    const params = useParams();
    const [details, setDetails] = useState({});
    const [button, setButton] = useState('Instructions');

    useEffect(() => {
        getDetails(params.id);
    });

    const getDetails = async (id) => {
        const result = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information/?apiKey=${apis.myAPIs.key}`);
        const detailsData = await result.json();

        setDetails(detailsData);
    }

    return (
        <motion.div className="wrapper wrapper-details"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="recipe-thumbnail">
                <h3>{details.title}</h3>
                <img src={details.image} alt={details.title} width="100%" />
            </div>
            <div className="recipe-description">

                <div className="custom-tab-panel">
                    <div className="tab-heading">
                        <button
                            className={button === 'Instructions' ? 'active' : ''}
                            onClick={() => setButton('Instructions')}>Instructions</button>
                        <button
                            className={button === 'Ingredients' ? 'active' : ''}
                            onClick={() => setButton('Ingredients')}>Ingredients</button>
                    </div>

                    <div className="tab-body">
                        <div className={button === 'Instructions' ? 'tab-content active' : 'tab-content'}>
                            <div dangerouslySetInnerHTML={{ __html: details.instructions }}></div>
                        </div>
                        <div className={button === 'Ingredients' ? 'tab-content active' : 'tab-content'}>
                            <div dangerouslySetInnerHTML={{ __html: details.summary }}></div>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default Details;