import React, { Component } from 'react';

class ItemListTask extends Component {

    constructor(props) {
        super(props);
        this.state = {  };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.tasks.delete(this.props.keyTask);
        
        this.props.onDeleteItem(this.props.tasks, this.props.keyTask);
    }

    render() {
        return (
            <div className="container-item-list-task">
                <li className="item-task"> { this.props.tasks.get(this.props.keyTask) } </li>
                <span className="btn-eliminar-task" onClick={this.handleClick}> x </span>
            </div>
        );
    }
}

export default ItemListTask;

