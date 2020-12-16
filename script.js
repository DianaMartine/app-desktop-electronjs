function converter() {

    let real = document.getElementById("real").value;

    let dolar = document.getElementById("dolar");
    dolar.innerHTML = real * 5.07 + " R$";
}