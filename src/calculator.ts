



export class Calculator {

    private operators:Operator[];

    constructor (operators:Operator[]) {
        this.operators = operators;
    }

    performOperation(operatorType:string, ...operands:number[]):number {

        let operator:Operator = this.operators.find(op => op.type === operatorType)!;

        return operator.performOperation(...operands);

    }

    convertToMinorDecimal(num:number):string {

        return num.toFixed(2);
    }

    performMultiSum(operands:number[]):number {

        return operands.reduce( (acc, currentValue) => {
            return acc + currentValue;
        })
    }
 }


export interface Operator {

    type:string;

    performOperation(...operands:number[]):number;
}

export class AddOperator implements Operator{
    type:string;

    constructor() {

        this.type = 'add';
    }


    performOperation(firstOperand:number, secondOperand:number):number {
        return firstOperand + secondOperand;
    }


}

export class MultiplyOperator implements Operator {

    type:string;

    constructor() {
        this.type  = 'mult';
    }


    performOperation(firstOperand:number, secondOperand:number):number {
        return firstOperand * secondOperand;
    }


}

export class SquareRootOperator implements Operator {

    type:string;

    constructor() {
        this.type = 'square';
    }


    performOperation(operand:number):number {
        return Math.sqrt(operand);
    }


}

export class DivideOperator implements Operator {

    type:string;

    constructor() {
        this.type = 'div';
    }


    performOperation(firstOperand:number, secondOperand:number):number {

        if (secondOperand === 0 )
            throw new Error('division by zero not allowed');

        return firstOperand/secondOperand;
    }


}