

window.onload = function () {

  window.addEventListener("keydown", function (e) {
    
    if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.key === "s") {
      e.preventDefault();
      const saveButton = document.querySelector('[data-testid="run-button"]')
      saveButton.click()
    }
  }, false);
}

