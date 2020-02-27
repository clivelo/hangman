const gap = 25;
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var rand;
let hangman;
let word;

function setup() {
  createCanvas(400, 400);
  rand = floor(random(0, wordList.length));
  hangman = new Hangman(0);
  word = new Word(wordList[rand]);
}

function draw() {
  background(255);
  ellipseMode(CENTER);
  textAlign(LEFT, BASELINE);
  strokeWeight(5);
  textSize(36);
  line(width / 6, height / 3 * 2, width / 6 + 2 * gap, height / 3 * 2);
  line(width / 6 + gap, height / 3 * 2, width / 6 + gap, height / 6);
  line(width / 6 + gap, height / 6, width / 2, height / 6);
  line(width / 2, height / 6, width / 2, height / 6 + 25);
  line(width / 6 + gap, height / 6 + gap, width / 6 + 2 * gap, height / 6);

  hangman.show();
  word.show();
  endResult();
}

function reset() {
  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  rand = floor(random(0, wordList.length));
  word = new Word(wordList[rand]);
  hangman.error = 0;
  loop();
}

function keyPressed() {
  if (key == ' ') {
    reset();
  }
  if (!(word.winCheck() || hangman.loseCheck())) {
    if (letters.includes(key)) {
      s = key.toLowerCase();
      letters = letters.replace(s, '');
      s = key.toUpperCase();
      letters = letters.replace(s, '');
      if (!word.checkLetter(s)) {
        hangman.error++;
      }
    }
  }
}

function endResult() {
  if (word.winCheck()) {
    noLoop();
    console.log("You won!");
  } else if (hangman.loseCheck()) {
    noLoop();
    console.log("You lost.");
    word.loseDisplay();
  }
}