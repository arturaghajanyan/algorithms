class AVLTreeNode {
    constructor(key) {
        this.key = key;
        this.height = 1;
        this.leftPart = null;
        this.rightPart = null;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    height(node) {
        if (node == null) return 0;
        return node.height;
    }

    max(a, b) {
        return Math.max(a, b);
    }

    rightRotate(y) {
        let x = y.leftPart;
        let T2 = x.rightPart;

        x.rightPart = y;
        y.leftPart = T2;

        y.height = this.max(this.height(y.leftPart), this.height(y.rightPart)) + 1;
        x.height = this.max(this.height(x.leftPart), this.height(x.rightPart)) + 1;

        return x;
    }

    leftRotate(x) {
        let y = x.rightPart;
        let T2 = y.leftPart;

        y.leftPart = x;
        x.rightPart = T2;

        x.height = this.max(this.height(x.leftPart), this.height(x.rightPart)) + 1;
        y.height = this.max(this.height(y.leftPart), this.height(y.rightPart)) + 1;

        return y;
    }

    getBalance(node) {
        if (node == null) return 0;
        return this.height(node.leftPart) - this.height(node.rightPart);
    }

    insert(node, key) {
        if (node == null) return new AVLTreeNode(key);
        if (key < node.key) {
            node.leftPart = this.insert(node.leftPart, key);
        } else if (key > node.key) {
            node.rightPart = this.insert(node.rightPart, key);
        } else {
            return node;
        }

        node.height = 1 + this.max(this.height(node.leftPart), this.height(node.rightPart));
        let balance = this.getBalance(node);

        if (balance > 1 && key < node.leftPart.key) {
            return this.rightRotate(node);
        }
        if (balance < -1 && key > node.rightPart.key) {
            return this.leftRotate(node);
        }
        if (balance > 1 && key > node.leftPart.key) {
            node.leftPart = this.leftRotate(node.leftPart);
            return this.rightRotate(node);
        }
        if (balance < -1 && key < node.rightPart.key) {
            node.rightPart = this.rightRotate(node.rightPart);
            return this.leftRotate(node);
        }

        return node;
    }

    printAVLTreeNode(node) {
        if (node != null) {
            console.log(node.key + " ");
            this.printAVLTreeNode(node.leftPart);
            this.printAVLTreeNode(node.rightPart);
        }
    }

    minValueNode(node) {
        let current = node;
        while (current.leftPart != null) {
            current = current.leftPart;
        }
        return current;
    }

    deleteNode(root, key) {
        if (root == null) return root;
        if (key < root.key) {
            root.leftPart = this.deleteNode(root.leftPart, key);
        } else if (key > root.key) {
            root.rightPart = this.deleteNode(root.rightPart, key);
        } else {
            if ((root.leftPart == null) || (root.rightPart == null)) {
                let temp = null;
                if (temp == root.leftPart) {
                    temp = root.rightPart;
                } else {
                    temp = root.leftPart;
                }
                if (temp == null) {
                    temp = root;
                    root = null;
                } else {
                    root = temp;
                }
            } else {
                let temp = this.minValueNode(root.rightPart);
                root.key = temp.key;
                root.rightPart = this.deleteNode(root.rightPart, temp.key);
            }
        }
        if (root == null) return root;
        root.height = this.max(this.height(root.leftPart), this.height(root.rightPart)) + 1;
        let balance = this.getBalance(root);
        if (balance > 1 && this.getBalance(root.leftPart) >= 0)  return this.rightRotate(root);
        if (balance > 1 && this.getBalance(root.leftPart) < 0) {
            root.leftPart = this.leftRotate(root.leftPart);
            return this.rightRotate(root);
        }
        if (balance < -1 && this.getBalance(root.rightPart) <= 0) return this.leftRotate(root);
        if (balance < -1 && this.getBalance(root.rightPart) > 0) {
            root.rightPart = this.rightRotate(root.rightPart);
            return this.leftRotate(root);
        }
        return root;
    }
}

let tree = new AVLTree();
tree.root = tree.insert(tree.root, 10);
tree.root = tree.insert(tree.root, 20);
tree.root = tree.insert(tree.root, 30);
tree.root = tree.insert(tree.root, 40);
tree.root = tree.insert(tree.root, 50);
tree.root = tree.insert(tree.root, 25);

tree.printAVLTreeNode(tree.root);

tree.root = tree.deleteNode(tree.root, 10);
console.log('After deleting')
tree.printAVLTreeNode(tree.root);
