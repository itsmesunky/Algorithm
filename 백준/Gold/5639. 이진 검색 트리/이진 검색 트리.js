const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const numbers = input.map(Number);

class Node {
  constructor(x) {
    this.x = x;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(numbers[0]);

function insertNode(parent, child) {
  if (parent.x < child.x) {
    // 오른쪽 서브트리
    if (parent.right === null) {
      parent.right = child;
    } else {
      insertNode(parent.right, child);
    }
  } else {
    // 왼쪽 서브트리
    if (parent.left === null) {
      parent.left = child;
    } else {
      insertNode(parent.left, child);
    }
  }
}

for (let i = 1; i < numbers.length; i++) {
  const newNode = new Node(numbers[i]);
  insertNode(root, newNode);
}

function postorder(node) {
  if (node.left) postorder(node.left);
  if (node.right) postorder(node.right);
  console.log(node.x);
}

postorder(root);
