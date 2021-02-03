import {createStore} from 'redux'

const add = document.getElementById("Add_but");
const minus = document.getElementById("Minus_but");
const num = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const reducer = (count = 0, action) =>{
  switch(action.type){
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const store = createStore(reducer);

const onChange = () =>{
 num.innerText = store.getState();
};

store.subscribe(onChange);

console.log(store.getState());

add.addEventListener("click",()=>store.dispatch({type:ADD}));
minus.addEventListener("click",()=>store.dispatch({type:MINUS}));