chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var oldMessage = $("textarea[name='comment[body]']").val();
    $("textarea[name='comment[body]']").val(oldMessage + "\n\n" + request.image);
});
