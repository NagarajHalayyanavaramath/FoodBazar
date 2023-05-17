const navbtn = document.querySelector("#nav-btn");
const navbar = document.querySelector("#navbar");

navbtn.addEventListener("click", function () {
  navbar.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
//sticky navigation
const sectionMainEl = document.querySelector(".main--section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionMainEl);

const gallery = document.getElementById("glery");

const images = [
  "images/section-4/food1-min.jpg",
  "images/section-4/food2-min.jpg",
  "images/section-4/food3-min.jpg",
  "images/section-4/food4-min.jpg",
  "images/section-4/food5-min.jpg",
  "images/section-4/food6-min.jpg",
  "images/section-4/food7-min.jpg",
  "images/section-4/food8-min.jpg",
  "images/section-4/food9-min.jpg",
  "images/section-4/food10-min.jpg",
  "images/section-4/food11-min.jpg",
  "images/section-4/food12-min.jpg",
];

for (let i = 0; i < 12; i++) {
  let figure = document.createElement("figure");
  let img = document.createElement("img");
  img.src = images[i];

  figure.appendChild(img);
  gallery.appendChild(figure);
}
