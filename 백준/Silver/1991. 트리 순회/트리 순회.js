const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 노드 클래스
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 이진 트리 노드의 갯수
const N = parseInt(input[0]);

const infos = input
  .slice(1)
  .map((str) => str.split(" ").map((str) => str.replaceAll("\r", "")));

const [parent, left, right] = infos[0];
const root = new Node(parent);
root.left = new Node(left);
root.right = new Node(right);

// 노드 삽입
const insertNode = (parent, node) => {
  if (parent.left) {
    if (parent.left.value === node.value) {
      parent.left = node;
      return;
    } else {
      insertNode(parent.left, node);
    }
  }

  if (parent.right) {
    if (parent.right.value === node.value) {
      parent.right = node;
      return;
    } else {
      insertNode(parent.right, node);
    }
  }
};

for (let i = 1; i < N; i++) {
  const [parent, left, right] = infos[i];
  const newNode = new Node(parent);
  newNode.left = new Node(left);
  newNode.right = new Node(right);
  insertNode(root, newNode);
}

// 전위 순회
const preorderResults = [];
const preorder = (node) => {
  preorderResults.push(node.value);
  if (node.left && node.left.value !== ".") {
    preorder(node.left);
  }

  if (node.right && node.right.value !== ".") {
    preorder(node.right);
  }
};

// 중위 순회
const inorderResults = [];
const inorder = (node) => {
  if (node.left && node.left.value !== ".") {
    inorder(node.left);
  }
  inorderResults.push(node.value);
  if (node.right && node.right.value !== ".") {
    inorder(node.right);
  }
};

// 후위 순회
const postorderResults = [];
const postorder = (node) => {
  if (node.left && node.left.value !== ".") {
    postorder(node.left);
  }
  if (node.right && node.right.value !== ".") {
    postorder(node.right);
  }
  postorderResults.push(node.value);
};

preorder(root);
inorder(root);
postorder(root);

console.log(preorderResults.join(""));
console.log(inorderResults.join(""));
console.log(postorderResults.join(""));