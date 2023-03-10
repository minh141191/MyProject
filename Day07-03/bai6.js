function subTraction() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = number1 - number2;
    document.getElementById("result").innerHTML = result;

}
function addTion() {
    let number1 = +document.getElementById("number1").value;
    let number2 = +document.getElementById("number2").value;
    let result = number1 + number2;
    document.getElementById("result").innerHTML = result;
}
function multiPlication() {
    let number1 = +document.getElementById("number1").value;
    let number2 = +document.getElementById("number2").value;
    let result = number1 * number2;
    document.getElementById("result").innerHTML = result;
}
function diviSion() {
    let number1 = +document.getElementById("number1").value;
    let number2 = +document.getElementById("number2").value;
    let result = number1 / number2;
    document.getElementById("result").innerHTML = result;
}