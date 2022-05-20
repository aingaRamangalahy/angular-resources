import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, PagesRoutingModule, LayoutModule],
})
export class PagesModule {}
