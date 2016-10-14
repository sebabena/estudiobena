// var seba= {
//   name:"Sebastian",
//   edad:"43",
//   location:"Buenos Aires",
//   hobbies:["deportes","series"],
//   mascota:{
//     nombre:"Tota",
//     raza:"Perro"
//   },
//   saludo: function(nombre){
//     console.log("hola como estas? "+nombre)
//   }
// }
// seba.saludo("Pablo")
//
// seba.work= function(saludo){
//   console.log(saludo+" "+this.name)
// }
//
// seba.workout= function(edad){
//   console.log(edad+" años!!... estas viejo, yo tengo "+this.edad)
// }
// seba.workout("21")
//
// seba.float_through_life_on_autopilot = function(aqui){
//   this.saludo(aqui)
//   this.work(aqui)
//   this.workout(aqui)
// }
// seba.float_through_life_on_autopilot("hola")

////////////////////////////////////////////////////////////////////
var generico = function (name,location,comida,accion) {
  var perro = {}
  perro.nombre = name
  perro.ubicacion = location
  perro.favorite_food = function(){
    return "tengo ganas de comer " + comida
  }
  perro.party = function () {
   console.log(name +" "+ accion +" desvergonzadamente")
  }
  return perro
}
var perro1 = generico ('Rufus', "Flores","pollo","baila")
var perro2 = generico ('Mario', "Almagro","carne","salta")
///////////////////////////////////////////////////////////////////
