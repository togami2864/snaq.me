const toggle_marquee = () => {
  const btn = document.querySelector(".marquee_category-btn");
  const content = document.querySelector(".marquee_category-body");

  btn.addEventListener("click", () => {
    btn.classList.toggle("marquee_category-btn--active");
    content.classList.toggle("marquee_category-body--active");
  });
};

toggle_marquee();

export default toggle_marquee;
