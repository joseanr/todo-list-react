import React, { Component } from 'react';
import ItemListTask from './ItemListTaskComponent';

class ListTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleDeleteItem(newListTask, key) {
        let index = this.props.keys.indexOf(key);
        this.props.keys.splice(index, 1);

        this.props.onUpdateListTasks(newListTask, this.props.keys);
    }

    render() {
        let elements = [...this.props.tasks].map((task, index) =>
            <ItemListTask
                tasks={ this.props.tasks }
                key={index}
                keyTask={this.props.keys[index]}
                tasks={this.props.tasks}
                onDeleteItem={this.handleDeleteItem} />);

        return (
            <div className="lista-tasks">
                <ul>
                    {elements}
                </ul>
            </div>
        );
    }
}


export default ListTasks;