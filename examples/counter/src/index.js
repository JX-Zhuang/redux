import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducers from './reducers';
import Counter from './components/Counter';
const store = createStore(reducers);

const root = document.getElementById('root');
const render = ()=>ReactDOM.render(
  <Counter
  number={store.getState()}
  increment={()=>store.dispatch({type:'INCREMENT'})}
  decrement={()=>store.dispatch({type:'DECREMENT'})}
  />,root
);
render();
store.subscribe(render);


