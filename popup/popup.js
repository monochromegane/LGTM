var Page = function(){
};

Page.prototype.load = function(){
  var context = this;
  var tabId   = 0;
  chrome.tabs.query({"active": true}, function(tab){
    tabId = tab[0].id;
  });
  $(".loading").show();
  $(".image").hide().each(function(){
    var image = $(this);
    $.getJSON("http://www.lgtm.in/g?" + Math.random(), function (data) {
      image.attr("src", data.imageUrl);
      image.unbind().click(function(){
        var pattern = new RegExp(/http:|https:/g);
        var url = data.actualImageUrl.replace(pattern, '');
        var lgtmMessage = "![LGTM](" + url + ")";

        chrome.tabs.sendMessage(tabId, { image: lgtmMessage }, function(response){});

        $(".message").show(500);
        setTimeout(function() { $(".message").hide(500) }, 1000);

        var clipboard = $("<input/>");
        $("body").append(clipboard);
        clipboard.val(lgtmMessage).select();
        document.execCommand('copy');
        clipboard.remove();
      });
      image.show().prev().hide();
    });
  });
};

$(document).ready(function(){
  var page = new Page();
  $("#reload").click(function(){
    page.load();
  });
  page.load();
});
