/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite7/costumes/costume1.svg", {
        x: 66.2357236069684,
        y: 26.508929999999992
      }),
      new Costume("costume2", "./Sprite7/costumes/costume2.svg", {
        x: 66.23572360696843,
        y: 26.508929999999992
      }),
      new Costume("costume3", "./Sprite7/costumes/costume3.svg", {
        x: 66.23572360696846,
        y: 26.508929999999992
      }),
      new Costume("costume4", "./Sprite7/costumes/costume4.svg", {
        x: 66.23572360696849,
        y: 26.508929999999992
      }),
      new Costume("costume5", "./Sprite7/costumes/costume5.svg", {
        x: 66.23572360696852,
        y: 26.508929999999992
      }),
      new Costume("costume6", "./Sprite7/costumes/costume6.svg", {
        x: 66.23572360696855,
        y: 26.508929999999992
      }),
      new Costume("costume7", "./Sprite7/costumes/costume7.svg", {
        x: 66.23572360696858,
        y: 26.508929999999992
      }),
      new Costume("costume8", "./Sprite7/costumes/costume8.svg", {
        x: 66.2357236069686,
        y: 26.508929999999992
      }),
      new Costume("costume9", "./Sprite7/costumes/costume9.svg", {
        x: 66.23572360696863,
        y: 26.508929999999992
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite7/sounds/Meow.wav")];

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
    if (this.compare(this.stage.vars.circles, 24999) > 0) {
      this.stage.vars.circles -= 25000;
      this.stage.vars.autoClicks += 10;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(-184, 43);
    this.visible = false;
    this.costume = "costume1";
    while (true) {
      this.effects.color += 1;
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
