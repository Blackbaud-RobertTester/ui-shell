import {MapPoint} from './map_point';

const FULL_GRID = Symbol("Full");
const HALF_FULL = Symbol("Half");
const PRETTY_EMPTY = Symbol("Empty");

export class Grid {

    constructor() {
        this.points = [];
        this.state = PRETTY_EMPTY;
    }

    getNumberOfPoints() {
        return this.points.length;
    }

    addPointToMap(point) {
        if(this.state == FULL_GRID)
            throw new Error("Grid is already full.  No more points allowed");

        this.points.push(point);
        this.calculateStateOfGrid();
    }

    addPointToCoordinate(x,y) {
        if(this.state == FULL_GRID)
            throw new Error("Grid is already full.  No more points allowed");

        let point = new MapPoint(x,y,false);
        this.points.push(point);
        this.calculateStateOfGrid();
    }

    getNumberOfPointsVisited() {

        let numPoints = 0;
        this.points.forEach(function(point) {
            if(point.visited) {
                numPoints++;
            }
        });

        return numPoints;
    }

    visitAPoint(x,y) {
        this.points.forEach(function(point) {
            if(point.x == x && point.y == y) {
                point.visited = true;
            }
        });
    }

    calculateStateOfGrid() {
        if(this.points.length < 5)
            this.state = PRETTY_EMPTY;
        else if(this.points.length >= 5 && this.points.length < 10)
            this.state = HALF_FULL;
        else
            this.state = FULL_GRID;
    }
}