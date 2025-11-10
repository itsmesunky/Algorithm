/**
* 문제 해결 시나리오
* 1. nodeinfo를 바탕으로 BST 생성
* 2. 전/후위 순회 배열 반환
*/

/**
* Node: 하나의 노드 인스턴스를 생성하는 클래스
* @param {number} no - 해당 인스턴스의 번호
* @param {number} x - 해당 인스턴스의 x축
*/
class Node {
    constructor(no, x) {
        this.no = no;
        this.x = x;
        this.left = null;
        this.right = null;
    }
}

/**
* insertNode: 트리에 노드를 삽입하는 작업(재귀)
* @param {object} root - 루트 노드 인스턴스
* @param {object} newNode - 트리에 새로 삽입할 노드 인스턴스
*/
const insertNode = (root, newNode) => {
    if(newNode.x < root.x) { // 왼쪽 자식 트리
        if(!root.left) {
            root.left = newNode;
        } else {
            insertNode(root.left, newNode);
        }
    } else { // 오른쪽 자식 트리
        if(!root.right) {
            root.right = newNode;
        } else {
            insertNode(root.right, newNode);
        }
    }
}

// 전위식
const preorder = (arr, node) => {
    arr.push(node.no);
    
    if(node.left !== null) {
        preorder(arr, node.left);
    }
    
    if(node.right !== null) {
        preorder(arr, node.right);
    }
}

// 후위식
const postorder = (arr, node) => {
    if(node.left !== null) {
        postorder(arr, node.left);
    }
    
    if(node.right !== null) {
        postorder(arr, node.right);
    }
    
    arr.push(node.no);
}

const solution = (nodeinfo) => {
    const preorderResult = [];
    const postorderResult = [];
    
    const copiedNodeInfo = nodeinfo.map((arr, i) => [...arr, i + 1]);
    
    // 트리 생성을 위해 nodeinfo y축 기준 내림차순, x축 기준 오름차순 정렬
    copiedNodeInfo.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    
    const root = new Node(copiedNodeInfo[0][2], copiedNodeInfo[0][0]);
    
    for(let i = 1; i < copiedNodeInfo.length; i++) {
        const newNode = new Node(copiedNodeInfo[i][2], copiedNodeInfo[i][0]);
        insertNode(root, newNode);
    }
    
    preorder(preorderResult, root);
    postorder(postorderResult, root);
    
    return [preorderResult, postorderResult];
}