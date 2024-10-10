#include <iostream>
#include <vector>

using namespace std;

// Merge function to combine two sorted halves
void merge(vector<int>& A, int low, int mid, int high) {
    int n1 = mid - low + 1; // Length of first half
    int n2 = high - mid;    // Length of second half

    vector<int> L(n1); // Create temp arrays
    vector<int> R(n2);

    // Copy data to temporary arrays L[] and R[]
    for (int i = 0; i < n1; i++) {
        L[i] = A[low + i];
    }
    for (int j = 0; j < n2; j++) {
        R[j] = A[mid + 1 + j];
    }

    // Merge the temporary arrays back into A[low..high]
    int i = 0; // Initial index of first subarray
    int j = 0; // Initial index of second subarray
    int k = low; // Initial index of merged subarray

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            A[k] = L[i];
            i++;
        } else {
            A[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of L[], if any
    while (i < n1) {
        A[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of R[], if any
    while (j < n2) {
        A[k] = R[j];
        j++;
        k++;
    }
}

// Merge Sort function
void mergeSort(vector<int>& A, int p, int r) {
    if (p < r) {
        int q = (p + r) / 2; // Find the midpoint
        mergeSort(A, p, q);      // Sort first half
        mergeSort(A, q + 1, r);  // Sort second half
        merge(A, p, q, r);        // Merge the two sorted halves
    }
}

// Function to print the array
void printArray(const vector<int>& A) {
    for (int val : A) {
        cout << val << " ";
    }
    cout << endl;
}

// Main function
int main() {
    vector<int> A = {38, 27, 43, 3, 9, 82, 10};
    cout << "Unsorted array: ";
    printArray(A);

    mergeSort(A, 0, A.size() - 1);

    cout << "Sorted array: ";
    printArray(A);
    return 0;
}
