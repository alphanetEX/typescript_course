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


