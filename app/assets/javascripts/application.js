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
	addMainImage();
});

function addMainImage() {
	var mainHeaderDiv = $('.add_main_image');

	var img_src = "http://placehold.it/" + window.outerWidth + "x500",
		imageHtml = '<img class="img-responsive" src=' + img_src + '>';


	if (mainHeaderDiv) {
//		mainHeaderDiv.append(imageHtml);
		$(imageHtml).insertAfter(mainHeaderDiv);
	}
}