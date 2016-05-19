$(document).ready(function() {
  // Hide everything
  var classList = $(".card").attr('class').split(/\s+/);
  $.each(classList, function(index, item) {
    if (item.indexOf('-') != -1) { //has a dash in the class
      $(item).css("visibility", "hidden");
    }
  });
  
  $("section .subitem a").click(function() {
    console.log("click");
    var classList = $("section .subitem").attr('class').split(/\s+/);
    $.each(classList, function(index, item) {
        
    });
  });
});
