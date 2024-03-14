// HackerRank provided the other necessary codes to run

class Decoding {

  void decode(String s, Node root) {
    String decodedString = "";
    String[] digits = s.split("");
    Node node = root;
    for (int i = 0; i < digits.length; i++) {
      String digit = digits[i];
      if (digit.equals("0")) {
        node = node.left;
      } else {
        node = node.right;
      }
      if (node.left == null && node.right == null) {
        decodedString += node.data;
        node = root;
      }
    }
    System.out.println(decodedString);
  }
}
