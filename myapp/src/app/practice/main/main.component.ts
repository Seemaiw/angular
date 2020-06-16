import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data: string[];

  constructor() { }

  ngOnInit(): void {
    this.data = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  }

}
