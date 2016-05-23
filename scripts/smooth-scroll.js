// SMOOTH SCROLLING SECTIONS
$(document).ready(function() {
  $('a[href*=\\#]').click(function() {
    // if the link is pointing to itself
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) { // length equals 1
        var targetOffset = $target.offset().top;
        $('html,body').animate({scrollTop: targetOffset}, 800);
        // scrollToTop(800);
        return true;
      }
    }
  });
});
