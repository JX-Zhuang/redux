import {VisibilityFilter} from "../actions/index";

const todoList = (state=VisibilityFilter.SHOW_ALL,action)=>{
  switch (action.type){
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default todoList;
