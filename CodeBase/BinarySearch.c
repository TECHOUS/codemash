/**
 * PROBLEM: Binary Search in C language
 * AUTHOR: chaitra-samant
 **/
#include <stdio.h>
#include <stdbool.h>

int binarySearch(int*, int, int);

int main(){
    int size;                         
    int findElement;

    printf("Enter the size of the sorted array\n");
    scanf("%d", &size);
    
    int array[size];
    register int i;
    
    printf("Enter the elements of the array in sorted order:\n");
    for(i = 0; i < size; i++){
        scanf("%d", &array[i]);
    }
    
    printf("Enter the element to search in the array\n");
    scanf("%d", &findElement);
    
    int result = binarySearch(array, size, findElement);
    
    if(result != -1){
        printf("Element found at index: %d\n", result);
    } else {
        printf("No element found\n");
    }
}

/**
 * This function contains the core logic for binary search algorithm
 * 
 * @param array: pointer to the sorted array
 * @param size: size of the array
 * @param findElement: element to search for
 * 
 * @return index of the found element or -1 if not found
 **/
int binarySearch(int *array, int size, int findElement){
    int left = 0;
    int right = size - 1;
    
    while(left <= right){
        int mid = left + (right - left) / 2;

        if(array[mid] == findElement){
            return mid;  // Element found
        }
        if(array[mid] < findElement){
            left = mid + 1;  // Search in the right half
        } else {
            right = mid - 1;  // Search in the left half
        }
    }
    
    return -1;  // Element not found
}
