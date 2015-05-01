///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="HexMap.ts"/>
module Main {

    export class Level extends Phaser.State {

        public hexMap: HexMap;

        private background: Phaser.Sprite;

        create() {
            this.background = this.add.sprite(0, 0, 'level1');
            this.background.width = this.game.world.width;
            this.background.height = this.game.world.height;

            this.hexMap = new HexMap(this);
        }

    }

}