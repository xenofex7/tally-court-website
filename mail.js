// Assemble the contact email at runtime so it isn't in the served HTML
// (basic spam-bot protection). Elements with [data-mail] get the mailto link;
// [data-mail="text"] additionally gets the address as its visible text.
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
