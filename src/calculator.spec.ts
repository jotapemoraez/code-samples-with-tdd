import {  BurguerBuilder } from "./builder";
import { Burguer } from "./burguer";
import { AddOperator, Calculator, DivideOperator, MultiplyOperator, Operator, SquareRootOperator } from "./calculator";
// jest.mock('./burguer');
describe('calculator', () => {

    let add:Operator = new AddOperator();
    let mult:Operator = new MultiplyOperator();
    let square:Operator = new SquareRootOperator();
    let div:Operator = new DivideOperator();

    let calculator:Calculator = new Calculator([add,mult,square, div]);

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

    it ('should return result of division', () => {

        const firstOperand = 10;
        const secondOperand = 5;

        const actualValue = calculator.performOperation('div', firstOperand, secondOperand);

        expect(actualValue).toEqual(2);
    })

    it ('should throw exception when divide by zero', () => {

        const divideOperator = new DivideOperator();

        // Verify that dividing by zero throws an exception
        expect(() => {
          divideOperator.performOperation(10, 0);
        }).toThrow(Error);
    })

    it ('burguer', () => {

        let builder:BurguerBuilder = new BurguerBuilder();
        // const expected = new Burguer();
        // expected.setBread( 'bread');
        // expected.setMeat('meat');

       
        const actual = builder.addBread('bread').addMeat('meat').build();

        // expect(expected.getBread()).toEqual(actual.getBread());
        //expect(Burguer).toHaveBeenCalledTimes(1);
        expect(actual).toEqual(expect.objectContaining({
            meat: expect.any(String),
            bread: expect.any(String)

        }))
    })
    

});