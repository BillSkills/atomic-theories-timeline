$(document).ready(function () {
  if (localStorage.getItem("index_scroll") != null) {
    $(window).scrollTop(localStorage.getItem("index_scroll"));
  }

  $(window).on("scroll", function () {
    localStorage.setItem("index_scroll", $(window).scrollTop());
  });
});
