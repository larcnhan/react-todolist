import React, {Component, Fragment} from 'react'

class TodoList extends Component {
    /**
     * 构造函数
     * @param {*} props 
     */
    constructor(props) {
        super(props)

        this.state = {
            list: [],
            inputValue: ''
        }
    }

    /**
     * 点击添加按钮
     */
    handleBtnClick = () => {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    /**
     * 更改输入框的值
     */
    handleChangeInput = e => {
        this.setState({
            inputValue: e.target.value
        })
    }

    /**
     * 点击列表项，删除点击项
     */
    handleItemClick = (index) => {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({list})
    }

    render() {
        return (
            <Fragment>
            <div>
                <input onChange={this.handleChangeInput} value={this.state.inputValue}/>
                <button onClick={this.handleBtnClick}>添加</button>
            </div>
            <ul>
                {this.state.list.map((item, index) => <li key={index} index={index} onClick={() => this.handleItemClick(index)}>{item}</li>)}
            </ul>
            </Fragment>
        )
    }
}

export default TodoList