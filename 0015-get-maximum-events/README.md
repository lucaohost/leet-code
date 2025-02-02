**LeetCode Challenge: Maximum Events Selection**  

### **Problem Description**  
Given a list of integer values representing events, you must select the maximum number of events while following these rules:  

1. The first event is always selected.  
2. The selection follows a strict **INCREASING → DECREASING → INCREASING** pattern.  
3. The pattern must follow these transitions exactly:
   - **INCREASING:** Select increasing or equal values until a decrease is required.  
   - **DECREASING:** Select decreasing or equal values until an increase is required.  
   - **INCREASING:** Select increasing or equal values again.  
4. Once the last **INCREASING** phase ends, no more events can be selected.  
5. The function returns the total number of selected events.  

### **Example**  
#### **Input:**  
```python
getMaximumEvents([9, 2, 1, 3, 3, 1, 2, 1, 2, 3])
```
#### **Processing:**  
- **INCREASING:** Start with `9`. Next value `2` is smaller, so switch to **DECREASING**.  
- **DECREASING:** Select `2 → 1`. Next value `3` is larger, so switch to **INCREASING**.  
- **INCREASING:** Select `3 → 3 → 1 → 2`. Pattern is complete, stop selection.  

#### **Output:**  
```python
7
```

### **Constraints**  
- The list contains at least one element.  
- The list may contain duplicate values.  
- The sequence must **strictly** follow the INCREASING → DECREASING → INCREASING order.  

This problem requires **pattern recognition** and **greedy selection**, making it a challenge in **sequence manipulation** and **decision-making**.