import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  navList: string[] = ['#category1', '#category2', '#category3', '#category4'];

  constructor() {}

  ngOnInit(): void {}

}
