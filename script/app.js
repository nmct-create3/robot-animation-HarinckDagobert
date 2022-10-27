let btnPause, btnSlow, BtnNormal, btnFast;

const animation = function () {
  let tl = gsap.timeline({
    defaults: {
      duration: 0.75,
      ease: "power1.inOut",
    },
    repeat: -1,
    yoyo: true,
  });
  tl.set("#Shadow", {
    transformOrigin: "50% 100%",
  })
    .fromTo(
      "#Robot",
      {
        y: 2.5,
      },
      {
        y: -2.5,
      }
    )
    .to(
      "#Shadow",
      {
        scale: 0.75,
      },
      "<"
    );
  button(tl);
};

const button = function (tl) {
  btnFast.onclick = () => tl.timeScale(2);
  BtnNormal.onclick = () => tl.timeScale(1);
  btnSlow.onclick = () => tl.timeScale(0.5);
  btnPause.onclick = () => {
    tl.paused(!tl.paused());
    btnPause.classList.toggle("is-paused");
  };
};

document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded");
  btnPause = document.querySelector(".js-pause");
  btnSlow = document.querySelector(".js-slow");
  BtnNormal = document.querySelector(".js-normal");
  btnFast = document.querySelector(".js-fast");
  animation();
});
