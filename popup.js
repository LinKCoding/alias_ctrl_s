chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  if (tabs[0].url.includes('https://www.codecademy')) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `

      document.addEventListener("keydown", function (e) {
        console.log('testing')
        if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 83) {
          e.preventDefault();
          // Process the event here (such as click on submit button)

          console.log("does this work?")
        }
      }, false);
      `
    })
  }
});