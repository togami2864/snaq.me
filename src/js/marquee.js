const marquee = () => {
  const marquee = document.querySelector(".marquee");

  const marqueeContent = document.querySelector("ul.marquee_slides-content");

  marquee.style.setProperty("--marqueeElements", 20);

  for (let i = 0; i < 20; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }
};
marquee();

export default marquee;
