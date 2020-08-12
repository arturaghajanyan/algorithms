#include<iostream>
using namespace std;
  
void swap(int *valueRight, int *valueLeft){
    int temp = *valueRight;
    *valueRight = *valueLeft;
    *valueLeft = temp;
}
  
int partition (int arr[], int low, int high){
    int pivot = arr[high];
    int i = (low - 1);
  
    for (int j = low; j <= high - 1; j++){
        if (arr[j] < pivot){
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high){
    if (low < high){
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
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
    quickSort(arrayForSorting, 0, sizeofArray-1);
    cout << "Array after sorting: \n"<<endl;
    printArray(arrayForSorting, sizeofArray);
    return 0;
}