const media = () => {
  const mediaCarousels = document.querySelector(".media_carousels");

  new Glide(".media_glide", {
    autoplay: 2500,
    type: "carousel",
    perView: 3,
  }).mount();

  mediaCarousels.addEventListener("hover", () => {
    Glide.disable();
  });
};
media();

export default media;
