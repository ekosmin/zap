///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
module Main {

    export class Cloud extends Phaser.Graphics {

        public pixelOrigin: Phaser.Point;

        constructor(game: Game, pixelOrigin: Phaser.Point) {
            super(game, pixelOrigin.x, pixelOrigin.y);
            this.pixelOrigin = pixelOrigin;

            // All coordinates are relative to the origin set above
            this.moveTo(0, 0);
            this.lineStyle(2, 0x000000);
            this.beginFill(0xff0000);
            this.drawCircle(0, 0, 32);
            this.endFill();
        }

    }
}