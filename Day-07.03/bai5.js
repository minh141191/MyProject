function doiTien() {
    let money = document.getElementById("money").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    if (fromCurrency === toCurrency) {
        document.getElementById("result").innerHTML = money
    } else {
        if(fromCurrency == "usd") {
            document.getElementById("result").innerHTML = money * 23000
        } else {
            document.getElementById("result").innerHTML = money / 23000
        }
    }
}