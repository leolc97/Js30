

document.addEventListener("keydown", function (event){
	
	var tecla = document.getElementById(event.key);
	
	tecla.style.border = "5px solid yellow";
	tecla.style.fontSize = "25px";
	
	var audio = new Audio('sounds/' + event.key + '.wav');
	audio.play();
	
	
	setTimeout(function() {
		tecla.style.border = "2px solid black";
		tecla.style.fontSize = "20px";
		
	}, 200);
	
	

}
)



