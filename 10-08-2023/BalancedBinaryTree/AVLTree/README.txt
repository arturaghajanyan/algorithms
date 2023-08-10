--- AVL Tree ---
* Most of the BST operations (e.g., search, max, min, insert, delete.. etc) take O(h) time where h is the height of the BST. The cost of these operations may become O(n) for a skewed Binary tree
* If we make sure that the height of the tree remains O(log(n)) after every insertion and deletion, then we can guarantee an upper bound of O(log(n)) for all these operations.
* The height of an AVL tree is always O(log(n)) where n is the number of nodes in the tree. i
 
--- Complexity ---
* Time Complexity: O(n*log(n)), For Insertion
* Auxiliary Space: O(1)

--- Delete function Time Complexity --- 
* The rotation operations (left and right rotate) take constant time as only few pointers are being changed there. Updating the height and getting the balance factor also take constant time. So the time complexity of AVL delete remains same as BST delete which is O(h) where h is height of the tree. Since AVL tree is balanced, the height is O(Logn). So time complexity of AVL delete is O(Log n). 
* Auxiliary Space: O(1), since no extra space is used.

--- Comparison with Red Black Tree ---
* The AVL tree and other self-balancing search trees like Red Black are useful to get all basic operations done in O(log n) time. The AVL trees are more balanced compared to Red-Black Trees, but they may cause more rotations during insertion and deletion. So if your application involves many frequent insertions and deletions, then Red Black trees should be preferred. And if the insertions and deletions are less frequent and search is the more frequent operation, then the AVL tree should be preferred over Red Black Tree.

--- Advantages Of AVL Trees ---
* It is always height balanced
* Height Never Goes Beyond LogN, where N is the number of nodes
* It give better search than compared to binary search tree
* It has self balancing capabilities
* 
--- Summary of AVL Trees ---
* These are self-balancing binary search trees.
* Balancing Factor ranges -1, 0, and +1.
* When balancing factor goes beyond the range require rotations to be performed
* Insert, delete, and search time is O(log N).
* AVL tree are mostly used where search is more frequent compared to insert and delete operation.
