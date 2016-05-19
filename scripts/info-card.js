var sel = "section .subitem a";
$(document).ready(function() {
  $(sel).click(function() {
    console.log("click");
    var classList = $(sel).attr('class').split(/\s+/);
    $.each(classList, function(index, item) {
        console.log(item);
    });
  });
});
