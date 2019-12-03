function testAnim(x) {
    $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
};


$(document).ready(function() {

$('#myModal').on('show.bs.modal', function (e) {
	
  var anim = "wobble";
      testAnim(anim);
})
$('#myModal').on('hide.bs.modal', function (e) {
  var anim = "wobble";
      testAnim(anim);
})
});



/*

https://codepen.io/nhembram/pen/PzyYLL

*/