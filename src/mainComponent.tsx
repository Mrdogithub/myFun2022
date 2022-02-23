import React from 'react';
import { PreloadComponent } from './preloadComponent';

// demo intro
import demoIntroSection1Bg from './assets/images/demoIntroSection1Bg.png';
import demoIntroSection1Bg3 from './assets/images/demoIntroSection1Bg3.png';
import demoIntroSection3Bg1 from './assets/images/demoIntroSection3Bg1.png';

import homePrivacy_1_small from './assets/images/homePrivacy_1_small.png';
import homeConfort_2_small from './assets/images/homeConfort_2_small.png';
import homeLeisure_3_small from './assets/images/homeLeisure_3_small.png';
import homeUnique_4_small from './assets/images/homeUnique_4_small.png';

import privacySmallTitle from './assets/images/privacySmallTitle.svg';
import privacySmallIndex from './assets/images/privacySmallIndex.svg';

import comfortSmallTitle from './assets/images/comfortSmallTitle.svg';
import comfortSmallIndex from './assets/images/comfortSmallIndex.svg';

import leisureSmallTitle from './assets/images/leisureSmallTitle.svg';
import leisureSmallIndex from './assets/images/leisureSmallIndex.svg';

import uniqueSmallTitle from './assets/images/uniqueSmallTitle.svg';
import uniqueSmallIndex from './assets/images/uniqueSmallIndex.svg';

import videoPRemoteVhauffeur from './assets/remoteVhauffeur.webm';
import Video01_AdvancedDimmableWindow from '../../assets/Video01_AdvancedDimmableWindow.mp4';
import Video02_DigitalSealInsert from '../../assets/Video02_DigitalSealInsert.mp4';
import Video16_FrunkBar from '../../assets/Video16_FrunkBar.mp4';

import section2IndeImage from './assets/Video01_AdvancedDimmableWindow/Video01_AdvancedDimmableWindow0.jpg';
import sectoin_4_phoneVideo from './assets/VideoP_RemoteVhauffeur/VideoP_RemoteVhauffeur0.jpg';

import privacySection5ImageSequence from './assets/Video02_DigitalSealInsert/Video02_DigitalSealInsert0.jpg';
import privacy_section_3_bg from './assets/images/privacy_section_3_bg.png';
import privacy_section_7_bg from './assets/images/privacy_section_7_bg.png';
import firstComfortSection1ImageSequence from './assets/Video04_TransitionComfort/Video04_TransitionComfort0.jpg';
import lastComfortSection1ImageSequence from './assets/Video04_TransitionComfort/Video04_TransitionComfort100.jpg';
import firstLeisureSection2ImageSequence from './assets/Video16_FrunkBar/Video16_FrunkBar0.jpg';
import firstLeisureSection1ImageSequence from './assets/images/leisureSection1Bg.png';
import firstMagaziImageSequneence from './assets/Video13_Magazine/Video13_Magazine0.png';
import comfortBg_4_new from './assets/images/comfortBg_4_new.png';
import comfortSection2Bg2 from './assets/images/comfortSection2Bg2.png';
import comfortSection2Bg3 from './assets/images/comfortSection2Bg3.png';
import comfortSection4Bg2 from './assets/images/comfortSection4Bg2.png';
import comfortSection4Bg3 from './assets/images/comfortSection4Bg3.png';
import comfortSection4Bg from './assets/images/comfortSection4Bg.png';
import comfortSection6BG from './assets/images/comfortSection6BG.png';
import comfortSection7BG from './assets/images/comfortSection7BG.png';
import comfortSection8Bg from './assets/images/comfortSection8Bg.png';
import comfortSection8Bg2 from './assets/images/comfortSection8Bg2.png';
import comfortSection9Bg1 from './assets/images/comfortSection9Bg1.png';
import comfortSection9Bg2 from './assets/images/comfortSection9Bg2.png';
import comfortSection9Bg3 from './assets/images/comfortSection9Bg3.png';
import comfortSection9Bg4 from './assets/images/comfortSection9Bg4.png';
import comfortSection5BG1 from './assets/images/comfortSection5BG1.png';
import leisureSection3Bg1 from './assets/images/leisureSection3Bg1.png';
import leisureSection3Bg2 from './assets/images/leisureSection3Bg2.png';
import leisureSection4Bg4 from './assets/images/leisureSection4Bg4.png';
import leisureSection4Bg3 from './assets/images/leisureSection4Bg3.png';
import leisureSection5Bg1 from './assets/images/leisureSection5Bg1.png';
import leisureSection6Bg1 from './assets/images/leisureSection6Bg1.png';
import leisureSection6Bg2 from './assets/images/leisureSection6Bg2.png';
import leisureSection6Bg3 from './assets/images/leisureSection6Bg3.png';
import uniqueSection2Bg1 from './assets/images/uniqueSection2Bg1.png';

