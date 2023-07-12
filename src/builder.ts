import { Burguer } from "./burguer";



export class BurguerBuilder {

    private burguer:Burguer;

    constructor() {
        this.burguer = new Burguer();

    }

    addMeat(meat:string) {
        this.burguer.setMeat(meat)

        return this;

    }

    addBread(bread:string) {
        this.burguer.setBread(bread)

        return this;
    }

    build():Burguer {
        return this.burguer;
    }


}