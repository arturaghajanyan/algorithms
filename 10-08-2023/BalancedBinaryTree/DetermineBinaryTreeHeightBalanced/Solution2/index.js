class BinaryTreeNode {
    constructor(val) {
        this.val = val;
        this.leftPart = null;
        this.rightPart = null;
    }
}

class Solution {
    isBinaryTreeBalancedFast(root) {
        if (root == null) return [true, 0];
        let leftPart = this.isBinaryTreeBalancedFast(root.leftPart);
        let rightPart = this.isBinaryTreeBalancedFast(root.rightPart);

        let leftAnswer = leftPart[0];
        let rightAnswer = rightPart[0];
        let diff = Math.abs(leftPart[1] - rightPart[1]) <= 1;

        let answer = [];
        answer[1] = Math.max(leftPart[1], rightPart[1]) + 1;

        if (leftAnswer && rightAnswer && diff) {
            answer[0] = true;
        } else {
            answer[0] = false;
        }
        return answer;
    }

    isBinaryTreeBalanced(root) {
        return this.isBinaryTreeBalancedFast(root)[0];
    }

}

let root = new BinaryTreeNode(8);
root.leftPart = new BinaryTreeNode(16);
root.rightPart = new BinaryTreeNode(18);
root.leftPart.leftPart = new BinaryTreeNode(50);
root.leftPart.rightPart = new BinaryTreeNode(44);
root.leftPart.leftPart.leftPart = new BinaryTreeNode(78);

let objectSolution = new Solution();
if (objectSolution.isBinaryTreeBalanced(root)) {
    console.log('Balanced');
} else {
    console.log('Not balanced');
}
