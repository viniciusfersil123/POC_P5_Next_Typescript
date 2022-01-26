import dynamic from "next/dynamic";
import p5Types from "p5";

const Sketch = dynamic(
  () =>
    import("react-p5").then((mod) => {
      import("p5/lib/addons/p5.sound");
      return mod.default;
    }),
  {
    ssr: false,
  }
);

let width: number = 710;
let height: number = 400;
let shapes = [];

let newShape;

let joints = 12;
let linelength = 64;
let resolution = 0.06;
let gravity = 0.094;
let damping = 0.998;
let showPath = true;
let showPendulum = true;
let showPendulumPath = true;
let clearScreen = false;
let bolaBranca;

export default () => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    bolaBranca = function () {
      p5.fill(255,0,0);
      p5.ellipse(p5.windowWidth / 2, p5.windowHeight / 2, 200, 200);
    };
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.noFill();
    p5.strokeWeight(1);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    bolaBranca();
  };

  return <Sketch setup={setup} draw={draw} />;
};
