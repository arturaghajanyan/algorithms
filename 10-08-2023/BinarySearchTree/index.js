class BinarySearchTreeNode {
    constructor(item) {
        this.key = item;
        this.leftPart = this.rightPart = null;
    }
}

let root = null;

function insert(key) {
    root = insertRecursive(root, key);
}

function insertRecursive(root, key) {
    if (root == null) {
        root = new BinarySearchTreeNode(key);
        return root;
    }

    if (key < root.key) {
        root.leftPart = insertRecursive(root.leftPart, key);
    } else if (key > root.key) {
        root.rightPart = insertRecursive(root.rightPart, key);
    }
    return root;
}

function print() {
    printRecursive(root);
}

function printRecursive(root) {
    if (!root) return;
    printRecursive(root.leftPart);
    console.log(root.key);
    printRecursive(root.rightPart);
}

function search(root, key) {
  if (root === null || root.key === key) {
    return root;
  }
  if (root.key < key) {
    return search(root.rightPart, key);
  }
  return search(root.leftPart, key);
}

function deleteNode(root, key) {
    if (root === null) {
        return root;
    }

    if (root.key > key) {
        root.leftPart = deleteNode(root.leftPart, key);
        return root;
    } else if (root.key < key) {
        root.rightPart = deleteNode(root.rightPart, key);
        return root;
    }

    if (root.leftPart === null) {
        let temp = root.rightPart;
        delete root;
        return temp;
    } else if (root.rightPart === null) {
        let temp = root.leftPart;
        delete root;
        return temp;
    } else {
        let successorParent = root;
        let successor = root.rightPart;
        while (successor.leftPart !== null) {
            successorParent = successor;
            successor = successor.leftPart;
        }
        if (successorParent !== root) {
            successorParent.leftPart = successor.rightPart;
        } else {
            successorParent.rightPart = successor.rightPart;
        }

        root.key = successor.key;

        delete successor;
        return root;
    }
}
