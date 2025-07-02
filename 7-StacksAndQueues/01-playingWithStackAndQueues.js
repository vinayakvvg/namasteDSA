const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack);

stack.pop();
stack.pop();
console.log(stack);

// peek/top
console.log(stack[stack.length - 1]);

const q = [];
q.push(1);
q.push(2);
q.push(3);
q.push(4);

console.log(q);

q.shift();
q.shift();

console.log(q);

// peek/front
console.log(q[0]);
