chrome.runtime.sendMessage({pgpCommand: "show_info"})

const check = () => {

  function reqListener() {
    const valid = true

    document.getElementById('pgp-info').parentNode.removeChild(document.getElementById('pgp-info'))

    if (valid) {
      document.close()
      document.documentElement.innerHTML = '';
      document.write(this.responseText)
    } else {

      document.write(`
        <div id="pgp-warning">
          <h1>PGP Signature Check FAILED</h1>
          <p>This webpage has been digitally signed but something went wrong.</p>
        </div>
      `)
      document.close()
    }

  }

  function reqError(err) {
    console.log('Fetch Error :-S', err);
    window.stop()
  }

  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.onerror = reqError;
  oReq.open('get', window.location.href, true);
  oReq.send();

}
check()

document.write(`
  <div id="pgp-info">
    Checking PGP signature for this page...
  </div>
`)
