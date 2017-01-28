chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var oldMessage = $("textarea[name='comment[body]']").val();
        var attr = $("textarea[name='comment[body]']");
        var brStr = "";
        if (oldMessage) {
            brStr = "\n\n";
        }
        attr.val(oldMessage + brStr + request.image);
    }
);
