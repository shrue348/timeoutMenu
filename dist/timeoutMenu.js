//timeoutMenu.js 0.11a https://github.com/shrue348/ Open source under the MIT License. Copyright © 2016 Aleksander Alekseev All rights reserved.
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

			a.on('mouseenter', a_hover);
			a.on('touchend', sub_open);
			obj.on('mouseleave', menu_close);

			body.on('', function(){	dragging = false;});
			body.on("touchmove", function(){ dragging = true;});
			body.on("touchstart", function(){ dragging = false;});
			
			$(document).on('click touchstart', function(event) {
			   	if ($(event.target).closest(obj).length && dragging == false) return;

			  	menu_close();
			    event.stopPropagation();
			});
		},

		a_hover = function(){
			clearTimeout(globalMenuTimeout);
			globalMenuTimeout = setTimeout(function() {
				$(this).trigger('touchend');
			}.bind(this), options.delay);
		},

		sub_open = function(e){
			if ($(this).next().is('ul')) {
				if ( $(this).hasClass('tapped')){
					var href = $(this).attr('href');

				} else {
					$(this).parent().parent().find('.tapped').removeClass('tapped').next('ul').hide();

					$(this).addClass('tapped').next('ul').show();
					e.stopImmediatePropagation();
					e.preventDefault();
				}
			} else {
				var href = $(this).attr('href');

				$(this).parent().parent().find('.tapped').removeClass('tapped').next('ul').hide();
			}
		},

		menu_close = function(){
			clearTimeout(globalMenuTimeout);
			globalMenuTimeout = setTimeout(function() {
				obj.find('.tapped').removeClass('tapped').next('ul').hide();
			}, options.delay);
		};

		return this.each(init);
	}
})(jQuery);