export class MainComponent extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			isResourceLoaded: false,
			loadInProgress: 0,
			images: []
		};
	}
	isPreload = true;
	privacy: any = [];
	advancedDimmableWindow: any = [];
	digitalSealInsert: any = [];
	comfort: any = [];
	magazine: any = [];
	leisureImges: any = [];
	leisure: any = [];
	unique: any = [];
	frunkBarImges: any = [];
	digitalSealRotate: any = [];
	videoPRemoteVhauffeurUrl:any = '';
	canvasImages:any;
	imageLength = 800;
	componentDidMount() {
		this.loadFont();
		this.loadPrivacy();
		this.loadComfort();
		this.loadMagazine();
		// this.loadFrunkBarImges();
		this.loadLeisure();
		this.loadUnique();
		this.loadDigitalSealRotate();
		this.loadImages();
		// this.loadadvancedDimmableWindow();
		// this.loadDigitalSealInsert();
		this.loadCanvasImages();
		this.loadeDemoInfoBg();
	}

	
	loadPrivacy() {
		/* privacy 首页序列帧 */

		for (let i = 0; i <= 100; i++) {
			const img = new Image();
			img.src = require(`./assets/Video00(ImageSequence)/Video00_TransitionPrivacy${i}.jpg`);
			this.privacy.push(img);
		}
	}

	loadComfort() {
		/* comfort  首页序列帧 */

		for (let i = 0; i <= 100; i++) {
			const img = new Image();
			img.src = require(`./assets/Video04_TransitionComfort/Video04_TransitionComfort${i}.jpg`);
			this.comfort.push(img);
		}
	}

	loadMagazine() {
		for (let i = 0; i <= 120; i++) {
			// const img = new Image();
			// img.src = require(`./assets/Video13_Magazine/Video13_Magazine${i}.png`);
			this.magazine.push( require(`./assets/Video13_Magazine/Video13_Magazine${i}.png`));
		}
	}

	// loadFrunkBarImges() {
	// 	/* leisure section2 序列帧 */

	// 	for (let i = 0; i <= 50; i++) {
	// 		const img = new Image();
	// 		img.src = require(`./assets/Video16_FrunkBar/Video16_FrunkBar${i}.jpg`);
	// 		this.frunkBarImges.push(img);
	// 	}
	// }

	loadUnique() {
		/* unique 首页序列帧 */

		for (let i = 0; i <= 100; i++) {
			const img = new Image();
			img.src = require(`./assets/Video20_TransitionUnique/Video20_TransitionUnique${i}.jpg`);
			this.unique.push(img);
		}
	}
	loadLeisure() {
		/* leisure 首页序列帧 */

		for (let i = 0; i <= 100; i++) {
			const img = new Image();
			img.src = require(`./assets/Video15_TransitionLeisure/Video15_TransitionLeisure${i}.jpg`);
			this.leisure.push(img);
		}
	}
	loadDigitalSealRotate() {
		for (let i = 0; i <= 100; i++) {
			const img = new Image();
			img.src = require(`./assets/Video02b_DigitalSealRotate_1/Video02b_DigitalSealRotate${i}.jpg`);
			this.digitalSealRotate.push(require(`./assets/Video02b_DigitalSealRotate_1/Video02b_DigitalSealRotate${i}.jpg`));
		}
	}
	loadCanvasImages(){
		this.canvasImages = {
			demoIntroSection1Bg,
			demoIntroSection1Bg3,
			demoIntroSection3Bg1,
			homePrivacy_1_small,
			homeConfort_2_small,
			homeLeisure_3_small,
			homeUnique_4_small,
			privacySmallTitle,
			privacySmallIndex,
			comfortSmallTitle,
			comfortSmallIndex,
			leisureSmallTitle,
			leisureSmallIndex,
			uniqueSmallTitle,
			uniqueSmallIndex,
			videoPRemoteVhauffeur,
			section2IndeImage,
			sectoin_4_phoneVideo,
			privacySection5ImageSequence,
			privacy_section_3_bg,
			privacy_section_7_bg,
			firstComfortSection1ImageSequence,
			lastComfortSection1ImageSequence,
			firstLeisureSection2ImageSequence,
			firstLeisureSection1ImageSequence,
			firstMagaziImageSequneence,
			comfortBg_4_new,
			comfortSection2Bg2,
			comfortSection2Bg3,
			comfortSection4Bg2,
			comfortSection4Bg3,
			comfortSection4Bg,
			comfortSection6BG,
			comfortSection7BG,
			comfortSection8Bg,
			comfortSection8Bg2,
			comfortSection9Bg1,
			comfortSection9Bg2,
			comfortSection9Bg3,
			comfortSection9Bg4,
			comfortSection5BG1,
			leisureSection3Bg1,
			leisureSection3Bg2,
			leisureSection4Bg4,
			leisureSection4Bg3,
			leisureSection5Bg1,
			leisureSection6Bg1,
			leisureSection6Bg2,
			leisureSection6Bg3,
			uniqueSection2Bg1
		}

		Object.keys(this.canvasImages).forEach(item=>{
			const image = new Image();
			image.src = this.canvasImages[item];
			this.canvasImages[item] = image;
			// image.onload = ()=>{
			// 	this.canvasImages[item] = image;
			// 	console.log(this.canvasImages)
			// }
		})
	}

	loadeDemoInfoBg () {

// 		import demoIntroSection1Bg from './assets/images/demoIntroSection1Bg.png';
// import demoIntroSection1Bg3 from './assets/images/demoIntroSection1Bg3.png';
// import demoIntroSection3Bg1 from './assets/images/demoIntroSection3Bg1.png';
		const image = new Image();
			image.src =  require(`./assets/images/demoIntroSection1Bg.png`);
			this.canvasImages = image;
			// image.onload = ()=>{
			// 	this.canvasImages[item] = image;
			// 	console.log(this.canvasImages)
			// }
	}
	loadBgImages() {
		const bgImages: any = [
			demoIntroSection1Bg,
			demoIntroSection1Bg3,
			demoIntroSection3Bg1,
			homePrivacy_1_small,
			homeConfort_2_small,
			homeLeisure_3_small,
			homeUnique_4_small,
			privacySmallTitle,
			privacySmallIndex,
			comfortSmallTitle,
			comfortSmallIndex,
			leisureSmallTitle,
			leisureSmallIndex,
			uniqueSmallTitle,
			uniqueSmallIndex,
			videoPRemoteVhauffeur,
			section2IndeImage,
			sectoin_4_phoneVideo,
			privacySection5ImageSequence,
			privacy_section_3_bg,
			privacy_section_7_bg,
			firstComfortSection1ImageSequence,
			lastComfortSection1ImageSequence,
			firstLeisureSection2ImageSequence,
			firstLeisureSection1ImageSequence,
			firstMagaziImageSequneence,
			comfortBg_4_new,
			comfortSection2Bg2,
			comfortSection2Bg3,
			comfortSection4Bg2,
			comfortSection4Bg3,
			comfortSection4Bg,
			comfortSection6BG,
			comfortSection7BG,
			comfortSection8Bg,
			comfortSection8Bg2,
			comfortSection9Bg1,
			comfortSection9Bg2,
			comfortSection9Bg1,
			comfortSection9Bg3,
			comfortSection9Bg4,
			comfortSection5BG1,
			leisureSection3Bg1,
			leisureSection3Bg2,
			leisureSection4Bg4,
			leisureSection4Bg3,
			leisureSection5Bg1,
			leisureSection6Bg1,
			leisureSection6Bg2,
			leisureSection6Bg3,
			uniqueSection2Bg1
		];

		
		console.log(this.canvasImages+ 'sss')
		const imagesOther = [].concat(
				bgImages,
				//this.privacy,
			
				this.magazine,
				// this.leisureImges,
				this.digitalSealRotate,
				// this.frunkBarImges,
				// this.advancedDimmableWindow,
				this.digitalSealInsert
			);

			imagesOther.forEach((v: any, index: any, arr: any) => {
				const image = new Image();
				image.src = v
				image.onload = () => {
					arr.successLength = (arr.successLength || 0) + 1;
					const status = Math.ceil(arr.successLength / this.imageLength * 100);
					// this.setState({ isResourceLoaded: true });
					// if (status > 10) {
					// 	this.isPreload = true;
					// }
					// setTimeout(() => {
					// 	this.setState({ loadInProgress: status });
					// }, 100);
	
					// if (status >= 99) {
					// 	this.setState({ isResourceLoaded: true });
					// 	this.setState({ loadInProgress: 100 });
					// 	this.isPreload = false;
					// 	return;
					// }
				};
			
		});
		const images = [].concat(
		//	bgImages,
			this.privacy,
			this.comfort,
			this.leisure,
			this.unique,
			// this.magazine,
			// this.leisureImges,
			//this.digitalSealRotate
			// this.frunkBarImges,
			// this.advancedDimmableWindow,
			// this.digitalSealInsert
		);
		images.forEach((v: any, index: any, arr: any) => {
			
			v.onload = () => {
				arr.successLength = (arr.successLength || 0) + 1;
				const status = Math.ceil(arr.successLength / arr.length * 100);
				this.setState({ isResourceLoaded: true });
				if(status >10) {
					this.isPreload = true
				}
				setTimeout(() => {
					this.setState({ loadInProgress: status });
				}, 100);
				
				if(status>=99) {
					this.setState({ isResourceLoaded: true });
					this.setState({ loadInProgress: 100 });
					this.isPreload = false;
					return
				}

			};
			
		});
	}
	loadImage(url) {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.src = url;
			img.onload = () => resolve(img);
			img.onerror = reject;
		});
	}
	async loadImages() {
		this.loadBgImages();
	}
	loadFont() {
		(document as any).fonts.ready.then((fontFaceSet: any) => {
			console.log(fontFaceSet);
		});
	}
	render() {
		return (
			<PreloadComponent
				isPreload={this.isPreload}
				privacyImages={this.privacy}
				comfortImages={this.comfort}
				leisureImages={this.leisure}
				uniqueImages={this.unique}
				magazineImages={this.magazine}
				frunkBarImges={this.frunkBarImges}
				canvasImages = {this.canvasImages}
				videoPRemoteVhauffeur = {this.videoPRemoteVhauffeurUrl}
				advancedDimmableWindowImages={this.advancedDimmableWindow}
				digitalSealRotateImages={this.digitalSealRotate}
				digitalSealInsertImages={this.digitalSealInsert}
				isResourceLoaded={this.state.isResourceLoaded}
				loadInProgress={this.state.loadInProgress}
				images={this.state.images}
				{...this.props}
			/>
		);
	}
}
