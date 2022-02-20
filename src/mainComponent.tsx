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
import homePrivacy_1 from './assets/Video00(ImageSequence)/Video00_TransitionPrivacy0.jpg';
import homeConfort_2 from './assets/images/homeConfort_2.png';
import homeLeisure_3 from './assets/images/homeLeisure_3.png';
import homeUnique_4 from './assets/images/homeUnique_4.png';

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
import unqiueSection2Bg1 from './assets/images/unqiueSection2Bg1.png';

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
	advancedDimmableWindow:any = [];
	digitalSealInsert:any = [];
	comfort: any = [];
	magazine: any = [];
	leisureImges: any = [];
	leisure: any = [];
	unique: any = [];
	frunkBarImges:any = [];
	digitalSealRotate: any = [];
	componentDidMount() {
		this.loadFont();
		this.loadPrivacy();
		this.loadComfort();
		this.loadMagazine();
		this.loadFrunkBarImges();
		this.loadLeisure();
		this.loadUnique();
		this.loadDigitalSealRotate();
		this.loadImages();
		this.loadadvancedDimmableWindow();
		this.loadDigitalSealInsert();
	}
	
	

	loadDigitalSealInsert() {
		/* privacy 首页序列帧 */

		for (let i = 0; i <= 40; i++) {
			this.digitalSealInsert.push(require(`./assets/Video02_DigitalSealInsert/Video02_DigitalSealInsert${i}.jpg`));
		}
	}

	loadadvancedDimmableWindow() {
		/* privacy 首页序列帧 */

		for (let i = 0; i <= 269; i++) {
			this.advancedDimmableWindow.push(require(`./assets/Video01_AdvancedDimmableWindow/Video01_AdvancedDimmableWindow${i}.jpg`));
		}
	}
	loadPrivacy() {
		/* privacy 首页序列帧 */

		for (let i = 0; i <= 100; i++) {
			this.privacy.push(require(`./assets/Video00(ImageSequence)/Video00_TransitionPrivacy${i}.jpg`));
		}
	}

	loadComfort() {
		/* comfort  首页序列帧 */

		for (let i = 0; i <= 100; i++) {
			this.comfort.push(require(`./assets/Video04_TransitionComfort/Video04_TransitionComfort${i}.jpg`));
		}
	}

	loadMagazine() {
		for (let i = 0; i <= 120; i++) {
			this.magazine.push(require(`./assets/Video13_Magazine/Video13_Magazine${i}.png`));
		}
	}

	loadFrunkBarImges() {
		/* leisure section2 序列帧 */

		for (let i = 0; i <= 50; i++) {
			this.frunkBarImges.push(require(`./assets/Video16_FrunkBar/Video16_FrunkBar${i}.jpg`));
		}
	}

	loadUnique() {
		/* unique 首页序列帧 */

		for (let i = 0; i <= 100; i++) {
			this.unique.push(require(`./assets/Video20_TransitionUnique/Video20_TransitionUnique${i}.jpg`));
		}
	}
	loadLeisure() {
		/* leisure 首页序列帧 */

		for (let i = 0; i <= 100; i++) {
			this.leisure.push(require(`./assets/Video15_TransitionLeisure/Video15_TransitionLeisure${i}.jpg`));
		}
	}
	loadDigitalSealRotate() {
		for (let i = 0; i <= 100; i++) {
			this.digitalSealRotate.push(require(`./assets/Video02b_DigitalSealRotate_1/Video02b_DigitalSealRotate${i}.jpg`));
		}
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
			homePrivacy_1,
			homeConfort_2,
			homeLeisure_3,
			homeUnique_4,
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
			unqiueSection2Bg1
		];

		const images = [].concat(
			bgImages,
			this.privacy,
			this.comfort,
			this.leisure,
			this.unique,
			this.magazine,
			this.leisureImges,
			this.digitalSealRotate,
			this.frunkBarImges,
			this.advancedDimmableWindow,
			this.digitalSealInsert
		);
		images.forEach((v: any, index: any, arr: any) => {
			const image = new Image();
			image.src = v;

			image.onload = () => {
				arr.successLength = (arr.successLength || 0) + 1;
				const status = Math.ceil(arr.successLength / arr.length * 100);
				this.setState({ isResourceLoaded: true });

				setTimeout(() => {
					if(status >50) {
						this.isPreload = true
					}
					if(status<90){

						this.setState({ loadInProgress: status });
					}

					if(status>90) {
						let _step = 91
						const _t = setInterval(()=>{
							this.setState({ loadInProgress: _step++ });
							if(_step == 100) {
								this.setState({ isResourceLoaded: true });
								this.isPreload = false;
								clearInterval(_t);
							}
						},5000)
					}
				}, 100);

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
			isPreload = {this.isPreload}
				privacyImages={this.privacy}
				comfortImages={this.comfort}
				leisureImages={this.leisure}
				uniqueImages={this.unique}
				magazineImages={this.magazine}
				frunkBarImges = {this.frunkBarImges}
				advancedDimmableWindowImages = {this.advancedDimmableWindow}
				digitalSealRotateImages={this.digitalSealRotate}
				digitalSealInsertImages = {this.digitalSealInsert}
				isResourceLoaded={this.state.isResourceLoaded}
				loadInProgress={this.state.loadInProgress}
				images={this.state.images}
				{...this.props}
			/>
		);
	}
}
