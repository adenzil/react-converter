import React from "react";

export default class List extends React.Component {
    constructor() {
        super();
        this.onClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        const {id} = e.target;
        this.props.changetype(id)
    }

    render() {
        const listItems = this.props.sidebar.map((num) => 
            <li id={num} key={num.toString()} onClick={this.onClick}>{num}</li>
        )
        return (
            <ul>{listItems}</ul>
        );
    }
}