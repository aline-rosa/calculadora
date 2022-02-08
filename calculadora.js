module.exports = {
    calculadora(a, b, op){
        switch(op){
            case '+':
            return a + b
            break;
            case '-':
            return a - b
            break;
            case '*':
            return a * b
            break;
            case '/':
            return a / b
            break;
        }
    }
}