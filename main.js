
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.pgpCommand === 'show_info') {

      var left = chrome.windows.getCurrent(function(w) {

        chrome.windows.create({
          'url': 'popup.html',
          'type': 'popup',
          'width': 400,
          'height': 300,
          'top': parseInt((w.top + w.height) - (w.height / 1.5) - (300 / 2)),
          'left': parseInt((w.left + w.width) - (w.width / 2) - (400 / 2))
        }, function(w) {
          // something good

        })

      });
    }

  })
