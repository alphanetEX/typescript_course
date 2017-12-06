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


