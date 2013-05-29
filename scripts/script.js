(function() {
  $(function() {
    var $source, $sourceCode, $sourceHeader, $window;

    $source = $('#source');
    $sourceHeader = $('#source-header');
    $sourceCode = $('#source-code');
    $sourceHeader.click(function() {
      return $sourceCode.toggle();
    });
    $sourceHeader.trigger('click');
    $("[href^=#none]").click(function(e) {
      return e.preventDefault();
    });
    $(function() {});
    $window = $(window);
    window.prettyPrint && prettyPrint();
    $(function() {});
    $(".carousel").carousel;
    ({
      interval: 5000,
      pause: "hover"
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        return $(".scrollup").fadeIn();
      } else {
        return $(".scrollup").fadeOut();
      }
    });
    $(".scrollup").click(function() {
      return $("html, body").animate({
        scrollTop: 0
      }, 600, false);
    });
    $("a[data-toggle=popover]").popover().click(function(e) {
      return e.preventDefault();
    });
    $("a[data-toggle=tooltip]").tooltip();
    return $(window).load(function() {
      return $("#twitter").jtwt({
        username: "markquery",
        count: 2,
        image_size: 24
      });
    });
  });

}).call(this);
