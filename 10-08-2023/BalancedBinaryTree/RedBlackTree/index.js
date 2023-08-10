const CONSTANTS = {
    RED: 'RED',
    BLACK: 'BLACK',
};

class Node {
    constructor(param) {
        this.key = param.key || 0;
        this.color = param.color || CONSTANTS.RED;
        this.leftPart = param.leftPart || undefined;
        this.rightPart = param.rightPart || undefined;
        this.parent = param.parent || undefined;
    }
}

class Tree {
    constructor() {
        this.leaf = new Node({ key: 0, color: CONSTANTS.BLACK });
        this.root = this.leaf;
    }

    printTree() {
        const stack = [
            { node: this.root, str: '' },
        ];

        while (stack.length) {
            const item = stack.pop();
            if (item.node == this.leaf) {
                continue;
            }
            let position = '';
            if (item.node.parent) {
                position = item.node === item.node.parent.leftPart ? 'L----' : 'R----';
            } else {
                position = 'ROOT-';
            }
            console.log(`${item.str}${position} ${item.node.key} (${item.node.color})`);

            stack.push({ node: item.node.rightPart, str: item.str + '     ' });
            stack.push({ node: item.node.leftPart, str: item.str + ' |   ' });
        }
    }

    rotateLeft(node) {
        const vertex = node.rightPart;

        node.rightPart = vertex.leftPart;
        if (vertex.leftPart != this.leaf) {
            vertex.leftPart.parent = node;
        }

        vertex.parent = node.parent;
        if (!node.parent) {
            this.root = vertex;
        }
        else if (node === node.parent.leftPart) {
            node.parent.leftPart = vertex;
        } else {
            node.parent.rightPart = vertex;
        }

        vertex.leftPart = node;
        node.parent = vertex;
    }

    rotateRight(node) {
        const vertex = node.leftPart;

        node.leftPart = vertex.rightPart;
        if (vertex.rightPart != this.leaf) {
            vertex.rightPart.parent = node;
        }

        vertex.parent = node.parent;
        if (!node.parent) {
            this.root = vertex;
        } else if (node == node.parent.rightPart) {
            node.parent.rightPart = vertex;
        } else {
            node.parent.leftPart = vertex;
        }

        vertex.rightPart = node;
        node.parent = vertex;
    }

    insert({ key }) {
        const node = new Node({
            key,
            leftPart: this.leaf,
            rightPart: this.leaf,
        });

        let parent;
        let tmp = this.root;

        while (tmp !== this.leaf) {
            parent = tmp;
            if (node.key < tmp.key) {
                tmp = tmp.leftPart;
            } else {
                tmp = tmp.rightPart;
            }
        }

        node.parent = parent;

        if (!parent) {
            this.root = node;
        } else if (node.key < parent.key) {
            parent.leftPart = node;
        } else {
            parent.rightPart = node;
        }

        if (!node.parent) {
            node.color = CONSTANTS.BLACK;
            return;
        }
        if (!node.parent.parent) {
            return;
        }

        this.balanceInsert(node);
    }

    balanceInsert(node) {
        while (node.parent.color === CONSTANTS.RED) {
            if (node.parent === node.parent.parent.leftPart) {
                const uncle = node.parent.parent.rightPart;
                if (uncle.color === CONSTANTS.RED) {
                    uncle.color = CONSTANTS.BLACK;
                    node.parent.color = CONSTANTS.BLACK;
                    node.parent.parent.color = CONSTANTS.RED;
                    node = node.parent.parent;
                }
                else {
                    if (node === node.parent.rightPart) {
                        node = node.parent;
                        this.rotateLeft(node);
                    }
                    node.parent.color = CONSTANTS.BLACK;
                    node.parent.parent.color = CONSTANTS.RED;
                    this.rotateRight(node.parent.parent);
                }
            } else {
                const uncle = node.parent.parent.leftPart;
                if (uncle.color === CONSTANTS.RED) {
                    uncle.color = CONSTANTS.BLACK;
                    node.parent.color = CONSTANTS.BLACK;
                    node.parent.parent.color = CONSTANTS.RED;
                    node = node.parent.parent;
                } else {
                    if (node == node.parent.leftPart) {
                        node = node.parent;
                        this.rotateRight(node);
                    }
                    node.parent.color = CONSTANTS.BLACK;
                    node.parent.parent.color = CONSTANTS.RED;
                    this.rotateLeft(node.parent.parent);
                }
            }

            if (node == this.root) {
                break;
            }
        }

        this.root.color = CONSTANTS.BLACK;
    }

