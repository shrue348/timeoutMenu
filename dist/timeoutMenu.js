//timeoutMenu.js 0.1a https://github.com/shrue348/ Open source under the MIT License. Copyright © 2016 Aleksander Alekseev All rights reserved.
(function($) {
	$.fn.timeoutMenu = function(options) {
		var options = $.extend({
			delay: 200
		}, options),
		
		doc = $(document),
		body = $('body'),
		obj = $(this),
		ul = obj.find('ul'),
		a_withsub = obj.find('ul').prev('a'),
		ul_sub = obj.find('ul'),
		
		
		init = function() {
			window.globalMenuTimeout = false,
			dragging = false;
			ul.hide();
			a_withsub.addClass('test');

			body.on('touchmove', function(){ dragging = true;});
			body.on('', function(){	dragging = false;});
			
			doc.on('click', closemenu);
			obj.on('mouseleave', closemenu);
			a_withsub.on('mouseenter', opensub);
			a_withsub.on('touchend focus', closesub);
		},
		
		closemenu = function(event){
			if ($(event.target).closest(obj).length == 0 ) {
					$(ul_sub).hide(); 
					$(a_withsub).removeClass('tapped'); 
				}
			if ( event.type == 'mouseleave' ) {
				window.clearTimeout(window.globalMenuTimeout);
				window.globalMenuTimeout = window.setTimeout(function() {
					$(ul_sub).hide(); 
					$(a_withsub).removeClass('tapped'); 
				}.bind(this), options.delay);
			}
		},
		
		opensub = function(){
			window.clearTimeout(window.globalMenuTimeout);
			window.globalMenuTimeout = window.setTimeout(function() {
				$(this).trigger('touchend');
			}.bind(this), options.delay);
		},
		
		closesub = function(e){
			if(e.type == 'touchend' &&  dragging == false || e.type == 'mouseenter') {
				if ( $(this).hasClass('tapped') ){
					var href = $(this).attr('href');
				} else {
					$(this).parent().parent().find('.tapped').next('ul').hide();
					$(this).parent().parent().find('.tapped').removeClass('tapped');
					$(this).addClass('tapped');
					$(this).next('ul').show();
					e.stopImmediatePropagation();
					e.preventDefault();
				}
			}
		};
		
		return this.each(init);
	}
})(jQuery);