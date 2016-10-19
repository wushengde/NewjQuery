		$(document).ready(function() {
			$("button").click(function(){
				alert($("p:first").hasClass('content'));
			});
		});