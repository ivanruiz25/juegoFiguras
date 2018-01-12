	function sacarFigurasAleatorias()
	{
	var figuras=["cuadrado","triangulo","trapecio","huevo"];
	var figura="";

	for(let i=0;i< 4;i++)
	{
		var posicion=Math.floor(Math.random()*(figuras.length));
		figura+="<div class=\""+figuras[posicion]+"\"  id=\""+figuras[posicion]+"\"></div>";
		figuras.splice(posicion,1);
	}

	$(".contenedorGrises").html(figura);

	$(".cuadrado").draggable({ revert: true});
	$(".triangulo").draggable({revert: true});
	$(".huevo").draggable({revert: true});
	$(".trapecio").draggable({revert: true});


};

	//hacemos todos los elementos draggables para poder moverlos por la pantalla
	// revert sirve para una vez soltar el objeto pueda volver a su destino 



	var contador=0;

$(".vacio").droppable({

		drop: function(event,ui){

				//variables para guardar los sonidos 
				  var bien = new Audio("sound/bien.mp3");
				  var mal = new Audio("sound/mal.mp3");

				// si los id son iguales, las figuras seran iguales 
				if(ui.draggable.attr("id")==$(this).attr("id"))
				{
					//borramos las 2 figuras de la pantalla
					$(this).remove();
					ui.draggable.remove();
					// sumamos el contador
					// para saber cuantos aciertos lleva el usuario 
					contador++;
					bien.play();
				}	
				else
				{
					mal.play();
					alert("LA FIGURA NO ES CORRECTA");

				}
				// si el contador es 4 el jugador habra ganado 
				if(contador===4)
				{
					alert("HAS GANADO");
					// creamos un boton para refrescar la pagina y poder volver a jugar 
					$(".boton").html("<input type=\"submit\" value=\"Volver a jugar\" onclick=\"javascript:window.location.reload();\"/>")
				}
		},

	});

