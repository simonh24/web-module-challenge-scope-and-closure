/*
Task 1:
    a is undefined because it is attempting to get a value from b, which doesn't have a value at the time.
    b is defined as 3 because it gets the value of 3. var is scoped to keep its value outside of the function.
*/

// Task 2

function createBase(num) {
    return function addNum(n) {
        return n + num;
    }
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27