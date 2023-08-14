import { Component } from 'react';
import { TodoForm, TodoList,Header } from '../index';

import './App.scss';

class App extends Component{
  state = {
    todos:[
      {
        id:1,
        title:'Complete online JavaScript course',
        isChecked: false
      },
      {
        id:2,
        title:'Jog around the park 3x',
        isChecked: false
      },
      {
        id:3,
        title:'10 minutes meditation',
        isChecked: false
      },
      {
        id:4,
        title:'Read for 1 hour',
        isChecked: false
      },
      {
        id:5,
        title:'Pick up groceries',
        isChecked: false
      },
      {
        id:6,
        title:'Complete Todo App on Frontend Mentor',
        isChecked: false
      }
    ],
    todosIdCount:6
  }

  //////////////////////    Yangi todoni qushish //////////
addTodo=(todoTitle)=>{
  const todoData ={
    id:this.state.todosIdCount + 1,
    title:todoTitle,
    isChecked:false
  }

  this.setState((prewState)=>{
    return{
      todos:[todoData, ...prewState.todos],
      todosIdCount:prewState.todosIdCount + 1
    }
  })
}

/////////////////////   todolarni statusini uzgartirib olish ////
changeTodosStatus = (id, status) =>{
const {todos} = this.state

// const el = todos.find((item)=>{
//   return item.id === id
// })
 
// const ind = todos.findIndex((item)=>{
//   return item.id === id
// })

const todoDataPrew = todos.map((item)=>{
  if(item.id !== id){
    return item
  }else{
    return {
      ...item,
      isChecked:status
    }
  }
})

  this.setState(({todos})=>{
 

    return{
todos:todoDataPrew
    }
  })
}
///////////////////////   todolarni uchirish  //////////////////////
deleteTodo = (id) =>{
  this.setState(({todos})=>{
    return {
      todos: todos.filter((item)=>{
        return item.id !== id
      })
    }
  })
}


  render(){

    const {todos} = this.state
   
  return(
    <>
   <div className="wrapper">

    <Header/>

    <TodoForm addTodo = {this.addTodo}/>
   <main>
      
      <TodoList todos ={todos}
      changeTodosStatus = {this.changeTodosStatus}
      deleteTodo = {this.deleteTodo}
      />
      <div className="info">
        <div className="items">
          <span className='number'>5</span> items left
        </div>
        <div className="full_info">
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>
        </div>
        <div className="clear">
        Clear Completed
        </div>
        </div>
   </main>
   <div className="footer">
    Drag and drop to reorder list
   </div>
   </div>
    </>
  )
  }
}

export default App
