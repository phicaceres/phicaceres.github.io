$(document).ready(function() {
  $("#clothes").mouseenter(function() {
    $(this).addClass("nav-hover");
  });
  $("#clothes").mouseleave(function() {
    $(this).removeClass("nav-hover");
  });

  $("#accessories").mouseenter(function() {
    $(this).addClass("nav-hover");
  });
  $("#accessories").mouseleave(function() {
    $(this).removeClass("nav-hover");
  });

  $("#order").mouseenter(function() {
    $(this).addClass("nav-hover");
  });
  $("#order").mouseleave(function() {
    $(this).removeClass("nav-hover");
  });
});
