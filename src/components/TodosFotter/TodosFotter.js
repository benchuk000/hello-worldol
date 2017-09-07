import React, { Component } from 'react';
class TodosFotter extends Component{
    render(){
        return(
            <div>
                <span>
                    {this.props.items}<span> items left</span>
                </span>
                <button onClick={this.props.handlerAllButton}>
                    All
                </button>
                <button onClick={this.props.handlerActiveButton}>
                    Active
                </button>
                <button onClick={this.props.handlerComplitedButton}>
                    Completed
                </button>
            </div>   
        );
    }
}
export default TodosFotter;