function onReady() {

    // watch an element
    // for a behavior
    // and when that beavhior happens
    // do some code, I've specificed

    let potatoButton = document.getElementById('potato_button');

    let unicornButton = document.getElementById('unicorn_button');


}

function handlePotatoClick() {
    // this works, for one potato
    let theDivIWantToAddTo = document.querySelector('div');
    theDivIWantToAddTo.innerText = '🥔';

    // if I want more, there are ways, we'll get to them...
}

function handleUnicornClick() {
    //for one unicorn
    let theDivIWantToAddTo = document.querySelector('#unicorn_div');
    theDivIWantToAddTo.innerText = '🦄';
}

// Will call onReady() when the page loads.
onReady()
