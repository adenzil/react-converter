import React from "react";

import List from "./List";
import Input from "./Input";


export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "distance",
            distance: {
                "foot-mtr" : 0.3048,
                "inch-cm" : 2.54
            },
            mass: {
                "gm-kg" : 0.001,
                "kg-pound" : 2.20462
            },
            temperature: {
                "cel-far" : 32,
                "deg-kelvin" : 273.15
            },
            factor : 0
        };
    }

    changetype(title) {
        this.setState({title});
        this.setState({factor:this.state[title][Object.keys(this.state[title])[0]]});
    }

    render() {
        const sidebar = ['distance','mass','temperature'];
        return (
            <div>
                <List sidebar={sidebar} changetype={this.changetype.bind(this)}></List>
                <Input title={this.state.title} subselection={this.state[this.state.title]} factor={this.state.factor}></Input>
            </div>
        );
    }
}