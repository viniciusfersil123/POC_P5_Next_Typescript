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

let theta : number;
let width: number = 710;
let height: number = 400;
let branch: any;

export default () => {
  
    const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
    branch = function (h : number) {
      h *= 0.66;
      if (h > 2) {
        p5.push();
        p5.rotate(theta);   
        p5.line(0, 0, 0, -h); 
        p5.translate(0, -h);
        branch(h);      
        p5.pop();
        p5.push();
        p5.rotate(-theta);
        p5.line(0, 0, 0, -h);
        p5.translate(0, -h);
        branch(h);
        p5.pop();
      }
    }
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    p5.frameRate(30);
    p5.stroke(255);
    let a : number = (p5.mouseX / width) * 90;
    theta = p5.radians(a);
    p5.translate(width/2,height);
    p5.line(0,0,0,-120);
    p5.translate(0,-120);
    branch(120);
  };

  return <Sketch setup={setup} draw={draw} />;
};
