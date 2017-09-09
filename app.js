/********************************************************************************* */
//VARIABLE DECLARATIONS
/********************************************************************************* */
//Destructuring Arrays
var teams = ["America", "Nacional", "Junior"];
var team1 = teams[0], team2 = teams[1], team3 = teams[2];
console.log(team1, team2, team3);
//Destructuring Objects
var car = {
    marca: "chevy",
    color: "rojo",
    precio: 13
};
var marca = car.marca, color = car.color, precio = car.precio;
console.log(marca, color, precio);
/***********************************************************************************/
//FUNCTIONS
/************************************************************************************/
//Parameters Types
//Required parameters
function ParametersRequired(a, b, c) {
    return (a + b + c);
}
console.log("Parameros requeridos: " + ParametersRequired(1, 2, 3));
//Default parameters
function ParametersDefault(a, b, c) {
    if (c === void 0) { c = 5; }
    return (a + b + c);
}
console.log("Parameros x defecto: " + ParametersDefault(1, 3));
console.log("Parameros x defecto: " + ParametersDefault(1, 2, 3));
//Optional parameters
function ParametersOptional(a, b, c) {
    if (c) {
        return (a + b + c);
    }
    else {
        return (a + b);
    }
}
console.log("Parameros opcionales: " + ParametersOptional(1, 2));
//Function Types
//Named function
function NamedAdd(a, b) {
    return a + b;
}
console.log("Named Function: " + NamedAdd(13, 9));
//Anonymous function
var AnomymousAdd = function (a, b) { return a + b; };
console.log("Anonymous Function: " + AnomymousAdd(3, 4));
//Arrow functions
var Add = function (a, b) { return a + b; };
console.log("Add Function: " + Add(13, 4));
var ArrowAdd = function (a, b) { return a + b; };
console.log("Arrow Add Function: " + ArrowAdd(10, 4));
var demanda = {
    nombre: "kraken",
    genero: "rock",
    exitoso: true,
    cantar: function () { return "me encanta cantar!!!!"; }
};
var fabrica = {
    nombre: "maluma",
    genero: "regetonto",
    exitoso: true,
    cantar: function () { return "me encanta llorar!!!!"; }
};
var ranchero = {
    nombre: "aguilar",
    genero: "rabchera",
    exitoso: true,
    cantar: function () { return "me encanta gritar!!!!"; }
};
console.log("demanda cantante" + demanda.nombre + "canta" + demanda.genero + demanda.cantar());
console.log("fabrica cantante" + fabrica.nombre + "canta" + fabrica.genero + fabrica.cantar());
console.log("ranchera cantante" + ranchero.nombre + "canta" + ranchero.genero + ranchero.cantar());
