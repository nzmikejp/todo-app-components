import React, { Component } from 'react'
import NewToDoForm from './NewToDoForm'
import ToDo from './ToDo'
import './App.css'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
        todos: [
          {
            id: 1,
            content: 'Water Plants',
            priority: 'Urgent'  
          },
          {
            id: 2,
            content: 'Cook Dinner',
            priority: 'Important'  
          },
          {
            id: 3,
            content: 'Watch Youtube',
            priority: 'Important'  
          }, 
        ]
    }
  }

  addTodo = (data) => {
    var newTodo = {
      id: Date.now(),
      ...data
    }

    var newList = [newTodo, ...this.state.todos]

    this.setState({
      todos: newList
    })
  }

  removeTodo = (id) => {
    var todos = this.state.todos
    var filtered = todos.filter((item)=>{
      return item.id != id
    })

    this.setState({
      todos: filtered
    })
  }

  updateTodo = (id, data) => {
    var todos = this.state.todos
    var updated = todos.map((item)=>{
      return (item.id == id) ? {...item,...data} : item
    })

    this.setState({
      todos: updated
    })
  }
  
  render(){
    return (
      <div className="wrap">
        <div className="container">
          <div className="todos">
            {
              this.state.todos.map((todo)=>{

                var todoProps = {
                  key: todo.id,
                  removeTodo: this.removeTodo, //this is a variable that we are going to pass through props to child todo.
                  updateTodo: this.updateTodo,
                  ...todo
                }

                return (
                  <ToDo {...todoProps} /> //sending through props to todo
                )
              })
            }

            <NewToDoForm addTodo={this.addTodo} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
