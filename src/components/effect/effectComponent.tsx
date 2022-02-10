import React from 'react';
import SimplexNoise from 'simplex-noise';
import { GUI } from 'dat.gui';
class Particle {
	x;
	y;
	color;
	pastX;
	pastY;
	constructor(x?, y?, color?) {
		this.x = x || 0;
		this.y = y || 0;
		this.color = color || new HSLA(0, 0, 0, 0);
		this.pastX = this.x;
		this.pastY = this.y;
	}
}

class HSLA {
	h;
	s;
	l;
	a;
	constructor(h, s, l, a) {
		this.h = h || 0;
		this.s = s || 0;
		this.l = l || 0;
		this.a = a || 0;
	}
}

HSLA.prototype.toString = function() {
	return 'hsla(' + this.h + ',' + this.s * 100 + '%,' + this.l * 100 + '%,' + this.a + ')';
};
export class EffectComponent extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	configs = {
		backgroundColor: '#eee9e9',
		particleNum: 1000,
		step: 5,
		base: 1000,
		zInc: 0.001
	};

	canvas;
	context;
	screenWidth;
	screenHeight;
	centerX;
	centerY;
	particles: any = [];
	hueBase = 0;
	simplexNoise;
	zoff = 0;
	gui;
    _that
	componentDidMount() {
		window.requestAnimationFrame = (() => {
			return (
				window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				function(callback) {
					window.setTimeout(callback, 1000 / 60);
				}
			);
		})();

	}

	init() {
		this.canvas = document.getElementById('c');

		// window.addEventListener('resize', this.onWindowResize, false);
		this.onWindowResize(null);

		for (let i = 0, len = this.configs.particleNum; i < len; i++) {
			this.initParticle((this.particles[i] = new Particle()));
		}

		this.simplexNoise = new SimplexNoise();

		this.canvas.addEventListener('click', this.onCanvasClick, false);

        this.gui = new GUI();
		this.gui.add(this.configs, 'step', 1, 10);
		this.gui.add(this.configs, 'base', 500, 3000);
		this.gui.add(this.configs, 'zInc', 0.0001, 0.01);
		this.gui.close();

		this.update();
	}
	onWindowResize(e) {
		this.screenWidth = this.canvas.width = window.innerWidth;
		this.screenHeight = this.canvas.height = window.innerHeight;

		this.centerX = this.screenWidth / 2;
		this.centerY = this.screenHeight / 2;

		this.context = this.canvas.getContext('2d');
		this.context.lineWidth = 0.3;
		this.context.lineCap = this.context.lineJoin = 'round';
	}

	onCanvasClick(e) {
		this.context.save();
		this.context.globalAlpha = 0.8;
		this.context.fillStyle = this.configs.backgroundColor;
		this.context.fillRect(0, 0, this.screenWidth, this.screenHeight);
		this.context.restore();

		this.simplexNoise = new SimplexNoise();
	}
	getNoise(x, y, z) {
		const octaves = 4;
		const fallout = 0.5;
		let amp = 1,
			f = 1,
			sum = 0,
			i;

		for (i = 0; i < octaves; ++i) {
			amp *= fallout;
			sum += amp * (this.simplexNoise.noise3D(x * f, y * f, z * f) + 1) * 0.5;
			f *= 2;
		}

		return sum;
	}

	initParticle(p) {
		p.x = p.pastX = this.screenWidth * Math.random();
		p.y = p.pastY = this.screenHeight * Math.random();
		p.color.h = this.hueBase + Math.atan2(this.centerY - p.y, this.centerX - p.x) * 180 / Math.PI;
		p.color.s = 1;
		p.color.l = 0.5;
		p.color.a = 0;
	}

	update() {
		const step = this.configs.step;
		const base = this.configs.base;
		let  p, angle
        this.context = this.canvas.getContext('2d');
		this.context.lineWidth = 0.3;
		this.context.lineCap = this.context.lineJoin = 'round';
		for (let i = 0; i< this.particles.length; i++) {
			p = this.particles[i];

			p.pastX = p.x;
			p.pastY = p.y;

			angle = Math.PI * 6 * this.getNoise(p.x / base * 1.75, p.y / base * 1.75, this.zoff);
			p.x += Math.cos(angle) * step;
			p.y += Math.sin(angle) * step;

			if (p.color.a < 1) p.color.a += 0.003;
            //  console.log(p.color)
            this.createCanvas(p)

			if (p.x < 0 || p.x > this.screenWidth || p.y < 0 || p.y > this.screenHeight) {
				this.initParticle(p);
			}
		}

		this.hueBase += 0.1;
		this.zoff += this.configs.zInc;
    
	requestAnimationFrame(this.update.bind(this));
    }
    createCanvas(p) {
            this.context.beginPath();
            this.context.strokeStyle = p.color.toString();
            this.context.moveTo(p.pastX, p.pastY);
            this.context.lineTo(p.x, p.y);
            this.context.stroke();
        
    }

	/**
 * Particle
 */

	render() {
		return (
				<canvas
                
					id="c"
					style={{
						position: 'absolute',
						top: '0',
						left: '0'
					}}
				/>
		);
	}
}
