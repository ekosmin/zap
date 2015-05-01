///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
///<reference path="Hex.ts"/>
///<reference path="AxialPoint.ts"/>
module Main {

    export class HexMap {

        private static ROWS: number = 5;
        private static COLUMNS: number = 9;

        private group: Phaser.Group;
        private dict: { [hash: string]: Hex; } = {};

        constructor(level: Level) {
            this.group = level.add.group();

            this.addHexes(level);
        }

        public add(hex: Hex): void {
            this.dict[hex.axialPosition.hash()] = hex;
            this.group.add(hex);
        }

        public getHex(point: AxialPoint) {
            return this.dict[point.hash()];
        }

        private addHexes(level: Level) {
            for (var row: number = 0; row < HexMap.ROWS; row++) {
                var heightApart: number = Math.sqrt(3) * Hex.SIZE;
                var lastHex: Hex = new Hex(level.game, new Phaser.Point(100, 100 + row * heightApart),
                    new AxialPoint(0, -row));
                this.add(lastHex);

                for (var col: number = 1; col < HexMap.COLUMNS; col++) {
                    lastHex = this.getNextHex(lastHex, col);
                    this.add(lastHex);
                }
            }
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
                nextOrigin = new Phaser.Point(hex.pixelOrigin.x + widthApart, hex.pixelOrigin.y - heightApart);
                nextAxialPoint = hex.axialPosition.getPointInDirection(Direction.UPRIGHT);
            } else {
                nextOrigin = new Phaser.Point(hex.pixelOrigin.x + widthApart, hex.pixelOrigin.y + heightApart);
                nextAxialPoint = hex.axialPosition.getPointInDirection(Direction.DOWNRIGHT);
            }
            return new Hex(hex.game, nextOrigin, nextAxialPoint);
        }

    }
}