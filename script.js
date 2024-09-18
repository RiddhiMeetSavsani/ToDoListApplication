'use strict';
/*
	WEB 230 Winter 2024
	Assignment 6
	Name Riddhi Meet Savsani, student number 0862829, and Date : 21-07-2024 
*/

//get elements from html
let li = document.querySelectorAll(".todo-item");
let ul = document.querySelector(".todo-list");
//let ul = document.querySelector("ul");

/*Using Delegation Add a click event handler to the list elements of (ul).*/
ul.addEventListener('click', function(event){
	let targetName = event.target;
	console.log(targetName);

	if (event.target.classList.contains('todo-item')) {
		event.target.classList.add('completed');
	}

	if(event.target.classList.contains('remove')){
		event.target.parentElement.remove();
	}
})

/*Adding a new item*/

let a = document.getElementById("add-item");
a.addEventListener('click', function(event) {
   // event.preventDefault();
    addItems();
    messageforAdd();
});

let input = document.getElementById('new-item-text');
input.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        addItems();
        messageforEnter();
    }
});

function addItems() {
    let li = document.createElement('li');
    let span = document.createElement('span');

    li.classList.add('todo-item');
    span.classList.add('remove');

    let item = document.getElementById('new-item-text').value;
    li.textContent = item;
    li.appendChild(span);
    document.querySelector('.todo-list').appendChild(li);

    document.getElementById('new-item-text').value = '';
}

function messageforAdd() {
    console.log("New item added by +");
}

function messageforEnter(){
	console.log("New item added by hitting Enter Key.")
}

let arr = [2,4,5,6,7];
console.log(arr.slice(0,4));