import { Component } from "react";

import './TodoList.scss'
import { TodoListItem } from "../TodoListItem/TodoListItem";


export class TodoList extends Component{

    render(){
        const {todos, changeTodosStatus, deleteTodo} = this.props
        return(
            
            <ul>
                {
                todos.map((todo)=>{
                    const {id,title,isChecked } = todo
                    return <TodoListItem 
                    key = {id}
                    changeTodosStatus = {
                        (status)=> 
                        changeTodosStatus (id, status)}
                    deleteTodo = {()=>{
                        deleteTodo(id)
                    }}    
                    title ={title} 
                    isChecked={isChecked}/>
                })
            }

            </ul>
        )
    }
}