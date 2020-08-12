#include <iostream> 
using namespace std; 
  
int binarySearch(int array[], int l, int sizeofArray, int elementForSearching) {
    if (sizeofArray >= l) {
        int mid = l + (sizeofArray - l) / 2;

        if (array[mid] == elementForSearching) {
            return mid;
        }

        if (array[mid] > elementForSearching) {
            return binarySearch(array, l, mid - 1, elementForSearching);
        }
  
        return binarySearch(array, mid + 1, sizeofArray, elementForSearching);
    }

    return -1;
}
  
int main(void) {
    int array[] = { 2, 3, 4, 1, 12, 7, 10, 40 };
    int elementForSearching = 10;
    int sizeofArray = sizeof(array) / sizeof(array[0]);
    int result = binarySearch(array, 0, sizeofArray - 1, elementForSearching);
    (result == -1) ? cout << "Not found element in array"
                   : cout << "Index of Element is " << result<<endl;
    return 0;
}
