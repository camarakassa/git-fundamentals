 // This function adds 2 nums
const add = (a, b) =>  a + b;

const subtract = (a, b) => a - b;

const divide = (a, b) => {
 if (b === 0){
  throw Error("Cannot divide by 0");
 }
 return a / b;
}
 
export {
  add,
  subtract,
  divide
};
}
