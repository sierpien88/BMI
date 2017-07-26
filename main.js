
	var text1 = document.createElement("LABEL");
	var node = document.createTextNode("Podaj swoją wagę w kilogramach:");
	text1.appendChild(node); 
	document.getElementById("all").appendChild(node); 
	
	var waga = document.createElement("INPUT");
	waga.id="weight";
	document.getElementById("all").appendChild(waga); 
	
	var text2 = document.createElement("LABEL");
	var node2 = document.createTextNode("Podaj swój wzrost w metrach:");
	text2.appendChild(node2);
	document.getElementById("all").appendChild(node2); 
	
	var wzrost = document.createElement("INPUT");
	wzrost.id = "height";
	document.getElementById("all").appendChild(wzrost); 
	
	var button = document.createElement("BUTTON");
	button.id = "getResult";
	var textButton = document.createTextNode("Kliknij, aby obliczyć BMI");
	button.appendChild(textButton);
	document.getElementById("all").appendChild(button);
	
	var wynik;
	var wynikAll;
	
	document.getElementById("getResult").addEventListener("click", function(){
	var weight = parseFloat(document.getElementById("weight").value);
	var height = parseFloat(document.getElementById("height").value);
	
	norm(weight,height);
});	
	
	
	
	function number(a,b){
	if(isNaN(a) || a== "" || a== 0 || isNaN(b) || b== "" || b== 0){
		window.alert("Podane dane są nieprawidłowe")
	}
	else{
		
		wynik = a/Math.pow(b,2);
		wynikAll = wynik.toFixed(2);
		document.getElementById("wynik").innerHTML = wynikAll;
		return wynikAll;
	}

	}
	
	function norm(a,b){
		var liczby = number(a,b)
		<!-- document.getElementById("wynik2").innerHTML = liczby; -->
	if(liczby<18.5){
		document.getElementById("wynik").innerHTML = "Jesteś za chuda";
	}
	else if(liczby<25){
		document.getElementById("wynik").innerHTML = "Jesteś idealny/a";
	}
	else if(liczby>=25){
		document.getElementById("wynik").innerHTML = "Gruuuuuuuuuuuuubas";
	}
	else{
		document.getElementById("wynik").innerHTML = "Coś poszło nie tak";
	}
	}