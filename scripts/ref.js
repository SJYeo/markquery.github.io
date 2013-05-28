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
    $(function() {});
    $window = $(window);
    window.prettyPrint && prettyPrint();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        return $(".scrollup").fadeIn();
      } else {
        return $(".scrollup").fadeOut();
      }
    });
    $(".nav-tabs a[data-href][data-toggle=\"tab\"]").on("show", function(e) {
      var $this, firstSlash, url;

      $this = $(this);
      if ($this.data("loaded") !== 1) {
        firstSlash = $this.attr("data-href").indexOf("/");
        url = "";
        if (firstSlash !== 0) {
          url = window.location.href + "/" + $this.attr("data-href");
        } else {
          url = $this.attr("data-href");
        }
        return $($this.attr("href")).load(url, function(data) {
          return $this.data("loaded", 1);
        });
      }
    });
    return $(window).load(function() {
      return $("#twitter").jtwt({
        username: "markquery",
        count: 2,
        image_size: 24
      });
    });
  });

}).call(this);
