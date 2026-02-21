import java.util.HashMap;

class ContainsDuplicate {

    public static void main (String[] args) {
        int[] numbers = {1,1,1,3,3,4,3,2,4,2};
        System.out.println(containsDuplicate(numbers));
        int[] numbers2 = {1,2,3,4};
        System.out.println(containsDuplicate(numbers2));
    }

    public static boolean containsDuplicate (int[] nums) {
        var occurences = new HashMap<Integer, Boolean>();
        for (int i = 0; i < nums.length; i++) {
            var number = nums[i];
            if (occurences.containsKey(number)) {
                return true;
            } else {
                occurences.put(number, true);
            }
        }
        return false;
    }

}
