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
