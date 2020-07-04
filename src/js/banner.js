const banner = () => {
  const content = document.getElementById("banner");
  let lastPosition = 0;

  window.addEventListener("scroll", () => {
    lastPosition = window.scrollY;

    if (lastPosition < 450) {
      content.classList.add("banner--transparent");
    }

    if (450 < lastPosition && lastPosition < 9700) {
      content.classList.remove("banner--transparent");
      content.classList.add("banner--active");
    }

    if (lastPosition > 9700) {
      content.classList.remove("banner--active");
    }
  });
};

banner();
export default banner;
