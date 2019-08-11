import React, { Component } from 'react';
import ItemListTask from './ItemListTaskComponent';

class ListTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleClearAllTasks = this.handleClearAllTasks.bind(this);
    }

    handleDeleteItem(newListTask, key) {
        let index = this.props.keys.indexOf(key);
        this.props.keys.splice(index, 1);

        this.props.onUpdateListTasks(newListTask, this.props.keys);
    }

    handleClearAllTasks() {
        this.props.tasks.clear();
        this.props.onUpdateListTasks(this.props.tasks, []);
    }

    render() {
        let elements = [...this.props.tasks].map((task, index) =>
            <ItemListTask
                tasks={this.props.tasks}
                key={index}
                keyTask={this.props.keys[index]}
                onDeleteItem={this.handleDeleteItem} />);

        return (
            <div className="lista-tasks">
                <button className="btn-clear-all" onClick={this.handleClearAllTasks}>
                    Clear all
                </button>
                <ul>
                    {elements}
                </ul>
            </div>
        );
    }
}


export default ListTasks;