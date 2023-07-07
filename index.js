import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Shop from "./Shop/Shop.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Circle1 from "./Circle1/Circle1.js";
import ExitShop from "./ExitShop/ExitShop.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite8 from "./Sprite8/Sprite8.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite2: new Sprite2({
    x: -92,
    y: 120,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Sprite3: new Sprite3({
    x: -9,
    y: 120,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Shop: new Shop({
    x: -168,
    y: -144,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Sprite4: new Sprite4({
    x: 77,
    y: 120,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Circle1: new Circle1({
    x: 0,
    y: -1,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  }),
  ExitShop: new ExitShop({
    x: -168,
    y: -144,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Sprite5: new Sprite5({
    x: 162,
    y: 120,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Sprite6: new Sprite6({
    x: -184,
    y: 120,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Sprite7: new Sprite7({
    x: -184,
    y: 43,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Sprite8: new Sprite8({
    x: -92,
    y: 43,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
