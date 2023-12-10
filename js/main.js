const counts = document.querySelectorAll(".count");
const speed = 100;
counts.forEach((counter) => {
  function upData() {
    const target = Number(counter.getAttribute("data-target"));
    const count = Number(counter.innerText);
    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.floor(inc + count);
      setTimeout(upData, 1);
    } else {
      counter.innerText = target;
    }
  }
  upData();
});

var typed = new Typed("#typed-text", {
  strings: ["Desinger", "Freelancer", "Photographer", "Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
});

var lightbox = GLightbox();
lightbox.on("open", (target) => {
  console.log("lightbox opened");
});
var lightboxDescription = GLightbox({
  selector: ".glightbox2",
});
var lightboxVideo = GLightbox({
  selector: ".glightbox3",
});
lightboxVideo.on("slide_changed", ({ prev, current }) => {
  console.log("Prev slide", prev);
  console.log("Current slide", current);

  const { slideIndex, slideNode, slideConfig, player } = current;

  if (player) {
    if (!player.ready) {
      // If player is not ready
      player.on("ready", (event) => {
        // Do something when video is ready
      });
    }

    player.on("play", (event) => {
      console.log("Started play");
    });

    player.on("volumechange", (event) => {
      console.log("Volume change");
    });

    player.on("ended", (event) => {
      console.log("Video ended");
    });
  }
});

var lightboxInlineIframe = GLightbox({
  selector: ".glightbox4",
});
