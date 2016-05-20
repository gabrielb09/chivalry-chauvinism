$(document).ready(function() {

  // listen for escape key
  $(window).keyup(function(e) {
    var key = (e.keyCode ? e.keyCode : e.which);
    if (key == 27) {
      hideAll();
    }
  });

  $("section .subitem a").click(function() {
    console.log("click");
    var classList = $("section .subitem").attr('class').split(/\s+/);
    $.each(classList, function(index, item) {

    });
    $(".card.card-2").css("visibility", "visible");
  });
});

function hideAll() {
  // Hide everything
  var classList = $(".card").attr('class').split(/\s+/);
  $.each(classList, function(index, item) {
    if (item.indexOf('-') != -1 && item.indexOf('card') != -1) { //has a dash in the class
      $(".card." + item).css("visibility", "hidden");
      // $(item).hide();
      console.log(item);
    }
  });
}
