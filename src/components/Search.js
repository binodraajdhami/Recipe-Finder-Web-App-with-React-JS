import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';

import Logo from "./Logo";

const Search = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${input}`);
    }

    return (
        <div className="wrapper wrapper-search">
            <Logo />
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <FaSearch />
                    <input type="text" onChange={handleChange} className="form-control" placeholder="Search Recipe..." />
                </div>
            </form>
        </div>
    )
}

export default Search;