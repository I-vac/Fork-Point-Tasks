// function moveBox(str) {
//   let step = 30;

//   switch (str) {
//     case "up":
//       var x = document.getElementById("box").offsetTop;
//       x = x - step;
//       while(x >= 0){
//        x= x - step++
//       }
//       if (x <= 0) {
//         alert("you reached the top wall");
//         document.dispatchEvent(boxTop);
//       }
//       document.getElementById("box").style.top = x + "px";
//       break;
//     case "down":
//       var x = document.getElementById("box").offsetTop;
//       x = x + step;
//       document.getElementById("box").style.top = x + "px";
//       break;
//     case "right":
//       var y = document.getElementById("box").offsetLeft;
//       y = y + step;
//       while(y < 330){
//         y=y+step++
//       }
//       if (y >= 330) {
//         alert("you reached the right wall");
//         document.dispatchEvent(boxRight);
//       }
//       document.getElementById("box").style.left = y + "px";
//       break;
//     case "left":
//       var y = document.getElementById("box").offsetLeft;
//       y = y - step;
//       while(y>0){
//         y=y-step++
//       }
//       if (y <= 0) {
//         alert("you reached the left wall");
//         document.dispatchEvent(boxLeft);
//       }
//       document.getElementById("box").style.left = y + "px";
//       break;
//   }
// }

// const boxTop = new CustomEvent("top", {
//   detail: {
//     side: "top",
//   },
// });

// document.addEventListener("top", (e) => {
//   console.log(`Start event triggered on side ${e.detail.side}`);
// });

// const boxRight = new CustomEvent("right", {
//   detail: {
//     side: "right",
//   },
// });

// document.addEventListener("right", (e) => {
//   console.log(`Start event triggered on side ${e.detail.side}`);
// });

// const boxLeft = new CustomEvent("left", {
//   detail: {
//     side: "left",
//   },
// });

// document.addEventListener("left", (e) => {
//   console.log(`Start event triggered on side ${e.detail.side}`);
// });
// SECOND ANSWER USING ASYNC
const up = document.getElementById("up");
const left = document.getElementById("left");
const right = document.getElementById("right");
const down = document.getElementById("down");
const box = document.getElementById("box");
const step = 30;
let interval;
async function moveDirection(px, direction) {
  direction === "top" ? "top" : "left";
  box.style[direction] = px + "px";
}

up.addEventListener("click", async function () {
  clearInterval(interval);
  interval = setInterval(function () {
    if (box.offsetTop < 0) {
      document.dispatchEvent(boxTop);
      box.style.top = 20 + "px";
      clearInterval(interval);
    }

    moveDirection((box.offsetTop -= step), "top");
  }, 100);
});

down.addEventListener("click", function () {
  moveDirection((box.offsetTop += step), "top");
});

left.addEventListener("click", async function () {
  clearInterval(interval);
  interval = setInterval(function () {
    if (box.offsetLeft < 0) {
      document.dispatchEvent(boxLeft);
      box.style.left = 25 + "px";
      clearInterval(interval);
    }
    moveDirection((box.offsetLeft -= step), "left");
  }, 100);
});

right.addEventListener("click", async function () {
  clearInterval(interval);
  interval = setInterval(function () {
    if (box.offsetLeft > 330) {
      document.dispatchEvent(boxRight);
      box.style.right = 25 + "px";
      clearInterval(interval);
    }
    moveDirection((box.offsetLeft += step), "left");
  }, 100);
});

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
