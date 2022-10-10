import React from "react";
import { BrowserRouter } from "react-router-dom";

// import components
import Search from "./components/Search";
import Category from "./components/Category";

// import page
import Pages from "./pages/Pages";

const App = () => {
    return (
        <BrowserRouter>
            <Search />
            <Category />
            <Pages />
        </BrowserRouter>

    )
}

export default App;