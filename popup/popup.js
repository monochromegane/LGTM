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
        chrome.tabs.sendMessage(tabId, {image: "![LGTM](" + image.attr("src") + ")"}, function(response){});

        $(".message").show(500);
        setTimeout(function() { $(".message").hide(500) }, 1000);

        var clipboard = $("<input/>");
        $("body").append(clipboard);
        clipboard.val(image.attr("src")).select();
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
