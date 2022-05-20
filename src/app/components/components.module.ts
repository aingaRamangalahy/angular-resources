import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardComponent } from './list-card/list-card.component';
import { GridCardComponent } from './grid-card/grid-card.component';

@NgModule({
  declarations: [ListCardComponent, GridCardComponent],
  imports: [CommonModule],
  exports: [ListCardComponent, GridCardComponent],
})
export class ComponentsModule {}
