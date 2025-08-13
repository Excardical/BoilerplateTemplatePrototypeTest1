// Add this message listener
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === "showAlert") {
      alert(request.message);
    }
  }
);


try {
  console.log('content script loaded');
} catch (e) {
  console.error(e);
}