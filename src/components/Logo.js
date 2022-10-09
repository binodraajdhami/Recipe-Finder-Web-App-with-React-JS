import React from "react";
import { GiChopsticks } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to={'/'} className="wrapper-logo">
            <GiChopsticks />
            <h6>Food Finder</h6>
        </Link>
    )
}

export default Logo;