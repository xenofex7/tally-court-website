(function () {
  var addr = "hello" + String.fromCharCode(64) + "nextara.ch";
  var els = document.querySelectorAll("[data-mail]");
  for (var i = 0; i < els.length; i++) {
    els[i].href = "mailto:" + addr;
    if (els[i].getAttribute("data-mail") === "text") {
      els[i].textContent = addr;
    }
  }
})();
