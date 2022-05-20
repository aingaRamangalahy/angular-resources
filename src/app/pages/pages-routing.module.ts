import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '../layout/default-layout/default-layout.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [{ path: '', component: FeedComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
