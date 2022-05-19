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
const up = document.getElementById('up');
const left = document.getElementById('left');
const right = document.getElementById('right');
const down = document.getElementById('down');
const box = document.getElementById('box')
const step = 30;

async function boxMove(){
  return new Promise(function(resolve){
    setTimeout(()=>{
      resolve();
    }, 100);
  });
}
async function moveDirection(px, direction){
  await boxMove();
  (direction === 'top') ? 'top' : 'left';
  document.getElementById('box').style[direction] = px + 'px';

}

up.addEventListener('click', function(){
  if (box.offsetTop <= 0){
    document.dispatchEvent(boxTop)
    document.getElementById('box').style.top = 50 + 'px';
  }
  moveDirection((box.offsetTop -= step), 'top');
})

down.addEventListener('click', function(){
  moveDirection((box.offsetTop += step), 'top')
})


left.addEventListener('click', function(){
  if (box.offsetLeft <= 0){
    document.dispatchEvent(boxLeft)
    document.getElementById('box').style.left = 50 + 'px'
  }
  moveDirection((box.offsetLeft -= step), 'left');
})

right.addEventListener('click', function(){
  if (box.offsetLeft >= 330){
    document.dispatchEvent(boxRight)
    document.getElementById('box').style.right = 50 + 'px'
  }
  moveDirection((box.offsetLeft += step), 'left');
})

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


