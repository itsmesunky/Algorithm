// Node 클래스 정의
class Node {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.left = null;
        this.right = null;
    }
}

// BST에 노드를 삽입하는 함수
// BST의 핵심 규칙:
// 1. Y 좌표(깊이)가 더 낮은 노드는 항상 부모 노드가 됨 (문제 조건)
// 2. X 좌표가 부모보다 작으면 왼쪽, 크면 오른쪽 자식 노드가 됨
function insertNode(root, newNode) {
    if (newNode.x < root.x) {
        // 왼쪽 서브트리
        if (root.left === null) {
            root.left = newNode;
        } else {
            insertNode(root.left, newNode);
        }
    } else {
        // 오른쪽 서브트리
        if (root.right === null) {
            root.right = newNode;
        } else {
            insertNode(root.right, newNode);
        }
    }
}

// 전위 순회 (Preorder Traversal: Root -> Left -> Right)
function preorder(node, result) {
    if (node === null) return;
    
    result.push(node.id); // 1. Root 방문
    preorder(node.left, result); // 2. Left 순회
    preorder(node.right, result); // 3. Right 순회
}

// 후위 순회 (Postorder Traversal: Left -> Right -> Root)
function postorder(node, result) {
    if (node === null) return;
    
    postorder(node.left, result); // 1. Left 순회
    postorder(node.right, result); // 2. Right 순회
    result.push(node.id); // 3. Root 방문
}

function solution(nodeinfo) {
    // 1. 노드 정보 가공 (인덱스를 ID로 추가)
    const nodes = nodeinfo.map((info, index) => ({
        id: index + 1, // 1번부터 N번까지의 노드 ID
        x: info[0],
        y: info[1],
    }));

    // 2. BST 구성을 위한 정렬 (핵심!)
    // - Y 좌표 내림차순 (깊이가 깊은 노드가 먼저 배치)
    // - Y가 같으면 X 좌표 오름차순 (문제 조건에 따라, Y가 같을 수 없으므로 사실상 Y만 고려)
    nodes.sort((a, b) => {
        if (a.y !== b.y) {
            return b.y - a.y; // Y 내림차순 (큰 Y가 먼저 와서 루트가 됨)
        }
        return a.x - b.x; // X 오름차순 (Y가 같을 때의 규칙, 문제에서는 필요 없음)
    });

    // 3. BST 구성
    let root = new Node(nodes[0].id, nodes[0].x, nodes[0].y); // 가장 Y값이 큰 노드가 루트
    
    for (let i = 1; i < nodes.length; i++) {
        const newNode = new Node(nodes[i].id, nodes[i].x, nodes[i].y);
        insertNode(root, newNode);
    }

    // 4. 순회 실행
    const preorderResult = [];
    const postorderResult = [];
    
    preorder(root, preorderResult);
    postorder(root, postorderResult);

    // 5. 결과 반환
    return [preorderResult, postorderResult];
}