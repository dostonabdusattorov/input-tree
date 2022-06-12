export class TreeNode {
  id: string;
  value: string;
  descendants: TreeNode[];
  length: number;
  isChecked: boolean;

  constructor(value: string, parentState: boolean) {
    this.id = Math.random().toString();
    this.value = value;
    this.descendants = [];
    this.length = 0;
    this.isChecked = parentState;
  }

  get checkedCount() {
    return this.descendants.reduce((prev, cur) => {
      if (cur.isChecked) {
        return prev + 1;
      }
      return prev;
    }, 0);
  }
}

class Tree {
  root: TreeNode;

  constructor() {
    this.root = new TreeNode('root', false);
  }

  addNewNode(
    id: string,
    value: string,
    parentState: boolean,
    currentNode: TreeNode = this.root
  ): void {
    const newNode = new TreeNode(value, parentState);

    if (currentNode.id === id) {
      currentNode.descendants = [...currentNode.descendants, newNode];
      currentNode.length++;
    }

    currentNode.descendants.forEach((el) => {
      this.addNewNode(id, value, parentState, el);
    });
  }

  checkedChangeForSingleNode(state: boolean, currentNode: TreeNode) {
    currentNode.isChecked = state;

    currentNode.descendants.forEach((el) => {
      this.checkedChangeForSingleNode(state, el);
    });
  }

  checkedChange(
    id: string,
    parentNode: TreeNode | null = null,
    currentNode: TreeNode = this.root
  ) {
    if (currentNode.id === id) {
      this.checkedChangeForSingleNode(!currentNode.isChecked, currentNode);
    }

    if (parentNode !== null) {
      const countChecked = parentNode!.checkedCount;

      if (countChecked < parentNode!.length) {
        parentNode!.isChecked = false;
      } else {
        parentNode!.isChecked = true;
      }
    }

    currentNode.descendants.forEach((el) => {
      this.checkedChange(id, currentNode, el);
    });
  }

  // removeNode(
  //   parentId: string,
  //   childId: string,
  //   currentNode: TreeNode = this.root
  // ) {
  //   if (currentNode.id === parentId) {
  //     currentNode.descendants = currentNode.descendants.filter(
  //       (el): TreeNode | void => {
  //         if (el.id !== childId) {
  //           return el;
  //         }
  //       }
  //     );
  //     currentNode.length--;
  //   }

  //   currentNode.descendants.forEach((el) => {
  //     this.removeNode(parentId, childId, el);
  //   });
  // }
}

export default Tree;
