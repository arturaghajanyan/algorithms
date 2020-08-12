#include <iostream>
using namespace std; 
  
void swap(int *valueRight, int *valueLeft) {  
    int temp = *valueRight;  
    *valueRight = *valueLeft;  
    *valueLeft = temp;  
} 
  
void bubbleSort(int array[], int sizeofArray) {  
    for (int i = 0; i < sizeofArray-1; i++) {      
        for (int j = 0; j < sizeofArray-i-1; j++) {
            if (array[j] > array[j+1]) {
                swap(&array[j], &array[j+1]);  
            }
        }
    }
}  
  
void printArray(int array[], int size){  
    for (int i = 0; i < size; i++) { 
        cout << "array["<<i<<"] = " << array[i]<< endl;  
    }
}  
  
int main() {  
    int arrayForSorting[] = {27, 4, 17, 1, 15, -7, 3};  
    int sizeofArray = sizeof(arrayForSorting)/sizeof(arrayForSorting[0]);  
    cout << "\nArray before sorting: \n"<<endl;  
    printArray(arrayForSorting, sizeofArray);  
    bubbleSort(arrayForSorting, sizeofArray); 
    cout << "Array after sorting: \n"<<endl;  
    printArray(arrayForSorting, sizeofArray);  
    return 0;  
}  
 
