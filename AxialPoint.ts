///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
module Main {

    export class AxialPoint {

        private x: number;
        private y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        public getX(): number {
            return this.x;
        }

        public getY(): number {
            return this.y;
        }

        public getPointInDirection(direction: Direction): AxialPoint {
            switch (direction) {
                case Direction.UP:
                    return this.shift(0, 1);
                case Direction.UPRIGHT:
                    return this.shift(1, 0);
                case Direction.DOWNRIGHT:
                    return this.shift(1, -1);
                case Direction.DOWN:
                    return this.shift(0, -1);
                case Direction.DOWNLEFT:
                    return this.shift(-1, 0);
                case Direction.UPLEFT:
                    return this.shift(-1, 1);
            }
        }

        private shift(deltaX: number, deltaY: number): AxialPoint {
            return new AxialPoint(this.x + deltaX, this.y + deltaY);
        }

    }

    export enum Direction {
        UP,
        UPRIGHT,
        DOWNRIGHT,
        DOWN,
        DOWNLEFT,
        UPLEFT
    }
}