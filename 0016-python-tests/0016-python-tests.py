print("Remove By Value, remove only the first ocurrence or all the ocurrences of a value in a list?")
list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 5, 5, 5, 5]
print(list)
print("Calling list.remove(5)")
list.remove(5)
print("List: ", list)
print("Only removes the first ocurrence of the value")
print("To remove all ocurrences of a value, use for or list comprehension")
value_to_remove = 5
list = [x for x in list if x != value_to_remove]
print("List after removing all occurrences of 5: ", list)
print("************************************")
print(".sort() can handle negative values?")
listToBeSorted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
listToBeSorted.sort()
print(listToBeSorted)
print("Yes, it can handle negative values")
print(".sort() can handle decimal values?")
decimalsToBeSorted = [0.1, 4.5, 10, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
decimalsToBeSorted.sort()
print(decimalsToBeSorted)
print("Yes, it can handle decimal values")
