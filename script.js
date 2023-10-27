document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".parallax");
  M.Parallax.init(elems);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".scrollspy");
  var instances = M.ScrollSpy.init(elems);
});

document.addEventListener("DOMContentLoaded", () => {
  const elems = document.querySelectorAll(".sidenav");
  const instances = M.Sidenav.init(elems);
});
