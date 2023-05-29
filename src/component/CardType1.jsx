import React from "react";

function CardType1(props){
    return (
        <div className="card-type-1">
            <div className="card-heading">{props.heading}</div>
            <div className="card-content">
                {props.value}<span>{props.unit}</span>
            </div>
        </div>
    );
}

export default CardType1;