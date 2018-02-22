import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PAGE_TITLE } from 'app/shared/constants';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'demo',
    data: { title: PAGE_TITLE.DEMO },
    loadChildren: './demo/demo.module#DemoModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
