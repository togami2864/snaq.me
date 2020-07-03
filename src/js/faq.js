const faq = () => {
  const btn = document.querySelectorAll(".faq_accordion-btn");
  const content = document.querySelectorAll(".faq_accordion-body");

  btn[0].addEventListener("click", () => {
    btn[0].classList.toggle("faq_accordion-btn--active");
    content[0].classList.toggle("faq_accordion-body--active");
  });

  btn[1].addEventListener("click", () => {
    btn[1].classList.toggle("faq_accordion-btn--active");
    content[1].classList.toggle("faq_accordion-body--active");
  });

  btn[2].addEventListener("click", () => {
    btn[2].classList.toggle("faq_accordion-btn--active");
    content[2].classList.toggle("faq_accordion-body--active");
  });

  btn[3].addEventListener("click", () => {
    btn[3].classList.toggle("faq_accordion-btn--active");
    content[3].classList.toggle("faq_accordion-body--active");
  });
  btn[4].addEventListener("click", () => {
    btn[4].classList.toggle("faq_accordion-btn--active");
    content[4].classList.toggle("faq_accordion-body--active");
  });
};
faq();

export default faq;
