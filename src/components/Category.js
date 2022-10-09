import React from "react";
import { NavLink } from 'react-router-dom';

// import icons
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";

const Category = () => {
    return (
        <div className="category-list">
            <NavLink to={'/cuisine/Italian'}>
                <div className="category-item">
                    <FaPizzaSlice />
                    <span>Italian</span>
                </div>
            </NavLink>
            <NavLink to={'/cuisine/American'}>
                <div className="category-item">
                    <FaHamburger />
                    <span>American</span>
                </div>
            </NavLink>
            <NavLink to={'/cuisine/Thai'}>
                <div className="category-item">
                    <GiNoodles />
                    <span>Thai</span>
                </div>
            </NavLink>
            {/* <NavLink to={'/cuisine/Japanese'}>
                <div className="category-item">
                    <GiChopsticks />
                    <span>Japanese</span>
                </div>
            </NavLink> */}
        </div>
    )
}

export default Category;