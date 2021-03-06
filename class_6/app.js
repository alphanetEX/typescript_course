var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hello class objets, constructors and methods");
var general_check = /** @class */ (function () {
    function general_check(pdu, battery, wimax, ssid, dbm, battery_voltage, flyght_status, current_flighs) {
        //declare objet variable in the constructor variables 
        this.pdu = pdu;
        this.battery = battery;
        this.wimax = wimax;
        this.ssid = ssid;
        this.dbm = dbm;
        this.battery_voltage = battery_voltage;
        this.flight_status = flyght_status;
        this.current_flights = current_flighs;
    }
    return general_check;
}());
// this data obtainer in the other functions or clases 
var pdu = true;
var battery = true;
var wimax = true;
var ssid = true;
var dbm = -34;
var battery_voltage = 22.4;
var flight_status = true;
var current_flights = 54;
var drone = new general_check(pdu, battery, wimax, ssid, dbm, battery_voltage, flight_status, current_flights); // equal java, the variable drone it is equal to class general check so that obtain 
//this console log resturn data in the real front aplication  
console.log(drone); //objet variables to general check 
console.log('************** Propiedades publicas, privadas y protegidas ***************');
// this content controlled  access a property of method in our class 
var Pdu = /** @class */ (function () {
    function Pdu(esc1_flf, esc2_brg, esc3_frg, esc4_blf) {
        this.esc1_flf = esc1_flf;
        this.esc2_brg = esc2_brg;
        this.esc3_frg = esc3_frg;
        this.esc4_blf = esc4_blf;
        this.final_status = true;
    }
    return Pdu;
}());
// this variable power_status obtained completed class of pdu with variables
var power_status = new Pdu(true, true, true, true);
power_status.status_esc = "en listo para entrar en ejecucion"; // only power_status obtained a public variable in class Pdu 
console.log('************** Public, Private and Protected  Methods ***************');
// un metodo es una funcion dentro de una clase
var Peda = /** @class */ (function () {
    function Peda(cantidad_cerveza, alcohol_pcvz, humano, nombre_chela) {
        this.cantidad_cerveza = cantidad_cerveza;
        this.alcohol_pcvz = alcohol_pcvz;
        this.humano = humano;
        this.nombre_chela = nombre_chela;
    }
    //un metodo que en verdad es una funcion  
    Peda.prototype.a_verga = function () {
        var message = this.cantidad_cerveza + " " + this.alcohol_pcvz + " " + this.humano + " " + this.nombre_chela;
        console.log(message);
    };
    return Peda;
}());
var verga = new Peda(20, 14.4, true, "Suprema");
verga.a_verga();
console.log('************** Heridity, super  and properties on the constructor  ***************');
// the heridity consist in create a principal class and translate the declare constructor variables to sub class
var Central_Structure = /** @class */ (function () {
    function Central_Structure(pdu, autopilot, battery) {
        this.autopilot = autopilot;
        console.log("variables of father class Central_structure  " + pdu + " " + autopilot + " " + battery);
    }
    Central_Structure.prototype.getCurrentVoltage = function () {
        console.log("private event created in the father class ");
        return this.autopilot;
    };
    return Central_Structure;
}());
// on this class 'Rotors'  extends of  the father class Central_Structure, this class 'Rotors' obtained variables the fhather class
var Rotors = /** @class */ (function (_super) {
    __extends(Rotors, _super);
    //to create a new constructor in the children class you have declare a instance super 
    function Rotors(a, b, c) {
        var _this = _super.call(this, a, b, c) || this;
        console.log("variables of  children class Rotors: " + a + " " + b + " " + c);
        return _this;
    }
    Rotors.prototype.getCurrentVoltage = function () {
        console.log("public event reference a protected event of class father class");
        return _super.prototype.getCurrentVoltage.call(this); //obtainer the protected envent on the father class Central_structure
    };
    return Rotors;
}(Central_Structure));
var rotores = new Rotors("Type: XAS power damped", "Pixhawk 2.1", "Tatu battery");
console.log(rotores.getCurrentVoltage());
console.log('************** Get and Sets  ***************');
var Sleep = /** @class */ (function () {
    function Sleep(nombre) {
        this._name = nombre;
    }
    Object.defineProperty(Sleep.prototype, "nombrex", {
        // normally the objetive to use the instance 'get' is validate if this variables obtain a data  
        // in resume utilize for control access or data 
        get: function () {
            if (this._name == undefined) {
                return "not exist username";
            }
            else {
                return "good dreams: " + this._name;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sleep.prototype, "un_puto", {
        //normally to use a instance 'set' its a insert variable without using the constructor of the parent class 
        set: function (puto) {
            console.log("pass on the instance set");
            if (puto.length <= 3) {
                console.error("your name must have at least a 4 or more characters");
                console.log('************** Thorw new Error stop all code  ***************');
                throw new Error("Error in sintaxis");
            }
            else {
                this._name = puto;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Sleep;
}());
// this variable dormir its a instance because use the class Sleep 
var dormir = new Sleep();
dormir.un_puto = "AlphanetEX";
console.log(dormir.nombrex);
console.log('************** methods and static properties ***************');
var Celphone = /** @class */ (function () {
    function Celphone() {
    }
    Celphone.createCelphone = function () {
        console.log("created with static method ");
        return new Celphone();
    };
    Celphone.name_celphone = "Iphone 8 plus";
    return Celphone;
}());
console.log(Celphone.name_celphone);
var celphonex = Celphone.createCelphone();
// it this a completed instance of  the class 'celphone'  
console.log(celphonex);
console.log('************** abstrac class ***************');
// the 'abstract evit a create instances derivatives of class HardDrive'; 
//in resume its a container of properties and heridity methods of other class 
var HardDrive = /** @class */ (function () {
    function HardDrive(hdd, ssd, sass) {
        this.hdd = hdd;
        this.ssd = ssd;
        this.sass = sass;
        console.log("discos duros disponibles: " + hdd + " " + ssd + " " + sass);
    }
    return HardDrive;
}());
var Rack = /** @class */ (function (_super) {
    __extends(Rack, _super);
    function Rack(a, b, c) {
        return _super.call(this, a, b, c) || this;
    }
    return Rack;
}(HardDrive));
var constant = new Rack("Western Digital", "Avexir", "Seagate");
console.log(constant);
console.log('************** private contructor ***************');
//the idea its a exist a unique instance of class == singleton 
var StartUAV = /** @class */ (function () {
    function StartUAV(start) {
        this.start = start;
        console.log(start);
    }
    StartUAV.call_start = function () {
        if (!StartUAV.instance) {
            StartUAV.instance = new StartUAV(true);
        }
        return StartUAV.instance;
    };
    return StartUAV;
}());
// let turnon = new StartUAV(true); 
var start = StartUAV.call_start();
console.log(start);
