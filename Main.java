import java.util.Arrays;

class Main{
    public static void main (String[] args){
        int[] x = {1,2,3,4};
        System.out.println(Arrays.toString(product(x)) );
    }
    public static int[] product(int[] nums) {
        int[] output = new int[nums.length];
        int prefix = 1;

        for (int i = 0; i < nums.length; i++){
            output[i] = prefix;
            prefix *= nums[i];
        }

        int post = 1;

        for (int i = nums.length -1; i >= 0; i--) {
            output[i] *= post;
            post *= nums[i];
        }

        return output;
    }
}