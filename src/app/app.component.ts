import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { PAGE_TITLE, STATUS, KEY_CODE } from './shared/constants';

const NO_COLOR = 'transparent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = PAGE_TITLE.HOME;
  label: string;
  backgroundColor = NO_COLOR;

  inputValue = '';
  message: string;

  private subscription: Subscription;
  get randomColor(): string { return this.genColorCode(); }

  onKeyDown(event: KeyboardEvent) {
    this.label = event.keyCode === KEY_CODE.ENTER ? STATUS.OPEN : STATUS.CLOSE;
  }

  onClickStart() {
    this.subscription = Observable
      .interval(1000)
      .subscribe(value => this.backgroundColor = this.randomColor);
  }

  onClickStop() {
    this.backgroundColor = NO_COLOR;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  @HostListener('window:resize')
  private onResize() {
    this.backgroundColor = this.randomColor;
  }

  private genColorCode() {
    let val = '#';
    for (let i = 0; i < 6; i++) {
       val += this.random();
    }
    return val;
  }

  private random(): string {
    return Math.floor((Math.random() * 16 + 0)).toString(16);
  }
}
