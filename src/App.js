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

  removeTodo = () => {}
  updateTodo = () => {}
  
  render(){
    return (
      <div className="wrap">
        <div className="container">
          <div className="todos">
            {
              this.state.todos.map((todo)=>{

                var todoProps = {
                  key: todo.id,
                  ...todo
                }

                return (
                  <ToDo {...todoProps} />

                )
              })
            }

            <NewToDoForm addTodo={this.addTodo}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
