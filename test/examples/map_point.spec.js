import {MapPoint} from '../../src/app/examples/map_point';

describe('Point Tests', () => {

    it('should be able to instatiate', () => {
        let p = new MapPoint(1,2,false);
        expect(p).toBeDefined();
    });

    it('should be able to return a string representation of itself', () => {
        let p = new MapPoint(1,2, 'red');
        expect(p.toString()).toEqual('(1, 2) in false');
    });
});