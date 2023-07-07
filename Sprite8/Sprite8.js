/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite8/costumes/costume1.svg", {
        x: 49.789331064595586,
        y: 26.508929999999992
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite8/sounds/Meow.wav")];

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
    if (this.compare(this.stage.vars.circles, 99999) > 0) {
      this.stage.vars.circles -= 100000;
      this.stage.vars.trueAutoClicks++;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(-92, 43);
    this.visible = false;
    this.costume = "costume1";
    while (true) {
      this.effects.color += 5;
      yield;
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
