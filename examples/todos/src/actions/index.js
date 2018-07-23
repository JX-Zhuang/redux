let nextTodoId = 0;
export const addTodo = (text)=>({
  type:'ADD_TODO',
  id:nextTodoId++,
  text
});
export const thunkAddTodo = (text)=>(dispatch,getState)=>{
  setTimeout(()=>dispatch({
    type:'ADD_TODO',
    id:nextTodoId++,
    text
  }),1000);
};
export const toggleTodo=(id)=>({
  type:'TOGGLE_TODO',
  id
});

export const setVisibilityFilter = (filter)=>({
  type:'SET_VISIBILITY_FILTER',
  filter
});

export const VisibilityFilter = {
  SHOW_ALL:'SHOW_ALL',
  SHOW_COMPLETED:'SHOW_COMPLETED',
  SHOW_ACTIVE:'SHOW_ACTIVE'
} ;
