///<reference path="phaser/typescript/phaser.d.ts"/>
module Main {

    export class Preloader extends Phaser.State {


        preload() {
            this.load.image('level1', 'assets/level1.png');
        }

        create() {
            this.game.state.start('Level', true, false);
        }

    }

}