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
console.log("**********************************VOID retornando funciones***************************************************************************");
//el void no puede regresar datos, en este caso no existe el return toda la data la devuelve como undefined 
function call_EPU() {
    console.log("Enable External EPU");
}
var messagex = call_EPU();
console.log(messagex);
function call_GPU() {
    return "reload devices";
}
console.log("**********************************NEVER***************************************************************************");
//este representa un valor que nunca puede suceder, este es un exelente evento cuando se corrompe un proyecto como tal 
/*
function error(ejecutar:string):never{
 throw new Error(ejecutar);
}


error("se ha corrompido el sistema... linea E22, inicializansdo protocolo de reinicio");
*/
console.log("**********************************ASERCIONES DE TIPO o CAST***************************************************************************");
// este casteador puede servir para definir la candidad de caracteres a la hora de crear la tal afamada  contrasenia 
var valorXA = "Alphamira";
var cantidad_caracteres = valorXA.length;
console.log("la cantidad de caracteres  es de: " + cantidad_caracteres);
console.log("**********************************NULL y UNDEFINED***************************************************************************");
//son dos tipos de datos muy diferentes den typescript  que la verdad no hacen mucho 
var puto = undefined;
console.log("**********************************ARRAID CON EL  EVENTO PUSH***************************************************************************");
var avedorment = [1, 2, 3, 4, 5, 6];
avedorment.push(7);
console.log(avedorment);
/* un pequenio refuerzo

// Tipos
let batman:string = "Bruce";
let superman:string = "Clark";

let existe:boolean = false;

// Tuplas
let parejaHeroes:[string, string] = ['batman','superman'];
let villano:[string, number, boolean] = ["Lex Lutor",5,true];

// Arreglos
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum fuerzas{
    flash =5,
    superman = 100,
    Batman = 1,
    acuaman = 0
}


let fuerzaFlash = fuerzas.flash;
let fuerzaSuperman = fuerzas.superman;
let fuerzaBatman = fuerzas.Batman;
let fuerzaAcuaman = fuerzas.acuaman;

// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
 console.log("HELP");
}

// Aserciones de Tipo
let poder:string = "100";
let largoDelPoder = (<string>poder).length;
console.log(largoDelPoder);

*/
// el evento push adjunta un dato mas al arreglo anteriormente declarado
