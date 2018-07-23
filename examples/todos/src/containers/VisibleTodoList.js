import React ,{Component} from 'react';
import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {toggleTodo,VisibilityFilter} from "../actions";
const getVisibleTodos = (todos,filter)=>{
  switch (filter){
    case VisibilityFilter.SHOW_ALL:
      return todos;
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter(todo=>!todo.complete);
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter(todo=>todo.complete);
    default:
      return todos;
  }
};
const mapStateToProps = (state,ownProps)=>({
  todos:getVisibleTodos(state.todos,state.visibilityFilter)
});
const mapDispatchToProps = (dispatch)=>({
  toggleTodo:id=>dispatch(toggleTodo(id))
});
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
