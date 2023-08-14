import { Component } from "react";

import './TodoForm.scss'


export class TodoForm extends Component{

    state = {
        title:''

    }
    handleInput = (e) =>{
        this.setState({title:e.target.value})
    
    }
    submitForm=(e)=>{
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.state.title = ''
    }

    render(){
        const {title} = this.state
        return(
            
                 <form action="#" onSubmit={this.submitForm}>
                    <div className="input">
                        <div className="circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <circle cx="12" cy="12" r="12" fill="white" stroke="#E3E4F1"/>
                            </svg>
                        </div>
                        <input type="text" 
                        placeholder='Create a new todo..'
                         value={title} 
                         onChange={this.handleInput}/>
                    </div>
                    
            
                </form>
            
        )
    }
}