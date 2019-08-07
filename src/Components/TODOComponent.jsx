import React, { Component } from 'react';
import InputTasks from './Input/InputTasksComponent';
import ListTasks from './List/ListTasksComponent';

class TODO extends Component {

    constructor(props) {
        super(props);
        this.state = { textInput: '', tasks: [] };

        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleUpdateListTasks = this.handleUpdateListTasks.bind(this);
    }

    addTask(task) {
        this.state.tasks.push(task);
    }

    handleChangeText(textRecieved) {
        this.setState({ textInput: textRecieved });
        this.addTask(textRecieved);
    }

    handleUpdateListTasks(tasksUpdate) {
        this.setState({ tasks: tasksUpdate });
    }

    render() {
        
        return (
            <div className="container-TODO">
                <div>
                    <h2> Tienes algunas cosas por hacer?! </h2>
                </div>
                <InputTasks onChangeText={this.handleChangeText} />
                <ListTasks tasks={this.state.tasks} onUpdateListTasks={this.handleUpdateListTasks}/>
            </div>
        );
    }
}

export default TODO;