import React, {Component, Fragment} from 'react'

class TodoList extends Component {
    render() {
        return (
            <Fragment>
            <div>
                <input />
                <button>添加</button>
            </div>
            <ul>
                <li>study react</li>
                <li>study english</li>
            </ul>
            </Fragment>
        )
    }
}

export default TodoList