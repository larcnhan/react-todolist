import React, {Component, Fragment} from 'react'

class TodoList extends Component {
    /**
     * 构造函数
     * @param {*} props 
     */
    constructor(props) {
        super(props)

        this.state = {
            list: ['study react', 'study englist']
        }
    }

    render() {
        return (
            <Fragment>
            <div>
                <input />
                <button>添加</button>
            </div>
            <ul>
                {this.state.list.map((item, index) => <li>{item}</li>)}
            </ul>
            </Fragment>
        )
    }
}

export default TodoList