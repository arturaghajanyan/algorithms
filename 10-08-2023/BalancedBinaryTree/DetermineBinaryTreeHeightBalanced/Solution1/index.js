class BinaryTreeNode {
    constructor(data) {
        this.data = data;
        this.leftPart = null;
        this.rightPart = null;
    }
}

function isBinaryTreeBalanced(root) {
    if (root == null) return 0;
    let leftHeight = isBinaryTreeBalanced(root.leftPart);
    if (leftHeight == -1) return -1;
    let rightHeight = isBinaryTreeBalanced(root.rightPart);
    if (rightHeight == -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
}

let root = new BinaryTreeNode(10)
root.leftPart = new BinaryTreeNode(5)
root.rightPart = new BinaryTreeNode(30)
root.rightPart.leftPart = new BinaryTreeNode(15)
root.rightPart.rightPart = new BinaryTreeNode(20)

if (isBinaryTreeBalanced(root) > 0) {
    console.log('Balanced')
} else {
    console.log('Not Balanced')
}
