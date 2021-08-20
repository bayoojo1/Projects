const secretWord = 'tomato';
let message = 'Access denied :(';


for ( let i = 5; i >= 1; i-- ) {  
    let guess = prompt(`Enter the secret word. You have ${i} tries.`);
    if ( guess === secretWord ) {
      document.querySelector('main').innerHTML = 'Welcome to the secret loop world!';
      message = 'Welcome to the secret loop world!';
      break;  // immediately terminate the loop
    }
  }
  alert('Welcome to the secret loop world!');
  