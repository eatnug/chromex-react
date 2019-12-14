let isOff = true;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type == "toggle") {
    if (isOff) {
      isOff = false;
      let iframe = document.createElement("iframe");
      iframe.id = "chromex-frame";
      iframe.src = chrome.runtime.getURL("index.html");
      iframe.style.zIndex = 201501178
      iframe.style.position = "fixed"
      iframe.style.right = "0px"
      iframe.style.top = "0px"
      iframe.style.height = "100vh"
      top.document.body.appendChild(iframe);
    } else {
      isOff = true;
      parent.document.getElementById("chromex-frame").remove();
    }
  }
});