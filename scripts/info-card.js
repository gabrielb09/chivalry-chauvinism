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

  // watch for clicks on links and add classes for animation
  $("section .subitem a").click(function() {
    var classList = $(this).parent().attr('class').split(/\s+/);
    $(".card." + classList[2] + "." + classList[1]).addClass("cardpop");
    $(".card." + classList[2] + "." + classList[1]).addClass("cardfade");
    setTimeout(function() {cardOpen = true; }, 500);
  });

  // watch for clicks of the close button
  $(".cardclose").click(function() {
    hideAll();
  });

  // click outside of card to hide card (this doesn't work yet :(   )
  // $("div.card").mouseup(function (e) {
  //     var container = $("div.card");

  //     if (!container.is(e.target) && container.has(e.target).length === 0) {
  //         console.log("he");
  //     }
  // });
});

function hideAll() {
  // Hide everything
  var classList = $(".card").attr('class').split(/\s+/);
  $.each($('.card'), function(index, item) {
    $(item).removeClass("cardpop");
  });
}
