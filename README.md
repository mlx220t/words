# Words - Simple Words and Icons for the web developers.

You can see the Demo here: http://web.kupibo.com.ua/demo/js/words/index.html

#### You should add:

  - jquery-1.11.0.min.js
  - jquery-ui.js
  - jquery.words.css
  - jquery.words.js

#### Initialisation

    <div class="arrow"></div>
	<div class="arrow2"></div>
    
#

    <script>
  		$(document).ready(function (){
  			$('.arrow').words('arrow-right', 'white');
			$('.arrow2').words('arrow-left', 'red');
  		});
	  </script>
		
Where 'white', 'red' are the colors of your words. You can add differend values.
