let color_console = (msg:any, color:any ) =>{
    console.log("%c" + msg, "color:" + color +  ";font-weight:bold;"); 
    }
    

console.log('**************Constants? ***************');

// nos permite crear datos que no cambian a lo largo del programa que se desarrolle 
const OPTIONS:string = "Enable";

if (true){
    const OPTIONS:string = "Disable";
}


const OBJET = {
    status:true, 
    name0:"miranet", 
    class: "miranda"
}

OBJET.status = false;
OBJET.name0 = "mirahash"

console.log(OBJET);

console.log('**************Literal Templates ***************');

let name1:string = "anderson"; 
let name2:string = "Grace";

let getNombres:any = ()=> {
    return `${name1} y ${name2}`
}

let message:string =`1. this is a normal line  
2. Hello ${ name1 } 
3. see you soon ${ name2 }
4. Los nombre son ${ getNombres() }
5. cálculo ${ 22 / 2 }
`;
console.log(message); 

console.log('**************Funciones de flecha ***************');
// utilizando una funcion flecha dentro de un objeto 


//la ventaja de utilizar funciones flecha que a dirferencia de las funciones estas aceptan variables afuera de la funcuion ya 
// declarada 

let drone = {
    name:"pixhawk", 
    codename: "00x99A", 
    on_rotors:function(){
        console.log("chargin turbines")
        setTimeout(()=>{
            console.log( this.codename + " starting rotors"); 
        },1000);

    }
}

drone.on_rotors(); 

console.log('**************Destructuration Objets ***************');

let dronex = {
    namex: "alphanet force mini", 
    surname: "minihash", 
    codename: "00x99AFA" 
}


/*sin destructuracion de objetos */
let nm = dronex.namex
let surnm = dronex.surname;
let alpha = dronex.codename; 

/*con estructuracion de objetos  */


console.log('**************con estructuracion de objetos ***************');
let {namex , surname, codename} = dronex;

console.log(namex);
console.log(surname); 
console.log(codename);


console.log('************** cuando se hace una destructuracion de objetos con una nueva variable ***************');
/*cuando se hace una destructuracion de objetos con una nueva variable */ 

let {namex:nambe , surname:subnombre, codename:codigo} = dronex;

console.log(nambe); 
console.log(surname); 
console.log(codename); 

console.log('************** Destructuring arraids  ***************');

let arraid: string[] = ["marck", "frank", "alphanet"]; 

/*aplicando destructuracion */
let [var0, var1, var2] = arraid;

console.log(`1.${var0}
2.${var1}
3.${var2}`);  

console.log('************** Destructuring arraids  with the second vector ***************');

let [,varx] = arraid; 

console.log(varx);



console.log('************** For of Cicle ***************');

let odroid = {
    name:"Odroid XU4",
    CPU:"cortex 5422", 
    RAM:"2Gb LPDDR3", 
    LAN:"Gigabit", 
    HDMI:"1.4"
}

let cpu = {
    name:"cortex 5422", 
    CPUs:"eight",
    CPUp:"Cortex A-15",
    CPUd:"Cortex A-17", 
    USB3:"enable two", 
    USB2: "enable one", 
    serial: "UART"

}


let raspberry = {
    name: "Raspberry Pi 3", 
    CPU:"cortex A53", 
    RAM:"1GB SDRAM",
    LAN:"10/100", 
    HDMI:"Undefined" 
}

//creando un arraid 
let SBC0 = [odroid, cpu ]; 
let SBC1 = [odroid, raspberry]
//utilizando el ECASCRIPT 5 

for (let i in SBC0){
  let SBCp = SBC0[i];
  console.log(SBCp);
}

//DE LA FORMA TRADICIONAL 

for(let i=0; i<=SBC1.length -1; i++){
 let SBCp = SBC1[i]; 
 console.log(`Caracteristicas: ${ SBCp.CPU} ${ SBCp.RAM } ${ SBCp.LAN } ${ SBCp.HDMI}`);
}
console.log('************** For of Cicle  On ECMA SCRIPT 6 ***************');

for (const APU of SBC1) {
    color_console(`Caracteristicas: ${ APU.name }  ${ APU.CPU} ${ APU.RAM } ${ APU.LAN } ${ APU.HDMI}`, "blue");     
}







