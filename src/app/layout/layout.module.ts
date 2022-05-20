import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [CommonModule, RouterModule, MatSidenavModule, MatListModule],
})
export class LayoutModule {}
