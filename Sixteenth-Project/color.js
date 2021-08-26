const colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];
let listItems = document.getElementsByTagName('li');

for ( let i = 0; i < colors.length; i++ ) {
  listItems[i].style.color = colors[i];    
}