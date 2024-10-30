let display = document.getElementById("display");
let array = []
let sentence = ""

function appendToDisplay(input) {
    display.value += input;

    array.push(input)

    let sentence = array.join(" ");
    console.log(sentence);
   
}


function cleanToDisplay() {
    //  totalValue.textContent = "";

    display.value = "";



}

function equalTotoal() {
    try {
            display.value = eval(display.value);

    } catch (error) {
        display.value = "Error";
    }
}