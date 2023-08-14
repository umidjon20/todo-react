import { Component } from "react";


export class TodoListItem extends Component{

toggleCheckbox = (e) =>{
    this.props.changeTodosStatus(e.target.checked)
}

    render(){
        const {title,isChecked, deleteTodo} = this.props
        return(
            <li>
                    <input type="checkbox" name="todo-item" 
                    defaultChecked ={isChecked}
                    onChange={this.toggleCheckbox}
                    />
                    <div className="todo_text">{title}</div>
                    <div className="close_btn"
                    onClick={deleteTodo}>✕</div>
             </li>
        )
    }
}