import React, { Component } from 'react';
import ItemListTask from './ItemListTaskComponent';

class ListTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleUpdate

    handleDeleteItem(elementToDelete) {
        // Eliminar elemento de arreglo
        const index  = this.props.tasks.indexOf(elementToDelete);
        this.props.tasks.splice(index, 1);

        // envio del arreglo
        this.props.onUpdateListTasks(this.props.tasks);
    }

    render() {
        const tasks = this.props.tasks.map((task, index) => <ItemListTask key={index} task={task} onDeleteItem={this.handleDeleteItem} />);

        return (
            <div  className="lista-tasks">
                <ul >
                    { tasks }
                </ul>
            </div>
        );
    }
}

export default ListTasks;