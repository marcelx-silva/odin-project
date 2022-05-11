const container_1 = document.querySelector("#container-1");

console.dir(container_1.firstElementChild);

const controls_1 = document.querySelector(".controls-1");

console.dir(controls_1.previousElementSibling);

//Query Selectors

//element.querySelector(selector) returns a reference to the first match of selector
//element.querySelectorAll(selectors) returns a “nodelist” containing references to all of the matches of the selectors

//querySelectorAll returns a nodelist

const matches = document.querySelectorAll("div");

console.log(matches);

//Element Creation

//document.createElement(tagName, [options]) 

const div = document.createElement('div'); //it creates a new element of type tagName

//This function does NOT put your new element into the DOM - it simply creates it in memory. 
//This is so that you can manipulate the element (by adding styles, classes, ids, text, etc.) before placing it on the page.

//Append Elements

//parentNode.appendChild(childNode) appends childNode as the last child of parentNode
//parentNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNode

const title = document.createElement('h1');
const div_title = document.createElement('div');



document.body.appendChild(div_title);
document.body.appendChild(title);

//Altering Elements


title.textContent = "Page Header";
title.style.color = 'blue';
title.style.cssText = 'color: purple; background: orange; width: 150px;';

div_title.textContent = "Page Header";
div_title.setAttribute('style', 'color: blue; background: black; width:25%;');
// adds several style rules


div_title.setAttribute('id', 'theDivTitle');
// if id exists, update it to 'theDiv', else create an id
// with value "theDiv"

div_title.removeAttribute('id');
// removes specified attribute

//Working with classes

title.classList.add('title'); // add class new in title

title.classList.remove('title');


//Remove Elements
//parentNode.removeChild(child) removes child from parentNode on the DOM and returns a reference to child

const display_1 = document.querySelector('#display-1');

container_1.removeChild(display_1);