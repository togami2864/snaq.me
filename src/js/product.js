const product = () => {
  const tags = document.querySelectorAll(".tag_content");
  let lastPosition = 0;

  window.addEventListener("scroll", () => {
    lastPosition = window.scrollY;
    if (lastPosition > 1335) {
      tags[0].classList.add("fade-in");
    }
    if (lastPosition > 1755) {
      tags[1].classList.add("fade-in");
    }
    if (lastPosition > 1900) {
      tags[2].classList.add("fade-in");
    }
    if (lastPosition > 2220) {
      tags[3].classList.add("fade-in");
    }
    if (lastPosition > 2600) {
      tags[4].classList.add("fade-in");
    }
    if (lastPosition > 2750) {
      tags[5].classList.add("fade-in");
    }
    if (lastPosition > 3000) {
      tags[6].classList.add("fade-in");
    }
  });
};
product();

export default product;
