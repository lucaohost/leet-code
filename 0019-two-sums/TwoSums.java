import java.util.ArrayList;
import java.util.List;

public class TwoSums {

    public static void main(String[] args) {
        var list = new ArrayList<Integer>(List.of(2, 7, 11, 15));
        System.out.println(twoSums(list, 9));
    }

    private static ArrayList<Integer> twoSums(ArrayList<Integer> list, int target) {
        for (int i = 0; i < list.size(); i++) {
            for (int j = 0; j < list.size(); j++) {
                if (i == j) {
                    continue;
                }
                if (list.get(i) + list.get(j) == target) {
                    return new ArrayList<Integer>(List.of(i, j));
                }
            }
        }
        return new ArrayList<Integer>();
    }

}
