$(document).ready(function(){
	//localStorage.clear();
	//var pageId = localStorage.getItem('pageId');
	
	var myApp = new App('.cont');
	//myApp.container = '.cont';
	
	document.addEventListener("deviceready", myApp.onLoad, false);
	document.addEventListener("resume", myApp.onLoad, false);

	$(document).on('click', '.menu a', function(e){
		e.preventDefault();
				
		if( typeof $(this).data('href') != 'undefined' ){
			myApp.loadPage($(this).data('href'));
		}
	})
});

var App = function( _cont ){
		
	this.container = _cont;
	var self = this;
		
	this.loadPage = function(href){
		$( this.container ).load( href , function(response, status, xhr){
			self.saveState(href);			
		});
	}; 
	
	this.saveState = function(pageUrl){
		localStorage.setItem('pageUrl', pageUrl);
	}; 
	
	this.onLoad = function(){
		var pageUrl = localStorage.getItem('pageUrl');
		if( pageUrl != null){
			this.loadPage(pageUrl);
		}
		
		console.log('app.onLoad.pageUrl=' + pageUrl);
	};
}