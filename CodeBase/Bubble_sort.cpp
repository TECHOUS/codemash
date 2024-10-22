/**
 * PROBLEM: Bubble Sort in C++
 * AUTHOR: mihir-k64
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
 * This function sorts an array using the bubble sort algorithm
 * 
 * @param A: the array to be sorted
 * @param n: size of the array
 **/
void bubbleSort(int A[], int n) {
    // Outer loop: controls the number of passes
    for (int i = 0; i < n - 1; i++) {
        // Inner loop: compares adjacent elements and swaps if necessary
        for (int j = 0; j < n - i - 1; j++) {
            if (A[j] > A[j + 1]) {
                swap(A[j], A[j + 1]); // Swap if the element is greater than the next one
            }
        }
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
    int A[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(A) / sizeof(A[0]);

    cout << "Original array: ";
    printArray(A, n);

    bubbleSort(A, n); // Call the bubbleSort function

    cout << "Sorted array: ";
    printArray(A, n);

    return 0;
}
