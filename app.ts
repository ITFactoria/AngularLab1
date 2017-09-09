
/********************************************************************************* */
//VARIABLE DECLARATIONS
/********************************************************************************* */
//Destructuring Arrays

let teams: string[] = ["America", "Nacional"];
let [team1,team2] = teams;
console.log(team1, team2);

//Destructuring Objects

let car= {
	marca: "chevy",
	color: "rojo",
	precio: 13
};

let {marca,color,precio}=car;
console.log(marca,color,precio);


/***********************************************************************************/
//FUNCTIONS
/************************************************************************************/

//Parameters Types
//Required parameters
function ParametersRequired(a:number, b:number, c:number){
	return (a+b+c);
}
console.log("Parameros requeridos: " +ParametersRequired(1,2,3));

//Default parameters
function ParametersDefault(a:number, b:number, c:number=5){
	return (a+b+c);
}
console.log("Parameros x defecto: " +ParametersDefault(1,3));
console.log("Parameros x defecto: " +ParametersDefault(1,2,3));


//Optional parameters
function ParametersOptional(a:number, b:number, c?:number){
	if (c){
		return(a+b+c);
	}
	else{
		return (a+b);
	}
	
}
console.log("Parameros opcionales: " +ParametersOptional(1,2));

//Function Types
//Named function
function NamedAdd(a:number, b:number){
	return a+b;
}
console.log("Named Function: " + NamedAdd(13,9));

//Anonymous function
let AnomymousAdd = function(a:number,b:number){return a+b}
console.log("Anonymous Function: " + AnomymousAdd(3,4));

//Arrow functions
let Add = function(a:number,b:number){return a+b}
console.log("Add Function: " + Add(13,4));

let ArrowAdd = (a:number,b:number) => a+b;
console.log("Arrow Add Function: " + ArrowAdd(10,4));

/******************************************************************************/
//INTERFACES
/*****************************************************************************/

interface cantante{
	nombre: string,
	genero: string,
	exitoso: boolean,
	cantar: () =>string

}

let demanda:cantante ={
	nombre : "kraken",
	genero : "rock",
	exitoso : true,
	cantar:()=>{return "me encanta cantar!!!!"}
}

let fabrica:cantante ={
	nombre : "maluma",
	genero : "regetonto",
	exitoso : true,
	cantar:()=>{return "me encanta llorar!!!!"}
}

console.log("demanda cantante" + demanda.nombre + "canta" + demanda.genero + demanda.cantar());
console.log("fabrica cantante" + fabrica.nombre + "canta" + fabrica.genero + fabrica.cantar());





