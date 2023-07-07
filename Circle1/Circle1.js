/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Circle1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Circle1/costumes/costume1.svg", {
        x: 27.447301118010103,
        y: 26.50893184901838
      })
    ];

    this.sounds = [
      new Sound("Meow", "./Circle1/sounds/Meow.wav"),
      new Sound("Pop", "./Circle1/sounds/Pop.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Shop" }, this.whenIReceiveShop),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Close shop" },
        this.whenIReceiveCloseShop
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.circles = 0;
    this.stage.vars.circlesPerClick = 1;
    this.stage.vars.autoClicks = 0;
    this.stage.vars.trueAutoClicks = 0;
    this.goto(0, -1);
    this.visible = true;
    this.stage.watchers.autoClicks.visible = true;
    this.stage.watchers.trueAutoClicks.visible = true;
    this.stage.watchers.circlesPerClick.visible = true;
  }

  *whenthisspriteclicked() {
    this.stage.vars.circles += this.toNumber(this.stage.vars.circlesPerClick);
    /* TODO: Implement music_setInstrument */ null;
    /* TODO: Implement music_playNoteForBeats */ null;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.wait(1);
      this.stage.vars.circles += this.toNumber(this.stage.vars.autoClicks);
      yield;
    }
  }

  *whenIReceiveShop() {
    this.visible = false;
  }

  *whenIReceiveCloseShop() {
    this.visible = true;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      yield* this.wait(0);
      this.stage.vars.circles += this.toNumber(this.stage.vars.trueAutoClicks);
      yield;
    }
  }
}
