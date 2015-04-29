$(function () {

    $('#navigation').click(function (e) {
    	$('ul.side-nav-left').slideToggle('slow',function(e) {
    		$(this).hover(function() {
    			/* Stuff to do when the mouse enters the element */
    		}, function() {
    			$(this).slideUp('fast');
    		});
    	});
    });
});