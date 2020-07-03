const media = () => {
  const cards = document.querySelector(".media_carousels");

  const mediaContent = document.querySelector("ul.media_carousels-content");

  for (let i = 0; i < 10; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }
};
setInterval(media(), 60000);

export default media;
