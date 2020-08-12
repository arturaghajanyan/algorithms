#include <iostream> 
using namespace std; 

struct Node {
    int data;
    Node* left, * right;
};


Node* newNode(int data) {
    Node* node = new Node();
    node->data = data;
    node->left = node->right = NULL;
    return (node);
}

Node* insertBinaryTree(int array[], Node* root, int i, int arraySize) {
    if (i < arraySize) {
        Node* temp = newNode(array[i]);
        root = temp;
  
        root->left = insertBinaryTree(array,root->left, 2 * i + 1, arraySize);
  
        root->right = insertBinaryTree(array, root->right, 2 * i + 2, arraySize);
    }
    return root;
}


void print(Node* root) {
    if (root != NULL) {
        print(root->left);
        cout << root->data <<" ";
        print(root->right);
    }
}

int main() {
    int array[] = { 1, 2, 3, 4, 5, 6, 6, 6, 6 };
    int arraySize = sizeof(array)/sizeof(array[0]);
    Node* root = insertBinaryTree(array, root, 0, arraySize);
    print(root);
    cout<<endl;
} 
