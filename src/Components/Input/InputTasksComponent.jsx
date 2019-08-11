import React, { Component } from 'react';

class InputTasks extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    
    sendInputValue() {
        this.props.onChangeText(this.state.value);
    }

    isEmpty() {
        if (this.state.value === "")
            return true;
        else
            return false;
    }

    // Eventos
    handleKeyUp(event) {
        if (event.key.toLowerCase() === 'enter' && !this.isEmpty()) {
            this.sendInputValue();
            document.getElementById("input-task").value = "";
        }

        this.setState({ value: event.target.value });
    }

    handleOnClick() {
        if (!this.isEmpty()) {
            this.sendInputValue();
            document.getElementById("input-task").value = "";
        }
    }

    render() {
        return (
            <div>
                <input id="input-task" className="input-task" type="text" onKeyUp={this.handleKeyUp} />
                <a href="#" className="button-task" onClick={this.handleOnClick}> Agregar tarea </a>
            </div>
        );
    }
}

export default InputTasks;

