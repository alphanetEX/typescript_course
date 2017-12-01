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

console.log("****************************************************************************************************************")

// las tuplas nos permiten saver que clase de variable iran dentro del arraid  tri vergon
let computadora:[ string, number, boolean] = ["Fuente Cooler Master 500", 120, true]; 

