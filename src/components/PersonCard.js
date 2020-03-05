import React, { Component } from 'react';
class PersonCard extends Component {
    render() {
        const { FirstName, LastName, Age, HairColor } = this.props;
        return (
            <div>
                <h1>{LastName}, {FirstName}</h1>
                <h4>Age: {Age}</h4>
                <h4>Hair Color: {HairColor}</h4>
            </div>
        )
    }
}
export default PersonCard;