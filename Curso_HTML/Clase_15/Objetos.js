
                var cafes = [{
                    name: 'Capuccino',
                    tamaño: "200cc",
                    caracteristicas: 'Descafeinado',
                    precio: 25.40,
                    picture: 'http://www.starbucksblog.es/wp-content/uploads/2011/03/Choco-Cappuccino-.png'
                }, {
                    name: 'Cafe Grande',
                    tamaño: "300cc",
                    caracteristicas: 'viene con una galleta',
                    precio: 22.80,
                    picture: 'http://www.cafe-antoinette.com/wp-content/uploads/2015/06/CAFE-ANTOINETTE-4-e1441792026549.jpg'
                }, {
                  name: 'Cafe Chico',
                  tamaño: "150cc",
                  caracteristicas: 'extra dulce',
                  precio: 19.90,
                  picture: 'http://yorkcafebar.com/images/cafe-chico-2---york.jpg'
                }]

                var comidas = [{
                    name: 'Bizcocho',
                    tamaño: "50 gr",
                    caracteristicas: 'Sabor Canela',
                    precio: 12.40,
                    picture: 'http://www.sanusfood.com/uploads/1/4/9/9/14996934/584891.jpg'
                }, {
                    name: 'Torta Chocolate',
                    tamaño: "Porcion",
                    caracteristicas: 'extra grande!',
                    precio: 28.90,
                    picture: 'http://cdn2.recetasgratis.net/es/images/4/8/8/img_torta_humeda_de_chocolate_decorada_47884_600.jpg'
                }, {
                  name: 'medialuna',
                  tamaño: "XL",
                  caracteristicas: 'salada o de manteca',
                  precio: 9.90,
                  picture: 'http://www.pagnifique.com.uy/img/productos/9cb5d9b80e9e11ed5c665eedd8ebcd3b.jpg'
                }]

                var cajas_bebidas = function(elemento){
                  $("#target").append('<div id=offset class="col-md-12"><div id=recuadro class="col-md-6"><img src='+elemento.picture+'></div>\
                          <div id="recuadro" class="col-md-6"><div class="col-md-12"><h3 class="nombre">'+elemento.name+'</h3></div> \
                          <div id="parrafo"><p class="descripcion">'+elemento.caracteristicas+'"</p></div> \
                          <div id="recuadro" class="col-md-8"><h4>Precio <b>$ '+elemento.precio+'</b></h4></div> \
                          <div id="boton" class="col-md-4"><button type="button" class="btn btn-primary btn-md">comprar</button> \
                          </div> \
                      </div> \
                   </div> \
                   </div>')
                }
                document.querySelector('#bebidas').addEventListener('click', function(){
                  $('#target').empty();
                    for(var i in cafes){
                    cajas_bebidas(cafes[i])
                  }
                })
                document.querySelector('#comidas').addEventListener('click', function(){
                  $('#target').empty();
                  for(var i in comidas){
                    cajas_bebidas(comidas[i])
                  }
                })
