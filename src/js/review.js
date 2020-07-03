const review = () => {
  new Glide(".review_glide", {
    type: "carousel",
    perView: 3,
  }).mount();
};
review();

export default review;
