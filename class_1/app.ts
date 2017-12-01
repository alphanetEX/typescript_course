console.log("hello world !!");

// booleanos
let charlie:boolean = false;
let alphanet:boolean = false;
let chichico:boolean = false;
let variablex: boolean = true;

charlie = alphabet();

console.log(charlie); 

function alphabet(){
    return true; 
}

/* 
*************************************************NUMBERS**********************************************
*/

let numero:number = 33; //este es un numero abstracto 
let apilador:string = " manzanas"; 
let adjuntador= "hay" + numero + apilador;  // estos son numeros concretos debido a que representan un estado
console.log(adjuntador); 

//elejemplo 2 

let honestos:number = 30;
let mentirosos:number = 15; 
let innovadores: number = 30; 

if (honestos >= mentirosos  && innovadores >= mentirosos){ 
 console.log("habra tecnologia en nuestro pais"); 
}else if (honestos + innovadores >= mentirosos){
 console.log("ya aseguramos el futuro en nuestro pais");
}else{
    console.log("ya valimos verga");
}

/********************************************STRINGS*********************************************/

let panchimalco:string = " Panchimalco es un municipio de San Salvador"; 
let planes_renderos:string = 'Planes de renderos es un canton de panchimalco'; 
let pinar:string = "Pinar es una colonia de planes de rendetos";

let anderson:string = "Anderson";
let francisco:string = "Francisco"; 
let carlos:string = "Carlos"; 

console.log(panchimalco); 
console.log(planes_renderos); 
console.log(pinar); 

let contatenar:string = panchimalco + " y " + planes_renderos  + "y finalmente " + pinar;
let contact:string = `Los conocidos son: ${ anderson }, ${ francisco}, ${ carlos }`; 

console.log(contatenar);
console.log(contact); // contatenacion con backtikcs

/********************************************Tipo Any*******************/
let variable_any:any; // esta variable soportara cualquier datos que venga

/********************************************Arreglos*******************/
let arraid:number[] = [1,2,3,4,5,6,7];
let string_arraid:string[] = ["Nelson", "Vicktoria", "Nelson", "Vicky", "Anderson"]; 
for(let count:number=0; count <= arraid.length -1; count++){
    console.log(arraid[count]);
}
let cardinal:string[] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","b","w","x","y","z"]; 
console.log(string_arraid[0].charAt(3));// se inspecciona la posicion del arraid con la posicion de 

//arreglo for con contatenacion con backticks
for(let contador:number=0; contador<= cardinal.length -1 ; contador++){
    console.log(`Posicion:${contador +1}  letra: ${ cardinal[contador]}`); 
}

/*****************************ciclo wille*******************************/
console.log("****************************************************************************************************************");
let contador4:number = 0;
while ( contador4 <= cardinal.length -1 ) {
    console.log(`Posicion:${contador4 +1}  letra: ${ cardinal[contador4]}`);
    contador4 ++;   
}
/******************************aplicando el cliclo do wille************ */
console.log("****************************************************************************************************************")

let contador5: number = 0;
do {
    console.log(`Posicion:${contador5 +1}  letra: ${ cardinal[contador5]}`);
    contador5++; 
} while (contador5 <= cardinal.length -1);

//******************************tuplas*************/

console.log("************************************TUPLAS****************************************************************************")

// las tuplas nos permiten saver que clase de variable iran dentro del arraid  tri vergon
let computadora:[ string, number, boolean] = ["Fuente Cooler Master 500", 120, true]; 

//***********************************enumeraciones**********************************************************************/
console.log("*************************************ENUMERACIONES***************************************************************************")

enum Volumen{
    min =1,
    med =5, 
    max = 10 
}

let sonido:number = Volumen.med; 

console.log(sonido);

console.log("**********************************VOID retornando funciones***************************************************************************");

//el void no puede regresar datos, en este caso no existe el return toda la data la devuelve como undefined 
function call_EPU():void{
 console.log("Enable External EPU"); 
}

let messagex = call_EPU(); 
console.log(messagex);

function call_GPU():string{
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
let valorXA:any = "Alphamira";
let cantidad_caracteres:number = (<string>valorXA).length;
console.log(`la cantidad de caracteres  es de: ${ cantidad_caracteres }`);


console.log("**********************************NULL y UNDEFINED***************************************************************************");
//son dos tipos de datos muy diferentes den typescript  que la verdad no hacen mucho 

let puto:undefined = undefined; 

console.log("**********************************ARRAID CON EL  EVENTO PUSH***************************************************************************");

let avedorment:number[] = [1,2,3,4,5,6]; 
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
