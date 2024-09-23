// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from "./stack.js";



let stack = new Stack();
let arr = []
stack.print();
console.log(arr)
const num = stack.pop()
console.log(num)
const num2 = arr.pop()
console.log(num2)

stack.push(5);
arr.push(5);
stack.push(8);
arr.push(8);
stack.print()
console.log(arr)
stack.pop();
arr.pop()
stack.clear();
arr = []
console.log(stack.peek())
console.log(arr[[arr.length - 1]])
console.log(stack.isEmpty())
console.log(arr.length === 0)
console.log(stack.size())
console.log(arr.length)
stack.print();
console.log(arr)

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？