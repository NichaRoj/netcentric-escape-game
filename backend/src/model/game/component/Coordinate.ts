export class Coordinate {

    constructor(private x: number, private y: number) { }

    public equal(that: Coordinate): boolean {
        return this.x === that.x && this.y === that.y;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }
}