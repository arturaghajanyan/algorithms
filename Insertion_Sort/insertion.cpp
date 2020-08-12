#include <iostream> 
using namespace std; 
  
void insertionSort(int arr[], int n){  
    int key, j;  
    for (int i = 1; i < n; i++){  
        key = arr[i];  
        j = i - 1;  
        while (j >= 0 && arr[j] > key){  
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        arr[j + 1] = key;  
    }  
}  
  
void printArray(int array[], int size){  
    for (int i = 0; i < size; i++) { 
        cout << "array["<<i<<"] = " << array[i]<< endl;  
    }
}   
  
int main(){  
    int arrayForSorting[] = {27, 4, 17, 1, 15, -7, 3}; 
    int sizeofArray = sizeof(arrayForSorting) / sizeof(arrayForSorting[0]);  
    cout << "\nArray before sorting: \n"<<endl;  
    printArray(arrayForSorting, sizeofArray); 
    insertionSort(arrayForSorting, sizeofArray);  
    cout << "Array after sorting: \n"<<endl;  
    printArray(arrayForSorting, sizeofArray);  
    return 0;  
}  
  
