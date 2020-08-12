#include<iostream>
using namespace std;

void printArray(int array[], int size){  
    for (int i = 0; i < size; i++) { 
        cout << "array["<<i<<"] = " << array[i]<< endl;  
    }
}

void merge(int *array, int low, int m, int r) {
    int i, j, k, nl, nr;
    nl = m-low+1; nr = r-m;
    int larr[nl], rarr[nr];
    for(i = 0; i<nl; i++){
        larr[i] = array[low+i];
    }
    for(j = 0; j<nr; j++){
        rarr[j] = array[m+1+j];
    }
    i = 0; j = 0; k = low;
    while(i < nl && j<nr) {
        if(larr[i] <= rarr[j]) {
            array[k] = larr[i];
            i++;
        }else{
            array[k] = rarr[j];
            j++;
        }
        k++;
    }
    while(i<nl) {
        array[k] = larr[i];
        i++; k++;
    }
    while(j<nr) {
        array[k] = rarr[j];
        j++; k++;
    }
}

void mergeSort(int *array, int startIndex, int sizeofArray) {
    int m;
    if(startIndex < sizeofArray) {
        int m = startIndex+(sizeofArray-startIndex)/2;
        // Sort first and second arrays
        mergeSort(array, startIndex, m);
        mergeSort(array, m+1, sizeofArray);
        merge(array, startIndex, m, sizeofArray);
    }
}

int main() {
    int arrayForSorting[] = {27, 4, 17, 1, 15, -7, 3}; 
    int sizeofArray = sizeof(arrayForSorting) / sizeof(arrayForSorting[0]); 
    cout << "Array before Sorting: "<< endl;
    printArray(arrayForSorting, sizeofArray);
    mergeSort(arrayForSorting, 0, sizeofArray-1);
    cout << "Array after Sorting: "<< endl;
    printArray(arrayForSorting, sizeofArray);
}