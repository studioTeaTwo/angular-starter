import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { interval } from 'rxjs/observable/interval';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { PAGE_TITLE, STATUS, KEY_CODE } from '../shared/constants';

const NO_COLOR = 'transparent';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnDestroy {
  label: string;
  backgroundColor = NO_COLOR;
  get randomColor(): string { return this.genColorCode(); }

  inputValue = '';
  message: string;

  private subscriptions: Subscription;

  constructor(
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  onKeyDown(event: KeyboardEvent) {
    this.label = event.keyCode === KEY_CODE.ENTER ? STATUS.OPEN : STATUS.CLOSE;
  }

  onClickStart() {
    if (this.subscriptions && !this.subscriptions.closed) {
      return;
    }
    this.subscriptions = interval(1000).subscribe(value => this.backgroundColor = this.randomColor);
  }

  onClickStop() {
    this.backgroundColor = NO_COLOR;
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
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
