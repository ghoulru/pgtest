function onLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);
	document.addEventListener("resume", onResume, false);
}
function onDeviceReady(){
	alert('onDeviceReady');
	$('.cont').html('<p>deviceready</p>');
	
	document.addEventListener("menubutton", onMenuKeyDown, false);
}
function onMenuKeyDown(){
		alert('onMenuKeyDown');
}
function onResume(){
	alert('onResume');
	$('.cont').html('<p>resume</p>');	
}