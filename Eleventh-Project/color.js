let html = '';

const randomValue = () => Math.floor(Math.random() * 256);

function randomRGB(value) {
    const color = `rgb( ${value()}, ${value()}, ${value()} )`;
    return color;
}


for (i = 1; i <= 100; i++) {
    html += `<div style="background-color: ${randomRGB(randomValue)}; height:50px; width:50px; line-height:50px; text-align:center; display:inline-block; color:white; padding:2px; margin:8px; border-radius:50%; font-size:24px; font-weight:bold;">${i}</div>`;
}
document.querySelector('main').innerHTML = html;
