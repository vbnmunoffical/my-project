// Calculator functionality in JavaScript

class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        this.result = a + b;
        return this.result;
    }

    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }

    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }

    divide(a, b) {
        if (b !== 0) {
            this.result = a / b;
            return this.result;
        } else {
            throw new Error('Division by zero');
        }
    }

    scientific(value, operation) {
        switch(operation) {
            case 'sqrt':
                this.result = Math.sqrt(value);
                break;
            case 'pow':
                this.result = Math.pow(value, 2);
                break;
            case 'sin':
                this.result = Math.sin(value);
                break;
            case 'cos':
                this.result = Math.cos(value);
                break;
            case 'tan':
                this.result = Math.tan(value);
                break;
            default:
                throw new Error('Invalid operation');
        }
        return this.result;
    }

    currencyConverter(amount, rate) {
        return amount * rate;
    }
}

// Example usage:
const calc = new Calculator();
console.log('Addition:', calc.add(5, 3)); // Addition: 8
console.log('Square root:', calc.scientific(16, 'sqrt')); // Square root: 4
console.log('Currency Conversion:', calc.currencyConverter(100, 1.1)); // Currency Conversion: 110
