import React, {Component} from 'react'

class TodoItem extends Component {
    handleDeleteItem = (index) => {
        this.props.delete(index)
    }

    render() {
        const index = this.props.index
        const content = this.props.content
        return (
            <li onClick={() => this.handleDeleteItem(index)}>{content}</li>
        )
    }
}

export default TodoItem