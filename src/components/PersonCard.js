import React from 'react';

const PersonCard = props => {
    return (
            <div>
                <h1>{props.LastName}, {props.FirstName}</h1>
                <h4>Age: {props.Age}</h4>
                <h4>Hair Color: {props.HairColor}</h4>
            </div>
        );
    }
export default PersonCard;