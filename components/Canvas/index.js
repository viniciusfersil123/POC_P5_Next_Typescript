import dynamic from 'next/dynamic'

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => {
  // importing sound lib ONLY AFTER REACT-P5 is loaded
  require('p5/lib/addons/p5.sound');
  // returning react-p5 default export
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

// Will only render on client-side
	return <Sketch setup={setup} draw={draw} />;
};