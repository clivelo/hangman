class Word {
  constructor(target) {
    this.word = target;
    this.len = this.word.length;
    this.revealed = new Array(this.len);
    for (var i = 0; i < this.len; i++) {
      this.revealed[i] = false;
    }
  }

  show() {
    for (var i = 0; i < this.len; i++) {
      line(i * 1.5 * gap, height / 6 * 5, i * 1.5 * gap + gap, height / 6 * 5);
      if (this.revealed[i]) {
        text(this.word[i], i * 1.5 * gap, height / 6 * 5 - gap / 5);
      }
    }
  }

  checkLetter(letter) {
    if (this.word.includes(letter)) {
      for (var i = 0; i < this.len; i++) {
        if (this.word[i] === letter) {
          this.revealed[i] = true;
        }
      }
      return true;
    } else {
      return false;
    }
  }

  winCheck() {
    return this.revealed.every(r => r);
  }

  loseDisplay() {
    for (var i = 0; i < this.len; i++) {
      text(this.word[i], i * 1.5 * gap, height / 6 * 5 + 2 * gap);
    }
  }
}