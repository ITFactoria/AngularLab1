"use strict";
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