    minimum(node) {
        while (node.leftPart != this.leaf) {
            node = node.leftPart;
        }
        return node;
    }

    replace(oldNode, newNode) {
        if (!oldNode.parent) {
            this.root = newNode;
        } else if (oldNode == oldNode.parent.leftPart) {
            oldNode.parent.leftPart = newNode;
        } else {
            oldNode.parent.rightPart = newNode;
        }
        newNode.parent = oldNode.parent;
    }

    deleteNode(key) {
        let forRemove = this.leaf;
        let tmp = this.root;

        while (tmp != this.leaf) {
            if (tmp.key === key) {
                forRemove = tmp;
                break;
            }

            if (tmp.key > key) {
                tmp = tmp.leftPart;
            } else {
                tmp = tmp.rightPart;
            }
        }

        if (forRemove == this.leaf) {
            console.log('node not found');
            return;
        }

        let minRight = forRemove;
        let minRightColor = minRight.color;
        let newMinRight;

        if (forRemove.leftPart == this.leaf) {
            newMinRight = forRemove.rightPart;
            this.replace(forRemove, forRemove.rightPart);
        } else if (forRemove.rightPart == this.leaf) {
            newMinRight = forRemove.leftPart;
            this.replace(forRemove, forRemove.leftPart);
        } else {
            minRight = this.minimum(forRemove.rightPart);
            minRightColor = minRight.color;
            newMinRight = minRight.rightPart;

            if (minRight.parent === forRemove) {
                newMinRight.parent = minRight;
            } else {
                this.replace(minRight, minRight.rightPart);
                minRight.rightPart = forRemove.rightPart;
                minRight.rightPart.parent = minRight;
            }

            this.replace(forRemove, minRight);
            minRight.leftPart = forRemove.leftPart;
            minRight.leftPart.parent = minRight;
            minRight.color = forRemove.color;
        }

        if (minRightColor === CONSTANTS.BLACK) {
            this.balanceDelete(newMinRight);
        }
    }

    balanceDelete(node) {
        while (node != this.root && node.color == CONSTANTS.BLACK) {
            if (node == node.parent.leftPart) {
                let brother = node.parent.rightPart;

                if (brother.color == CONSTANTS.RED) {
                    brother.color = CONSTANTS.BLACK;
                    node.parent.color = CONSTANTS.RED;
                    this.rotateLeft(node.parent);
                    brother = node.parent.rightPart;
                }

                if (brother.leftPart.color == CONSTANTS.BLACK && brother.rightPart.color == CONSTANTS.BLACK) {
                    brother.color = CONSTANTS.RED;
                    node = node.parent;
                } else {
                    if (brother.rightPart.color == CONSTANTS.BLACK) {
                        brother.leftPart.color = CONSTANTS.BLACK;
                        brother.color = CONSTANTS.RED;
                        this.rotateRight(brother);
                        brother = node.parent.rightPart;
                    }

                    brother.color = node.parent.color;
                    node.parent.color = CONSTANTS.BLACK;
                    brother.rightPart.color = CONSTANTS.BLACK;
                    this.rotateLeft(node.parent);
                    node = this.root;
                }
            } else {
                let brother = node.parent.leftPart
                if (brother.color == CONSTANTS.RED) {
                    brother.color = CONSTANTS.BLACK;
                    node.parent.color = CONSTANTS.RED;
                    this.rotateRight(node.parent);
                    brother = node.parent.leftPart;
                }

                if (brother.leftPart.color == CONSTANTS.BLACK && brother.rightPart.color == CONSTANTS.BLACK) {
                    brother.color = CONSTANTS.RED;
                    node = node.parent;
                } else {
                    if (brother.leftPart.color == CONSTANTS.BLACK) {
                        brother.rightPart.color = CONSTANTS.BLACK;
                        brother.color = CONSTANTS.RED;
                        this.rotateLeft(brother);
                        brother = node.parent.leftPart;
                    }

                    brother.color = node.parent.color;
                    node.parent.color = CONSTANTS.BLACK;
                    brother.leftPart.color = CONSTANTS.BLACK;
                    this.rotateRight(node.parent);
                    node = this.root;
                }
            }
        }

        node.color = CONSTANTS.BLACK;
    }

}

const t = new Tree();

for (let i = 1; i < 20; i++) {
    t.insert({ key: i });
}
t.printTree();

for (let i = 1; i < 20; i++) {
    if (i % 3 === 0) {
        t.deleteNode(i);
    }
}
t.printTree();
