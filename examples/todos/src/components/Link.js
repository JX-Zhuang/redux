import React ,{Component} from 'react';
import PropTypes from 'prop-types';
class Link extends Component{
  render(){
    const {active,onClick} = this.props;
    return (
      <button
        disabled={active}
        onClick={onClick}
        style={{
          marginLeft: '4px',
        }}
      >
        {this.props.children}
      </button>
    );
  }
}
Link.propTypes = {
  active:PropTypes.bool,
  onClick:PropTypes.func
};
export default Link;
