const container = document.createElement('div');
const p1 = document.createElement('p');
const title_h3 = document.createElement('h3');
const div = document.createElement('div');
const title_h1 = document.createElement('h1');
const p2 = document.createElement('p');


container.setAttribute('id', 'container');

//paragraph
p1.textContent = 'Hey I’m red!';
p1.style.color = 'red';

// header h3
title_h3.textContent = 'I’m a blue h3!';
title_h3.style.color = 'blue';


div.style.cssText = 'background-color:pink; border: 1px solid black';

title_h1.textContent = 'I’m in a div';

p2.textContent = 'ME TOO!'


document.body.appendChild(container);
document.body.appendChild(div);

container.appendChild(p1);
container.appendChild(title_h3);

div.appendChild(title_h1);
div.appendChild(p2);

