
function onDeviceReady(){
	showAlert('onDeviceReady');
	//$('.cont').html('<p>deviceready</p>');
	
	//document.addEventListener("menubutton", onMenuKeyDown, false);
}
function onMenuKeyDown(){
	showAlert('onMenuKeyDown');
}
function onResume(){
	showAlert('onResume');
	//$('.cont').html('<p>resume</p>');	
}

function showAlert(message, title) {
    if (navigator.notification) {
        navigator.notification.alert(message, null, title, 'OK');
    } else {
        alert(title ? (title + ": " + message) : message);
    }
}
function onLoad(){
	
	document.addEventListener("deviceready", function(){
		showAlert('onLoad - deviceready', 'onLoad');
	}, false);
	document.addEventListener("resume", onResume, false);
}
/*$(document).ready(function(){
	
	$(document).on('click', '.menu a', function(e){
		e.preventDefault();
				
		showAlert('page load', 'click');
	})
});*/