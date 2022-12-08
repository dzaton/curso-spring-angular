import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent{

  courseList: string[] = ['TypeScript','JavaScript','Java','C#'];

  enableList: boolean = true;

  constructor() { }

  setEnableList(): void {
    this.enableList = (this.enableList)? false: true;
  }
}
