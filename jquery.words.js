
;(function ($)
{
	$.fn.words = function(words, color) {

		if(!words) {
			words = 'arrow-right';
		}
		if(!color) {
			color = '#fff';
		}
		
		var word = this.first();
		word.init = function() {

			word.stop().addClass('words');

			// Arrow Start
			function wordArrowRight(){
				word.addClass('word-arrow-right').append('<div class="line line1"></div><div class="line line2"></div><div class="line line3"></div>');
				word.find('div').css({'background': color});
					word.click(function(){
					var line1 = word.find('.line1');
					var line2 = word.find('.line2');
					var line3 = word.find('.line3');
					line1.toggleClass('rotated');
					line3.toggleClass('rotated');
				});
			};
			function wordArrowLeft(){
				word.addClass('word-arrow-left').append('<div class="line line1"></div><div class="line line2"></div><div class="line line3"></div>');
				word.find('div').css({'background': color});
				word.click(function(){
					var line1 = word.find('.line1');
					var line2 = word.find('.line2');
					var line3 = word.find('.line3');
					line1.toggleClass('rotated');
					line3.toggleClass('rotated');
				});
			};

			if(words == 'arrow-right'){
				wordArrowRight();
			}
			if(words == 'arrow-left'){
				wordArrowLeft();
			}
		};
		word.init();
	};
})(jQuery);











