interface RemoveStrategy {

    remove(values:number[]):number[];
}

export class RemoveNegativeValues implements RemoveStrategy {

    constructor() {

    }

    remove(values:number[]):number[] {
        return values.filter( num => num >= 0);
    }

}

export class RemoveOddValues implements RemoveStrategy {

    constructor() {

    }

    remove(values:number[]):number[] {
        return values.filter( num => num % 2 === 0);
    }

}


export class Values {


    filter(removeStrategy:RemoveStrategy, list:number[]):number[] {

        return removeStrategy.remove(list);
    }

}