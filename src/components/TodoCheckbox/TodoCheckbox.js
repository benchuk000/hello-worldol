import React, { Component } from 'react';
class TodoCheckbox extends Component{
    
        render(){
            return (
                <input type="checkbox" onClick={this.props.toggleTodo} checked={this.props.checked}/>
            );
        }
    }
    export default TodoCheckbox;