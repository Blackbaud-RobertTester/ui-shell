import {Point} from '../../src/app/examples/point';

describe('Point Tests', () => {

    it('should be able to instatiate', () => {
       let p = new Point(1,2);
        expect(p).toBeDefined();
    });

    it('should be able to return a string representation of itself', () => {
        let p = new Point(1,2);
        expect(p.toString()).toEqual('(1, 2)');
    });
});