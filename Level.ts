///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="HexMap.ts"/>
///<reference path="Cloud.ts"/>
module Main {

    export class Level extends Phaser.State {

        public hexMap: HexMap;

        private background: Phaser.Sprite;

        create() {
            this.background = this.add.sprite(0, 0, 'level1');
            this.background.width = this.game.world.width;
            this.background.height = this.game.world.height;

            this.hexMap = new HexMap(this);

            var group: Phaser.Group = this.add.group();
            var centerHex: Hex = this.hexMap.getHex(new AxialPoint(4, -2));
            group.add(new Cloud(this.game, centerHex.pixelOrigin));
        }

    }

}