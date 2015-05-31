var App = function( _cont ){
		
	this.container = _cont;
	var self = this;
		
	this.loadPage = function(href){
		$( this.container ).load( href , function(response, status, xhr){
			self.saveState(href);			
		});
		
		this.showAlert('app.loadPage.pageUrl=' + localStorage.getItem('pageUrl'));
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
	
	document.addEventListener("deviceready", function(){
		$('.cont').append('<p>deviceready</p>');
		myApp.onLoad();
	}, false);
	document.addEventListener("resume", function(){
		$('.cont').append('<p>resume</p>');
		myApp.onLoad();
	}, false);
	
	$(document).on('click', '.menu a', function(e){
		e.preventDefault();
				
		if( typeof $(this).data('href') != 'undefined' ){
			myApp.loadPage($(this).data('href'));
		}
	})
});