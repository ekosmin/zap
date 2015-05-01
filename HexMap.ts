///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
///<reference path="Hex.ts"/>
///<reference path="AxialPoint.ts"/>
module Main {

    export class HexMap {

        private map: Map<AxialPoint, Hex> = new Map<AxialPoint, Hex>();

        private group: Phaser.Group;

        constructor(level: Level) {
            this.group = level.add.group();

            this.addHexes(level);
        }

        public getHexes(): Phaser.Group {
            return this.group;
        }

        private addHexes(level: Level) {
            for (var row: number = 0; row < 5; row++) {
                var heightApart: number = Math.sqrt(3) * Hex.SIZE;
                var lastHex: Hex = new Hex(level.game, new Phaser.Point(100, 100 + row * heightApart),
                    new AxialPoint(0, -row));
                this.add(lastHex, new AxialPoint(0, row));

                for (var col: number = 1; col < 6; col++) {
                    lastHex = this.getNextHex(lastHex, col);
                    this.add(lastHex, lastHex.axialPosition);
                }
            }
        }

        public add(hex: Hex, point: AxialPoint): void {
            this.map.set(point, hex);
            this.group.add(hex);
        }

        /**
         * Returns the hex in the next column
         * @param hex the current hex
         * @param column the current column
         * @returns {Hex} the Hex in the next column
         */
        private getNextHex(hex: Hex, column: number): Hex {
            var widthApart: number = 3/2 * Hex.SIZE;
            var heightApart: number = Math.sqrt(3)/2 * Hex.SIZE;
            var nextOrigin: Phaser.Point, nextAxialPoint: AxialPoint;
            if (column % 2 == 0) {
                nextOrigin = hex.pixelOrigin.add(widthApart, -heightApart);
                nextAxialPoint = hex.axialPosition.getPointInDirection(Direction.UPRIGHT);
            } else {
                nextOrigin = hex.pixelOrigin.add(widthApart, heightApart);
                nextAxialPoint = hex.axialPosition.getPointInDirection(Direction.DOWNRIGHT);
            }
            return new Hex(hex.game, nextOrigin, nextAxialPoint);
        }

    }
}