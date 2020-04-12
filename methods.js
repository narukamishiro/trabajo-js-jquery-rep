$(document).ready{$( function() {
    $( "#tabs" ).tabs({
      collapsible: true
    });
  } );
};
var imglist1=["sldpr1.jpg","sldpr2.jpg"];
var imglist2=["sldrpg1.jpg","sldrpg2.jpg"];
$("#abme").accordion({
	collapsible:true;
});
function clock(){
	 let currentDate = new Date();
     let hours = currentDate.getHours();
     let minutes = currentDate.getMinutes();
     let seconds = currentDate.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes
    }
 
    if (seconds < 10) {
        seconds = "0" + seconds
    }
	$("#time p").textContent=hours+" : "+minutes+" : "+seconds;
}
function regul(){
	let re1usu = new RegExp("\d\w{2,11}");
	let re1nom = new RegExp("\d\w{2,11}");
	let re1ape = new RegExp("\d{2,12}");
	let re1tel = new RegExp("\[0-9]{9}");
	let re1email = new RegExp("\d\w{2,11}@\{2-10}.com");
	var nom=$("#fname").text;
	var ape=$("#lname").text;
	var tlf=$("#tlf").text;
	var eml=$("#eml").text;
	var usu=$("#usu").text;
	do{
		nom="";
		$("#fname").style.backgroundColor="red";
		nom=$("#fname").text;
	}while(!relnom.test(nom) || nom=="");
	$("#fname").style.backgroundColor="green";
	do{
		ape="";
		$("#lname").style.backgroundColor="red";
		ape=$("#lname").text;
	}while(!relape.test(lname) || ape=="");
	$("#lname").style.backgroundColor="green";
	do{
		tlf="";
		$("#tlf").style.backgroundColor="red";
		nom=$("#tlf").text;
	}while(!reltel.test(tlf) || tlf=="");
	$("#tlf").style.backgroundColor="green";
	do{
		eml="";
		$("#eml").style.backgroundColor="red";
		eml=$("#eml").text;
	}while(!relmail.test(eml) || eml=="");
	$("#eml").style.backgroundColor="green";
	do{
		usu="";
		$("#usu").style.backgroundColor="red";
		nom=$("#usu").text;
	}while(!relusu.test(usu) || usu=="");
	$("#usu").style.backgroundColor="green";
}
function autoscroll(){
	window.scrollTo(0, 0);
}
$( function() {
    $( "#tabs" ).tabs();
  } );
	$("#com").click(regul);
	$("#com2").click(regul);
	clock();
	setInterval(clock, 1000);
	