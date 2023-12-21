$("#scrollToTop").click(function () {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

$("#burger").click(function() {
  $("#backDrop").toggleClass("hidden");
  $("#mobileNav").toggleClass("-left-60");
  $("#mobileNav").toggleClass("left-0");
});

$("#backDrop").click(function() {
  $("#backDrop").addClass("hidden");
  $("#mobileNav").removeClass("left-0");
  $("#mobileNav").addClass("-left-60");
})

$(window).scroll(function () {
  const scrollTop = $(window).scrollTop();

  if (scrollTop === 0) {
    $("#navbar").removeClass("navbar-active");
    $("#scrollToTop").addClass("hidden");
  } else {
    $("#navbar").addClass("navbar-active");
    $("#scrollToTop").removeClass("hidden");
  }
});
