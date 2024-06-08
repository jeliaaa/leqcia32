const btnToChange = document.getElementById("btn");
const passElem = document.getElementById("passwordElement");
const lengthBtn = document.getElementById("lengthBtn");
const lengthElem = document.getElementById("length");

const generatePass = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let pass = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    // pass += characters[randomIndex];
    pass = pass + characters[randomIndex];
  }
  return pass;
};

btnToChange.addEventListener("click", () => {
  var generatedPass = generatePass(parseInt(lengthElem.textContent));
  passElem.textContent = generatedPass;
});

lengthBtn.addEventListener("click", () => {
  let current = parseInt(lengthElem.textContent);
  current++;
  lengthElem.textContent = current;
});
