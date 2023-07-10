import { AddOperator, Calculator, MultiplyOperator, Operator, SquareRootOperator } from "./calculator";

describe('calculator', () => {

    let add:Operator = new AddOperator();
    let mult:Operator = new MultiplyOperator();
    let square:Operator = new SquareRootOperator();

    let calculator:Calculator = new Calculator([add,mult,square]);

    it('should return the sum of two numbers', () => {

        const firstOperand = 2;
        const secondOperand = 5;

        const actualSum = new AddOperator().performOperation(2,5);

        expect(actualSum).toBe(firstOperand+secondOperand)


    });
    it('should return the mult of two numbers', () => {

        const firstOperand = 2;
        const secondOperand = 5;

        const actualMultiplyResult = calculator.performOperation('mult', firstOperand, secondOperand);

        expect(actualMultiplyResult).toBe(10)


    });

    it('should return the square root of a number', () => {

        const operand = 25;

        const actualSqrt = calculator.performOperation('square', operand);

        expect(actualSqrt).toBe(5)


    });

    it('should return the multi sum of array', () => {

        const actualSqrt = calculator.performMultiSum([ 22,22,4,2]);

        expect(actualSqrt).toBe(50)


    });
});