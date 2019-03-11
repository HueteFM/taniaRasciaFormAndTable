import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target; //name vem da propriedade html, indicará job ou name.

        this.setState({
            [name]: value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state); //lá em app, um novo objeto (character) é adicionado a characters
        this.setState(this.initialState); //o estado de form recebe o estado de initialState 
                                          // em form tem this.state e this.initialState.
    }

    render() {
        const { name, job } = this.state;

        return (
            <form>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <label>Job</label>
                <input
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange} />
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />

            </form>
        );
    }

}

export default Form;


