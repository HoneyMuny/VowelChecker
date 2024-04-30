function checkVowelsAndNumbers() {
    var inputText = document.getElementById("textInput").value;
    var regex = /[aeiou\d]/i;

    if (regex.test(inputText)) {
        var vowelsPresent = /[aeiou]/i.test(inputText);
        var numbersPresent = /\d/.test(inputText);

        if (vowelsPresent && numbersPresent) {
            alert("¡Correcto! El texto contiene vocales y números.");
        } else if (vowelsPresent) {
            alert("Contiene vocales pero no numeros");
        } else {
            alert("Contiene numeros pero no vocales");
        }
    } else {
        alert("¡Incorrecto! El texto no contiene vocales ni números.");
    }
}

function checkVowelsAndNumbers3() {
    var inputText = document.getElementById("textInput").value;
    var vowelCount = (inputText.match(/[aeiou]/gi) || []).length;
    var numberCount = (inputText.match(/\d/g) || []).length;

    if (vowelCount == 1 && numberCount == 1) {
        alert("¡Correcto! El texto contiene una vocal y un número.");
    } else if (vowelCount == 1) {
        alert("El texto contiene exactamente una vocal pero no un número.");
    } else if (numberCount == 1) {
        alert("El texto contiene exactamente un número pero no una vocal.");
    } else {
        alert("¡Incorrecto! El texto contiene más de una vocal y un número.");
    }
}