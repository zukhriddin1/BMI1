const boy = document.querySelector("#boy");
const vazn = document.querySelector("#vazn");
const javob = document.querySelector("#javob");
const hisob = document.querySelector("#hisob");

hisob.onclick = function () {
  const boyM = boy.value / 100;
  let nat = vazn.value / (boyM * boyM);
  if (nat <= 18.5) {
    javob.textContent = `siz semirishingiz kerak (${nat.toFixed(1)})`;
  } else if (nat >= 18.5 && nat <= 24.9) {
    javob.textContent = `siz noarmal holatasiz (${nat.toFixed(1)})`;
  } else if (nat >= 25 && nat <= 29.9) {
    javob.textContent = `siz ozishingiz kerak (${nat.toFixed(1)})`;
  } else if (nat >= 30) {
    javob.textContent = `siz zudlik bila shifokorga murojat qiling (${nat.toFixed(
      1
    )})`;
  } else {
    javob.textContent = `Siz Bo'y va Vazin kiritmadingiz`;
  }
};
