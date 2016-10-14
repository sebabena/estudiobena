
			var biggest_smallest= function (arreglo1){
				var resultado = [arreglo1[0],arreglo1[0]]
				var comparador=function(num){
					if(arreglo1[0]>num){
						arreglo1[0]=num
					}else if ( arreglo1[1]<num){
						arreglo1[1]=num
					}
					arr.forEach(comparador)
				}
				return(resultado)
			}

			var entrada=[14,-5,4,8,25,-15]
			biggest_smallest(entrada)
