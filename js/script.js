// let n = parseInt(prompt("Ingrese un numero mayor a 0"));
// while(n>=0){
//     if((n%2) == 0){
//         console.log(n);
//     }
//     n--;
// }
// console.log("Programa Finalizado");

// let n = parseInt(prompt("Ingrese un numero a sumar"));
// let m = parseInt(prompt("Ingrese cuantas veces quiere sumarlo entre si"));
// let resultado = 0;
// while(m>0){
//     resultado += n;
//     m--;
// }
// console.log(resultado);

// let n = parseFloat(prompt("Ingrese un numero"));
// let m = parseInt(prompt("Ingrese otro numero"));
// let operacion = "";
// while((operacion!="+")&&(operacion!="-")&&(operacion!="*")&&(operacion!="/")){
//     operacion = prompt("Ingrese +, -, *, o / para hacer la operacion entre n y m");
// }
// function calculadora(n,m,operacion){
//     switch(operacion){
//         case "+":
//             return n + m;
//             break;
//         case "-":
//             return n - m;
//             break;
//         case "*":
//             return n * m;
//             break;
//         case "/":
//             return n / m;
//             break;
//         default:
//             return 0;
//             break;
//     }
// }
// console.log(calculadora(n,m,operacion));

// let n = parseInt(prompt("Ingrese un numero n a dividir"));
// let m = parseInt(prompt("Ingrese un numero m a dividir"));
// let resultado = 0;
// let resto = 0;
// while(n>=m){
//     resultado++;
//     n -= m;
//     if(n<m){
//         resto = n;
//     }
// }
// console.log("Resultado de la division: " + resultado);
// console.log("Resto: " + resto);

let numero = 0;
while(numero<=0){
    numero = parseInt(prompt("Ingrese un numero mayor a 0 para saber cuantos digitos tiene"));
}
function calcularDigitos(n){
    let digitos = 1;
    while(n>=10){
        n /= 10;
        digitos++;
    }
    return digitos;
}
console.log("El numero ingresado tiene " + calcularDigitos(numero) + " digito/s.");