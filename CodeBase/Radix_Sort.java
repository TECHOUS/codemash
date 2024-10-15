import java.util.Arrays;

public class Radix_Sort {
    public static int getMax(int[] arr, int n) {
        int max = arr[0];
        for (int i = 1; i < n; i++) {
            if (arr[i] > max)
                max = arr[i];
        }
        return max;
    }

    public static void countingSort(int[] arr, int n, int place) {
        int[] output = new int[n];
        int[] count = new int[10];
        Arrays.fill(count, 0);

        for (int i = 0; i < n; i++) {
            count[(arr[i] / place) % 10]++;
        }

        for (int i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        for (int i = n - 1; i >= 0; i--) {
            output[count[(arr[i] / place) % 10] - 1] = arr[i];
            count[(arr[i] / place) % 10]--;
        }

        for (int i = 0; i < n; i++) {
            arr[i] = output[i];
        }
    }

    public static void radixSort(int[] arr, int n) {
        int max = getMax(arr, n);
        for (int place = 1; max / place > 0; place *= 10) {
            countingSort(arr, n, place);
        }
    }

    public static void printArray(int[] arr, int n) {
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i] + "  ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = { 181, 289, 390, 121, 145, 736, 514, 888, 122 };
        int n = arr.length;

        System.out.println("Before sorting, array elements are:");
        printArray(arr, n);

        radixSort(arr, n);

        System.out.println("After applying Radix sort, array elements are:");
        printArray(arr, n);
    }
}
