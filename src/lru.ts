
export class LruCache {

    public map:Map<number,number>;
    private capacity:number;

    constructor(capacity:number) {
        this.map = new Map();
        this.capacity = capacity;
    }

    get(key:number):number | undefined{

        if (this.map.has(key)) {
            let value:number = this.map.get(key)!;
            this.map.delete(key);
            this.map.set(key, value);

            return value;
        } else {
            return -1
        }

    }

    put(key:number, value:number) {

        if (this.map.has(key)) {
            this.map.delete(key);
        }
        else if (this.map.size >= this.capacity) {
            const existingKey = this.map.keys().next().value;
            this.map.delete(existingKey)
           
        }

        this.map.set(key, value)

    }

    getIntersection(list:number[][]):number[] {

        const intersect = list.reduce( (accumulator, current) => {

                const acc = accumulator.filter( element=> current.includes(element));
                console.log(acc)
                return acc;
        })

        return intersect;
    }

}