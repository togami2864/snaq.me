const marquee = () => {
  const slides = document.querySelector(".marquee");
  const marqueeElementsDisplayed = getComputedStyle(slides).getPropertyValue(
    "--marquee-elements-displayed"
  );
  const marqueeContent = document.querySelector("ul.marquee_slides-content");

  slides.style.setProperty(
    "--marquee-elements",
    marqueeContent.children.length
  );

  for (let i = 0; i < 10; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }
};
setInterval(marquee(), 6000);

export default marquee;
