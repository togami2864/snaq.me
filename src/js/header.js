const header = () => {
  const header = document.getElementById("header");
  const height = 90;

  let offset = 0;
  let lastPosition = 0;

  const onScroll = () => {
    if (lastPosition > height) {
      header.classList.add("header-turbidity");
    } else {
      header.classList.remove("header-turbidity");
    }
  };
  window.addEventListener("scroll", () => {
    lastPosition = window.scrollY;
    onScroll(lastPosition);
  });
};

header();

export default header;
