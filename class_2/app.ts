'use stric'

console.log('***************TIPOS DE FUNCIONES***************')
let numeracion:string = " Numeracion: parte de la aritmetica que enseña a expresar y escribir los numeros"; 

//una funcion normal y corriente 
function funcion():string{
 return numeracion 
}

//definiendo una funcion como una variable 

let tipos_enumeracion = function():string{
    return "exist two types of numeration";
}

//definiendo una funcion tipo flecha 
let talking_numeration = ()=>{
    return "La numeracion hablada: Es la que ensenia a expresar los numeros"; 
}

let writte_numeration = ()=>{
    return "Numeracion Escrita: Es la que ensenia a escribir los numeros"; 
}

console.log(funcion());
console.log(tipos_enumeracion());
console.log(talking_numeration());
console.log(writte_numeration()); 

console.log('**************PARAMETROS OBLIGATORIOS DE LAS FUNCIONES***************');

let sabia_que_1:string = 'la palabra cero proviene de la voz arabe ziffero, que significa lugar vacio'; 

let sigx1: string = "el que cconsta de una sola cifra, como 2,3,7,8."; 
let sigx2: string = "es el que consta de dos o mas cifras, como 18, 526";
let sigx3: string = "es un conjunto de reglas que sirven para expresar y escribir los numeros"; 

function sistema_decimal(numero_digito:string, numero_polidigito:string, sistema_numeracion:string):string{
    let concatenador:string = `numero digito: ${numero_digito}, 
                               Numero Polidigito: ${numero_polidigito}, 
                               Sistema Numeracion: ${sistema_numeracion}`;
    return concatenador;
}

console.log(sistema_decimal(sigx1, sigx2, sigx3));

/*una funcion es aquella en la cual puede recibir parametros de clases exteriores para ejecutar codigo y devolver un
  valor final a travez ddel return, estas funciones pueden servir para crear funciones matematicas o fisicas que
  devuelvan un valor final */

//funcion aplicacion la ley de MRU(movimiento rectilineo uniforme)

let MRU_APP = function(d:number, v:number, t:number){
    if(d == null && v != null && t != null){
        let distancia:number = v * t; 
        return  `la distancia es de: ${ distancia }`; 
    }else if(v == null && d != null && t != null){
        let velocidad:number = d/t; 
        return `la velocidad es de: ${velocidad}`;  
    }else if(t ==null && d != null && v!=null){
        let tiempo:number = d/v; 
        return  `El tiempo es de: ${tiempo}`; 
    }else{
        function error(ejecutar:string):never{
            throw new Error(ejecutar);
           }
           error("se ha corrompido el sistema... linea E22, inicializansdo protocolo de reinicio");
    }
}

console.log(MRU_APP(null,70, 30)); 
console.log(MRU_APP(70, null, 30));
console.log(MRU_APP(70,30,null));


console.log('**************PARAMETROS OPCIONALES DE LAS FUNCIONES***************');
// en esta instruccion se le dice a typescript que apellido es opcional a la hora de introducir parametros 
function nombres (nombre:string, apellido?:string){
        if(apellido){
            return `nombre de usuario: ${ nombre }`
        }else{
            return `nombre de usuario: ${ nombre } ${ apellido }`
        }
}
console.log( nombres("anderson") );

console.log('**************PARAMETROS POR DEFECTO***************');

let nombresx2  = (nombre:string, apellido?:string, capitalizado:boolean= true)=>{
    if(apellido == undefined && capitalizado == false){
        return `nombre de usuario: ${ nombre }` 
    }else if ( nombre !=undefined && apellido !=undefined && capitalizado == false ){
        return `nombre de usuario: ${ nombre } ${ apellido }`
    }else if ( nombre && apellido && capitalizado == true){
       return `El nombre de usuario: ${ capitalizadox(nombre)} ${capitalizadox(apellido)}`
    }
}

function capitalizadox ( palabra: string):string{
    return palabra.charAt(0).toLocaleUpperCase() + palabra.substr(1).toLowerCase(); 
}

console.log(nombresx2('anderson', 'Andrade', false));


console.log('**************PARAMETROS POR DEFECTO DE MANERA SIMPLE ***************');