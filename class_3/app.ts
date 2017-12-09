console.log('**************OBJETOS Basicos ***************');

// a esto se le conose como objeto de datos 
let drone ={
    name: "AFM0",
    codemane: "00x99AFA", 
    company:"XAS Dynamics", 
    description: "The Firts Autonomous Drone Created in Buenos Aires", 
    Brain: "Odroid XU4",
    cerebellum: "Pixawhk 2.1",
    parts: 57  
}; 

//la ventaja que ofrece ts es que nos dejara manejar las variables de manera estricta 

console.log('**************how to create objects with specific types? ***************');

//alphanet force navigator
let drone2:{ name:string, codename:string, company:string, description:string, brain:string, cerebellum:string ,parts:number} ={
    name: "AFN0",
    codename: "00x99AFX", 
    company:"XAS Dynamics", 
    description: "Navigator Drone in Holanda", 
    brain: "Jetson TX2",
    cerebellum: "Pixawhk 2.1",
    parts: 57  
}; 

//alphanet force navigator Tesla 
console.log('************** Methods in to objects ***************');

let drone3:{ name:string, codename:string, company:string, description:string, brain:string, cerebellum:string ,parts:number, getCodenamex:()=> string } ={
    name: "AFNT0",
    codename: "00x99AFX0", 
    company:"XAS Dynamics", 
    description: "Navigator Tesla in Holanda", 
    brain: "Undefined?",
    cerebellum: "T00xx?",
    parts: 70,
    getCodenamex(){
     return this.codename;
    }  
}; 

console.log('************** Personalized Objects ***************');
/* una sintaxis mas ordenada, en el cual los tipos de datos se declaran  y los objetos creados se les da 
   la referencia en que tipo tienen que obedecer */ 
type Data={
    name:string,
    codename:string, 
    company:string, 
    description:string, 
    brain:string, 
    cerebellum:string,
    motor_type:string, 
    gps:string,
    parts:number, 
    getCodenamex: ()=> string
}; 


let UAV:Data ={
    name: "A-ENP",
    codename: "00x99AEP", 
    company:"XAS Dynamics", 
    description: "Experimental Navigator Police In Holanda and Russia", 
    brain: "Undefined?",
    cerebellum: "Axxx?",
    motor_type: "Coaxial Propeller", 
    gps: "RTK", 
    parts: 100,
    getCodenamex(){
     return this.codename;
    }  
}

console.log('************** Permit Multiple Parts ***************');


type TASA= {
    color:string,
    logo:string, 
    peso:number, 
    embergadura:number
}

// permit on this variable permint a multiple variable types for evite the any variable 
let whatever: string | number | TASA = "Unity Rentals"; 

// a esto se le conose como objeto de datos 
whatever = {
    color:'negra', 
    logo:'Unity Rentals', 
    peso: 400, 
    embergadura: 8
}


console.log('************** check type of an object or variable ***************');

let thing:TASA ={
    color:"blanca", 
    logo: "XAS Dynamics", 
    peso: 400,
    embergadura: 8
}

let alpha:any = ()=>{
return true; 
}

console.log(typeof thing);
console.log(typeof alpha);

// typeof es una instruccion de javascript para saver que tipo que datos son los que provienen de la variable 
if( typeof thing ==="number"){
    console.log("thing, its a number"); 
}else if( typeof thing ==="string"){
    console.log("thing, its a string"); 
}else if( typeof thing ==="object"){
    console.log("thing, its a objet data "); 
}else if ( typeof thing === "boolean"){
    console.log("thing, its a boolean data"); 
}else{
error("error de insercion de datos"); 
} 


function error(ejecutar:string):never{
 throw new Error(ejecutar);
}



console.log('************** EXAM ***************');

type Cars = {
 carroceria:string, 
 modelo:string,
 antibalas:boolean, 
 pasajeros:number,
 disparar?: ()=> void
}

// Objetos
let batimovil:Cars = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
  };
  
  let bumblebee:Cars = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
      console.log("Disparando");
    }
  };
  
  
  // Villanos debe de ser un arreglo de objetos personalizados

type Characteristics ={
    nombre:string, 
    edad:number | undefined, 
    mutante: boolean
}

 let villanos:Characteristics[] = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];
  
  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis

  type User = {
    poder:string, 
    estatura: number
  };

  type Apocalipse = {
      lider:boolean,
      miembros:string[] 
  };

  let charles:User = {
    poder:"psiquico",
    estatura: 1.78
  };
  
  let apocalipsis = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }
  
  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique : User | Apocalipse;
  
  mystique = charles;
  mystique = apocalipsis

  