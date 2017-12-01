console.log("hello world !!");
// booleanos
var charlie = false;
var alphanet = false;
var chichico = false;
var variablex = true;
charlie = alphabet();
console.log(charlie);
function alphabet() {
    return true;
}
/*
*************************************************NUMBERS**********************************************
*/
var numero = 33; //este es un numero abstracto 
var apilador = " manzanas";
var adjuntador = "hay" + numero + apilador; // estos son numeros concretos debido a que representan un estado
console.log(adjuntador);
//elejemplo 2 
var honestos = 30;
var mentirosos = 15;
var innovadores = 30;
if (honestos >= mentirosos && innovadores >= mentirosos) {
    console.log("habra tecnologia en nuestro pais");
}
else if (honestos + innovadores >= mentirosos) {
    console.log("ya aseguramos el futuro en nuestro pais");
}
else {
    console.log("ya valimos verga");
}
/********************************************STRINGS*********************************************/
var panchimalco = " Panchimalco es un municipio de San Salvador";
var planes_renderos = 'Planes de renderos es un canton de panchimalco';
var pinar = "Pinar es una colonia de planes de rendetos";
var anderson = "Anderson";
var francisco = "Francisco";
var carlos = "Carlos";
console.log(panchimalco);
console.log(planes_renderos);
console.log(pinar);
var contatenar = panchimalco + " y " + planes_renderos + "y finalmente " + pinar;
var contact = "Los conocidos son: " + anderson + ", " + francisco + ", " + carlos;
console.log(contatenar);
console.log(contact); // contatenacion con backtikcs
/********************************************Tipo Any*******************/
var variable_any; // esta variable soportara cualquier datos que venga
/********************************************Arreglos*******************/
var arraid = [1, 2, 3, 4, 5, 6, 7];
var string_arraid = ["Nelson", "Vicktoria", "Nelson", "Vicky", "Anderson"];
for (var count = 0; count <= arraid.length - 1; count++) {
    console.log(arraid[count]);
}
var cardinal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "b", "w", "x", "y", "z"];
console.log(string_arraid[0].charAt(3)); // se inspecciona la posicion del arraid con la posicion de 
//arreglo for con contatenacion con backticks
for (var contador = 0; contador <= cardinal.length - 1; contador++) {
    console.log("Posicion:" + (contador + 1) + "  letra: " + cardinal[contador]);
}
/*****************************ciclo wille*******************************/
console.log("****************************************************************************************************************");
var contador4 = 0;
while (contador4 <= cardinal.length - 1) {
    console.log("Posicion:" + (contador4 + 1) + "  letra: " + cardinal[contador4]);
    contador4++;
}
/******************************aplicando el cliclo do wille************ */
console.log("****************************************************************************************************************");
var contador5 = 0;
do {
    console.log("Posicion:" + (contador5 + 1) + "  letra: " + cardinal[contador5]);
    contador5++;
} while (contador5 <= cardinal.length - 1);
//******************************tuplas*************/
console.log("************************************TUPLAS****************************************************************************");
// las tuplas nos permiten saver que clase de variable iran dentro del arraid  tri vergon
var computadora = ["Fuente Cooler Master 500", 120, true];
//***********************************enumeraciones**********************************************************************/
console.log("*************************************ENUMERACIONES***************************************************************************");
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["med"] = 5] = "med";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
var sonido = Volumen.med;
console.log(sonido);
console.log("**********************************VOID***************************************************************************");
//el void no puede regresar datos, en este caso no existe el return toda la data la devuelve como undefined 
function call_EPU() {
    console.log("Enable External EPU");
}
var messagex = call_EPU();
console.log(messagex);
console.log("**********************************NEVER***************************************************************************");
//este representa un valor que nunca puede suceder.
function error(ejecutar) {
    throw new Error(ejecutar);
}
error("se ha corrompido el sistema... linea E22, inicializansdo protocolo de reinicio");
