/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ExitShop extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ExitShop/costumes/costume1.svg", {
        x: 64.5,
        y: 27.5
      })
    ];

    this.sounds = [new Sound("pop", "./ExitShop/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-168, -144);
    this.visible = false;
  }

  *whenIReceiveShop() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Close shop");
    this.visible = false;
    this.stage.watchers.autoClicks.visible = true;
    this.stage.watchers.circlesPerClick.visible = true;
    this.stage.watchers.trueAutoClicks.visible = true;
  }

  *blockNameLabelText(boolean, numberOrText, numberOrText2, numberOrText3) {}
}
