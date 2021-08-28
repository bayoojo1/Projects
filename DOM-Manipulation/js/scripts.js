// 1: Set the text of the <h1> element
const h1Text = document.querySelector('h1');
h1Text.textContent = 'My Daily Task List';

// 2: Set the color of the <h1> to a different color
h1Text.style.color = 'green';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const paragraph = document.querySelector('.desc');
paragraph.innerHTML = '<strong>Below are the list of my daily task. So help me God.</strong>';


// 4: Set the class of the <ul> to 'list'
const list = document.querySelector('ul');
list.className = 'list';


// 5: Create a new list item and add it to the <ul>
const newList = document.createElement('li');
newList.innerHTML = '<input> Lift weight';
//const input = document.createElement('input');
//newList.appendChild(input);
//newList.appendChild(document.createTextNode(' Lift weight'));
list.append(newList);

// 6: Change all <input> elements from text fields to checkboxes
const inputType = document.querySelectorAll('input');
for (i = 0; i < inputType.length; i++) {
    inputType[i].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const button = document.createElement('button');
button.textContent = 'Delete';
const extra = document.querySelector('.extra');
extra.appendChild(button);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
extra.addEventListener('click', () => {
    const extraDiv = document.querySelector('.extra');
    extraDiv.remove();
});
