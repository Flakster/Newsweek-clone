var bar=document.getElementById('small-red-bar');

$(document).scroll(function () {
  var y = $(this).scrollTop();
  var w = window.getComputedStyle(bar,null).getPropertyValue("width");
  if (y > 95) {
      bar.style.display = "block";
  } else {
      bar.style.display = "none";
  }
});