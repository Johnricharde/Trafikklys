let container = document.getElementById('container');


// Starts the timeout function
function startLights() {
    setTimeout(() => turnOn('red', 'black', 'black'), 0);
    setTimeout(() => turnOn('red', 'yellow', 'black'), 2000);
    setTimeout(() => turnOn('black', 'black', 'green'), 4000)
    setTimeout(() => turnOn('black', 'black', 'black'), 6000);
}



// Changes the innerHTML
function turnOn(light1, light2, light3) {
    container.innerHTML = /*HTML*/`
    <div class="trafficLight" style="background: ${light1}"></div>
    <div class="trafficLight" style="background: ${light2}"></div>
    <div class="trafficLight" style="background: ${light3}"></div>`
}