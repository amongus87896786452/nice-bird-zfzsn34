/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Shop extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Shop/costumes/costume1.svg", {
        x: 64.5,
        y: 27.5
      })
    ];

    this.sounds = [new Sound("pop", "./Shop/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "circle2buy" },
        this.whenIReceiveCircle2buy
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Close shop" },
        this.whenIReceiveCloseShop
      )
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("Shop");
    this.visible = false;
    this.stage.watchers.autoClicks.visible = false;
    this.stage.watchers.trueAutoClicks.visible = false;
    this.stage.watchers.circlesPerClick.visible = false;
  }

  *whenIReceiveCircle2buy() {
    while (true) {
      if (this.keyPressed("space")) {
        this.broadcast("close shop for circle 2");
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(-168, -144);
    this.visible = true;
  }

  *whenIReceiveCloseShop() {
    this.visible = true;
  }
}
