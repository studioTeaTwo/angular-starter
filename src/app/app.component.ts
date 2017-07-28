import { Component } from '@angular/core';

import { PAGE_TITLE, STATUS, KEY_CODE } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly KEY_CODE = KEY_CODE;
  readonly STATUS = STATUS;

  title = PAGE_TITLE.HOME;
  value: any = '';
  message: string;
  
  onKeyDown(event): boolean {
    console.log(event);
    if (event.keyCode === KEY_CODE.KEY_0) {
      this.message = this.STATUS.OPEN;
      return true;
    } else {
      this.message = this.STATUS.CLOSE;
      return false;
    }
  }
}
