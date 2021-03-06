var App = function( _cont ){
		
	this.container = _cont;
	var self = this;
		
	this.loadPage = function(href){
		/*$( this.container ).load( href , function(response, status, xhr){
			this.saveState(href);			
		});*/
		$( this.container ).load('script.js');
		
		//this.showAlert('app.loadPage.pageUrl=' + localStorage.getItem('pageUrl'));
	}; 
	
	this.saveState = function(pageUrl){
		localStorage.setItem('pageUrl', pageUrl);
	}; 
	
	this.onLoad = function(){
		var pageUrl = localStorage.getItem('pageUrl');
		if( pageUrl != null){
			this.loadPage(pageUrl);
		}
		
		//console.log('app.onLoad.pageUrl=' + pageUrl);
		this.showAlert('app.onLoad.pageUrl=' + pageUrl);
	};
	
	this.showAlert = function (message, title) {
	    if (navigator.notification) {
	        navigator.notification.alert(message, null, title, 'OK');
	    } else {
	        alert(title ? (title + ": " + message) : message);
	    }
	};
}


var myApp = new App('.cont');




//jquery events
$(document).ready(function(){
	
	$(document).on('click', '.menu a', function(e){
		e.preventDefault();
				
		if( typeof $(this).data('href') != 'undefined' ){
			myApp.loadPage($(this).data('href'));
		}
	})
});

function onLoad(){
	
	document.addEventListener("deviceready", onDeviceReady, false);
	document.addEventListener("resume", onResume, false);
}
function onDeviceReady(){
	myApp.showAlert('deviceready', 'Msg');
	$('.cont').html('<p>deviceready</p>');
	//myApp.onLoad();
	document.addEventListener("menubutton", onMenuKeyDown, false);
}
function onMenuKeyDown(){
	myApp.showAlert('onMenuKeyDown', 'Menu');
}
function onResume(){
	$('.cont').html('<p>resume</p>');
	//myApp.onLoad();
	myApp.showAlert('resume', 'Msg');
}