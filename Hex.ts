///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
module Main {

    export class Hex extends Phaser.Graphics {

        constructor(level: Level, x: number, y: number, size: number) {
            super(level.game, x, y);

            this.moveTo(x + size, y);
            this.lineStyle(1, 0x000000);
            this.beginFill(0xffffff);

            for (var i: number = 1; i < 7; i++) {
                var point: Phaser.Point = this.hexCorner(new Phaser.Point(x, y), size, i);
                this.lineTo(point.x, point.y);
            }

            this.endFill();
        }

        private hexCorner(center: Phaser.Point, size: number, i: number): Phaser.Point {
            var angle: number = Math.PI/3 * i;
            return new Phaser.Point(center.x + size * Math.cos(angle),
                                    center.y + size * Math.sin(angle));
        }

    }
}