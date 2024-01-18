function onReady() {

    // watch an element
    // for a behavior
    // and when that beavhior happens
    // do some code, I've specificed

    let potatoButton = document.getElementById('potato_button');



}

function handlePotatoClick() {
    // this works, for one potato
    let theDivIWantToAddTo = document.querySelector('div');
    theDivIWantToAddTo.innerText = '🥔';

    // if I want more, there are ways, we'll get to them...
}

// Will call onReady() when the page loads.
onReady()
