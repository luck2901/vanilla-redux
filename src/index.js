import {createStore} from 'redux'

const add = document.getElementById("Add_but");
const minus = document.getElementById("Minus_but");
const num = document.querySelector("span");

const reducer = (count = 0, action) =>{
  if (action.type ==="ADD"){
    count++;
  }
  if (action.type ==="MINUS"){
    count--;
  }
  return count;
};

const store = createStore(reducer);

console.log(store.getState());

store.dispatch({type:"ADD"});