import React, { Component } from 'react'


class NewToDoForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            contentInput: '',
            priorityInput: ''
        }
    }

    handleContentChange = (e) => {
        this.setState({
            contentInput: e.target.value
        })
    }
    
    handlePriortyChange = (e) => {
        this.setState({
            priorityInput: e.target.value
        })
    }

    handleAdd = (e) => {
        e.preventDefault()
        var data = {
            content: this.state.contentInput,
            priority: this.state.priorityInput
        }

        this.props.addTodo(data)
        this.setState({
            contentInput: '',
            priorityInput: ''
        })
    }

    render(){
        return (
            <div className="todo new-todo">
              <form className="todo-body">
                  <div className="form-group">
                    <label htmlFor="content-input">Content</label>
                    <input type="text" className="form-control" id="content-input" value={this.state.contentInput} onChange={this.handleContentChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="priority-input">Priority</label>
                    <input type="text" className="form-control" id="priority-input" value={this.state.priorityInput} onChange={this.handlePriortyChange}/>
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={this.handleAdd}>Add</button>
              </form>
            </div>
        )
    }
}

export default NewToDoForm