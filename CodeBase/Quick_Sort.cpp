/**
 * PROBLEM: Quick Sort in C++
 * AUTHOR: sourishphate
 **/

#include <iostream>
using namespace std;

/**
 * This function swaps two elements in the array
 * 
 * @param a: reference to the first element
 * @param b: reference to the second element
 **/
void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

/**
 * This function places the pivot element at its correct position
 * and partitions the array into two halves
 * 
 * @param A: the array to be partitioned
 * @param low: starting index of the array
 * @param high: ending index of the array
 * @return: index of the pivot element
 **/
int partition(int A[], int low , int high) {
    int pivot = A[high]; // Choose the last element as the pivot
    int i = low - 1;     // Index of the smaller element

    for (int j = low; j <= high - 1; j++) {
        if (A[j] <= pivot) {
            i++;         
            swap(A[i], A[j]); 
        }
    }
    swap(A[i + 1], A[high]); // Place pivot at the correct position
    return (i + 1);          
}

/**
 * This function sorts an array using the quick sort algorithm
 * 
 * @param A: the array to be sorted
 * @param low: starting index of the array
 * @param high: ending index of the array
 **/
void quickSort(int A[], int low, int high) {
    if (low < high) {
        int p = partition(A, low, high); // Get the partition index       
        quickSort(A, low, p - 1);   // Recursively sort the elements before and after partition
        quickSort(A, p + 1, high);
    }
}

/**
 * This function prints the array
 * 
 * @param A: the array to print
 * @param size: size of the array
 **/
void printArray(int A[], int size) {
    for (int i = 0; i < size; i++) {
        cout << A[i] << " ";
    }
    cout << endl;
}

int main() {
    int A[] = {10, 7, 8, 9, 1, 5}; 
    int n = sizeof(A) / sizeof(A[0]);

    cout << "Original array: ";
    printArray(A, n);

    quickSort(A, 0, n - 1); 

    cout << "Sorted array: ";
    printArray(A, n);

    return 0;
}
