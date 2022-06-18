import { Injectable } from '@angular/core';

import Tree from 'src/tree/tree';

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  inputs: Tree = new Tree();

  addInput(id: string, parentState: boolean): void {
    this.inputs.addNewNode(id, 'value', parentState);
  }

  inputChange(id: string) {
    this.inputs.checkedChange(id);
  }

  toggleCollapse(id: string) {
    this.inputs.toggleCollapse(id);
  }
}
