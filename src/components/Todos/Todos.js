import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodosLi from '../TodoLi/TodoLi';
import TodosFotter from '../TodosFotter/TodosFotter';

var uniqid = require('uniqid');

class Todos extends Component{
    constructor(props){
        super(props);
        this.state = {todos:[
              {
                  value:'scds',
                  isChecked:true,
                  id:uniqid.time()
              }
        ],
        filter: []
      };
      
      this.count = this.state.todos.length;

    }
    deleteTodoLi = (id)=>{
        const todos = this.state.todos;
        const newTodos = todos.filter(function(item,i){
           return item.id!==id;
        })
        this.setState({todos:newTodos});
        this.setState({filter:newTodos});
        this.count = newTodos.length;


      }
    toggleTodo = (i)=>{
        const newPr = this.state.todos;
        newPr[i].isChecked = !newPr[i].isChecked;
        this.setState({todos:newPr});
        if( !newPr[i].isChecked){
            this.count++;
        }
        else{
          this.count--;
        }
        
      
    }
    handlerAllButton = (e)=>{
      const todos = this.state.todos;
      this.setState({filter:todos});
    }
    handlerActiveButton = (e)=>{
      const  todos = this.state.todos.filter((item,i)=>{
          return item.isChecked === false;
      });
      this.setState({filter:todos}); 
  }
   handlerComplitedButton = (e)=>{
      const  todos = this.state.todos.filter((item,i)=>{
          return item.isChecked;
      });
      this.setState({filter:todos}); 
   }
    handlerInput = (e)=>{
        if(e.key === 'Enter') {
         
              const newTodos = this.state.todos;
              newTodos.push({ 
                  value: e.target.value,
                  isChecked:false,
                  id:uniqid.time()});
          this.setState({todos:newTodos});
          this.setState({filter:newTodos});
          this.count = newTodos.length;
          e.target.value = '';
        }
    }
  
    render(){
        return (
            <div>
                <div className="todo-input">
                  <input placeholder="What needs to be done?" onKeyPress={this.handlerInput}/>
                </div>
                <ul className = "todo-list">
                  {   
                      this.state.filter.map((item,i)=>{
                   return <TodosLi name ={item.value} key={i} toggleTodo={() => this.toggleTodo(i)} checked={item.isChecked} deleteTodoLi={()=>this.deleteTodoLi(item.id)}/>
               })
                  }
                </ul>
                <TodosFotter items ={this.count}handlerAllButton={this.handlerAllButton} handlerActiveButton={this.handlerActiveButton} handlerComplitedButton={this.handlerComplitedButton}/>
             </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
     
});

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(Todos);
