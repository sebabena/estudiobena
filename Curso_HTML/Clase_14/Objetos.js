// mi_auto = {}
// mi_auto ["marca"]= "Renault"
// mi_auto["año"]=2016
// mi_auto["nuevo"]= false
// mi_auto["color"]= "rojo"
//
// mi_auto ={
// marca:"renault",
// año:2011,
// nuevo:false,
// }
//
//
// var property_key = "modelo"
// mi_auto={
//   modelo: "Focus",
// }
//
//
// mi_auto[property_key]="corolla"
//
//
// mi_auto["color"]="rojo" //agrega la propiedad "color
// ===
// mi_auto.color="rojo"
// //le puedo asignar una propiedad nueva o consultar una a existente
//
// for (var variables in mi_auto) {
//     console.log("es de "+ variables + " "+mi_auto[variables])
// }
// ///////////////////////////////////////////////////////////////////////////
var obj = {
  greeting: 'howdy',
  direction: 'down',
  color: 'red',
  'spaces-and-dashes can be used': ' but need to have quotes'
}


for (var key in obj){
  if (obj[key]==="down"){
$("body").append("<div>"+key+"</div>")
console.log(key)
}
}
////////////////////////////////

var numbers = [ 2, 4, 5, 10, 0};
var double_numbers = {}
for( var i in numbers ){
  double_numbers[ numbers[i] ] = numbers[i] * 2;
}
////////////////////////////////////////////////

for(var i = 0; i < numbers.length; i ++) {
double_numbers[ numbers[i] ] = numbers[i] * 2;
}
///////////////////////////////////////////////

var favorites = []

var famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt',
    'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis']

for (var i in famous){
  if (famous[i][0]==="a"){
    favorites.push(famous[i])
  }
}
/////////////////////////////////////////////

var obama_jobs = []

var politicos = {
    secretary_of_state: 'hillary clinton',
    potus: 'barack obama',
    flotus: 'michelle obama',
    vice_prez: 'joe biden',
    gov_of_california: 'jerry brown'
}

var trabajos
for (var i in politicos){
  obama_jobs.push(politicos[i])
}
/////////////////////////////
var obama_jobs = []

var politicos = {
    secretary_of_state: 'hillary clinton',
    potus: 'barack obama',
    flotus: 'michelle obama',
    vice_prez: 'joe biden',
    gov_of_california: 'jerry brown'
}

var trabajos
for (var i in politicos){
  obama_jobs.push(i)
}
///////////////////////////////////
