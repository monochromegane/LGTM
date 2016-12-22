chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var textArea = $('#id_new_comment');
    if (textArea) {
      var oldMessage = textArea.val();
      textArea.val(oldMessage + "\n\n" + request.image);
    }
});
