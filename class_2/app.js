'use stric';
console.log('***************TIPOS DE FUNCIONES***************');
var numeracion = " Numeracion: parte de la aritmetica que enseña a expresar y escribir los numeros";
//una funcion normal y corriente 
function funcion() {
    return numeracion;
}
//definiendo una funcion como una variable 
var tipos_enumeracion = function () {
    return "exist two types of numeration";
};
//definiendo una funcion tipo flecha 
var talking_numeration = function () {
    return "La numeracion hablada: Es la que ensenia a expresar los numeros";
};
var writte_numeration = function () {
    return "Numeracion Escrita: Es la que ensenia a escribir los numeros";
};
console.log(funcion());
console.log(tipos_enumeracion());
console.log(talking_numeration());
console.log(writte_numeration());
console.log('**************PARAMETROS OBLIGATORIOS DE LAS FUNCIONES***************');
var sabia_que_1 = 'la palabra cero proviene de la voz arabe ziffero, que significa lugar vacio';
var sigx1 = "el que cconsta de una sola cifra, como 2,3,7,8.";
var sigx2 = "es el que consta de dos o mas cifras, como 18, 526";
var sigx3 = "es un conjunto de reglas que sirven para expresar y escribir los numeros";
function sistema_decimal(numero_digito, numero_polidigito, sistema_numeracion) {
    var concatenador = "numero digito: " + numero_digito + ", \n                               Numero Polidigito: " + numero_polidigito + ", \n                               Sistema Numeracion: " + sistema_numeracion;
    return concatenador;
}
console.log(sistema_decimal(sigx1, sigx2, sigx3));
/*una funcion es aquella en la cual puede recibir parametros de clases exteriores para ejecutar codigo y devolver un
  valor final a travez ddel return, estas funciones pueden servir para crear funciones matematicas o fisicas que
  devuelvan un valor final */
//funcion aplicacion la ley de MRU(movimiento rectilineo uniforme)
var MRU_APP = function (d, v, t) {
    if (d == null && v != null && t != null) {
        var distancia = v * t;
        return "la distancia es de: " + distancia;
    }
    else if (v == null && d != null && t != null) {
        var velocidad = d / t;
        return "la velocidad es de: " + velocidad;
    }
    else if (t == null && d != null && v != null) {
        var tiempo = d / v;
        return "El tiempo es de: " + tiempo;
    }
    else {
        function error(ejecutar) {
            throw new Error(ejecutar);
        }
        error("se ha corrompido el sistema... linea E22, inicializansdo protocolo de reinicio");
    }
};
console.log(MRU_APP(null, 70, 30));
console.log(MRU_APP(70, null, 30));
console.log(MRU_APP(70, 30, null));
console.log('**************PARAMETROS OPCIONALES DE LAS FUNCIONES***************');
// en esta instruccion se le dice a typescript que apellido es opcional a la hora de introducir parametros 
function nombres(nombre, apellido) {
    if (apellido) {
        return "nombre de usuario: " + nombre;
    }
    else {
        return "nombre de usuario: " + nombre + " " + apellido;
    }
}
console.log(nombres("anderson"));
console.log('**************PARAMETROS POR DEFECTO***************');
var nombresx2 = function (nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    if (apellido == undefined && capitalizado == false) {
        return "nombre de usuario: " + nombre;
    }
    else if (nombre != undefined && apellido != undefined && capitalizado == false) {
        return "nombre de usuario: " + nombre + " " + apellido;
    }
    else if (nombre && apellido && capitalizado == true) {
        return "El nombre de usuario: " + capitalizadox(nombre) + " " + capitalizadox(apellido);
    }
};
function capitalizadox(palabra) {
    return palabra.charAt(0).toLocaleUpperCase() + palabra.substr(1).toLowerCase();
}
console.log(nombresx2('anderson', 'Andrade', false));
console.log('**************PARAMETROS POR DEFECTO DE MANERA SIMPLE ***************');
var nombrex3 = function (nombre, apellidos, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    if (apellidos && capitalizado) {
        return "El nombre de usuario es: " + capitalizadov2(nombre) + " " + capitalizadov2(apellidos);
    }
    else if (nombre && capitalizado) {
        return "El nombre de usuario es: " + capitalizadov2(nombre);
    }
    else {
        function error(ejecutar) {
            throw new Error(ejecutar);
        }
        error("se ha corrompido el sistema... linea E22, inicializansdo protocolo de reinicio");
    }
};
function capitalizadov2(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLocaleLowerCase();
}
console.log(nombrex3('anderson', 'andrade', true));
console.log('**************PARAMETROS REST  ***************');
/*una de las mayores ventajas es de los parametros rest es que se pueden ingrezar una gran cantidad de parametros sin
  declararos en la funcion */
function nombre_hardware(nombre_pieza) {
    var other_paremeters = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        other_paremeters[_i - 1] = arguments[_i];
    }
    return "Description of components: " + nombre_pieza + "  " + other_paremeters.join(" ");
}
var computer = nombre_hardware("Alphanet 00x01:", "Motheboard ASUS X99 WS", "CPU: Intel Xenon 16 cores", "RAM:32GB");
console.log(nombre_hardware(computer));
console.log('**************TIPO FUNCION  ***************');
function caminar(km) {
    return km;
}
function saludar(nombre) {
    return "" + nombre;
}
//variable      //devolvera parametro return tipo string 
var miFuncion;
//void es un evento en que no contiene el evento return
miFuncion = saludar;
console.log(miFuncion("Anderson"));
console.log('**************TIPO FUNCION CON El variable tipo VOID***************');
function llover() {
    console.log("va a llover");
}
var miFunction2; // se declara que retornara de un evento que no tiene return 
miFunction2 = llover; // se iguala la funcion con el evento llover 
miFunction2(); // se ejetuta la funcion 
console.log('**************Practicle ejercices***************');
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
console.log("la cantidad de superheroes es: " + contar(superHeroes));
//Parametros por defecto //era de ocupar un booleano 
function llamarBatman(llamar) {
    if (llamar) {
        console.log("Batiseñal activada");
    }
}
llamarBatman("call");
// Rest?
function unirheroes() {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
}
console.log(unirheroes("Alpha", "Mira", "Hash"));
// Tipo funcion
function noHaceNada(numero, texto, booleano) {
    var haskel = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        haskel[_i - 3] = arguments[_i];
    }
    console.log("no hace nada");
}
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
noHaceNadaTampoco(13, "alppha", true, "haskel");
