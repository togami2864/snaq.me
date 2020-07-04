const firstView = () => {
  const backgroundImage = document.querySelectorAll(".keyvisual");

  let count = 0;

  const slide = () => {
    backgroundImage[count].classList.toggle("keyvisual--active");
    count++;
    if (count === 3) {
      count = 0;
    }
    backgroundImage[count].classList.toggle("keyvisual--active");
  };
  setInterval(slide, 5000);
};
firstView();
export default firstView;
