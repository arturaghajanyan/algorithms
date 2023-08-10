--- Time Complexity ---

* The worst-case time complexity of insert operations is O(h) where h is the height of the Binary Search Tree. 
* In the worst case, we may have to travel from the root to the deepest leaf node. The height of a skewed tree may become n and the time complexity of insertion operation may become O(n). 

--- Insert this valuse ---
insert(12)
insert(2)
insert(44)
insert(20)
insert(332)
insert(5)


--- Print Output will be ---
print()
2
5
12
20
44
332

--- Search use ---
let key = 60;
if (search(root, key) === null) {
    console.log(key + " not found");
} else {
    console.log(key + " found");
}

--- Delete use ---
root = deleteNode(root, 12);
