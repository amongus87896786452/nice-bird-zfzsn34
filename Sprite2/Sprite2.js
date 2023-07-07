/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 37.9260388216679,
        y: 26.508929999999992
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite2/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop2),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Close shop" },
        this.whenIReceiveCloseShop
      )
    ];
  }

  *whenthisspriteclicked() {
    if (this.compare(this.stage.vars.circles, 99) > 0) {
      this.stage.vars.circles -= 100;
      this.stage.vars.autoClicks++;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(-92, 120);
    this.visible = false;
  }

  *whenIReceiveShop() {
    this.visible = true;
  }

  *whenIReceiveShop2() {
    this.visible = true;
  }

  *whenIReceiveShop3() {
    this.visible = true;
  }

  *whenIReceiveCloseShop() {
    this.visible = false;
  }
}
