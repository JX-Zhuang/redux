import React ,{Component} from 'react';
import PropTypes from 'prop-types';

class Todo extends Component{
  render(){
    const {complete,text,onClick} = this.props;
    return (
      <li
        onClick={onClick}
        style={{
          textDecoration:complete?'line-through':'none'
        }}
      >
        {text}
      </li>
    );
  }
}
Todo.propTypes={
  onClick:PropTypes.func,
  complete:PropTypes.bool,
  text:PropTypes.string
};
export default Todo;
