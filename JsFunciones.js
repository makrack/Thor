$(document).ready(function() {

$(".activation_zone.one").click(function() {
	$(".one").toggleClass("active");
});

$("#activate").click(function() {
	$(".one").toggleClass("active");
	$(".two").toggleClass("active");
});

});