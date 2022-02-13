// selectors
let nav = document.querySelector(".nav");
let aboutPage = document.querySelectorAll(".about-page");

// eventListener
for (let i = 0; i < aboutPage.length; i++) {
  aboutPage[i].addEventListener("click", active);
}

// function
function active(event) {
  event.target.classList.toggle("active");

  let body = event.target.nextElementSibling;
  if (body.style.display === "block") {
    body.style.display = "none";
  } else {
    body.style.display = "block";
  }
}

console.log(aboutPage.length);
