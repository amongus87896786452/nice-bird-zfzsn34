/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 328.21506551911716,
        y: 267.8773755360807
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.circles = 0;
    this.vars.autoClicks = 0;
    this.vars.circlesPerClick = 1;
    this.vars.trueAutoClicks = 0;

    this.watchers.circles = new Watcher({
      label: "Circles",
      style: "normal",
      visible: true,
      value: () => this.vars.circles,
      x: 245,
      y: 175
    });
    this.watchers.autoClicks = new Watcher({
      label: "Auto clicks",
      style: "normal",
      visible: true,
      value: () => this.vars.autoClicks,
      x: 245,
      y: 147
    });
    this.watchers.circlesPerClick = new Watcher({
      label: "Circles per click",
      style: "normal",
      visible: true,
      value: () => this.vars.circlesPerClick,
      x: 245,
      y: 119
    });
    this.watchers.trueAutoClicks = new Watcher({
      label: "true auto clicks",
      style: "normal",
      visible: true,
      value: () => this.vars.trueAutoClicks,
      x: 246,
      y: 91
    });
  }
}
