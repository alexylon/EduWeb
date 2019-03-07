import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class QuickSort {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(5, 3, 6, 4, 2, 1);
        System.out.println(numbers);
        System.out.println(quickSort(numbers));

    }


    public static List<Integer> quickSort(List<Integer> numbers) {
        if (numbers.size() < 2) {
            return numbers;
        }
        final Integer pivot = numbers.get(0);
        final List<Integer> lower = new ArrayList<>();
        final List<Integer> higher = new ArrayList<>();
        for (int i = 1; i < numbers.size(); i++) {
            if (numbers.get(i) < pivot) {
                lower.add(numbers.get(i));
            } else {
                higher.add(numbers.get(i));
            }
        }
        final List<Integer> sorted = quickSort(lower);
        sorted.add(pivot);
        sorted.addAll(quickSort(higher));
        return sorted;
    }
}