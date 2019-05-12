let value = prompt('Please enter Fibonacci index', '');

class Fibonacci {
    constructor(number) {
        this.index = number;
        this.currentNumber = 1;
        this.counter();
    };
    counter() {
        let previousNumber = 1;
        let i = 3;
        while (this.index >= i) {
            let nextNumber = this.currentNumber + previousNumber;
            previousNumber = this.currentNumber;
            this.currentNumber = nextNumber;
            i++;
        }
        return this.currentNumber;
    };
};
const fibonacci = new Fibonacci(); 

class Iterator {
    constructor (currentValue) {
        this.currentValue = currentValue;
    };
    current() {
        const fibonacci = new Fibonacci(this.currentValue);
        return `Current fibonacci number: ${fibonacci.currentNumber}`;
    };
    next() {
        const fibonacci = new Fibonacci(this.currentValue + 1);
        return `Next fibonacci number: ${fibonacci.currentNumber}`;
    };
    previous() {
        const fibonacci = new Fibonacci(this.currentValue - 1);
        return `Previous fibonacci number: ${fibonacci.currentNumber}`;
    };
    key() {
        const fibonacci = new Fibonacci(this.currentValue);
        return `Current fibonacci index: ${fibonacci.index}`;
    };
    rewind() {
        this.currentValue = 0;
        const fibonacci = new Fibonacci(this.currentValue);
        return `Current fibonacci number: ${fibonacci.currentNumber}`;
    };
};

const output = document.getElementById('output');
let currentButton = document.getElementById('current_button');
let indexButton = document.getElementById('index_button');      
let nextButton = document.getElementById('next_button');
let previousButton = document.getElementById('previous_button');
let clearButton = document.getElementById('clear_button');

currentButton.addEventListener('click', function(){
    output.innerHTML = iterator.current();
    output.classList.add('h2_visible');
});
indexButton.addEventListener('click', function(){
    output.innerHTML = iterator.key();
    output.classList.add('h2_visible');
});
nextButton.addEventListener('click', function(){
    output.innerHTML = iterator.next();
    output.classList.add('h2_visible');
});
previousButton.addEventListener('click', function(){
    output.innerHTML = iterator.previous();
    output.classList.add('h2_visible');
});
clearButton.addEventListener('click', function(){
    output.innerHTML = iterator.rewind();
    output.classList.add('h2_visible');
});

const iterator = new Iterator(value);