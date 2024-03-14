public class Main {

  public static void main(String args[]) {
    // false
    // == checks for reference equality (same memory address)
    // But new String() creates two distinct objects ocupying two distincts memory addresses.
    System.out.println(new String("aaa") == new String("aaa"));

    // true
    // The equals() method compares the content of two strings, returning true if they have the same value.
    // It ignores the distinct memory addresses
    System.out.println((new String("aaa")).equals(new String("aaa")));

    // true
    // When a String literals already exists in the String Pool, Java reuses the same memory address
    System.out.println("aaa" == "aaa");

    // For padronization, if it's primitive type (int, char, boolean and others) 
    //     We should use == because it will compare only the values ignoring the memory address
    // If it's a object (String, Boolean, Character or your custom object)
    //     We should use .equals() to validade the values ignoring the memory address
  }
}
