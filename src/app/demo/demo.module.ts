import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';

@NgModule({
  imports: [CommonModule, SharedModule, DemoRoutingModule],
  declarations: [DemoComponent],
})
export class DemoModule {}
