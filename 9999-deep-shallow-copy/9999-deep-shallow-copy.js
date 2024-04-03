let recipe = { name: "noodles", ingredients: ["eggs", "flour", "water"] };
console.log("Recipe: ", recipe);
/*
In JavaScript, all standard built-in object-copy operations 
(spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), and Object.assign())
 create shallow copies rather than deep copies. 
*/
let shallowCopyRecipe = Object.assign({}, recipe);
// top level properties are independent 
// but when we change nested objects/arrays, it will change both because it points to the same reference
console.log("Changing top level property and nested array (Shallow Copy)");
shallowCopyRecipe.name = "spaghetti";
shallowCopyRecipe.ingredients[2] = "milk";
console.log("Recipe: ", recipe); // { name: 'noodles', ingredients: [ 'eggs', 'flour', 'milk' ] }
console.log("Shallow Recipe: ", shallowCopyRecipe); // { name: 'spaghetti', ingredients: [ 'eggs', 'flour', 'milk' ] }

// To guarantee independent objects in all levels, we need to Deep Copy
recipe = { name: "noodles", ingredients: ["eggs", "flour", "water"] };
let deepCopyRecipe = JSON.parse(JSON.stringify(recipe));
console.log("Changing top level property and nested array (Deep Copy)");
deepCopyRecipe.name = "spaghetti";
deepCopyRecipe.ingredients[2] = "milk";
console.log("Recipe: ", recipe); // { name: "noodles", ingredients: ["eggs", "flour", "water"] };
console.log("Deep Recipe: ", deepCopyRecipe); // { name: 'spaghetti', ingredients: [ 'eggs', 'flour', 'milk' ] }