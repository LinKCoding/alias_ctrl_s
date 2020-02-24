window.onload = function () {
  document.addEventListener("keydown", function (e) {
    if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.key === "s") {
      e.preventDefault();
      // Process the event here (such as click on submit button)
      console.log('ah ha!')
    }
  }, false);
}

