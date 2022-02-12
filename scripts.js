let move = false;

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

function toTop() {
  scrollTo({ top: 0, behavior: "smooth" });
}

function gallery(n) {
  let gallery = document.querySelector(".images-container");

  if (move == true) {
    gallery.style.transform = "translateX(0)";
    move = false;
  } else if (move == false) {
    if (n == "right") {
      gallery.style.transform = "translateX(calc(-25vw - 1rem))";
    }

    if (n == "left") {
      gallery.style.transform = "translateX(calc(25vw + 1rem))";
    }

    move = true;
  }
}

window.addEventListener("scroll", reveal);
