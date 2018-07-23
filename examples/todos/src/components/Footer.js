import React ,{Component} from 'react';
import {VisibilityFilter} from '../actions';
import FilterLink from '../containers/FilterLink';
class Footer extends Component{
  render(){
    return (
      <p>
        show
        <FilterLink filter={VisibilityFilter.SHOW_ALL}>ALL</FilterLink>
        <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>COMPLETED</FilterLink>
        <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>ACTIVE</FilterLink>
      </p>
    );
  }
}
export default Footer;
