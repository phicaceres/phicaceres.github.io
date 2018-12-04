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

  $("#aboutus").mouseenter(function() {
    $(this).addClass("nav-hover");
  });
  $("#aboutus").mouseleave(function() {
    $(this).removeClass("nav-hover");
  });
});
