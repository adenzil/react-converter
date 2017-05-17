import React from "react";

export default class Input extends React.Component {
    constructor(props) {
        super();
        this.onChange = this.handleChange.bind(this);
        this.onChangesubselection = this.handleChangesubselection.bind(this);
        this.state = {
            input : 0,
            answer : 0,
            factor : props.factor
        }
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.factor !== this.state.factor) {
            this.setState({ factor: nextProps.factor, answer: this.state.input*nextProps.factor });
        }
    }

    handleChange(e){
        const {value} = e.target;
        this.setState({input: value, answer: value*this.state.factor});
    }

    handleChangesubselection(e){
        var id = e.target.options[e.target.selectedIndex].text;
        this.setState({answer:(this.state.input*this.props.subselection[id])});
        this.state.factor = this.props.subselection[id];
    }

    render() {
        var selectedunit = this.props.subselection;
        const dd = Object.keys(selectedunit).map((key) =>
            <option key={key} value={key}>{key}</option>
        );
        return (
            <div>
                <br/>
                {this.props.title}
                <br/><br/>
                <input type="text" onChange={this.onChange}></input> &nbsp;&nbsp;
                <select onChange={this.onChangesubselection}>{dd}</select>
                <br/><br/>
                Answer : &nbsp; {this.state.answer}
            </div>
        );
    }
}