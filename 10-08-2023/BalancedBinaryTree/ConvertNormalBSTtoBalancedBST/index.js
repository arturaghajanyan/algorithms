class NormalBSTNode {
    constructor(data) {
        this.leftPart = null;
        this.rightPart = null;
        this.data = data;
    }
}

let root;

function storeBSTNodes(root, nodes) {
    if (root == null) return;
    storeBSTNodes(root.leftPart, nodes);
    nodes.push(root);
    storeBSTNodes(root.rightPart, nodes);
}

function buildTreeUtil(nodes, start, end) {
    if (start > end) return null;

    let middle = parseInt((start + end) / 2, 10);
    let node = nodes[middle];

    node.leftPart = buildTreeUtil(nodes, start, middle - 1);
    node.rightPart = buildTreeUtil(nodes, middle + 1, end);

    return node;
}

function buildTree(root) {
    let nodes = [];
    storeBSTNodes(root, nodes);
    let n = nodes.length;
    return buildTreeUtil(nodes, 0, n - 1);
}

function preOrder(node) {
    if (node == null)  return;
    console.log(node.data + " ");
    preOrder(node.leftPart);
    preOrder(node.rightPart);
}

root = new NormalBSTNode(100);
root.leftPart = new NormalBSTNode(90);
root.leftPart.leftPart = new NormalBSTNode(80);
root.leftPart.leftPart.leftPart = new NormalBSTNode(70);
root.leftPart.leftPart.leftPart.leftPart = new NormalBSTNode(60);
root.leftPart.leftPart.leftPart.leftPart.leftPart = new NormalBSTNode(50);
root.leftPart.leftPart.leftPart.leftPart.leftPart.leftPart = new NormalBSTNode(40);
root.leftPart.leftPart.leftPart.leftPart.leftPart.leftPart.leftPart = new NormalBSTNode(30);
root.leftPart.leftPart.leftPart.leftPart.leftPart.leftPart.leftPart.leftPart = new NormalBSTNode(20);
root.leftPart.leftPart.leftPart.leftPart.leftPart.leftPart.leftPart.leftPart.leftPart = new NormalBSTNode(10);
root.leftPart.leftPart.leftPart.leftPart.leftPart.leftPart.leftPart.leftPart.leftPart.leftPart = new NormalBSTNode(1);


console.log("Normal Binary Search Tree :");
preOrder(root);
root = buildTree(root);
console.log("Balanced Binary Search Tree :");
preOrder(root);
