import { Component, Input, OnInit } from '@angular/core';
import { TreeService } from '../tree.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() input: any;

  constructor(public ts: TreeService) {}

  ngOnInit(): void {
    // console.log(this.input);
  }

  addChildInput(id: string, parentState: boolean) {
    this.ts.addInput(id, parentState);
  }

  handleInputChange(id: string) {
    this.ts.inputChange(id);
  }

  handleToggleCollapse(id: string) {
    this.ts.toggleCollapse(id);
  }
}
