const media = () => {
  const mediaContent = document.querySelector("ul.media_carousels-content");
  for (let i = 0; i < 10; i++) {
    mediaContent.appendChild(mediaContent.children[i].cloneNode(true));
  }
};
media();
//setInterval(media(),300)

// export default media;
