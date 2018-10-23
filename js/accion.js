$(function(){
	var conexion = $.ajax({
		url: 'https://jorgesanchez.net/practicas/iaw/cambio.json',
		type: 'GET',
		dataType: 'json'
	});

	conexion.done(function(data) {
		var claves = data["cambios"];
		for(var clave of claves){
			$('#moneda').append("<option>"+clave["nombre"]+"</option")
		}
		$('calculador')
	});
	
});