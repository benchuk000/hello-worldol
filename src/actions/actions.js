import * as types from '../actionTypes/actionTypes';

const addTodo = (text)=>({
    type:  types.ADD_TODO, 
    text
})