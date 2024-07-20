var image = document.querySelectorAll(".image");
var counter = 0;
var flag = 0;
image.forEach(function (val, index) {
  val.style.left = `${index * 100}%`;
});
function slideimage() {
  image.forEach(function (val) {
    val.style.transform = `translate(-${counter * 100}%)`;
  });
}
var gonext = function () {
  move();
  if (flag == 0) {
    counter = counter + 0;
  } else {
    counter++;
  }
  if (counter <= 3) {
    slideimage();
  } else {
    counter--;
  }
};
var goprev = () => {
  move();
  counter--;
  if (counter >= 0) {
    slideimage();
  } else {
    counter++;
    slideimage();
  }
};
var interval = setInterval(function () {
  if (counter <= 3) {
     slideimage(); 


  } else {
    counter = 0;
/*   slideimage(); */
    move()
  }
  counter++;
}, 2000);
function move() {
  clearInterval(interval);
  flag = 1;
}