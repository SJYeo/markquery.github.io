(function() {
  var $window;

  $("a[data-toggle=popover]").popover().click(function(e) {
    return e.preventDefault();
  });

  $(function() {});

  $window = $(window);

  window.prettyPrint && prettyPrint();

}).call(this);
