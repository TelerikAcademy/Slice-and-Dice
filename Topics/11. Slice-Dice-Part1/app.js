var app = {};

(function() {
	var $form;
	var $input;
	var $info;
	var $tabs;

	app.init = function() {
		$form = $("#login-form");
		$info = $("#info");
		input();
		dialog();
		tabs();
	}


	function input() {

		$form.submit(function(e) {
			e.preventDefault();
			return false;
		})
		
		$input = $("#userId");
		$input.focus();
		$input.blur(function(e) {
			e.preventDefault();
			$input.focus();
			return false;
		});
		$input.change(function(e) {
			e.preventDefault();
			validateUser(this.value);
			return false;
		});
	} 

	function validateUser(userId) {
		if (userId == "gosho") {
			$form.fadeOut(function() {
				$info.removeClass("hidden");
				$input.val("");
			});
		}
		else {
			$input.val("");
			console.log("invalid")
		}
	}


	function dialog() {
		var $close = $("#info > .close");
		$close.click(function() {
			$info.addClass("hidden");
			$form.fadeIn();
		})
	}


	function tabs() {
		$tabs = $("#info .tabs");
		var $items = $tabs.find("li a");
		var current = 0;
		$panes = $("#info .main .pane");
		$panes.hide();


		$items.eq(current).addClass("active");
		$panes.eq(current).show();

		var isClicking = false;
		$items.click(function(e) {
			e.preventDefault();
			var index = $items.index(this);
			$items.removeClass("active");
			$(this).addClass("active");
			$panes.eq(current).fadeOut(function() {
				$panes.eq(index).fadeIn();
				current = index;
			});
			return false;
		})
	}

})();