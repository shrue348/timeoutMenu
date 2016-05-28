//timeoutMenu.js 0.1a https://github.com/shrue348/ Open source under the MIT License. Copyright � 2016 Aleksander Alekseev All rights reserved.
(function($) {
	$.fn.timeoutMenu = function(options) {
		var options = $.extend({
			delay: 200
		}, options),
	
		dragging = false,
		doc = $(document),
		body = $('body'),
		obj = $(this),
		a = obj.find('a'),
		ul = obj.find('a + ul'),
		
		init = function() {
			globalMenuTimeout = false;
			ul.hide();
			body.on('touchmove', function(){ dragging = true;});
			body.on('', function(){	dragging = false;});

			a.on('mouseenter', a_hover);
			a.on('touchend', sub_open);
			obj.on('mouseleave', menu_close);
		},

		a_hover = function(){
			clearTimeout(globalMenuTimeout);
			globalMenuTimeout = setTimeout(function() {
				$(this).trigger('touchend');
			}.bind(this), options.delay);
		},

		sub_open = function(e){
			if ( $(this).hasClass('tapped') ){
				var href = $(this).attr('href');
			} else {
				$(this).parent().parent().find('.tapped').removeClass('tapped').next('ul').hide();
				$(this).addClass('tapped').next('ul').show();

				e.stopImmediatePropagation();
				e.preventDefault();
			}
		},
		menu_close = function(){
			clearTimeout(globalMenuTimeout);
			globalMenuTimeout = setTimeout(function() 
				obj.find('.tapped').removeClass('tapped').next('ul').hide();
			}, options.delay);
		};

		return this.each(init);
	}
})(jQuery);