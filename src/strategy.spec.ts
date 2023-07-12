import { RemoveNegativeValues, RemoveOddValues, Values } from "./strategy";

describe("remove values base on constraint", () => {

    it ("remove negative values from list", () => {

        const completeList = [ -1, -2,4,5];

        const actualList = new RemoveNegativeValues().remove(completeList);

        expect(actualList).toEqual([4,5]);

    });


    it ("remove odd values from list", () => {

        const completeList = [ 2, 3,7,5, 8];

        const actualList = new Values().filter(new RemoveOddValues(), completeList);

        expect(actualList).toEqual([2,8]);

    });

    it ("remove both odd and negative values from list", () => {

        const completeList = [ -1, -3, -4, 2, 3,7,5, 8];
        const values:Values = new Values();

        const actualList = values.filter(new RemoveOddValues(), completeList);
        const newActualList = values.filter(new RemoveNegativeValues(), actualList);

        expect(newActualList).toEqual([2,8]);

    });
});