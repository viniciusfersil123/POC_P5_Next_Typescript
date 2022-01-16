import dynamic from 'next/dynamic'
const Sketch = dynamic(() => import("react-p5").then((mod) => {
  require('p5/lib/addons/p5.sound');
  return mod.default
}), {
  ssr: false
});

let x = 50;
let y = 50;

export default (props) => {
	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(500, 500).parent(canvasParentRef);
	};

	const draw = (p5) => {
		p5.background(0);
		p5.ellipse(x, y, 70, 70);
		x++;
	};

	return <Sketch setup={setup} draw={draw} />;
};