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
import privacy_section_8_bg from './assets/images/privacy_section_8_bg.png';
import firstPrivactSection6ImageSequence from './assets/Video02b_DigitalSealRotate_1/Video02b_DigitalSealRotate0.jpg';
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
	componentDidMount() {
		this.loadImages();
	}

	async loadImages() {
		await [
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
			privacy_section_8_bg,
			firstPrivactSection6ImageSequence,
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
