var display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    var text = display.value;
    var newText = "";

    for (var i = 0; i < text.length - 1; i++) {
        newText += text[i];
    }
        display.value = newText;
}

function calculate() {
    try {
        display.value = Function('"use strict";return (' + display.value + ')')();
    } 
    catch (error) {
        display.value = 'Error';
    }
}
