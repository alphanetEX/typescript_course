console.log('**************OBJETOS Basicos ***************');
// a esto se le conose como objeto de datos 
var drone = {
    name: "AFM0",
    codemane: "00x99AFA",
    company: "XAS Dynamics",
    description: "The Firts Autonomous Drone Created in Buenos Aires",
    Brain: "Odroid XU4",
    cerebellum: "Pixawhk 2.1",
    parts: 57
};
//la ventaja que ofrece ts es que nos dejara manejar las variables de manera estricta 
console.log('**************how to create objects with specific types? ***************');
//alphanet force navigator
var drone2 = {
    name: "AFN0",
    codename: "00x99AFX",
    company: "XAS Dynamics",
    description: "Navigator Drone in Holanda",
    brain: "Jetson TX2",
    cerebellum: "Pixawhk 2.1",
    parts: 57
};
//alphanet force navigator Tesla 
console.log('************** Methods in to objects ***************');
var drone3 = {
    name: "AFNT0",
    codename: "00x99AFX0",
    company: "XAS Dynamics",
    description: "Navigator Tesla in Holanda",
    brain: "Undefined?",
    cerebellum: "T00xx?",
    parts: 70,
    getCodenamex: function () {
        return this.codename;
    }
};
console.log('************** Personalized Objects ***************');
var UAV = {
    name: "A-ENP",
    codename: "00x99AEP",
    company: "XAS Dynamics",
    description: "Experimental Navigator Police In Holanda and Russia",
    brain: "Undefined?",
    cerebellum: "Axxx?",
    motor_type: "Coaxial Propeller",
    gps: "RTK",
    parts: 100,
    getCodenamex: function () {
        return this.codename;
    }
};
console.log('************** Permit Multiple Parts ***************');
// permit on this variable permint a multiple variable types for evite the any variable 
var whatever = "Unity Rentals";
// a esto se le conose como objeto de datos 
whatever = {
    color: 'negra',
    logo: 'Unity Rentals',
    peso: 400,
    embergadura: 8
};
console.log('************** check type of an object or variable ***************');
var thing = {
    color: "blanca",
    logo: "XAS Dynamics",
    peso: 400,
    embergadura: 8
};
var alpha = function () {
    return true;
};
console.log(typeof thing);
console.log(typeof alpha);
// typeof es una instruccion de javascript para saver que tipo que datos son los que provienen de la variable 
if (typeof thing === "number") {
    console.log("thing, its a number");
}
else if (typeof thing === "string") {
    console.log("thing, its a string");
}
else if (typeof thing === "object") {
    console.log("thing, its a objet data ");
}
else if (typeof thing === "boolean") {
    console.log("thing, its a boolean data");
}
else {
    error("error de insercion de datos");
}
function error(ejecutar) {
    throw new Error(ejecutar);
}
