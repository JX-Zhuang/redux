import React ,{Component} from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

class TodoList extends Component{
  render(){
    const {todos,toggleTodo} = this.props;
    return (
      <ul>
        {
          todos.map(todo=>
            <Todo
              key={todo.id}
              {...todo}
              onClick={()=>toggleTodo(todo.id)}
            />)
        }
      </ul>
    );
  }
}
TodoList.propTypes = {
  todos:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number,
    text:PropTypes.string,
    complete:PropTypes.bool
  })),
  toggleTodo:PropTypes.func
};
export default TodoList;
