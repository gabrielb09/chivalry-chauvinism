$(document).ready(function() {
  $("section .subitem a").click(function() {
    console.log("click");
    var classList = $("section .subitem").attr('class').split(/\s+/);
    $.each(classList, function(index, item) {
        if("card" in item) {
          console.log(item);
          var cardList = item.split("-");
          var cardId = parseInt(cardList[1]);
          console.log(cardId.toString());
        }
    });
  });
});
