window.onload = function () {
  document.addEventListener("keydown", function (e) {
    if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.key === "s") {
      e.preventDefault();
      
      const buttons = document.getElementsByTagName('button')
      const saveButton = [...buttons].find(el => el.innerHTML === "Save")
      try {
        saveButton.click()
      } catch (e) {
        // The event listener actually hears this event twice...
        // so, it'll also try to click twice
        // the save button's gone and replaced with a loading icon
        // but it works it's just loading, don't throw an error :) 
      }
      
      
    }
  }, false);
}

