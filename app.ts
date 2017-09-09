/********************************************************************************* */
//VARIABLE DECLARATIONS
/********************************************************************************* */
//Destructuring Arrays

let teams: string[] = ["America", "Nacional", "Junior"];
let [team1,team2,team3] = teams;
console.log(team1, team2, team3);

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


