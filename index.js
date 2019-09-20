const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

function getRandomValue(arr) {
  const valueIndex = Math.floor(Math.random() * arr.length);
  const value = arr[valueIndex];
  return value;
}

function startGame() {
  const choices = [];

  while (choices.length < 3) {
    const randLetter = getRandomValue(letters);
    if (!choices.includes(randLetter)) {
      choices.push(randLetter);
    }
  }

  const letter = getRandomValue(choices);
  const redZaneEl = document.getElementById("RedZane");
  const accordingToBo = getRandomValue([0, 1]) === 0;
  redZaneEl.innerHTML = accordingToBo
    ? letter.toUpperCase()
    : letter.toLowerCase();

  const wolfhoundjesseEl = document.getElementById("wolfhoundjesse");
  wolfhoundjesseEl.innerHTML = "";
  // ["a", "b", "c"]
  for (let i = 0; i < choices.length; i++) {
    const choice = choices[i];
    const btnEl = document.createElement("button");
    btnEl.innerHTML = accordingToBo
      ? choice.toLowerCase()
      : choice.toUpperCase();
    btnEl.classList.add("btn-choice");
    wolfhoundjesseEl.append(btnEl);

    btnEl.addEventListener("click", function() {
      if (choice.toLowerCase() === letter.toLowerCase()) {
        startGame();
      }
    });
  }
}

startGame();
