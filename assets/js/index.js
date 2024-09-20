// Header scroll code
const header = document.querySelector("header");
document.addEventListener("scroll", () => {
  let currentHeight = window.scrollY;
  let elemProp = header.getBoundingClientRect();

  if (currentHeight >= elemProp.top && currentHeight >= elemProp.bottom)
    header.classList.add("moved");
  else if (currentHeight <= 120) header.classList.remove("moved");
});

// The scroll x buttons in home Page
const left_btn = document.getElementsByClassName("left-direction")[0];
const right_btn = document.getElementsByClassName("right-direction")[0];
const slider_wrap = document.getElementsByClassName("slider-wrap")[0];

if ((left_btn, right_btn, slider_wrap)) {
  left_btn.addEventListener("click", () => {
    slider_wrap.scrollLeft -= window.innerWidth / 2;
  });

  right_btn.addEventListener("click", () => {
    slider_wrap.scrollLeft += window.innerWidth / 2;
  });
}
