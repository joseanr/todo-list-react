import React, { Component } from 'react';
import InputTasks from './Input/InputTasksComponent';
import ListTasks from './List/ListTasksComponent';

class TODO extends Component {

    constructor(props) {
        super(props);
        this.state = { textInput: '', tasks: new Map(), keys: [], contador: 0};

        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleUpdateListTasks = this.handleUpdateListTasks.bind(this);
    }

    addTask(textRecieved) {
        this.setState({ contador: this.state.contador + 1 });
        this.state.keys.push(this.state.contador);
        this.state.tasks.set(this.state.contador, textRecieved);
    }

    handleChangeText(textRecieved) {
        this.setState({ textInput: textRecieved });
        this.addTask(textRecieved);
    }

    handleUpdateListTasks(newListTasks, newListKeys) {
        this.setState({ 
            tasks: newListTasks,
            keys: newListKeys
        });
    }


    render() {

        return (
            <div className="container-TODO">
                <div>
                    <h2> Tienes algunas cosas por hacer?! </h2>
                </div>
                <InputTasks onChangeText={this.handleChangeText} />
                <ListTasks
                    tasks={this.state.tasks}
                    keys={this.state.keys} 
                    onUpdateListTasks={this.handleUpdateListTasks} />
            </div>
        );
    }
}

export default TODO;