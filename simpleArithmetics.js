'use Strict';
// Function description 
// Debugging - finding the mistakes that we have made in the code
function myNameFunction(a, b, operation){
    var result = 0;
    switch(operation){
        case '+':
            result = a + b;
            break;
        case '-':
            result = b -a;
            break;
        case '/':
            result = a / b;
            break;
        case '*':
            result = a * b;
            break;

    }
    console.log(result);
};

myNameFunction(1, 2, '+');