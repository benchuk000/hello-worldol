import React, { Component } from 'react';
import TodoCheckbox from '../TodoCheckbox/TodoCheckbox';
class TodosLi extends Component {
    render(){
        return (
            <li className="todo-li">
                <div className="todo-li__wrapper">
                    <div className="todo-li-contener"> 
                        <div className="todoCheckBox">
                             <TodoCheckbox toggleTodo = {this.props.toggleTodo} checked={this.props.checked}/>
                        </div>
                        <div className={this.props.checked ? "checked" : ""}>
                             {this.props.name}
                        </div>
                        <div className="todoButton">
                           <button className="deleteButton" onClick={this.props.deleteTodoLi}>X</button>
                        </div>
                    </div>
                </div>
            </li>
           
        );
    }

}
export default TodosLi;