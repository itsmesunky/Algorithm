const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 입력값
const N = parseInt(input[0]); // 노드의 갯수
const infos = input
  .slice(1)
  .map((str) => str.split(" ").map((char) => char.replace("\r", "")));

const tree = new Map();

for (let i = 0; i < infos.length; i++) {
  const [parent, left, right] = infos[i];
  if (!tree.has(parent)) tree.set(parent);
  tree.set(parent, { left, right });
}

let preorderResult = "";
const preorder = (node) => {
  preorderResult += node;

  const left = tree.get(node).left;
  const right = tree.get(node).right;

  if (left && left !== ".") preorder(left);
  if (right && right !== ".") preorder(right);
};

let inorderResult = "";
const inorder = (node) => {
  const left = tree.get(node).left;
  const right = tree.get(node).right;

  if (left && left !== ".") inorder(left);
  inorderResult += node;
  if (right && right !== ".") inorder(right);
};

let postorderResult = "";
const postorder = (node) => {
  const left = tree.get(node).left;
  const right = tree.get(node).right;

  if (left && left !== ".") postorder(left);
  if (right && right !== ".") postorder(right);
  postorderResult += node;
};

preorder("A");
inorder("A");
postorder("A");
console.log(`${preorderResult}\n${inorderResult}\n${postorderResult}`);
