export class Burguer {

    private meat:string;

    private bread:string;

    constructor() {
        this.meat = '';
        this.bread = '';
    }

    setMeat(meat:string) {
        this.meat = meat;
        this.addCatchup();

    }

    addCatchup():string {
        return "got it";
    }

    setBread(bread:string) {

        this.bread = bread;
    }

    getMeat():string {
        return this.meat;
    }

    getBread():string {
        return this.bread;
    }



}