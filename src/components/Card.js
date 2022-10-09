import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <Link to={'/cuisine/details/' + props.item.id}>
            <div className="card">
                <img src={props.item.image} alt={props.item.title} />
                <p>{props.item.title}</p>
                <div className="overlayer"></div>
            </div>
        </Link>
    )
}

export default Card;