/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite6/costumes/costume1.svg", {
        x: 51.472085725612516,
        y: 26.508929999999992
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite6/sounds/Meow.wav")];

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
    if (this.compare(this.stage.vars.circles, 49) > 0) {
      this.stage.vars.circles -= 50;
      this.stage.vars.autoClicks += 0.5;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(-184, 120);
    this.visible = false;
    if (this.touching("mouse")) {
      this.say("weak auto clicker");
    }
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
