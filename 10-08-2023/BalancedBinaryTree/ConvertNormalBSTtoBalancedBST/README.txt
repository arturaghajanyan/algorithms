--- Complexity ---
* Time Complexity: O(n), As we are just traversing the tree twice. Once in inorder traversal and then in construction of the balanced tree.
* Auxiliary space: O(n), The extra space is used to store the nodes of the inorder traversal in the vector. Also the extra space taken by recursion call stack is O(h) where h is the height of the tree.
