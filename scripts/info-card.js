$(document).ready(function() {
  // Hide everything
  var classList = $(".card").attr('class').split(/\s+/);
  $.each(classList, function(index, item) {
    if (item.indexOf('-') != -1 && item.indexOf('card') != -1) { //has a dash in the class
      // $(item).css("visibility", "hidden");
      console.log(item);
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
