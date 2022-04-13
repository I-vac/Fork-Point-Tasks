function moveBox(str) {
  let step = 30;

  switch (str) {
    case "up":
      var x = document.getElementById("box").offsetTop;
      x = x - step;
      if (x <= 0) {
        alert("you reached the top wall");
        document.dispatchEvent(boxTop);
      }
      document.getElementById("box").style.top = x + "px";
      break;
    case "down":
      var x = document.getElementById("box").offsetTop;
      x = x + step;
      document.getElementById("box").style.top = x + "px";
      break;
    case "right":
      var y = document.getElementById("box").offsetLeft;
      y = y + step;
      if (y >= 330) {
        alert("you reached the right wall");
        document.dispatchEvent(boxRight);
      }
      document.getElementById("box").style.left = y + "px";
      break;
    case "left":
      var y = document.getElementById("box").offsetLeft;
      y = y - step;
      if (y <= 0) {
        alert("you reached the left wall");
        document.dispatchEvent(boxLeft);
      }
      document.getElementById("box").style.left = y + "px";
      break;
  }
}

const boxTop = new CustomEvent("top", {
  detail: {
    side: "top",
  },
});

document.addEventListener("top", (e) => {
  console.log(`Start event triggered on side ${e.detail.side}`);
});

const boxRight = new CustomEvent("right", {
  detail: {
    side: "right",
  },
});

document.addEventListener("right", (e) => {
  console.log(`Start event triggered on side ${e.detail.side}`);
});

const boxLeft = new CustomEvent("left", {
  detail: {
    side: "left",
  },
});

document.addEventListener("left", (e) => {
  console.log(`Start event triggered on side ${e.detail.side}`);
});
