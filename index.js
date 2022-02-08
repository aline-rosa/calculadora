const inquirer = require('inquirer');
const calculadora = require('./calculadora');

inquirer.prompt([
    {
        name:'a',
        message:'Digite o primeiro número:'
    },
    {
        name:'op',
        message:'Qual operação deseja realizar (+, -, * ou /)?'
    },
    {
        name:'b',
        message:'Digite o segundo número:'
    }

]).then((answers) => {
    let a = parseFloat(answers.a)
    let b = parseFloat(answers.b)
    let op = answers.op
    let resultado = calculadora.calculadora(a, b, op)
    if(op === '+' || op === '-' || op ==='*' || op ==='/'){
        console.log(`${a} ${op} ${b} = ${resultado}`)
    }else{
        console.log("Operação inválida")
    }
})