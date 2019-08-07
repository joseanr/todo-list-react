import React, { Component } from 'react';

class ItemListTask extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.item = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onDeleteItem(this.item);
    }

    render() {
        return (
            <div className="container-item-list-task" ref={ this.item }>
                <li className="item-task"> { this.props.task } </li>
                <span className="btn-eliminar-task" onClick={this.handleClick}> x </span>
            </div>
        );
    }
}

export default ItemListTask;

