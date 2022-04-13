$(document).ready(function () {
  $("ul.list").first().find("li").odd().addClass("red");
  
  $("ul.list")
    .first()
    .find("li")
    .even()
    .addClass("blue")
    .parents(".task-body.task1")
    .last()
    .find("li")
    .last()
    .addClass("blue")
    .prev()
    .addClass("blue")
    .prev()
    .addClass("blue");
});
