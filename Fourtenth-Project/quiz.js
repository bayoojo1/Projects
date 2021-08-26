let quiz = [
    ['What is the closet planet to the sun?', 'Mercury'],
    ['Who is Nigeria president?', 'Buhari'],
    ['What year did Nigeria get independent?', '1960'],
    ['What is the capital of Oyo state?', 'Ibadan'],
    ['The first storey building in Nigeria is located at?', 'Badagry'],
    ['The first University in Nigeria is?', 'UI']
];

let question = '';
let answer = 0;
let correctAnswer = 0;
let html = '';
let rights = [];
let wrongs = [];

for (let i = 0; i < quiz.length; i++) {
    question = prompt(quiz[i][0]);
    answer = quiz[i][1];

    if(answer === question) {
        correctAnswer++;
        rights.push(quiz[i][0]);
    } else {
        wrongs.push(quiz[i][0] +' Ans:'+ quiz[i][1]);
    }  
}
html += `<p>You got ${correctAnswer} correctly.</p>`;
html += 'Questions you got right:<br>';
for (let i = 0; i < rights.length; i++) {
    html += `<ul><li>${rights[i]}</li></ul>`;
}
html += '<br>';
html += 'Questions you got wrong:<br>';
for (let i = 0; i < wrongs.length; i++) {
    html += `<ul><li>${wrongs[i]}</li></ul>`;
}

document.querySelector('main').innerHTML = html;