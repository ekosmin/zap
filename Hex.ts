///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
module Main {

    export class Hex extends Phaser.Graphics {

        public pixelOrigin: Phaser.Point;
        public axialPosition: AxialPoint;
        public size: number;

        constructor(game: Game, pixelOrigin: Phaser.Point, axialPosition: AxialPoint, size: number) {
            super(game, pixelOrigin.x, pixelOrigin.y);
            this.pixelOrigin = pixelOrigin;
            this.axialPosition = axialPosition;
            this.size = size;

            // All coordinates are relative to the origin set above
            this.moveTo(size, 0);
            this.lineStyle(2, 0x000000);
            this.beginFill(0xffffff);

            for (var i: number = 1; i < 7; i++) {
                var point: Phaser.Point = this.hexCorner(size, i);
                this.lineTo(point.x, point.y);
            }

            this.endFill();
        }

        public hexCorner(size: number, i: number): Phaser.Point {
            var angle: number = Math.PI/3 * i;
            return new Phaser.Point(size * Math.cos(angle),
                                    size * Math.sin(angle));
        }

    }
}