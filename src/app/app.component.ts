import { Component, OnInit } from '@angular/core';
import { TreeService } from './tree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public tree: TreeService) {}
  ngOnInit(): void {}
}
