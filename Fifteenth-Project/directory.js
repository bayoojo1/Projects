let html = '';

for (let i = 0; i < pets.length; i++) {
    let pet = pets[i];

    html += `
    <h1>Name: ${pet.name}</h1>
    <h2>Color: ${pet.color}</h2>
    <p>Age: ${pet.age}</p>
    <h3>Breed: ${pet.breed}</h3>
    <img src="${pet.image}">
    `;
}
document.querySelector('main').innerHTML = html;