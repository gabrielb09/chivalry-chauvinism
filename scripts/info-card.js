$(document).ready(function() {
  hideAll();

  // listen for escape key
  $(window).keyup(function(e) {
    var key = (e.keyCode ? e.keyCode : e.which);
    if (key == 27) {
      console.log("Close Popups");
      hideAll();
    }
  });

  $("section .subitem a").click(function() {
    var classList = $(this).parent().attr('class').split(/\s+/);
    $(".card." + classList[2] + "." + classList[1]).addClass("cardpop");
  });
});

function hideAll() {
  // Hide everything
  var classList = $(".card").attr('class').split(/\s+/);
  $.each($('.card'), function(index, item) {
    $(item).removeClass("cardpop");
  });
  // $.each(classList, function(index, item) {
  //   if (item.indexOf('-') != -1 && item.indexOf('card') != -1) { //has a dash in the class
  //     $(".card." + item).removeClass("cardpop");
  //     console.log(".card." + item);
  //     // $(item).hide();
  //     // console.log(item);
  //   }
  // });
}
