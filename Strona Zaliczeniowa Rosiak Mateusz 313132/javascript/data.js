function data()
	{
		var dzisiaj = new Date();
		
		var dzien = dzisiaj.getDate();
		if(dzien<10) dzien="0"+dzien;
		var miesiac = dzisiaj.getMonth()+1;
		if(miesiac<10) miesiac="0"+miesiac;
		var rok = dzisiaj.getFullYear();
		
		document.getElementById("data").innerHTML = 
		 dzien+"/"+miesiac+"/"+rok
		 
		 setTimeout("data()");
	}