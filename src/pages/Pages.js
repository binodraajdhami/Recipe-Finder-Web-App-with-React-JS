import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

// import pages
import Home from "./Home";
import Cuisine from "./Cuisine";
import Details from "./Details";
import SearchResult from "./SearchResult";

const Pages = () => {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.path}>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/:type" element={<Cuisine />} />
                <Route path="/cuisine/details/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResult />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Pages;