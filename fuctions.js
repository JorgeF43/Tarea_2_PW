    //Operandos
    var operando_a;
    var operando_b;
    var operacion;
    var res = 0;
    
function init(){
    //Numeros
    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");

    //Procesos
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicar = document.getElementById("multipicacion");
    var dividir = document.getElementById("Division");  
    var igual = document.getElementById("igual");
    var reinicio = document.getElementById("reiniciar");
    var resultado = document.getElementById("resultado");

    //Eventos de numeros
    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";
    }

    //Eventos operaciones
    suma.onclick = function (e) {
        operando_a = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function (e) {
        operando_a = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicar.onclick = function (e) {
        operando_a = resultado.textContent;
        operacion = "X";
        limpiar();
    }
    dividir.onclick = function (e) {
        operando_a = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function (e) {
        operando_b = resultado.textContent;
        Resolver();
    }

    //Eventos Extras
    reinicio.onclick = function (e) {
        Reiniciar();
    }
}

function limpiar() {
    resultado.textContent = "";
}

function Reiniciar() {
    resultado.textContent = "";
    operando_a = 0;
    operando_b = 0;
    operacion = "";
}
 function Resolver() {
    switch(operacion){
        case "+": 
            res = parseFloat(operando_a) + parseFloat(operando_b);
            break;

        case "-":
            res = parseFloat(operando_a) - parseFloat(operando_b);
            break;
        
        case "X":
            res = parseFloat(operando_a) * parseFloat(operando_b);
            break;
        
        case "/":
            res = parseFloat(operando_a) / parseFloat(operando_b);
            break;
    }
    localstorage()
    Reiniciar()
    resultado.textContent = res;

 }

function localstorage(){
var historial = new Array(operando_a, operacion, operando_b, "=", res);

localStorage.setItem("list", JSON.stringify(historial));


console.log(JSON.parse(localStorage.getItem("list")));
}