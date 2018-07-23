import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {addTodo,thunkAddTodo} from "../actions";
class AppTodo extends Component{
  addTodo(){
    const {addTodo} = this.props;
    addTodo(this.input.value);
    this.input.value = '';
  }
  thunkAddTodo(){
    const {thunkAddTodo} = this.props;
    thunkAddTodo(this.input.value);
    this.input.value = '';
  }
  render(){
    return (
      <div>
        <input type="text" ref={e=>this.input=e}/>
        <button onClick={()=>this.addTodo()}>addTodo</button>
        <button onClick={()=>this.thunkAddTodo()}>thunk addTodo</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch=>({
  addTodo:text=>dispatch(addTodo(text)),
  thunkAddTodo:text=>dispatch(thunkAddTodo(text)),
});
const mapStateToProp = ()=>({

});
export default connect(mapStateToProp,mapDispatchToProps)(AppTodo);
