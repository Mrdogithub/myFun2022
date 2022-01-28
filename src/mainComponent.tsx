import React from 'react';
import { PreloadComponent } from './preloadComponent';

import comfortBg_1 from './assets/images/comfortBg_1.png';
import comfortBg_2 from './assets/images/comfortBg_2.png';
import comfortBg_3 from './assets/images/comfortBg_3.png';
import comfortBg_4 from './assets/images/comfortBg_4_new.png';
import comfortBg_5 from './assets/images/comfortBg_5.png';
import comfortBg_6 from './assets/images/comfortBg_6_1.png';
import comfortBg_7 from './assets/images/comfortBg_7.png';
import comfortBg_8 from './assets/images/comfortBg_8.png';
// import comfortBg_9 from './assets/images/comfortBg_9.png';
import comfortBg_10 from './assets/images/comfortBg_10.png';
import comfortBg_11 from './assets/images/comfortBg_11_1.png';
import comfortBg_12 from './assets/images/comfortBg_12.png';

import introBg_1 from './assets/images/introBg_1.png';
import introBgMask from './assets/images/introBgMask.png';

export class MainComponent extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			isResourceLoaded: false,
			loadInProgress: 0,
			images: []
		};
	}
	componentDidMount() {
		this.loadImages();
	}

	async loadImages() {
		await [
			comfortBg_1,
			comfortBg_2,
			comfortBg_3,
			comfortBg_4,
			comfortBg_5,
			comfortBg_6,
			comfortBg_7,
			comfortBg_8,
			// comfortBg_9,
			comfortBg_10,
			comfortBg_11,
			comfortBg_12,
			introBg_1,
			introBgMask
		].forEach((v: any, index: any, arr: any) => {
			const image = new Image();
			image.src = v;
			image.onload = () => {
				arr.successLength = (arr.successLength || 0) + 1;
				const status = Math.round(arr.successLength / arr.length) * 100;

				setTimeout(() => {
					this.setState({ loadInProgress: status });
				}, 1000);

				if (status === 100) {
					this.setState({ images: arr });
				}
			};
		});

		this.loadFont();
	}
	async loadFont() {
		(document as any).fonts.ready.then((fontFaceSet: any) => {
			this.setState({ loadInProgress: 1 });
			setTimeout(() => {
                
				this.setState({ isResourceLoaded: true });
			}, 1500);
		});
	}
	render() {
		return (
			<PreloadComponent
				isResourceLoaded={this.state.isResourceLoaded}
				loadInProgress={this.state.loadInProgress}
				images={this.state.images}
				{...this.props}
			/>
		);
	}
}
