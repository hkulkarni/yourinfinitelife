// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .

$(document).ready(function() {
	bgFullPageWidth();
	addMainImage();
	mainNavUI();
	socialMediaLinks();

	window.onresize = function () {
		bgFullPageWidth();
	};

});

function addMainImage() {
	var mainHeaderDiv = $('.add_main_image'),
		img_src = "http://placehold.it/" + window.outerWidth + "x500",
		imageHtml = '<img class="img-responsive header_image" src=' + img_src + '>';

	if (mainHeaderDiv) {
		$(imageHtml).insertAfter(mainHeaderDiv);
	}
}

function bgFullPageWidth() {
	var bgDiv = $('.nav_dropdown_menu'),
		windowWidth = window.outerWidth;

	if (windowWidth >= 768) {
		bgDiv.css('width', windowWidth);
	} else {
		bgDiv.css('width', 'auto');
	}
}

function mainNavUI() {
	var $window = $(window),
		navBar = $('#navbar-nav'),
		mainNavHolder = $('#main_navbar_holder'),
		navBarLinks = $('.navbar_link');


	navBarLinks.hover(function() {
		$('.nav_dropdown_menu', this).slideToggle(100);
	});

	$window.scroll(function() {
		var navDistanceFromTop = mainNavHolder.offset().top;

		if ($window.scrollTop() >= navDistanceFromTop) {
			mainNavHolder.css('position', 'fixed');
			mainNavHolder.css('top', '0');
			mainNavHolder.css('left', '0');
			navBar.css('background-color', 'rgba(197, 197, 197, 0.75)');
		}

		if(navDistanceFromTop === 0){
			mainNavHolder.removeAttr('style');
			navBar.removeAttr('style');
		}
	});
}

function socialMediaLinks() {
	var socialLinks = $('.social-icon');

	socialLinks.on('click', function(e) {
		e.preventDefault();

		var target_url = 'https://' + $(this).data('target');
		window.open(target_url);
	});
}