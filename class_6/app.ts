console.log("hello class objets, constructors and methods"); 

class general_check {
 //objeto de variables 
 pdu: boolean;
 battery:boolean; 
 wimax:boolean; 
 ssid:boolean; 
 dbm:number; 
 battery_voltage:number

 flight_status:boolean; 
 current_flights:number; 

 constructor(pdu:boolean, battery:boolean, wimax:boolean, ssid:boolean, dbm:number, 
    battery_voltage:number, flyght_status:boolean, current_flighs:number){

    //declare objet variable in the constructor variables 

    this.pdu= pdu; 
    this.battery = battery; 
    this.wimax = wimax; 
    this.ssid = ssid; 
    this.dbm = dbm; 
    this.battery_voltage  = battery_voltage; 
    this.flight_status = flyght_status; 
    this.current_flights = current_flighs; 
 }
} 




// this data obtainer in the other functions or clases 
let pdu: boolean = true;
let battery:boolean = true; 
let wimax:boolean = true; 
let ssid:boolean = true; 
let dbm:number = -34; 
let battery_voltage:number = 22.4; 

let flight_status:boolean = true; 
let current_flights:number = 54; 


let drone:general_check = new general_check( pdu, battery, wimax, ssid, dbm, battery_voltage, flight_status, current_flights); // equal java, the variable drone it is equal to class general check so that obtain 


//this console log resturn data in the real front aplication  
console.log (drone);                        //objet variables to general check 

console.log('************** Propiedades publicas, privadas y protegidas ***************');

// this content controlled  access a property of method in our class 

class Pdu {
    //only this parameters its oriented in typescript, whent compile to javascript. this parametersa change a normal variable
private esc1_flf:boolean;  
private esc2_brg:boolean; 
private esc3_frg:boolean; 
private esc4_blf:boolean; 

protected final_status:boolean; // only change variable whith atribute protected in inside the original class or inheritance
public status_esc:string; 

constructor(esc1_flf:boolean,  esc2_brg:boolean,  esc3_frg:boolean, esc4_blf:boolean){
this.esc1_flf = esc1_flf; 
this.esc2_brg = esc2_brg; 
this.esc3_frg = esc3_frg; 
this.esc4_blf = esc4_blf; 

 this.final_status = true; 
}

}

// this variable power_status obtained completed class of pdu with variables
let power_status:Pdu = new Pdu(true, true, true, true); 
 
power_status.status_esc = "en listo para entrar en ejecucion"; // only power_status obtained a public variable in class Pdu 

console.log('************** Public, Private and Protected  Methods ***************'); 

 // un metodo es una funcion dentro de una clase

 class Peda{
     private cantidad_cerveza:number; 
     private alcohol_pcvz:number; 
     public humano:boolean; 
     public nombre_chela:string; 

    constructor(cantidad_cerveza:number, alcohol_pcvz:number, humano:boolean, nombre_chela:string){
        this.cantidad_cerveza = cantidad_cerveza; 
        this.alcohol_pcvz = alcohol_pcvz; 
        this.humano = humano; 
        this.nombre_chela = nombre_chela; 
    }
    //un metodo que en verdad es una funcion  
        public a_verga():void {
            let message = `${ this.cantidad_cerveza } ${ this.alcohol_pcvz } ${ this.humano } ${ this.nombre_chela }`; 
            console.log(message); 
        }

 }
 let verga:Peda = new Peda( 20, 14.4, true, "Suprema");

verga.a_verga(); 

console.log('************** Heridity, super  and properties on the constructor  ***************'); 

// the heridity consist in create a principal class and translate the declare constructor variables to sub class

class Central_Structure{
    protected pdu:string;
    protected autopilot:string; 
    protected battery:string; 
    public variablex:string; 

    constructor(pdu:string, autopilot:string, battery:string){
        this.autopilot = autopilot; 
    console.log(`variables of father class Central_structure  ${ pdu } ${ autopilot } ${ battery }`);       
    }

    protected getCurrentVoltage():string{
        console.log("private event created in the father class "); 
        return this.autopilot;
    }
}

// on this class 'Rotors'  extends of  the father class Central_Structure, this class 'Rotors' obtained variables the fhather class
class Rotors extends Central_Structure{  // Central structrure 
    //to create a new constructor in the children class you have declare a instance super 
    constructor(a:string, b:string, c:string){
        super(a, b, c);  // only the instance super reference the father class 'Central structure'
        console.log(`variables of  children class Rotors: ${ a } ${ b } ${ c }`);  
    }

    public getCurrentVoltage():string{
        console.log("public event reference a protected event of class father class"); 
        return super.getCurrentVoltage(); //obtainer the protected envent on the father class Central_structure
    }
}


let rotores:Rotors =  new Rotors("Type: XAS power damped", "Pixhawk 2.1", "Tatu battery"); 

console.log(rotores.getCurrentVoltage()); 



console.log('************** Get and Sets  ***************'); 

class Sleep{
     private _name:string | undefined; 

     constructor(nombre?:string){
        this._name = nombre;
     }

     // normally the objetive to use the instance 'get' is validate if this variables obtain a data  
     // in resume utilize for control access or data 
     get nombrex():string{
        if(this._name == undefined){
            return `not exist username`; 
        }else{
            return   `good dreams: ${ this._name }`;
        }
     }
     //normally to use a instance 'set' its a insert variable without using the constructor of the parent class 
     set un_puto(puto:string){
        console.log("pass on the instance set"); 
        if(puto.length <=3){
            console.error("your name must have at least a 4 or more characters");
            console.log('************** Thorw new Error stop all code  ***************'); 
            throw new Error("Error in sintaxis"); 
        }else{
        this._name = puto;
        } 
     }
}
// this variable dormir its a instance because use the class Sleep 
let  dormir:Sleep = new Sleep(); 

dormir.un_puto = "AlphanetEX";

console.log(dormir.nombrex); 


console.log('************** methods and static properties ***************'); 


class Celphone {
    static name_celphone:string = "Iphone 8 plus"; 

    constructor(){

    }

    static createCelphone(){
        console.log("created with static method ")
        return new Celphone();
    }
}

console.log(Celphone.name_celphone); 

let celphonex = Celphone.createCelphone();

// it this a completed instance of  the class 'celphone'  
console.log(celphonex);

console.log('************** abstrac class ***************');  

// the 'abstract evit a create instances derivatives of class HardDrive'; 

//in resume its a container of properties and heridity methods of other class 
abstract class HardDrive{

    constructor(public hdd:string, public ssd:string,  public sass:string){
            console.log(`discos duros disponibles: ${hdd} ${ ssd } ${sass}`); 
    }
}


class Rack extends HardDrive {
    constructor(a:string, b:string, c:string){
        super(a,b,c); 
    }
}

let constant:Rack = new Rack("Western Digital", "Avexir", "Seagate"); 

console.log(constant);



console.log('************** private contructor ***************');  
//the idea its a exist a unique instance of class == singleton 
class StartUAV {
    static instance:StartUAV; 

   private constructor ( public start:boolean){
     console.log(start);
    }

    static call_start(){
        if(!StartUAV.instance){
            StartUAV.instance = new StartUAV(true); 
        }
        return StartUAV.instance;
    }
}

// let turnon = new StartUAV(true); 
let start = StartUAV.call_start();
console.log( start  ); 


