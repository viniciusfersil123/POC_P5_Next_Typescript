import dynamic from "next/dynamic";
import p5Types from "p5";



const Sketch = dynamic(
  () =>
    import("react-p5").then((mod) => {
      require("p5/lib/addons/p5.sound");
      return mod.default;
    }),
  {
    ssr: false,
  }
);

let width: number = 500;
let height: number = 500;
let x: number = 1;
let y: number = height / 2;
let velX: number = 5;
let velY: number = 3;
let strokeColor: number = 0;
let fillColor: number = 255;

export default () => {
	
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
	p5.fill(fillColor, 50);
	p5.stroke(strokeColor)
	p5.ellipse(x, y, 70, 70);
    if (x >= width || x <= 0 ) {
		velX = -velX;
	}
	if (y >= height || y <= 0 ) {
		velY = -velY;
	}
	x = x + velX;
	y = y + velY;
  };

  return <Sketch setup={setup} draw={draw} />;
};
