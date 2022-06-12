import { Component, OnInit } from '@angular/core';
import Tree from '../tree/tree';
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
