#include <iostream>
using namespace std;
  
void swap(int *valueRight, int *valueLeft){
    int temp = *valueRight;
    *valueRight = *valueLeft;
    *valueLeft = temp;
}  
  
void selectionSort(int array[], int sizeofArray){
    int minimum_index;
    for (int i = 0; i < sizeofArray-1; i++) {
        minimum_index = i;
        for (int j = i + 1; j < sizeofArray; j++){
            if (array[j] < array[minimum_index]){
                minimum_index = j; 
            }
        }
        swap(&array[minimum_index], &array[i]);
    }
}
  
void printArray(int array[], int size){
    for (int i = 0; i < size; i++){
        cout << "array["<<i<<"] = " << array[i]<< endl;
    }
}

int main(){
    int arrayForSorting[] = {27, 4, 17, 1, 15, -7, 3};
    int sizeofArray = sizeof(arrayForSorting)/sizeof(arrayForSorting[0]);
    cout << "\nArray before sorting: \n"<<endl;
    printArray(arrayForSorting, sizeofArray);
    selectionSort(arrayForSorting, sizeofArray);
    cout << "Array after sorting: \n"<<endl;
    printArray(arrayForSorting, sizeofArray);
    return 0;
}
