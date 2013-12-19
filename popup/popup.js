var Page = function(){
};

Page.prototype.load = function(){
  $(".image").each(function(){
    var context = $(this);
    $.getJSON("http://www.lgtm.in/g?" + Math.random(), function (data) {
      context.attr("src", data.imageUrl);
    });
  });
};

$(document).ready(function(){
  var page = new Page();
  page.load();
});
