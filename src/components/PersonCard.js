import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageCount: props.Age
        }
    }
    handleClick = () => {
        this.setState({
            ageCount: this.state.ageCount + 1
        })
    }
    render() {
        const { FirstName, LastName, HairColor } = this.props;
        return (
            <div>
                <h1>{LastName}, {FirstName}</h1>
                <h4>Age: {this.state.ageCount}</h4>
                <h4>Hair Color: {HairColor}</h4>
                <button onClick={this.handleClick}>Birthday for {FirstName} {LastName}</button>
            </div>
        );
    }
}
export default PersonCard;