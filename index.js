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
    if (choices.includes(randLetter) === false) {
      choices.push(randLetter);
    }
  }

  const letter = getRandomValue(choices);

  alert("what matches " + letter + " in " + choices);
}

startGame();
