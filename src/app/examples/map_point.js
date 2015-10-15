import {Point} from './point';

export class MapPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.visited = false;
    }

    toString() {
        return super.toString() + ' in ' + this.visited;
    }
}