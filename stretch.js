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

/*
Task 3:
The best usage of functional programming is when there are few items and you need to do a lot of calculations on these items. Object-oriented programing, however, is better used when there are many items that need to be changed. Functional programming has statements that can be executed however they like, but object-oriented has a specific order. Functional programming has items that are immutable, requiring methods such as .map() to create new arrays. Object-oriented programming changes values directly, leading it to be better suited for more items.
*/