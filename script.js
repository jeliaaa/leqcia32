const colorBtn = document.getElementById("colorChange");

var getRandomColor = () => {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

colorBtn.addEventListener("click", () => {
    var color = getRandomColor();
    document.body.style.backgroundColor = color;
});
