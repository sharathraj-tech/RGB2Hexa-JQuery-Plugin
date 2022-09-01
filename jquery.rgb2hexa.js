
(function ($) {
  $.fn.extend({
    RGB2Hexa: function (options) {
      var defaults = {
        displayEle: "",
      };

      options = $.extend(defaults, options);
      
      var $this = $(this);
      var rgb = $this.val();
      var hexaValue;
      rgb = rgb.match(
        /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
      );
      hexaValue =
        rgb && rgb.length === 4
          ? "#" +
            ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2)
          : "";
      if (options.displayEle == "") {
        $this.val(hexaValue);
      } else {
        $(options.displayEle).val(hexaValue);
      }
    },
  });
})(jQuery);
