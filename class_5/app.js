var color_console = function (msg, color) {
    console.log("%c" + msg, "color:" + color + ";font-weight:bold;");
};
console.log('**************Constants? ***************');
// nos permite crear datos que no cambian a lo largo del programa que se desarrolle 
var OPTIONS = "Enable";
if (true) {
    var OPTIONS_1 = "Disable";
}
var OBJET = {
    status: true,
    name0: "miranet",
    "class": "miranda"
};
OBJET.status = false;
OBJET.name0 = "mirahash";
console.log(OBJET);
console.log('**************Literal Templates ***************');
var name1 = "anderson";
var name2 = "Grace";
var getNombres = function () {
    return name1 + " y " + name2;
};
var message = "1. this is a normal line  \n2. Hello " + name1 + " \n3. see you soon " + name2 + "\n4. Los nombre son " + getNombres() + "\n5. c\u00E1lculo " + 22 / 2 + "\n";
console.log(message);
console.log('**************Funciones de flecha ***************');
// utilizando una funcion flecha dentro de un objeto 
//la ventaja de utilizar funciones flecha que a dirferencia de las funciones estas aceptan variables afuera de la funcuion ya 
// declarada 
var drone = {
    name: "pixhawk",
    codename: "00x99A",
    on_rotors: function () {
        var _this = this;
        console.log("chargin turbines");
        setTimeout(function () {
            console.log(_this.codename + " starting rotors");
        }, 1000);
    }
};
drone.on_rotors();
console.log('**************Destructuration Objets ***************');
var dronex = {
    namex: "alphanet force mini",
    surname: "minihash",
    codename: "00x99AFA"
};
/*sin destructuracion de objetos */
var nm = dronex.namex;
var surnm = dronex.surname;
var alpha = dronex.codename;
/*con estructuracion de objetos  */
console.log('**************con estructuracion de objetos ***************');
var namex = dronex.namex, surname = dronex.surname, codename = dronex.codename;
console.log(namex);
console.log(surname);
console.log(codename);
console.log('************** cuando se hace una destructuracion de objetos con una nueva variable ***************');
/*cuando se hace una destructuracion de objetos con una nueva variable */
var nambe = dronex.namex, subnombre = dronex.surname, codigo = dronex.codename;
console.log(nambe);
console.log(surname);
console.log(codename);
console.log('************** Destructuring arraids  ***************');
var arraid = ["marck", "frank", "alphanet"];
/*aplicando destructuracion */
var var0 = arraid[0], var1 = arraid[1], var2 = arraid[2];
console.log("1." + var0 + "\n2." + var1 + "\n3." + var2);
console.log('************** Destructuring arraids  with the second vector ***************');
var varx = arraid[1];
console.log(varx);
console.log('************** For of Cicle ***************');
var odroid = {
    name: "Odroid XU4",
    CPU: "cortex 5422",
    RAM: "2Gb LPDDR3",
    LAN: "Gigabit",
    HDMI: "1.4"
};
var cpu = {
    name: "cortex 5422",
    CPUs: "eight",
    CPUp: "Cortex A-15",
    CPUd: "Cortex A-17",
    USB3: "enable two",
    USB2: "enable one",
    serial: "UART"
};
var raspberry = {
    name: "Raspberry Pi 3",
    CPU: "cortex A53",
    RAM: "1GB SDRAM",
    LAN: "10/100",
    HDMI: "Undefined"
};
//creando un arraid 
var SBC0 = [odroid, cpu];
var SBC1 = [odroid, raspberry];
//utilizando el ECASCRIPT 5 
for (var i in SBC0) {
    var SBCp = SBC0[i];
    console.log(SBCp);
}
//DE LA FORMA TRADICIONAL 
for (var i = 0; i <= SBC1.length - 1; i++) {
    var SBCp = SBC1[i];
    console.log("Caracteristicas: " + SBCp.CPU + " " + SBCp.RAM + " " + SBCp.LAN + " " + SBCp.HDMI);
}
console.log('************** For of Cicle  On ECMA SCRIPT 6 ***************');
for (var _i = 0, SBC1_1 = SBC1; _i < SBC1_1.length; _i++) {
    var APU = SBC1_1[_i];
    color_console("Caracteristicas: " + APU.name + "  " + APU.CPU + " " + APU.RAM + " " + APU.LAN + " " + APU.HDMI, "blue");
}
