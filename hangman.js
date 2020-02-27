class Hangman {
  constructor(error) {
    this.error = error;
  }

  show() {
    if (this.error >= 1) {
      ellipse(width / 2, height / 6 + gap, gap, gap);
      if (this.error >= 2) {
        line(width / 2, height / 6 + 1.5 * gap, width / 2, height / 6 + 3 * gap);
        if (this.error >= 3) {
          line(width / 2, height / 6 + 2 * gap, width / 2 - 0.5 * gap, height / 6 + 3 * gap);
          if (this.error >= 4) {
            line(width / 2, height / 6 + 2 * gap, width / 2 + 0.5 * gap, height / 6 + 3 * gap);
            if (this.error >= 5) {
              line(width / 2, height / 6 + 3 * gap, width / 2 - 0.5 * gap, height / 2);
              if (this.error >= 6) {
                line(width / 2, height / 6 + 3 * gap, width / 2 + 0.5 * gap, height / 2);
              }
            }
          }
        }
      }
    }
  }

  loseCheck() {
    return this.error >= 6;
  }
}