const add = document.getElementById("Add_but");
const minus = document.getElementById("Minus_but");
const num = document.querySelector("span");

let counter = 0;

num.innerText = counter;

const updateText = () =>{
  num.innerText = counter;
}

const handleAdd=()=>{
  counter = counter + 1;
  updateText();
}
const handleMinus=()=>{
  counter = counter - 1;
  updateText();
}
add.addEventListener ("click", handleAdd);
minus.addEventListener("click",handleMinus);