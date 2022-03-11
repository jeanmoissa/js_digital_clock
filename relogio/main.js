function clock(){
	var date=new Date();
	var year = date.getFullYear();
	var month = String(date.getMonth() + 1).padStart(2, '0');
	var day = String(date.getDate()).padStart(2, '0');
	var hour=date.getHours();
	var min=date.getMinutes();
	var sec=date.getSeconds();

	if(hour < 10){
		hour="0"+hour;
	}
	if(min < 10){
		min="0"+min;
	}
	if(sec < 10){
		sec="0"+sec;
	}

	var horas = hour + ":" + min + ":" + sec;
	var dateToday = day + '/' + month + '/' + year;

	document.getElementById("clk").innerText=horas;
	document.getElementById("dat").innerText=dateToday;
	
	}

	var timer=setInterval(clock,1000);