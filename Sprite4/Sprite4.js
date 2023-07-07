/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite4/costumes/costume1.svg", {
        x: 35.304849445208106,
        y: 26.508929999999992
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite4/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Close shop" },
        this.whenIReceiveCloseShop
      )
    ];
  }

  *whenthisspriteclicked() {
    if (this.compare(this.stage.vars.circles, 1499) > 0) {
      this.stage.vars.circles -= 1500;
      this.costume = "costume2";
      this.stage.vars.circlesPerClick += 0.5;
      this.broadcast("double click");
    }
  }

  *whenGreenFlagClicked() {
    this.goto(77, 120);
    this.costume = "costume1";
    this.visible = false;
  }

  *whenIReceiveShop() {
    this.visible = true;
  }

  *whenIReceiveCloseShop() {
    this.visible = false;
  }
}
