import {Grid} from '../../src/app/examples/grid';
import {MapPoint} from '../../src/app/examples/map_point';

describe('Grid Tests', () => {

    it('should be able to instatiate', () => {
        let grid = new Grid();
        expect(grid).toBeDefined();
    });

    it('should be able to add a point to the grid', ()=> {
        let grid = new Grid();
        let point = new MapPoint(1,2,false);
        grid.addPointToMap(point);
        expect(grid.getNumberOfPoints()).toEqual(1);
    });

    it('should throw an error if we are a full grid', () => {
        let grid = new Grid();
        for(let i = 0; i < 10; i++) {
            let point = new MapPoint(i,i,false);
            grid.addPointToMap(point);
        }
        let point = new MapPoint(10,10,false);
        expect(()=>{grid.addPointToMap(point)}).toThrowError();
    });

    it('should create a point and add it through coordinates', ()=> {
        let grid = new Grid();
        expect(grid.getNumberOfPoints()).toEqual(0);
        grid.addPointToCoordinate(1,2);
        expect(grid.getNumberOfPoints()).toEqual(1);
    });

    it('should throw an error if we try and create too many points', () => {
        let grid = new Grid();
        for(let i = 0; i < 10; i++) {
            grid.addPointToCoordinate(i,i);
        }
        expect(()=>{grid.addPointToCoordinate(11,11)}).toThrowError();
    });

    it('should allow us to visit a point', () => {
        let grid = new Grid();
        expect(grid.getNumberOfPointsVisited()).toEqual(0);

        grid.addPointToCoordinate(1,1);

        grid.visitAPoint(1,1);
        expect(grid.getNumberOfPointsVisited()).toEqual(1);
    });
});