const HEROE = "Spiderman"; // the variables in statate uPercase its a constat variable

// Declaracion de variables?
let spiderman = "Peter Parker";
let  venom = "Eddie Brock";

// Destructuracion de arreglos?
let versiones = ["Spider-Man 2099","Spider-Girl","Ultimate Spider-Man"];
let [var0, var1, var2] = versiones; 

console.log(`1.${var0}
2.${var1}
3.${var2}`); 

// Destructuracion de objetos?
let villanos = {
  venom: "Eddie Brock",
  carnage: "Cletus Kasady",
  sandman: "William Baker"
};

let {venom, carnage, sandman } = villanos; 


// Ciclo for Of?
for(var i=0; i<= versiones.length - 1; i++){
  var spider = versiones[i];
  console.log(spider);
}
for (const contator of versiones.length) {
  let alpha = versiones[iterator];
  console.log(alpha);
}


