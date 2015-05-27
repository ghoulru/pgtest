$(document).ready(function(){
	$(document).on('click', '.menu a', function(e){
		e.preventDefault();
		
		if( typeof $(this).data('href') != 'undefined' ){
			$('.cont').load( $(this).data('href') );
		}
	})
});