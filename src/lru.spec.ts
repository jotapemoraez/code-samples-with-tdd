import { LruCache } from "./lru";

describe('calculate loan amount', () => {

// lru cache has a fixes size
// if element exists should be returned if not exists -1
// last element acessed should be near to deletion

   it ('lru cache', () => {
    
      let lru = new LruCache(10);
      var value = 2;

      lru.put(10, value);

      expect(lru.get(10)).toBe(value);

   })

   it ('lru cache not exists element return -1', () => {
    
        let lru = new LruCache(10);
        var value = 2;

        lru.put(10, value);

        expect(lru.get(1)).toBe(-1);

    });

    it ('lru cache not exists element return -1', () => {
    
        let lru = new LruCache(10);
        var value = 2;

        for (let i = 0; i < 10; i++) {
            lru.put(i, value);
        }


        for (let i = 0; i < 9; i++) {
            lru.get(i);
        }




        lru.put(11, value)
       

        expect(lru.get(9)).toBe(-1);

    });

    it('should return array intersect', () => {

        const array = [[1,2,4,5],[2,4,5,6]]

        const value = new LruCache(10).getIntersection(array);

        expect(value).toEqual([2,4,5])

    })




})