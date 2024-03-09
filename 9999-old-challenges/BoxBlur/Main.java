package codesignal;

import com.google.gson.Gson;

public class CodeSignal {

    public static void main(String[] args) {
        Gson gson = new Gson();
        // Tests BoxBlurChallenge
        int[][] image1 = {{1, 1, 1}, {1, 7, 1}, {1, 1, 1}};
        int[][] image2 = {{0, 18, 9}, {27, 9, 0}, {81, 63, 45}};
        int[][] image3 = {{36, 0, 18, 9}, {27, 54, 9, 0}, {81, 63, 72, 45}};
        System.out.println(gson.toJson(BoxBlur.Challenge(image1)));
        System.out.println(gson.toJson(BoxBlur.Challenge(image2)));
        System.out.println(gson.toJson(BoxBlur.Challenge(image3)));
        // Tests BoxBlurChallenge
    }

}
