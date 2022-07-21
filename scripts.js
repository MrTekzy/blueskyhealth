var scrolled = false

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("top-nav").style.opacity = "0.84";
	console.log("set: scrolled=true");
  } 
  else {
    document.getElementById("top-nav").style.opacity = "1";
    console.log("set: scrolled=false");
  }
}
