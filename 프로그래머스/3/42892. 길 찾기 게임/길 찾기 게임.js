class Node {
    constructor(no, x) {
        this.no = no;
        this.x = x;
        this.left = null;
        this.right = null;
    }
}

/**
* insertNode - 이진 탐색 트리에 노드 삽입(재귀적으로 새로운 노드를 삽입)
* @param {object} root - 삽입 시도할 부모 노드
* @param {object} newNode - 삽입될 노드
*/
const insertNode = (root, newNode) => {
    if(newNode.x < root.x) { // 왼쪽 서브 트리에 삽입
        if(root.left === null) {
            root.left = newNode;
        } else {
            insertNode(root.left, newNode);
        }
    } else { // 오른쪽 서브 트리에 삽입
        if(root.right === null) {
            root.right = newNode;
        } else {
            insertNode(root.right, newNode);
        }
    }
}

/**
* preorder - 이진 탐색 트리를 전위 순회하며 배열에 노드를 순차적으로 저장하는 함수
*/
const preorder = (arr, node) => {
    arr.push(node.no);
    if(node.left !== null) preorder(arr, node.left);
    if(node.right !== null) preorder(arr, node.right);
}

/**
* inorder - 이진 탐색 트리를 중위 순회하며 배열에 노드를 순차적으로 저장하는 함수
*/
const inorder = (arr, node) => {
    if(node.left !== null) inorder(arr, node.left);
    arr.push(node.no);
    if(node.right !== null) inorder(arr, node.right);
}

/**
* postorder - 이진 탐색 트리를 후위 순회하며 배열에 노드를 순차적으로 저장하는 함수
*/
const postorder = (arr, node) => {
    if(node.left !== null) postorder(arr, node.left);
    if(node.right !== null) postorder(arr, node.right);
    arr.push(node.no);
}


const solution = (nodeinfo) => {
    const nodes = nodeinfo.map((arr, i) => [i + 1, ...arr]);
    nodes.sort((a, b) => b[2] - a[2] || a[1] - b[1]);
    
    const root = new Node(nodes[0][0], nodes[0][1]);
    
    for(let i = 1; i < nodes.length; i++) {
        const newNode = new Node(nodes[i][0], nodes[i][1]);
        insertNode(root, newNode);
    }
    
    const preorderResults = [];
    const postorderResults = [];
    
    preorder(preorderResults, root);
    postorder(postorderResults, root);
    
    return [preorderResults, postorderResults];
}