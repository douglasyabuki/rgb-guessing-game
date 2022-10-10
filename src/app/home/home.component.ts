import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public stringLength: number;
  public rangeLength: number;
  public scoreCount: number;
  public mistakeCount: number;
  public options: string[];
  public backgroundColor: string;

  constructor() {
    this.options = ['', '', ''];
    this.rangeLength = 16;
    this.stringLength = 6;
    this.scoreCount = 0;
    this.mistakeCount = 0;
  }

  randomString(x: string): string {
    const range = '0123456789ABCDEF'
    let result = ""
    for (let i = 0; i < this.stringLength; i++) {
      result += range.charAt(Math.floor(Math.random() * this.rangeLength));
    }
    this.options[x] = `#${result}`;
    console.log(this.options[x]);
    return this.options[x];
  }

  gameStart(): void {
    this.options[0] = this.randomString(this.options[0]);
    this.options[1] = this.randomString(this.options[1]);
    this.options[2] = this.randomString(this.options[2]);

    let i = Math.floor(Math.random() * 3);
    if (i === 0) {
      this.backgroundColor = this.options[0];
    }
    else if (i === 1) {
      this.backgroundColor = this.options[1];
    }
    else if (i === 2) {
      this.backgroundColor = this.options[2];
    }
    console.log(i);
    console.log(this.backgroundColor);
    this.getBoxRGB();
  }

  setGuess(y: number) {
    if (this.options[y] === this.backgroundColor) {
      this.scoreCount++;
      this.gameStart();
    }
    else if (this.options[y] !== this.backgroundColor) {
      this.mistakeCount++;
    }
  }
  getRGB(z: number): string {
    return this.options[z];
  }
  getBoxRGB(): void {
    document.getElementById('colorBox').style.backgroundColor = this.backgroundColor;
  }
}

