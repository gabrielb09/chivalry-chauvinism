$(document).ready(function() {
  $("section .subitem a").click(function() {
    console.log("click");
    var classList = $("section .subitem").attr('class').split(/\s+/);
    $.each(classList, function(index, item) {
        console.log(item);
    });
  });
});
