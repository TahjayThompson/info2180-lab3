// 'use strict';

window.onload = function() {

const game = document.getElementById("game");
const status = document.getElementById("status");
const board = document.getElementById("board");
const controls = document.getElementsByClassName("controls")[0];
const button = document.getElementsByClassName("btn")[0];

const divs = board.querySelectorAll('div');

divs.forEach((elem,index)=>{
    elem.setAttribute("class","square");
    console.log(elem,index)
});


console.log(divs)
console.log(game)
console.log(status)
console.log(board)
console.log(controls)
console.log(button)
}
