let bgImgs = document.querySelectorAll(".bg-imgs img");
let imgContainer = document.querySelector(".img-container");
let nextBgBtn = document.querySelector(".next");
let previousBgBtn = document.querySelector(".prev");
let currentBg = 1;

nextBgBtn.addEventListener("click", () => {
  nextBg();
  document.body.style.cssText = `background-image: url(./backgrounds/bg-${currentBg}.jpg);`;
  imgContainer.style.cssText = `background-image: url(./backgrounds/bg-${currentBg}.jpg);`;
});

previousBgBtn.addEventListener("click", () => {
  prevBg();
  document.body.style.cssText = `background-image: url(./backgrounds/bg-${currentBg}.jpg);`;
  imgContainer.style.cssText = `background-image: url(./backgrounds/bg-${currentBg}.jpg);`;
});

function nextBg() {
  currentBg++;
  if (currentBg === bgImgs.length + 1) {
    currentBg = 1;
  }
}

function prevBg() {
  currentBg--;
  if (currentBg <= 0) {
    currentBg = bgImgs.length;
  }
}
