/**
Partial application 
*/
const multiply = (a,b,c) =>a*b*c;
const curriedMultiplyBy7=multiply.bind(null,7);
console.log("Partial Application ::",curriedMultiplyBy7(4,10));