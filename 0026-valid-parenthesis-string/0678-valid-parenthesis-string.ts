function checkValidString(s: string): boolean {
    let minOpen = 0; // Minimum possible open parentheses
    let maxOpen = 0; // Maximum possible open parentheses
    
    for (const char of s) {
        if (char === '(') {
            minOpen++;
            maxOpen++;
        } else if (char === ')') {
            minOpen = Math.max(minOpen - 1, 0); // Decrement minOpen if it's greater than 0
            maxOpen--; // Always decrement maxOpen
        } else { // If it's a '*', consider it as both ')' and '('
            minOpen = Math.max(minOpen - 1, 0); // Decrement minOpen if it's greater than 0
            maxOpen++; // Consider it as open parenthesis
        }
        
        // If at any point, there are more closing parentheses than opening ones, return false
        if (maxOpen < 0) {
            return false;
        }
    }
    
    // If at the end, minOpen is 0, then it's valid
    return minOpen === 0;
}