import React, {Component, Fragment} from 'react'

class TodoList extends Component {
    /**
     * 构造函数
     * @param {*} props 
     */
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }

    /**
     * 点击添加按钮
     */
    handleBtnClick = () => {
        this.setState({
            list: [...this.state.list, '123']
        })
    }

    render() {
        return (
            <Fragment>
            <div>
                <input />
                <button onClick={this.handleBtnClick}>添加</button>
            </div>
            <ul>
                {this.state.list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            </Fragment>
        )
    }
}

export default TodoList