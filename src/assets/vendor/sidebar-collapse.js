!function () {
  "use strict;";
  var e = function () {
    return {
      listeners: ["_onClick(click)"], _onClick: function (e) {
        e.preventDefault(), this.toggle()
      }, toggle: function () {
        var e = this.element.parentNode, t = e.querySelector("ul");
        if (e.classList.contains("open")) e.classList.remove("open"); else if (t) {
          var o = t.querySelectorAll(".open");
          o = Array.prototype.slice.call(o), o.forEach(function (e) {
            e.classList.remove("open")
          }), e.classList.add("open")
        }
      }
    }
  };
  domFactory.handler.register("sidebar-collapse", e)
}();
