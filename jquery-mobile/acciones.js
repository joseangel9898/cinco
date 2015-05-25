// JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		
		$('#izquierda').on("swipeleft", function(){
			navigator.notificacion.alert("desliso a la izquierda",function(){"aplicacion5","aceptar"});
		});//barrer izquierda
		
		$('#derecha').on("swiperight", function(){
		navigator.notificacion.confirm("¿que quieres hacer?",function (opt){
			switch(opt)
			{
				case 1:
				navigator.notification.beep(1);
				break;
				
				case 2: navigator.notificacion.vibrate(1000);
				break;
			}//switch opt
		},"aplicacion5","beep,vibrar,cancelar");//confirm
		})//barrer derecha
		
		
	},false);//ready device
});//document
				
		
