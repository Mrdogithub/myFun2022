import React, { useEffect } from 'react';
import 'react-slider-light/lib/index.css';
import { SubMenu } from '../../components/subMenu/subMenuComponent';
import { subMenuList } from '../../config/subMenuList';
import { EffectComponent } from '../../components/effect/effectComponent';
import CanvasImageSequence from 'react-canvas-image-sequence';
// import {IMPP} from '../../assets/js/nice.js'
// demo intro
import demoIntroSection1Bg from '../../assets/images/demoIntroSection1Bg.png';
import demoIntroSection1Bg3 from '../../assets/images/demoIntroSection1Bg3.png';
import demoIntroSection3Bg1 from '../../assets/images/demoIntroSection3Bg1.png';

import homePrivacy_1_small from '../../assets/images/homePrivacy_1_small.png';
import homeConfort_2_small from '../../assets/images/homeConfort_2_small.png';
import homeLeisure_3_small from '../../assets/images/homeLeisure_3_small.png';
import homeUnique_4_small from '../../assets/images/homeUnique_4_small.png';

import privacySmallTitle from '../../assets/images/privacySmallTitle.svg';
import privacySmallIndex from '../../assets/images/privacySmallIndex.svg';

import comfortSmallTitle from '../../assets/images/comfortSmallTitle.svg';
import comfortSmallIndex from '../../assets/images/comfortSmallIndex.svg';

import leisureSmallTitle from '../../assets/images/leisureSmallTitle.svg';
import leisureSmallIndex from '../../assets/images/leisureSmallIndex.svg';

import uniqueSmallTitle from '../../assets/images/uniqueSmallTitle.svg';
import uniqueSmallIndex from '../../assets/images/uniqueSmallIndex.svg';

import videoPRemoteVhauffeur from '../../assets/remoteVhauffeur.webm';
import homePrivacy_1 from '../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy0.jpg';
import homeConfort_2 from '../../assets/images/homeConfort_2.png';
import homeLeisure_3 from '../../assets/images/homeLeisure_3.png';
import homeUnique_4 from '../../assets/images/homeUnique_4.png';

import section2IndeImage from '../../assets/Video01_AdvancedDimmableWindow/Video01_AdvancedDimmableWindow0.jpg';
import privacySection3PhoneVideo from '../../assets/VideoP_RemoteVhauffeur/VideoP_RemoteVhauffeur0.jpg';

import privacySection5ImageSequence from '../../assets/Video02_DigitalSealInsert/Video02_DigitalSealInsert0.jpg';
import privacy_section_3_bg from '../../assets/images/privacy_section_3_bg.png';
import privacy_section_7_bg from '../../assets/images/privacy_section_7_bg.png';
import firstPrivactSection6ImageSequence from '../../assets/Video02b_DigitalSealRotate_1/Video02b_DigitalSealRotate0.jpg';
import firstComfortSection1ImageSequence from '../../assets/Video04_TransitionComfort/Video04_TransitionComfort0.jpg';
import lastComfortSection1ImageSequence from '../../assets/Video04_TransitionComfort/Video04_TransitionComfort100.jpg';
import firstLeisureSection2ImageSequence from '../../assets/Video16_FrunkBar/Video16_FrunkBar0.jpg';
import firstLeisureSection1ImageSequence from '../../assets/images/leisureSection1Bg.png';
import firstMagaziImageSequneence from '../../assets/Video13_Magazine/Video13_Magazine0.png';
import comfortBg_4_new from '../../assets/images/comfortBg_4_new.png';
import comfortSection2Bg2 from '../../assets/images/comfortSection2Bg2.png';
import comfortSection2Bg3 from '../../assets/images/comfortSection2Bg3.png';
import comfortSection4Bg2 from '../../assets/images/comfortSection4Bg2.png';
import comfortSection4Bg3 from '../../assets/images/comfortSection4Bg3.png';
import comfortSection4Bg from '../../assets/images/comfortSection4Bg.png';
import comfortSection6BG from '../../assets/images/comfortSection6BG.png';
import comfortSection7BG from '../../assets/images/comfortSection7BG.png';
import comfortSection8Bg from '../../assets/images/comfortSection8Bg.png';
import comfortSection8Bg2 from '../../assets/images/comfortSection8Bg2.png';
import comfortSection9Bg1 from '../../assets/images/comfortSection9Bg1.png';
import comfortSection9Bg2 from '../../assets/images/comfortSection9Bg2.png';
import comfortSection9Bg3 from '../../assets/images/comfortSection9Bg3.png';
import comfortSection9Bg4 from '../../assets/images/comfortSection9Bg4.png';
import comfortSection5BG1 from '../../assets/images/comfortSection5BG1.png';
import leisureSection3Bg1 from '../../assets/images/leisureSection3Bg1.png';
import leisureSection3Bg2 from '../../assets/images/leisureSection3Bg2.png';
import leisureSection4Bg4 from '../../assets/images/leisureSection4Bg4.png';
import leisureSection4Bg3 from '../../assets/images/leisureSection4Bg3.png';
import leisureSection5Bg1 from '../../assets/images/leisureSection5Bg1.png';
import leisureSection6Bg1 from '../../assets/images/leisureSection6Bg1.png';
import leisureSection6Bg2 from '../../assets/images/leisureSection6Bg2.png';
import leisureSection6Bg3 from '../../assets/images/leisureSection6Bg3.png';
import unqiueSection2Bg1 from '../../assets/images/unqiueSection2Bg1.png';

import { Info } from '../../components/info/infoComponent';
import {
	Player,
	ControlBar,
	PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
	ReplayControl, // 后退按钮
	ForwardControl, // 前进按钮
	CurrentTimeDisplay,
	TimeDivider,
	PlaybackRateMenuButton, // 倍速播放选项
	VolumeMenuButton
} from 'video-react';

import { ifStatement } from '@babel/types';
import { val, height } from 'dom7';
import { match } from 'assert';

const MAX_IMAGES = [
	homePrivacy_1,
	homeConfort_2,
	homeLeisure_3,
	homeUnique_4
];

export class HomeComponentIndex3 extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.effectComponent = React.createRef();
		this.homePageImages = React.createRef();
		this.demoIntroSection1Wrapper = React.createRef();
		this.demoIntroSection2Wrapper = React.createRef();
		this.demoIntroSection3Wrapper = React.createRef();
		this.box = React.createRef();
		this.video = React.createRef();
		this.privacySection1WrapperLeftContent = React.createRef();
		this.bgLine = React.createRef();
		this.privacySection1Wrapper = React.createRef();
		this.privacyContent = React.createRef();
		this.homePageCanvasRef0 = React.createRef();
		this.homePageCanvasRef1 = React.createRef();
		this.homePageCanvasRef2 = React.createRef();
		this.homePageCanvasRef3 = React.createRef();
		this.privacySection2Wrapper = React.createRef();
		this.section_2_colorBg = React.createRef();
		this.section_2_image = React.createRef();
		this.section_2_bgLine = React.createRef();
		this.privacySection2leftContent = React.createRef();
		this.privacySection3Wrapper = React.createRef();
		this.privacySection3image = React.createRef();
		this.privacySection3leftContent = React.createRef();
		this.privacySection3bgline = React.createRef();
		this.privacySection3colorBg = React.createRef();
		this.privacySection3Text = React.createRef();
		this.privacySection3Title = React.createRef();

		this.privacySection4Wrapper = React.createRef();
		this.section_4_image = React.createRef();
		this.section_4_leftContent = React.createRef();
		this.section_4_bgline = React.createRef();
		this.section_4_colorBg = React.createRef();
		this.privacySection3PhoneVideo = React.createRef();

		this.privacySection5Wrapper = React.createRef();
		this.privacySection5title = React.createRef();
		this.privacySection5titleBg = React.createRef();
		this.privacySection5bgline = React.createRef();

		this.privacySection6Wrapper = React.createRef();
		this.privacySection6bgline = React.createRef();
		this.privacySection6CanvasRef = React.createRef();

		this.privacySection7Wrapper = React.createRef();
		this.privacySection7bg = React.createRef();
		this.privacySection7text = React.createRef();
		this.privacySection7bgline = React.createRef();
		this.privacySection7bgMask = React.createRef();
		this.privacySection7SubMenu = React.createRef();
		this.privacySection8Wrapper = React.createRef();
		this.privacySection8bgPlaceHolder = React.createRef();
		this.privacySection8text = React.createRef();
		this.privacySection8title = React.createRef();
		this.privacySection8bg = React.createRef();
		this.privacySection8image = React.createRef();
		this.privacySection6text1 = React.createRef();
		this.privacySection6text2 = React.createRef();
		this.privacySection6text3 = React.createRef();
		this.privacySection6text4 = React.createRef();

		this.comfortSection1Wrapper = React.createRef();
		this.comfortSection1CanvasRef = React.createRef();
		this.comfortSection1Text = React.createRef();
		this.comfortSection1Text2 = React.createRef();
		this.comfortSection1BgLine = React.createRef();
		this.comfortSection1Title = React.createRef();

		this.comfortSection2Wrapper = React.createRef();
		this.comfortSection2TextBox05 = React.createRef();
		this.comfortSection2TextBox05b = React.createRef();
		this.comfortSection2Box05 = React.createRef();
		this.comfortSection2BgLine = React.createRef();
		this.comfortSection2Desc = React.createRef();
		this.comfortSection2SplitterMoveHanlder = React.createRef();
		this.comfortSection2Splitter = React.createRef();

		this.comfortSection2SplitterMoveHanlder2 = React.createRef();
		this.comfortSection2Splitter2 = React.createRef();
		this.comfortSection3Wrapper = React.createRef();
		this.comfortSection3Title = React.createRef();
		this.comfortSection3Text = React.createRef();
		this.comfortSection3BgLine = React.createRef();
		this.comfortSection3Tab06 = React.createRef();

		this.comfortSection4Wrapper = React.createRef();
		this.comfortSection4Box07 = React.createRef();

		this.comfortSection4Text2 = React.createRef();
		this.comfortSection4Text1 = React.createRef();
		this.comfortSection4Image2 = React.createRef();
		this.comfortSection4Image1 = React.createRef();
		this.comfortSection4Hand = React.createRef();

		this.comfortSection5Wrapper = React.createRef();
		this.comfortSection5Title = React.createRef();

		this.comfortSection6Wrapper = React.createRef();
		this.comfortSectoin6Title = React.createRef();
		this.comfortSection6Text = React.createRef();

		this.comfortSection7Wrapper = React.createRef();
		this.comfortSection7Text = React.createRef();
		//this.comfortSection7LeftBg = React.createRef();
		this.comfortSection7BG = React.createRef();
		this.comfortSection8Wrapper = React.createRef();
		this.comfortSection8Bg = React.createRef();
		this.comfortSection8Video = React.createRef();
		this.comfortSection8Bg2 = React.createRef();
		this.comfortSection8ClickMagamizeMockButton = React.createRef();
		this.comfortSection9Wrapper = React.createRef();
		this.comfortSection10EndWrapper = React.createRef();
		this.comfortSection9Bg1 = React.createRef();

		this.comfortSectoin9EndReturnHomeTitle = React.createRef();
		this.comfortSectoin9EndReturnHomeText = React.createRef();

		this.comfortSection9LeftBg = React.createRef();
		this.comfortSection9BgRight = React.createRef();
		this.comfortSection9Mask2 = React.createRef();
		this.comfortSection9Mask1 = React.createRef();
		this.comfortSectoin9EndReturnHome = React.createRef();
		this.comfortSection1CanvasRef = React.createRef();
		this.comfortSection8CanvasRef = React.createRef();
		this.comfortSection8BgPart1 = React.createRef();
		this.mask1 = React.createRef();
		this.mask2 = React.createRef();

		this.leisureHomeContent = React.createRef();
		this.leisureSection1Title = React.createRef();
		this.leisureSection1ClickTab = React.createRef();
		this.leisureSection1Wrapper = React.createRef();
		this.leisureSection1CanvasRef = React.createRef();
		this.leisureSection2CanvasRefWrapper = React.createRef();
		this.leisureSection2Wrapper = React.createRef();
		this.leisureSection2CanvasRef = React.createRef();
		this.leisureSection2Title = React.createRef();
		this.leisureSetion6GrallyMaxImage = React.createRef();
		this.leisureSection2Box2 = React.createRef();
		this.leisureSection2Box3 = React.createRef();
		this.leisureSection2Text2 = React.createRef();
		//this.leisureSection2Bg2 = React.createRef();

		this.leisureSection3Wrapper = React.createRef();
		this.leisureSection3Title = React.createRef();
		this.leisureSection3Text = React.createRef();

		this.leisureSection3Bg1 = React.createRef();
		this.leisureSection3Bg2 = React.createRef();

		this.leisureSection4Wrapper = React.createRef();
		this.leisureSection5Wrapper = React.createRef();

		this.leisureSection6Wrapper = React.createRef();
		this.leisureSection7Wrapper = React.createRef();
		this.leisureSection7ReturnHome = React.createRef();
		this.leisureSection7ReturnHomeTitle = React.createRef();
		this.leisureSection6Grally = React.createRef();

		this.uniqueSection1Wrapper = React.createRef();
		this.uniqueHomeContent = React.createRef();
		this.uniqueSection1CanvasRef = React.createRef();
		this.uniqueSection1Text = React.createRef();
		this.uniqueSection1Text2 = React.createRef();
		this.uniqueSection1Title = React.createRef();
		this.uniqueSection1BgLine = React.createRef();
		this.uniqueSection2RightBox = React.createRef();
		this.uniqueSection3ReturnHome = React.createRef();
		this.uniqueSection2Wrapper = React.createRef();
		this.uniqueSection3ReturnHomeTitle = React.createRef();
		this.uniqueSection3Wrapper = React.createRef();
		this.uniqueSection2MaxImageBg = React.createRef();
		this.uniqueSection2DynamicBg = React.createRef();
		this.uniqueSection2BgLine = React.createRef();
		this.unqiueSection2Bg1 = React.createRef();

		this.state = {
			x: 0,
			y: 0,

			startX: 0,
			startY: 0,
			completedLoadImage: false,
			seconds: 0,
			imgSrc: `/static/media/Video00_TransitionPrivacy0.png`,
			section_2_ImageSrc: section2IndeImage,
			privacySection3PhoneVideo: privacySection3PhoneVideo,
			privacySection5ImageSequence: privacySection5ImageSequence,
			canvasWidth: 0,
			canvasHeight: 0,
			previousStart: 0,
			previousEnd: 0,
			previousDis: 0,
			previousTime: 0,
			uniqueSection2Total: 0,
			comfortSection2Bg: lastComfortSection1ImageSequence,
			leisureSetion6GrallyMaxImage: this.grallyList[0],
			section1SequenceImageIndex: 0,
			privacySection5SequenceImageIndex: 0,
			privacySection6SequenceImageIndex: 0,
			section3SequenceImageIndex: 0,
			lastActiveSectionRef: null,
			lastActiveSectionRefCallback: null,
			comfortSection1SequenceImageIndex: 0,
			leisureSection1SequenceImageIndex: 0,
			leisureSection2SequenceImageIndex: 0,
			uniqueSection1SequenceImageIndex: 0,
			privacySection1SequenceImageIndex: 0,
			comfortSection8ImageSequenceIndex: 0,
			privacySectionAnimateContrl: {
				isShowPrivacySection3leftContentPart1: true,
				isShowPrivacySection3leftContentPart2: false
			},
			privactSection6ImageSequence: [
				firstPrivactSection6ImageSequence
			],
			leisureSection1ImageSequence: [
				firstLeisureSection1ImageSequence
			],
			comfortSection1ImageSequence: [
				firstComfortSection1ImageSequence
			],
			comfortSection8ImageSequence: [
				firstMagaziImageSequneence
			],
			leisureSection2ImageSequence: [
				firstLeisureSection2ImageSequence
			],
			uniqueSection1ImageSequence: [
				firstLeisureSection2ImageSequence
			],
			privacy1ImageSequence: [
				firstLeisureSection2ImageSequence
			],
			boxDefaultSize: 80,
			slides: [
				{
					index: 0,
					defaultImage: homePrivacy_1_small,
					activeImage: homePrivacy_1,
					smallIndex: privacySmallIndex,
					smallTitle: privacySmallTitle,
					isActive: false,
					isFilter: false,

					maxTitle: 'privacy',
					key: 'privacy',
					bgFilter:
						'linear-gradient(90deg, rgba(177, 143, 132, 0.3) -8.64%, rgba(14, 15, 31, 0.234) 112.68%)',
					onChange: (currentSlide: any) => {
						currentSlide.defaultImage = homePrivacy_1;
						this.state.slides.map((item: any) => {
							if (item.index === currentSlide.index) {
								this.setState({ item: currentSlide });
							}
						});
					},
					onSwiperTo: () => {
						console.log('s');
					}
				},
				{
					index: 1,
					defaultImage: homeConfort_2_small,
					activeImage: homeConfort_2,
					smallIndex: comfortSmallIndex,
					smallTitle: comfortSmallTitle,
					isActive: false,
					isFilter: false,
					bgFilter:
						'linear-gradient(90deg, rgba(177, 143, 132, 0.3) -8.64%, rgba(14, 15, 31, 0.234) 112.68%)',
					maxTitle: 'comfort',
					key: 'comfort',
					onChange: () => {
						console.log('s');
					},
					onSwiperTo: () => {
						console.log('s');
					}
				},
				{
					index: 2,
					defaultImage: homeLeisure_3_small,
					activeImage: homeLeisure_3,
					smallIndex: leisureSmallIndex,
					smallTitle: leisureSmallTitle,
					maxTitle: 'Leisure',
					key: 'leisure',
					isActive: false,
					isFilter: false,
					bgFilter:
						'linear-gradient(90deg, rgba(177, 143, 132, 0.3) -8.64%, rgba(14, 15, 31, 0.234) 112.68%)',
					onChange: () => {
						console.log('s');
					},
					onSwiperTo: () => {
						console.log('s');
					}
				},

				{
					index: 3,
					defaultImage: homeUnique_4_small,
					activeImage: homeUnique_4,
					smallIndex: uniqueSmallIndex,
					smallTitle: uniqueSmallTitle,
					maxTitle: 'unique',
					key: 'unique',
					bgFilter:
						'linear-gradient(90deg, rgba(177, 143, 132, 0.3) -8.64%, rgba(14, 15, 31, 0.234) 112.68%)',
					isActive: false,
					isFilter: false,
					onChange: () => {
						console.log('s');
					},
					onSwiperTo: () => {
						console.log('s');
					}
				}
			]
		};
	}
	grallyList = [
		leisureSection6Bg1,
		leisureSection6Bg2,
		leisureSection6Bg3
	];
	setSection6Grally = [
		{
			image: leisureSection6Bg1,
			title: '',
			desc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.'
		},
		{
			image: leisureSection6Bg2,
			title: '',
			desc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.'
		},
		{
			image: leisureSection6Bg3,
			title: '',
			desc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.'
		}
	];
	startX: any = '0';
	endX: any = '0';
	box: any;
	isDown = false;

	currentMoveY = 0;
	leftY = 0;
	isStop = false;
	needDown = true;
	lastPos = 0;
	start = 1;
	oldStart = 0;
	intervalStart = 20;
	startPos = 0;
	MAX_LEN = 100;
	splitterOffSet = [
		0,
		0
	];
	isStopTouchMove = false;
	player: any;
	video: any;
	privacySection1WrapperLeftContent: any;
	bgLine: any;
	interval: any;
	privacySection2Wrapper: any;
	privacySection1Wrapper: any;
	privacyContent: any;
	homePageCanvasRef0: any;
	homePageCanvasRef1: any;
	homePageCanvasRef2: any;
	homePageCanvasRef3: any;
	section_2_colorBg: any;
	section_2_image: any;
	section_2_bgLine: any;
	privacySection2leftContent: any;
	privacySection3Wrapper: any;
	privacySection3image: any;
	privacySection3leftContent: any;
	privacySection3bgline: any;
	privacySection3colorBg: any;
	privacySection3Text: any;
	privacySection3Title: any;
	effectComponent: any;
	privacySection4Wrapper: any;
	section_4_image: any;
	section_4_leftContent: any;
	section_4_bgline: any;
	section_4_colorBg: any;
	privacySection3PhoneVideo: any;

	privacySection5Wrapper: any;
	privacySection5leftContent: any;
	privacySection5bgline: any;
	privacySection5title: any;
	privacySection5titleBg: any;

	privacySection6Wrapper: any;
	privacySection6bgline: any;
	privacySection6CanvasRef: any;
	privacySection6text1: any;
	privacySection6text2: any;
	privacySection6text3: any;
	privacySection6text4: any;

	privacySection7Wrapper: any;
	privacySection7bg: any;
	privacySection7text: any;
	privacySection7bgline: any;
	privacySection7SubMenu: any;
	privacySection7bgMask: any;
	privacySection8Wrapper: any;
	privacySection8text: any;
	privacySection8title: any;
	privacySection8bg: any;
	privacySection8image: any;
	privacySection8bgPlaceHolder: any;
	comfortSection1Wrapper: any;
	comfortSection1CanvasRef: any;
	comfortSection1Text: any;
	comfortSection1Text2: any;
	comfortSection1Title: any;
	comfortSection1BgLine: any;

	comfortSection2Wrapper: any;
	comfortSection2TextBox05: any;
	comfortSection2TextBox05b: any;
	comfortSection2Box05: any;
	comfortSection2BgLine: any;
	comfortSection2Desc: any;
	comfortSection2SplitterMoveHanlder: any;
	comfortSection2Splitter: any;
	comfortSection2SplitterMoveHanlder2: any;
	comfortSection2Splitter2: any;
	comfortSection3Wrapper: any;
	comfortSection3Title: any;
	comfortSection3Text: any;
	comfortSection3BgLine: any;
	comfortSection3Tab06: any;

	comfortSection4Wrapper: any;
	comfortSection4Box07: any;
	comfortSection4Text2: any;
	comfortSection4Text1: any;
	comfortSection4Image1: any;
	comfortSection4Image2: any;
	comfortSection4Hand: any;

	comfortSection5Wrapper: any;
	comfortSection5Title: any;

	comfortSection6Wrapper: any;
	comfortSectoin6Title: any;
	comfortSection6Text: any;

	comfortSection7Wrapper: any;
	comfortSection7Text: any;
	//comfortSection7LeftBg: any;
	comfortSection7BG: any;
	homePageImages: any;

	comfortSection8Wrapper: any;
	comfortSection8Bg: any;
	comfortSection8Video: any;
	comfortSection8Bg2: any;
	comfortSection8CanvasRef: any;
	comfortSection8ClickMagamizeMockButton: any;
	comfortSection8BgPart1: any;
	comfortSection9Wrapper: any;
	comfortSection10EndWrapper: any;
	comfortSection9Bg1: any;

	comfortSectoin9EndReturnHomeTitle: any;
	comfortSectoin9EndReturnHomeText: any;
	comfortSection9LeftBg: any;
	comfortSection9BgRight: any;
	comfortSection9Mask2: any;
	comfortSection9Mask1: any;
	absoluteHeight: any;
	mask1: any;
	mask2: any;
	comfortSectoin9EndReturnHome: any;
	leisureHomeContent: any;
	leisureSection1Title: any;
	leisureSection1ClickTab: any;
	leisureSection1Wrapper: any;
	leisureSection1CanvasRef: any;
	leisureSection2CanvasRefWrapper: any;
	leisureSection2CanvasRef: any;
	leisureSection2Wrapper: any;
	leisureSection2Title: any;

	leisureSection2Box2: any;
	leisureSection2Box3: any;
	leisureSection2Text2: any;
	// leisureSection2Bg2: any;

	leisureSection3Wrapper: any;
	leisureSection3Title: any;
	leisureSection3Text: any;

	leisureSection3Bg1: any;
	leisureSection3Bg2: any;

	leisureSection4Wrapper: any;
	leisureSection5Wrapper: any;

	leisureSection7Wrapper: any;
	leisureSection7ReturnHome: any;
	leisureSection7ReturnHomeTitle: any;
	leisureSection6Wrapper: any;
	leisureSection6Grally: any;
	leisureSetion6GrallyMaxImage: any;
	uniqueHomeContent: any;
	uniqueSection1Wrapper: any;
	uniqueSection1CanvasRef: any;
	uniqueSection2MaxImageBg: any;
	uniqueSection1Text: any;
	uniqueSection1Text2: any;
	uniqueSection1Title: any;
	uniqueSection1BgLine: any;
	uniqueSection2Wrapper: any;
	uniqueSection3Wrapper: any;
	uniqueSection2DynamicBg: any;
	uniqueSection2RightBox: any;
	uniqueSection3ReturnHome: any;
	uniqueSection2BgLine: any;
	uniqueSection3ReturnHomeTitle: any;
	unqiueSection2Bg1: any;
	demoIntroSection1Wrapper: any;
	demoIntroSection2Wrapper: any;
	demoIntroSection3Wrapper: any;
	moveDistance = 0;
	total = 0;
	move = 0;
	lastActiveKey = '';
	timer: any;
	canvas2: any;
	context: any;
	touchstartTime = 0;
	touchendTime = 0;
	sectionImageSequenceList = {
		privacy: [] as any,
		comfort: [] as any,
		leisure: [] as any,
		unique: [] as any
	};
	componentDidMount() {
		// this.canvas2 = this.homePageCanvasRef.current;
		// this.context = this.canvas2.getContext('2d');
		// (document.getElementById('root') as HTMLElement).addEventListener(
		// 	'click',
		// 	(event) => {
		// 		event.stopImmediatePropagation();
		// 		event.stopPropagation();
		// 		console.log('window:bedore react mount');
		// 	},
		// 	{ capture: false }
		// );

		// (document.getElementById('root') as HTMLElement).addEventListener(
		// 	'touchstart',
		// 	(event) => {
		// 		event.stopImmediatePropagation();
		// 		event.stopPropagation();
		// 		console.log('window:bedore react mount');
		// 	},
		// 	{ capture: false }
		// );

		// (document.getElementById('root') as HTMLElement).addEventListener(
		// 	'touchmove',
		// 	(event) => {
		// 		event.stopImmediatePropagation();
		// 		event.stopPropagation();
		// 		console.log('window:bedore react mount');
		// 	},
		// 	{ capture: false }
		// );

		// (document.getElementById('root') as HTMLElement).addEventListener(
		// 	'touchend',
		// 	(event) => {
		// 		event.stopImmediatePropagation();
		// 		event.stopPropagation();
		// 		console.log('window:bedore react mount');
		// 	},
		// 	{ capture: false }
		// );
		// demoIntroSection1Wrapper 默认入场动画淡入效果
		this.demoIntroSection1Wrapper.current.className =
			'demoIntroSection1Wrapper  animate__animated animate__fadeIn animate__delay-1.5s';

		/* DigitalSealRotate 序列帧*/
		// const imges: any[] = [];
		// for (let i = 0; i <= 100; i++) {
		// 	imges.push(require(`../../assets/Video02b_DigitalSealRotate_1/Video02b_DigitalSealRotate${i}.jpg`));
		// 	this.setState({ privactSection6ImageSequence: imges });
		// }

		// /* comfort  首页序列帧 */
		const comfortImges: any[] = [];
		for (let i = 0; i <= 100; i++) {
			comfortImges.push(require(`../../assets/Video04_TransitionComfort/Video04_TransitionComfort${i}.jpg`));
			this.setState({ comfortSection1ImageSequence: comfortImges });
		}

		const comfort8Imges: any[] = [];
		for (let i = 0; i <= 100; i++) {
			comfort8Imges.push(require(`../../assets/Video13_Magazine/Video13_Magazine${i}.png`));
			this.setState({ comfortSection8ImageSequence: comfort8Imges });
		}

		// /* leisure section2 序列帧 */
		const leisureImges: any[] = [];
		for (let i = 0; i <= 40; i++) {
			leisureImges.push(require(`../../assets/Video16_FrunkBar/Video16_FrunkBar${i}.jpg`));
			this.setState({ leisureSection2ImageSequence: leisureImges });
		}

		// /* leisure 首页序列帧 */
		const leisure1Imges: any[] = [];
		this.setState({ leisureSection1ImageSequence: leisure1Imges });
		for (let i = 0; i <= 100; i++) {
			leisure1Imges.push(require(`../../assets/Video04_TransitionComfort/Video04_TransitionComfort${i}.jpg`));
			this.setState({ leisureSection1ImageSequence: leisure1Imges });
		}

		// /* unique 首页序列帧 */
		const uniqueImges: any[] = [];
		for (let i = 0; i <= 100; i++) {
			uniqueImges.push(require(`../../assets/Video04_TransitionComfort/Video04_TransitionComfort${i}.jpg`));
			this.setState({ uniqueSection1ImageSequence: uniqueImges });
		}

		// /* privacy 首页序列帧 */
		const privacy: any[] = [];
		for (let i = 0; i <= 100; i++) {
			// const img = new Image();
			// // img.onload = () => this.imgs[i] = img
			// img.src = `../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy${i}.jpg`;
			// 不管加载否 保证顺序
			privacy.push(require(`../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy${i}.jpg`));
			this.setState({ privacy1ImageSequence: privacy });
			// privacyImages.push(require(`../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy${i}.jpg`));
		}

		this.sectionImageSequenceList['privacy'] = privacy;
		this.sectionImageSequenceList['privacyImagePic'] = [];
		this.sectionImageSequenceList['comfort'] = comfortImges;
		this.sectionImageSequenceList['leisure'] = leisure1Imges;
		this.sectionImageSequenceList['unique'] = uniqueImges;
		// this.sectionImageSequenceList['privacy'].forEach((item) => {
		// 	const _image = new Image();
		// 	_image.src = item;
		// 	_image.setAttribute('class', 'imageCover');
		// 	_image.onload = () => {
		// 		// privacyImagePic.push(_image);
		// 		this.sectionImageSequenceList['privacyImagePic'].push(_image);
		// 	};
		// });

		this.setState({ canvasWidth: screen.availWidth });
		this.setState({ canvasHeight: screen.availHeight });
	}
	onSlideTo(index) {
		// 撤销上一个激活状态的成员
		const currentRef = this.state.lastActiveSectionRef;
		if (currentRef) {
			currentRef.style.display = 'none';
		} else {
			this.box.current.style.display = 'none';
		}

		// 冻结跳转
		this.isStopTouchMove = true;
		// 触发跳转对象的激活状态
		this[index].current.style.display = 'block';
		this[`${index}InAnimate`]();

		// 更新激活状态成员，用于下一次撤销该成员的激活状态
		this.setState({
			lastActiveSectionRef: this[index].current
		});
	}
	onChange(currentSlide: any, index: any) {
		const defaultImages = [
			homePrivacy_1_small,
			homeConfort_2_small,
			homeLeisure_3_small,
			homeUnique_4_small
		];
		const maxImges = [
			homePrivacy_1,
			homeConfort_2,
			homeLeisure_3,
			homeUnique_4
		];
		this.state.slides.map((item: any) => {
			if (item.index === currentSlide.index) {
				if (this.lastActiveKey != item.key) {
					currentSlide.isActive = true;
					currentSlide.isFilter = false;
					this.setState({ item: currentSlide });
					this.box.current.childNodes[item.index].style.flex = '1 1 80%';
					//	this.box.current.childNodes[item.index].style.backgroundImage = `url(${maxImges[index]})`;
					this.lastActiveKey = item.key;
				}
				return;
			} else {
				item.isActive = false;
				item.isFilter = true;
				this.setState({ item: item });
				this.box.current.childNodes.forEach((node, index) => {
					if (index !== currentSlide.index) {
						node.style.backgroundImage = `url(${defaultImages[index]})`;
						node.style.flex = `1 1`;
					}
				});
			}
		});
	}
	handleMouseMove(event, item, index) {
		this.setState({
			x: event.clientX,
			y: event.clientY
		});
	}

	moveAnimate(element, length) {
		const timer = setInterval(() => {
			let speed = (length - element.offsetLeft) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if (element.offsetLeft == length) {
				clearInterval(timer);
			} else {
				element.style.left = element.offsetLeft + speed + 'px';
			}
		}, 30);
	}
	privacySection1WrapperTouchStart(event) {
		this.updateStartMosePosition(event);
	}
	privacySection1WrapperTouchEnd(event) {
		this.updateMoveMousePositon(event);
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		if (this.isStopTouchMove) return;
		this.move = this.state.endY - this.state.startY;
		if (this.move > 80) {
			// 向下拉动，返回上一页23q21
			this.privacySection1Wrapper.current.style.display = 'none';
			this.homeSectionWrapper1InAnimate();
		}
		if (this.move < -80) {
			// 向上拉动，进入下一页

			// privacySection1Wrapper 结束动画
			this.privacySection1WrapperOutAnimate();

			// privacySection2Wrapper 入场动画
			this.setState({ lastActiveSectionRef: this.privacySection2Wrapper.current });
			this.setState({ lastActiveSectionRefCallback: this.privacySection2WrapperInAnimate() });

			this.privacySection2WrapperInAnimate();
		}
	}
	privacySection1WrapperTouchMove(event) {
		this.updateMoveMousePositon(event);
	}
	privacySection2WrapperTouchStart(event) {
		this.updateStartMosePosition(event);
	}
	privacySection2WrapperTouchMove(event) {
		this.updateMoveMousePositon(event);
	}
	privacySection2WrapperTouchEnd(event) {
		if (this.isStopTouchMove) return;
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		this.updateMoveMousePositon(event);

		this.move = this.state.endY - this.state.startY;
		// if (!this.isStopTouchMove) return;
		if (this.move > 80) {
			// 向下拉动，返回上一页
			this.privacySection2Wrapper.current.className = 'sectionWrapper animate__animated animate__fadeOut';
			this.privacySection1WrapperLeftContent.current.className =
				'privacySection1WrapperLeftContent animate__animated animate__slideInLeft animate__delay-1s';
			this.privacySection2Wrapper.current.style.display = 'none';

			this.box.current.style.display = 'flex';
			this.setState({ lastActiveSectionRef: this.privacySection1Wrapper.current });
			const image = require(`../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy0.jpg`);
			const _image = new Image();
			_image.src = image;
			_image.onload = () => {
				this.box.current.childNodes[0].style.backgroundImage = `url(${image})`;
			};
			return;
		}

		if (this.move < -80) {
			// 向s上拉动，进入下一页

			// privacySection2Wrapper 结束动画
			this.privacySection2WrapperOutAnimate();
			this.isStopTouchMove = true;
			this.privacySection3WrapperInAnimate();
		}
	}

	privacySection3WrapperTouchStart(event) {
		this.updateStartMosePosition(event);
	}

	privacySection3WrapperTouchMove(event) {
		this.updateMoveMousePositon(event);

		this.move = this.state.endY - this.state.startY;
	}
	privacySection3WrapperTouchEnd(event) {
		if (this.isStopTouchMove) return;
		// part1 转场到上一页
		if (this.move > 80 && this.state.privacySectionAnimateContrl.isShowPrivacySection3leftContentPart1) {
			// 向下拉动，返回上一页
			this.privacySection3WrapperOutAnimate();

			this.privacySection2WrapperInAnimate();
			return;
		}

		// part2转场到part1
		if (this.move > 80 && this.state.privacySectionAnimateContrl.isShowPrivacySection3leftContentPart2) {
			// 向下拉动，返回上一页
			// this.privacySection3WrapperPart2OutAnimate();
			this.privacySection3leftContent.current.className = 'privacySection3leftContentOut';
			this.privacySection3colorBg.current.style.background = '#48423D';
			this.privacySection3PhoneVideo.current.className =
				'animate__animated animate__slideOutUp animate__delay-1.7s';
			setTimeout(() => {
				this.privacySection3PhoneVideo.current.style.display = 'none';
			}, 2000);

			this.setState({
				privacySectionAnimateContrl: {
					isShowPrivacySection3leftContentPart1: true,
					isShowPrivacySection3leftContentPart2: false
				}
			});
			return;
		}
		if (this.move < -80) {
			// 向s上拉动，进入下一页
			// part1 转场到part2
			if (this.state.privacySectionAnimateContrl.isShowPrivacySection3leftContentPart1) {
				this.privacySection3WrapperPart2InAnimate();
				this.setState({
					privacySectionAnimateContrl: {
						isShowPrivacySection3leftContentPart1: false,
						isShowPrivacySection3leftContentPart2: true
					}
				});
				return;
			}

			// 在显示part2的时候向上拉动，显示下个片子
			if (this.state.privacySectionAnimateContrl.isShowPrivacySection3leftContentPart2) {
				this.privacySection5WrapperInAnimate();
				this.privacySection3WrapperPart2OutAnimate();
				this.setState({
					privacySectionAnimateContrl: {
						isShowPrivacySection3leftContentPart1: true,
						isShowPrivacySection3leftContentPart2: false
					}
				});
			}
		}
	}
	privacySection4WrapperTouchStart(event) {
		this.updateStartMosePosition(event);
	}
	privacySection4WrapperTouchEnd(event) {
		if (this.isStopTouchMove) return;
		this.updateStartMosePosition(event);
		this.move = this.state.endY - this.state.startY;

		if (this.move > 80) {
			// 向下拉动，返回上一页

			this.privacySection4WrapperOutAnimate();
			this.privacySection3WrapperInAnimate();
			return;
		}

		if (this.move < -80) {
			// 向s上拉动，进入下一页
			this.privacySection4WrapperOutAnimate();
			this.privacySection5WrapperInAnimate();
		}
	}
	privacySection4WrapperTouchMove(event) {
		this.updateMoveMousePositon(event);
	}

	privacySection5WrapperTouchStart(event) {
		this.updateStartMosePosition(event);
	}

	privacySection5WrapperTouchMove(event) {
		this.updateMoveMousePositon(event);
	}
	privacySection5WrapperTouchEnd(event) {
		if (this.isStopTouchMove) return;
		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;
		if (this.move > 80) {
			// 向下拉动，返回上一页
			this.privacySection3WrapperInAnimate();
			this.privacySection5WrapperOutAnimate();
		}
		if (this.move < -80) {
			// 向s上拉动，进入下一页

			this.privacySection5WrapperOutAnimate();

			this.privacySection6WrapperInAnimate();
		}
	}
	privacySection6WrapperTouchStart(event) {
		// if (this.moveDistance === 100) {
		// 	this.privacySection6Wrapper.current.style.display = 'none';
		// 	this.privacySection7Wrapper.current.style.display = 'block';
		// 	this.setState({ lastActiveSectionRef: this.privacySection7Wrapper.current });
		// 	this.privacySection7Wrapper.current.className = 'animate__animated animate__fadeIn  animate__delay-1.5s';
		// 	this.privacySection7text.current.className =
		// 		'dFordText animate__animated animate__slideInRight animate__delay-1.5s';
		// 	this.privacySection7bg.current.className = ' animate__animated animate__fadeIn animate__delay-1.5s';
		// 	this.privacySection7bgline.current.className = ' animate__animated animate__fadeIn animate__delay-1.5s';
		// 	return;
		// }
		// this.moveDistance = 0;
		// this.move = 0;
		this.updateStartMosePosition(event);
	}

	privacySection6WrapperTouchMove(event) {
		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;
	}
	privacySection6WrapperTouchEnd(event) {
		if (this.isStopTouchMove) return;
		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;
		if (this.move > 0) {
			// 向下拉动 返回上一页
			this.privacySection6WrapperOutAnimate();
			this.privacySection5WrapperInAnimate();
			return;
		}

		// 向上拉动 进入下一页
		if (this.move < 0 && this.state.privacySection6SequenceImageIndex == 100) {
			// 最后一帧，进入到privacySection7Wrapper
			this.privacySection6WrapperOutAnimate();
			this.privacySection7WrapperInAnimate();
			return;
		}

		this.privacySection6WrapperInAnimate();
	}
	privacySection7WrapperTouchStart(event) {
		this.updateStartMosePosition(event);
	}

	privacySection7WrapperTouchMove(event) {
		this.updateMoveMousePositon(event);

		this.move = this.state.endY - this.state.startY;
	}

	privacySection7WrapperTouchEnd(event) {
		if (this.isStopTouchMove) return;
		// Part1 转场进入part2
		if (this.move < -80 && this.privacySection8bg.current.style.display == 'none') {
			// 向上拉动，进入下一页
			// this.privacySection7Wrapper.current.style.display = 'none';
			this.privacySection7bg.current.className = 'privacy_section_7_bgIn';
			this.privacySection7text.current.className = 'dFordText animate__animated animate__slideOutRight';

			setTimeout(() => {
				this.privacySection8bg.current.style.display = 'block';
				this.privacySection8title.current.style.display = 'block';
			}, 1500);
			this.privacySection7SubMenu.current.className = 'animate__animated animate__fadeOut';
			this.privacySection8bg.current.className = '  animate__animated animate__slideInUp animate__delay-1.5s';
			this.privacySection8title.current.className =
				' dFordText animate__animated animate__fadeIn animate__delay-1.5s';
			return;
			// this.privacySection8WrapperInAnimate();
		}

		// Part2 转场进入 comfortSection1Wrapper
		if (this.move < -80 && this.privacySection8bg.current.style.display == 'block') {
			// this.privacySection8bgPlaceHolder.current.display = 'block'
			// setTimeout(()=>{
			// 	this.privacySection7Wrapper.current.style.display = 'none';
			// },2300)

			this.privacySection7WrapperOutPart2Animate();
			setTimeout(() => {
				this.comfortSection1WrapperInAnimate();
			}, 2200);
			// this.privacySection8bg.current.className = '  animate__animated animate__slideOutDown animate__delay-1.5s';
			// this.privacySection8title.current.className = '  animate__animated animate__fadeOut animate__delay-1.5s';

			// this.privacySection7bg.current.className = 'animate__animated animate__fadeOut animate__delay-2s';
			// 向上拉动，进入下一页
			// this.privacySection7Wrapper.current.style.display = 'none';
			// this.privacySection7bg.current.className = 'privacy_section_7_bgIn';
			// this.privacySection7text.current.className = 'dFordText animate__animated animate__slideOutRight';

			// setTimeout(() => {
			// 	this.privacySection8bg.current.style.display = 'block';
			// 	this.privacySection8title.current.style.display = 'block';
			// }, 1500);
			// this.privacySection7bgMask.current.className = 'animate__animated animate__fadeIn';
			// this.privacySection7SubMenu.current.className = 'animate__animated animate__fadeOut';
			// this.privacySection8bg.current.className = '  animate__animated animate__slideInUp animate__delay-1.5s';
			// this.privacySection8title.current.className =
			// 	' dFordText animate__animated animate__fadeIn animate__delay-1.5s';
			// this.privacySection8WrapperInAnimate();
		}

		if (this.move > 80) {
			// 向下拉动，返回上一页

			this.privacySection7Wrapper.current.style.display = 'none';

			this.privacySection6text1.current.style.display = 'block';
			this.privacySection6text1.current.className = 'animate__animated animate__slideInLeft ';
			this.privacySection6text2.current.style.display = 'none';
			this.privacySection6text3.current.style.display = 'none';
			this.privacySection6text4.current.style.display = 'none';
			this.privacySection6WrapperInAnimate();
		}
	}
	// privacySection8WrapperTouchStart(event) {
	// 	this.updateStartMosePosition(event);
	// }

	// privacySection8WrapperTouchMove(event) {
	// 	this.updateMoveMousePositon(event);

	// 	this.move = this.state.endY - this.state.startY;
	// 	if (this.move < -80) {
	// 		// 向s上拉动，进入下一页
	// 		this.privacySection8WrapperOutAnimate();
	// 		this.comfortSection1WrapperInAnimate();
	// 	}
	// 	if (this.move > 80) {
	// 		// 向下拉动，返回上一页
	// 		// this.privacySection8text.current.style.display = 'none';
	// 		// this.privacySection8title.current.style.display = 'none';
	// 		// this.privacySection8bg.current.style.display = 'none';
	// 		// this.privacySection8image.current.style.display = 'none';
	// 		this.privacySection8WrapperOutAnimate();

	// 		this.privacySection7Wrapper.current.style.display = 'block';
	// 		this.privacySection7text.current.style.display = 'block';
	// 		this.privacySection7bg.current.style.display = 'block';
	// 	}
	// }

	updateStartMosePosition(event) {
		if (!event.targetTouches.length) return;
		this.setState({
			startX: event.targetTouches[0].clientX,
			startY: event.targetTouches[0].clientY
		});
	}

	updateMoveMousePositon(event) {
		if (!event.targetTouches.length) return;
		this.setState({
			endX: event.targetTouches[0].clientX,
			endY: event.targetTouches[0].clientY
		});
	}

	change(index, paused?) {
		if (this.privacySection6CanvasRef) {
			this.privacySection6CanvasRef.current.setCurrent(index);
		}
	}

	debounce(fn, delay) {
		const _this = this;
		return function() {
			if (_this.timer) {
				clearTimeout(_this.timer);
			}

			_this.timer = setTimeout(() => {
				fn.apply(_this);
			}, delay);
		};
	}

	homePageTouchStart(event, item, index) {
		// 切换背景图片
		this.onChange(item, index);
		this.updateStartMosePosition(event);
	}

	isOver() {
		return this.start < 0 || this.start > 100;
	}
	homePageTouchMove(event, item?, index?) {
		// 判断拖动方向
		this.updateMoveMousePositon(event);
		// this.debounce(() => {
		// 	// 轮询播放序列帧
		// 	const _this = this;
		// 	const _interval = setInterval(() => {
		// 		_this.setState({
		// 			leisureSection2SequenceImageIndex:
		// 				this.state.leisureSection2SequenceImageIndex >= 40
		// 					? 40
		// 					: this.state.leisureSection2SequenceImageIndex + 1
		// 		});
		// 		console.log(_this.state.leisureSection2SequenceImageIndex)
		// 		_this.leisureSection2CanvasRef.current.setCurrent(_this.state.leisureSection2SequenceImageIndex);

		// 	}, 60);
		// }, 10)();

		// this.debounce(() => {
		// 	const _interval = setInterval(() => {
		// 		if (this.state.privacySection6SequenceImageIndex == 100) {
		// 			clearInterval(_interval);
		// 		}
		// 		this.privacySection6CanvasRef.current &&
		// 			this.privacySection6CanvasRef.current.setCurrent(this.state.privacySection6SequenceImageIndex);

		// 		console.log(this.state.privacySection6SequenceImageIndex);
		// 		this.setState({
		// 			privacySection6SequenceImageIndex:
		// 				this.state.privacySection6SequenceImageIndex >= 100
		// 					? 100
		// 					: this.state.privacySection6SequenceImageIndex + 1
		// 		});
		// 	}, 10);
		// }, 10)();

		// 当前的移动位置
		const currentTouchMoveDis = this.state.endY;
		// console.log('>>>>>>>>>當前距離：' + currentTouchMoveDis);
		// console.log('>>>>>>>>>上一次距離：' + this.currentMoveY);

		if (currentTouchMoveDis - this.currentMoveY > 20) {
			this.currentMoveY = this.state.endY;
			return;
		}

		// console.log('startY:' + Math.abs(this.state.startY));
		// console.log('endY:' + Math.abs(this.state.endY));

		// console.log('>>>>>>>>>當前距離<<<：' + this.state.endY);
		// console.log('>>>>>>>>>上一次距離<<：' + this.currentMoveY);

		// 与上一次的位移差判斷滾動方向
		let delta = currentTouchMoveDis - this.currentMoveY;

		console.log('>>>>>> delata:' + delta);
		// 當前移動位置小於上一次移動位置，則向上拉動
		const isDown = delta < 0;

		if (delta < 0 && delta < -20) {
			delta = -20;
		}
		if (delta > 0 && delta > 20) {
			delta = 20;
		}
		delta = Math.abs(delta) + this.leftY;

		if (
			this.isStop &&
			isDown === this.needDown &&
			((isDown && this.currentMoveY > this.lastPos) || (!isDown && this.currentMoveY < this.lastPos))
		) {
			this.isStop = false;
		}
		if (this.isStop) return;

		const alpha = Math.floor(delta / this.intervalStart) * 1 || 0;
		console.log(Math.floor(delta / this.intervalStart) * 1);
		console.log('alpha:' + alpha);
		this.leftY = delta % this.intervalStart;
		// console.log(isDown);
		isDown ? (this.start += alpha) : (this.start -= alpha);
		console.log('this.start :' + this.start);

		// if (this.isOver() && !this.isStop) {
		// 	// this.lastPos = scrollY
		// 	this.isStop = true;
		// 	console.log(this.start, currentTouchMoveDis, this.lastPos);

		// 	// TODO: 多个 canvas 用 opacity 切换
		// 	// this.canvas2.style.cssText = `opacity: 0;`
		// }

		this.currentMoveY = currentTouchMoveDis;
		this.startPos = currentTouchMoveDis;
		if (this.start < 0) this.start = 0;
		if (this.start > this.MAX_LEN) this.start = this.MAX_LEN;
		// // if (this.startPos >= currentTouchMoveDis) this.start = 0;
		if (this.oldStart === this.start) return;
		this.oldStart = this.start;
		// // good idea：记录
		// this.lastPos = currentTouchMoveDis;
		// this.needDown = !isDown;

		console.log('this.start2 :' + this.start);

		// this.debounce(() => {
		// 	console.log(this.start);
		// 	this.homePageCanvasRef.current && this.homePageCanvasRef.current.setCurrent(this.start);
		// 	// this.setState({
		// 	// 	privacySection1SequenceImageIndex:
		// 	// 		this.start >= 100
		// 	// 			? 100
		// 	// 			: this.state.privacySection1SequenceImageIndex + 1
		// 	// });
		// 	const _interval = setInterval(() => {
		// 		if (this.start == 100) {
		// 			clearInterval(_interval);
		// 		}
		// 		// this.homePageCanvasRef.current &&
		// 		// 	this.homePageCanvasRef.current.setCurrent(this.state.privacySection1SequenceImageIndex);
		// 		// this.setState({
		// 		// 	privacySection1SequenceImageIndex:
		// 		// 		this.state.privacySection1SequenceImageIndex >= 100
		// 		// 			? 100
		// 		// 			: this.state.privacySection1SequenceImageIndex + 1
		// 		// });
		// 		//console.log(this.state.privacySection1SequenceImageIndex)
		// 		// if (this.state.comfortSection1SequenceImageIndex == 50) {
		// 		// 	this.comfortSection1Text.current.style.display = 'none';
		// 		// 	this.comfortSection1Text.current.className =
		// 		// 		'animate__animated animate__fadeOutDown animate__delay-.5s';
		// 		// }

		// 		// if (this.state.comfortSection1SequenceImageIndex === 50) {
		// 		// 	this.comfortSection1Text2.current.style.display = 'block';
		// 		// 	this.comfortSection1Title.current.style.display = 'block';
		// 		// 	this.comfortSection1BgLine.current.className =
		// 		// 		'animate__animated animate__fadeIn animate__delay-.8s';
		// 		// 	this.comfortSection1Text2.current.className =
		// 		// 		'animate__animated animate__fadeInLeft animate__delay-1s';
		// 		// 	this.comfortSection1Title.current.className =
		// 		// 		'animate__animated animate__fadeInLeft animate__delay-1.2s';
		// 		// }
		// 	}, 10);
		// }, 10)();

		// const test = true;
		// if (test) return;

		// const imgTemp = this.sectionImageSequenceList['privacyImagePic'][this.start];
		// console.log(imgTemp);
		// const canvas = this.canvas2;

		// canvas.width = imgTemp.width;
		// canvas.height = imgTemp.height;
		// this.canvas2 = document.getElementById('homePageCanvasRef');
		// console.log(1, this.canvas2);
		// this.context = this.canvas2.getContext('2d');
		// console.log(1, this.context);
		// this.context.drawImage(imgTemp, 0, 0);
		// 拖动距离与播放序列帧的频率成正比
		// this.updateMoveMousePositon(event);
		const direction = this.letMeKonwDirection();

		// if (direction === 'toBottom') {
		// 	this.box.current.childNodes[item.index].style.flex = `1 1 80%`;
		// }

		if (direction === 'toTop') {
			this.box.current.childNodes[item.index].style.flex = `1 1 100%`;
		}

		// this.move = this.state.endY - this.state.startY;
		// // this.moveDistance = Math.ceil(Math.pow(Math.abs(this.move), 0.8));
		// this.box.current.childNodes[index].style.backgroundImage = `url(${this.sectionImageSequenceList[
		// 	'privacy'
		// ][this.start]})`;
		// if (this.move > 0) {
		// 	// 向下拉动 返回上一页
		// 	this.box.current.childNodes[index].style.backgroundImage = `url(${this.sectionImageSequenceList[
		// 		'privacy'
		// 	][this.start]})`;
		// 	// if (this.state.section1SequenceImageIndex >= 0) {
		// 	// 	const image = require(`../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy${this.state
		// 	// 		.section1SequenceImageIndex}.jpg`);
		// 	// 	const _image = new Image();
		// 	// 	_image.src = image;
		// 	// 	_image.onload = () => {
		// 	// 		this.box.current.childNodes[index].style.backgroundImage = `url(${image})`;
		// 	// 	};
		// 	// 	this.setState({
		// 	// 		section1SequenceImageIndex:
		// 	// 			this.state.section1SequenceImageIndex <= 0
		// 	// 				? 0
		// 	// 				: this.state.section1SequenceImageIndex - 1
		// 	// 	});
		// 	// }
		// 	// this.debounce(() => {
		// 	// 	// 通过滑动距离控制轮询次数
		// 	// 	const _interval = setInterval(() => {
		// 	// 		if (this.state.section1SequenceImageIndex >= 0) {
		// 	// 			const image = require(`../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy${this.state
		// 	// 				.section1SequenceImageIndex}.jpg`);
		// 	// 			const _image = new Image();
		// 	// 			_image.src = image;
		// 	// 			_image.onload = () => {
		// 	// 				this.box.current.childNodes[index].style.backgroundImage = `url(${image})`;
		// 	// 			};
		// 	// 			this.setState({
		// 	// 				section1SequenceImageIndex:
		// 	// 					this.state.section1SequenceImageIndex <= 0
		// 	// 						? 0
		// 	// 						: this.state.section1SequenceImageIndex - 1
		// 	// 			});
		// 	// 		}
		// 	// 	}, 10);
		// 	// }, 10)();
		// }
		// if (direction === 'toTop' || direction === 'toLeft') {
		// 	this.box.current.childNodes[item.index].style.flex = `1 1 100%`;
		// 	const move = this.state.endY - this.state.startY;
		// 	// console.log(move + ':' + move / 100);
		// 	// const seconds = Math.abs(move / 100).toFixed(2).split('.')[1];

		// 	// const _seconds = Math.sqrt(Math.pow(move,2) / 100;
		// 	// console.log('Math.pow:' + Math.pow(move, 2));
		// 	// console.log('Math.sqrt:' + Math.sqrt(Math.pow(move, 2)));
		// 	// console.log('currentTime:' + event.timeStamp * 1000);
		// 	// console.log('previousTime:' + this.state.previousTime * 1000);
		// 	// const deltaTime = event.timeStamp - this.state.previousTime;
		// 	// console.log('时间差：' + deltaTime * 1000);
		// 	// const deltaDis = Math.sqrt(Math.pow(this.state.endY - this.state.previousEnd, 2));
		// 	// console.log('速度：' + deltaDis / deltaTime * 1000);
		// 	// console.log('move' + move);
		// 	// console.log('previousDis' + this.state.previousDis);
		// 	// console.log('位置差：' + (move - this.state.previousDis));

		if (this.start === 100 && this.box.current) {
			this.box.current.style.zIndex = '-1';
			this.box.current.style.display = 'none';
			// clearInterval(_interval);
			this.setState({
				section1SequenceImageIndex: 0
			});
			// privacy 播放到最后一帧的处理
			if (item.key === 'privacy') {
				this.privacySection1Wrapper.current.style.display = 'block';
				this.setState({ lastActiveSectionRef: this.privacySection1Wrapper.current });
				this.privacySection1Wrapper.current.style.zIndex = '1';
				// const image = require(`../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy100.jpg`);
				// this.privacySection1Wrapper.current.style.backgroundImage = `url(${image})`;
				this.privacySection1Wrapper.current.style.backgroundImage = `url(${this.props.privacyImages[100]})`;

				this.privacySection1WrapperLeftContent.current.className =
					'privacySection1WrapperLeftContent animate__animated animate__slideInLeft animate__delay-1s';
				this.bgLine.current.className = 'animate__animated animate__fadeIn animate__delay-1s';
			}

			// comfort 播放到最后一帧的处理
			if (item.key === 'comfort') {
				this.comfortSection1Text.current.style.display = 'none';
				this.comfortSection1Text.current.className =
					'animate__animated animate__fadeOutDown animate__delay-.5s';

				this.comfortSection1Wrapper.current.style.display = 'block';
				this.setState({ lastActiveSectionRef: this.comfortSection1Wrapper.current });
				//this.setState({ comfortSection1SequenceImageIndex: 100 });
				//this.comfortSection1CanvasRef.current.setCurrent(this.state.comfortSection1SequenceImageIndex);
				this.comfortSection1Wrapper.current.style.display = 'block';
				this.comfortSection1BgLine.current.style.display = 'block';
				this.comfortSection1Text2.current.style.display = 'block';
				this.comfortSection1Title.current.style.display = 'block';

				this.comfortSection1BgLine.current.className = 'animate__animated animate__fadeIn animate__delay-.8s';
				this.comfortSection1Text2.current.className = 'animate__animated animate__fadeInLeft animate__delay-1s';
				this.comfortSection1Title.current.className =
					'animate__animated animate__fadeInLeft animate__delay-1.2s';
			}
			// leisure 播放到最后一帧的处理
			if (item.key === 'leisure') {
				//this.setState({ leisureSection1SequenceImageIndex: 100 });
				//this.leisureSection1CanvasRef.current.setCurrent(this.state.leisureSection1SequenceImageIndex);
				this.leisureHomeContent.current.style.display = 'none';
				this.leisureSection1Wrapper.current.style.display = 'block';
				this.setState({ lastActiveSectionRef: this.leisureSection1Wrapper.current });
			}

			// unique 播放到最后一帧的处理
			if (item.key === 'unique') {
				// this.setState({ uniqueSection1SequenceImageIndex: 100 });
				// this.uniqueSection1CanvasRef.current.setCurrent(this.state.uniqueSection1SequenceImageIndex);
				this.uniqueHomeContent.current.style.display = 'none';
				this.setState({ lastActiveSectionRef: this.uniqueSection1Wrapper.current });
				this.uniqueSection1Wrapper.current.style.display = 'block';
				this.uniqueSection1Text2.current.style.display = 'block';
				this.uniqueSection1Title.current.style.display = 'block';
				this.bgLine.current.style.display = 'block';

				this.uniqueSection1Text2.current.className = 'animate__animated animate__fadeInLeft animate__delay-1s';
				this.uniqueSection1Title.current.className = 'animate__animated animate__fadeIn animate__delay-1s';
				this.bgLine.current.className = 'animate__animated animate__fadeInanimate__delay-1s';
			}
		}

		// 	if (this.start < 101 && this.start >= 0) {
		// 		this.setState({
		// 			section1SequenceImageIndex:
		// 				this.state.section1SequenceImageIndex >= 100 ? 100 : this.state.section1SequenceImageIndex + 1
		// 		});

		if (this.start >= 0 && this.start < 101) {
			if (item.key === 'comfort') {
				// const image = require(`../../assets/Video04_TransitionComfort/Video04_TransitionComfort${this.state
				// 	.section1SequenceImageIndex}.jpg`);
				// const _image = new Image();
				// _image.src = image;
				// _image.onload = () => {
				// 	if (this.box.current) {
				// 		this.box.current.childNodes[index].style.backgroundImage = `url(${image})`;
				// 	}
				// };
				// const _image = new Image();
				// _image.src = this.props.comfortImages[this.start];
				// _image.onload = () => {
				// 	this.box.current.childNodes[index].style.backgroundImage = `url(${this.sectionImageSequenceList[
				// 		'comfort'
				// 	][this.start]})`;
				// };
				this.homePageCanvasRef1.current && this.homePageCanvasRef1.current.setCurrent(this.start);
			}

			// console.log(this.start + 'this.start');
			if (item.key === 'privacy') {
				// const image = require(`../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy${this.state
				// 	.section1SequenceImageIndex}.jpg`);
				// const _image = new Image();
				// _image.src = image;
				// _image.onload = () => {
				// 	if (this.box.current) {
				// 		this.box.current.childNodes[index].style.backgroundImage = `url(${image})`;
				// 	}
				// };

				// const _image = new Image();

				// const imageUrl = require(`../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy${this
				// 	.start}.jpg`);
				// _image.src = imageUrl;
				// _image.onload = () => {
				// 	this.box.current.childNodes[index].style.backgroundImage = `url(${this.sectionImageSequenceList[
				// 		'privacy'
				// 	][this.start]})`;
				// };
				console.log(this.state.privacy1ImageSequence[this.start]);
				this.homePageCanvasRef0.current && this.homePageCanvasRef0.current.setCurrent(this.start);
				//this.homePageCanvasRef.current.setCurrent(this.start);

				// this.debounce(() => {
				// 	// 	// 	// 通过滑动距离控制轮询次数
				// 	const _interval = setInterval(() => {
				// 		this.homePageCanvasRef.current.setCurrent(this.state.comfortSection1SequenceImageIndex);
				// 		this.setState({
				// 			comfortSection1SequenceImageIndex: this.state.comfortSection1SequenceImageIndex + 1
				// 		})
				// 	}, 10);
				// }, 100)();
				// this.homePageCanvasRef.current.play();
				// console.log(this.start)

				// this.homePageImages.current.childNodes[this.start].style.zIndex = this.start
			}

			if (item.key === 'leisure') {
				// const image = require(`../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy${this.state
				// 	.section1SequenceImageIndex}.jpg`);
				// const _image = new Image();
				// _image.src = image;
				// _image.onload = () => {
				// 	if (this.box.current) {
				// 		this.box.current.childNodes[index].style.backgroundImage = `url(${image})`;
				// 	}
				// };

				// const _image = new Image();
				// _image.src = this.props.leisureImages[this.start];
				// _image.onload = () => {
				// 	this.box.current.childNodes[index].style.backgroundImage = `url(${this.sectionImageSequenceList[
				// 		'leisure'
				// 	][this.start]})`;
				// };
				this.homePageCanvasRef2.current && this.homePageCanvasRef2.current.setCurrent(this.start);
			}

			if (item.key === 'unique') {
				// const _image = new Image();
				// _image.src = this.props.unqiueImages[this.start];
				// _image.onload = () => {
				// 	this.box.current.childNodes[index].style.backgroundImage = `url(${this.sectionImageSequenceList[
				// 		'unique'
				// 	][this.start]})`;
				// };
				this.homePageCanvasRef3.current && this.homePageCanvasRef3.current.setCurrent(this.start);
			}
		}

		// 	}

		// 	// this.debounce(() => {
		// 	// 	// 	// 通过滑动距离控制轮询次数
		// 	// 	const _interval = setInterval(() => {
		// 	// 		// 播放到最后一帧切换文本

		// 	// 	}, 10);
		// 	// }, 10)();

		// 	// if(Math.ceil(Math.abs(move)) %2 === 0){

		// 	// 	console.log( this.state.section1SequenceImageIndex )
		// 	// 	const image = require(`../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy${this.state
		// 	// 		.section1SequenceImageIndex}.jpg`);
		// 	// 	const _image = new Image();
		// 	// 	_image.src = image;
		// 	// 	_image.onload = () => {
		// 	// 		this.box.current.childNodes[index].style.backgroundImage = `url(${image})`
		// 	// 		this.setState({
		// 	// 			section1SequenceImageIndex: this.state.section1SequenceImageIndex + 1
		// 	// 		});
		// 	// 	};
		// 	// }
		// 	// setTimeout(()=>{

		// 	// },10)
		// 	// if (

		// 	// 	this.state.section1SequenceImageIndex <= 99
		// 	// ) {
		// 	// 	console.log(this.state.section1SequenceImageIndex);

		// 	// const deltaTime = event.timeStamp - this.state.previousTime;
		// 	// console.log('时间：' + deltaTime * 1000);
		// 	// const deltaDis = Math.sqrt(Math.pow(this.state.endY - this.state.previousEnd, 2));
		// 	// console.log('速度：' + deltaDis / deltaTime * 1000);

		// 	// console.log('位置差：' + (move - this.state.previousDis));
		// 	// console.log(
		// 	// 	'延时位置差：' +
		// 	// 		setTimeout(() => {
		// 	// 			move - this.state.previousDis;
		// 	// 		}, 20)
		// 	// );

		// 	// this.homePageCanvasRef.current.setCurrent(this.state.section1SequenceImageIndex);
		// 	// setTimeout(()=>{
		// 	// 	this.box.current.childNodes[index].style.backgroundImage = `url(${this.sectionImageSequenceList.privacy[this.state.section1SequenceImageIndex]})`;
		// 	// this.setState({
		// 	// 	section1SequenceImageIndex: this.state.section1SequenceImageIndex + 1
		// 	// });
		// 	// },10)
		// 	// const distanceX = this.state.endX - this.state.startX;
		// 	// const distanceY = this.state.endY - this.state.startY;
		// 	// const clientHeight = document.documentElement.clientHeight;
		// 	// const disxx = move - this.state.previousEnd;

		// 	// const dis = move - this.state.previousEnd;
		// 	// if (this.state.startY != Math.abs(distanceY)) {
		// 	// 	if (Math.abs(distanceY) > clientHeight * 0.1) {
		// 	// 		console.log('i:' + dis);
		// 	// 		console.log(this.state.section1SequenceImageIndex);

		// 	// 	}
		// 	// }
		// 	// setTimeout(() => {

		// 	// }, 10);
		// 	// }

		// 	// this.setState({previousStart: event.targetTouches[0].screenX})

		// 	// this.setState({ previousDis: move });
		// 	// this.setState({ previousTime: event.timeStamp });

		// 	// let image = '';

		// 	// console.log(seconds);
		// 	// console.log(this.box.current.childNodes[index].style.offsetTop + '>>> offsetTop')
		// 	// function pad(num, size) {
		// 	// 	var s = num + "";
		// 	// 	while (s.length < size) s = "0" + s;
		// 	// 	return s;
		// 	// }

		// 	// // Variable to store the current image index
		// 	// var currentIdx = 1;
		// 	// var max = 200; // Qtd of images in the folder

		// 	// 移动距离

		// 	// setTimeout(()=>{

		// 	// },10)
		// 	// setInterval(function() {
		// 	// 	// Reset the index when overflow
		// 	// 	if(currentIdx > max) currentIdx = 1;
		// 	// 	// Change the background
		// 	// 	$('body').css('background-image', 'url(/web/images/' + pad(currentIdx,4) + '.png)');
		// 	// 	currentIdx ++;
		// 	// }, 5000); // 5000ms == 5 seconds
		// 	// this.privacySection1Wrapper.current.style.zIndex = '1';
		// 	// this.privacySection1Wrapper.current.style.display = 'block';
		// 	// this.video.current.style.zIndex = '1';

		// 	// this.setState({ imgSrc: image });
		// }
	}

	homePageTouchEnd(event, item, index) {
		//	clearInterval(const _interval);
		//	clearInterval(const _interval);
		// console.log('end:' + this.state.section1SequenceImageIndex);
	}

	// COMFORT SECTION
	comfortSection1Start(event) {
		this.updateStartMosePosition(event);
		// if (this.move < 0 && this.moveDistance === 100 && this.comfortSection1Text2.current.style.display === 'block') {
		// 	// 向上拉动 进入下一页
		// 	this.comfortSection1Wrapper.current.style.display = 'none';
		// 	this.comfortSection1BgLine.current.className = 'animate__animated animate__fadeOutIn animate__delay-.8s';
		// 	this.comfortSection1Text2.current.className = 'animate__animated animate__fadeOutLeft animate__delay-1s';
		// 	this.comfortSection1Title.current.className = 'animate__animated animate__fadeOutLeft animate__delay-1.2s';

		// 	this.comfortSection2Wrapper.current.style.display = 'block';
		// 	this.setState({ lastActiveSectionRef: this.comfortSection2Wrapper.current });
		// 	this.comfortSection2WrapperInAnimate();
		// }
	}
	comfortSection1Move(event) {
		if (this.isStopTouchMove) return;
		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;
		// this.moveDistance = Math.ceil(Math.pow(Math.abs(this.move), 0.8));

		if (this.move > 80) {
			this.comfortSection1WrapperOutAnimate();
			this.privacySection7WrapperInAnimate();
		}

		if (this.move < -80) {
			// 向上拉动 进入下一页

			if (this.state.comfortSection1SequenceImageIndex == 100) {
				this.comfortSection1WrapperOutAnimate();

				this.comfortSection2WrapperInAnimate();
			}

			this.debounce(() => {
				const _interval = setInterval(() => {
					if (this.state.comfortSection1SequenceImageIndex == 100) {
						clearInterval(_interval);
					}
					this.comfortSection1CanvasRef.current &&
						this.comfortSection1CanvasRef.current.setCurrent(this.state.comfortSection1SequenceImageIndex);
					this.setState({
						comfortSection1SequenceImageIndex:
							this.state.comfortSection1SequenceImageIndex >= 100
								? 100
								: this.state.comfortSection1SequenceImageIndex + 1
					});

					if (this.state.comfortSection1SequenceImageIndex == 50) {
						this.comfortSection1Text.current.style.display = 'none';
						this.comfortSection1Text.current.className =
							'animate__animated animate__fadeOutDown animate__delay-.5s';
					}

					if (this.state.comfortSection1SequenceImageIndex === 50) {
						this.comfortSection1Text2.current.style.display = 'block';
						this.comfortSection1Title.current.style.display = 'block';
						this.comfortSection1BgLine.current.className =
							'animate__animated animate__fadeIn animate__delay-.8s';
						this.comfortSection1Text2.current.className =
							'animate__animated animate__fadeInLeft animate__delay-1s';
						this.comfortSection1Title.current.className =
							'animate__animated animate__fadeInLeft animate__delay-1.2s';
					}
				}, 10);
			}, 10)();
		}
	}
	comfortSection1End(event) {
		console.log(this.move);
	}

	// COMFORT SECTION
	comfortSection2Start(event) {
		if (event.target.id === 'comfortSection2SplitterMoveHanlder') return;
		this.updateStartMosePosition(event);
	}
	comfortSection2Move(event) {
		if (event.target.id === 'comfortSection2SplitterMoveHanlder') return;
	}
	comfortSection2End(event) {
		if (this.isStopTouchMove) return;
		if (event.target.id === 'comfortSection2SplitterMoveHanlder') return;
		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;
		if (this.move > 80) {
			this.comfortSection2WrapperOutAnimate();
			// 向下拉动 返回上一页
			this.comfortSection1Text.current.style.display = 'none';
			this.setState({ comfortSection1SequenceImageIndex: 0 });
			this.comfortSection1CanvasRef.current.setCurrent(this.state.comfortSection1SequenceImageIndex);
			this.comfortSection1WrapperInAnimate();
		}

		if (this.move < -80) {
			// 向上拉动 进入下一页
			this.comfortSection2WrapperOutAnimate();
			this.comfortSection3WrapperInAnimate();
		}
	}
	comfortSection2SplitterStart(event) {
		this.updateStartMosePosition(event);
		this.isDown = true;
		this.splitterOffSet = [
			event.targetTouches[0].clientX,
			0,
			this.comfortSection2SplitterMoveHanlder.current.offsetLeft,
			this.mask1.current.offsetWidth
		];
	}
	comfortSection2SplitterMove(event) {
		if (this.isDown) {
			this.updateMoveMousePositon(event);
			// 计算绝对位置
			const absoluteWidth = event.targetTouches[0].clientX - this.splitterOffSet[0];

			// 计算相对于屏幕的位置
			const relativeWidth =
				(this.comfortSection2SplitterMoveHanlder.current.offsetLeft +
					this.comfortSection2SplitterMoveHanlder.current.offsetWidth) /
				screen.availWidth *
				100;
			// console.log('absoluteWidth:' + absoluteWidth);
			// console.log('relativeWidth:' + relativeWidth);
			// console.log(this.comfortSection2SplitterMoveHanlder.current.offsetWidth / 2);
			// console.log(this.comfortSection2SplitterMoveHanlder.current.offsetLeft);
			// console.log(this.letMeKonwDirection());
			const direction = this.letMeKonwDirection();
			this.comfortSection2SplitterMoveHanlder.current.style.left = absoluteWidth + this.splitterOffSet[2] + 'px';
			this.mask1.current.style.width = absoluteWidth + this.splitterOffSet[3] + 'px';

			if (this.comfortSection2SplitterMoveHanlder.current.offsetLeft < 90) {
				this.comfortSection2SplitterMoveHanlder.current.style.left = '90px';
			}

			// 40%区域内mask层由模糊变透明
			if (this.comfortSection2SplitterMoveHanlder.current.offsetLeft < 500 && direction === 'toRight') {
				this.mask1.current.style.backdropFilter = `blur(${90 - Math.abs(relativeWidth) * 3.5}px)`;
			}
			if (this.comfortSection2SplitterMoveHanlder.current.offsetLeft < 500 && direction === 'toLeft') {
				this.mask1.current.style.backdropFilter = `blur(${Math.abs(40 - Math.abs(relativeWidth)) * 3}px)`;
			}
			// 向左拖动区域小于40% 显示右侧文本描述
			if (relativeWidth < 40 && direction === 'toLeft') {
				setTimeout(() => {
					this.comfortSection2Desc.current.style.display = 'block';
				}, 500);
				this.comfortSection2Desc.current.style.left = '821px';
				this.comfortSection2Desc.current.className = 'animate__animated animate__slideInRight';
			}
			// 40% - 60% 区域内不显示mask层
			if (
				this.comfortSection2SplitterMoveHanlder.current.offsetLeft > 500 &&
				this.comfortSection2SplitterMoveHanlder.current.offsetLeft < 820
			) {
				this.mask1.current.style.backdropFilter = 'blur(0px)';
				this.mask1.current.style.background = 'rgba(255, 255, 255, 0)';
				this.mask2.current.style.display = 'none';
				this.comfortSection2Desc.current.className = 'animate__animated animate__fadeOut';
			}

			if (relativeWidth > 45 && direction === 'toRight') {
				this.comfortSection2Box05.current.className = 'comfortSection2Box05In';
			}
			if (relativeWidth < 45 && direction === 'toLeft') {
				this.comfortSection2Box05.current.className = 'comfortSection2Box05Out';
			}

			// 60% 区域内title向右侧移动，mask层由透明变模糊
			if (this.comfortSection2SplitterMoveHanlder.current.offsetLeft > 770 && direction === 'toRight') {
				this.mask2.current.style.backdropFilter = `blur(${relativeWidth - 60}px)`;
				this.mask2.current.style.display = 'block';
				this.mask2.current.style.flex = '1 1 auto';
				this.setState({ comfortSection2Bg: comfortSection2Bg2 });
			}

			if (this.comfortSection2SplitterMoveHanlder.current.offsetLeft > 770 && direction === 'toLeft') {
				this.mask2.current.style.backdropFilter = `blur(${90 - Math.abs(relativeWidth) * 4.5}px)`;
				this.mask2.current.style.display = 'block';
				this.mask2.current.style.flex = '1 1 auto';
				this.setState({ comfortSection2Bg: comfortSection2Bg2 });
			}

			if (this.comfortSection2SplitterMoveHanlder.current.offsetLeft > 870 && direction === 'toRight') {
				this.setState({ comfortSection2Bg: comfortSection2Bg3 });
				if (this.comfortSection2Desc.current.className !== 'animate__animated animate__slideInLeft') {
					this.comfortSection2Desc.current.style.display = 'block';
					this.comfortSection2Desc.current.style.left = '0px';
					this.comfortSection2Desc.current.className = 'animate__animated animate__slideInLeft';
				}
			}

			if (relativeWidth > 90 && direction === 'toRight') {
				this.comfortSection2SplitterMoveHanlder.current.style.left = '96%';
				this.mask1.current.style.width = '90%';
			}
		}
	}
	comfortSection2SplitterEnd(event) {
		this.isDown = false;
	}

	comfortSection2Splitter2Start(event) {
		this.isDown = true;
		this.splitterOffSet = [
			this.comfortSection2SplitterMoveHanlder.current.offsetLeft - event.targetTouches[0].clientX,
			0
		];
	}
	// comfortSection2Splitter2Move(event) {
	// 	// event.preventDefault();
	// 	if (this.isDown) {
	// 		const absoluteWidth = event.targetTouches[0].clientX - this.splitterOffSet[0];
	// 		const relativeWidth = (event.targetTouches[0].clientX - this.splitterOffSet[0]) / screen.availWidth * 100;
	// 		console.log('relativeWidth:' + relativeWidth);
	// 		if (relativeWidth > 45 && relativeWidth < 60) {
	// 			this.comfortSection2Splitter2.current.style.backdropFilter = 'blur(90px)';
	// 			this.comfortSection2SplitterMoveHanlder2.current.style.left = screen.availWidth - absoluteWidth - 45 + 'px';
	// 			this.comfortSection2Splitter2.current.style.left = screen.availWidth - absoluteWidth + 'px';
	// 			this.comfortSection2Splitter2.current.style.width =
	// 				screen.availWidth - this.comfortSection2SplitterMoveHanlder.current.style.left + 'px';
	// 		}

	// 		if (relativeWidth > 60 && relativeWidth < 70) {
	// 			this.comfortSection2Splitter.current.style.backdropFilter = 'blur(90px)';
	// 		}
	// 	}
	// }
	comfortSection2Splitter2End(event) {
		this.isDown = false;
	}
	// COMFORT SECTION
	comfortSection3Start(event) {
		this.updateStartMosePosition(event);
	}
	comfortSection3Move(event) {
		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;
	}
	comfortSection3Tab06Click(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		this.comfortSection3WrapperOutAnimate();

		setTimeout(() => {
			this.comfortSection4Wrapper.current.style.display = 'block';
			this.comfortSection4Box07.current.className = 'animate__animated animate__slideInDown';
		}, 1000);

		this.setState({ lastActiveSectionRef: this.comfortSection4Wrapper.current });
	}
	comfortSection3End(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		if (this.move > 80) {
			// 向下拉动 返回上一页
			this.comfortSection3WrapperOutAnimate();

			this.comfortSection2Wrapper.current.style.display = 'block';
			this.setState({ lastActiveSectionRef: this.comfortSection2Wrapper.current });
			this.comfortSection2WrapperInAnimate();
		}
	}

	// COMFORT SECTION
	comfortSection4Start(event) {
		this.updateStartMosePosition(event);
	}
	comfortSection4Move(event) {
		this.updateMoveMousePositon(event);
	}
	comfortSection4End(event) {
		if (this.isStopTouchMove) return;
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		this.updateMoveMousePositon(event);

		this.move = this.state.endY - this.state.startY;
		// part 2 返回到part1
		if (this.move > 80 && this.comfortSection4Text2.current.style.display == 'block') {
			// 向下拉动 返回上一页
			this.comfortSection4Text1.current.style.display = 'block';
			this.comfortSection4Image1.current.style.display = 'block';

			this.comfortSection4Text2.current.style.display = 'none';
			this.comfortSection4Image2.current.className = 'comfortSection4Image1Out';
			this.comfortSection4Hand.current.className = 'comfortSection4HandOut';
			return;
		}

		if (
			this.move > 80 &&
			this.comfortSection4Text1.current.style.display == 'block' &&
			this.comfortSection4Image1.current.style.display == 'block' &&
			this.comfortSection4Text2.current.style.display == 'none'
		) {
			// 向下拉动 返回上一页
			this.comfortSection3Wrapper.current.style.display = 'block';
			this.setState({ lastActiveSectionRef: this.comfortSection3Wrapper.current });
			this.comfortSection3WrapperInAnimate();
			this.comfortSection4Wrapper.current.style.display = 'none';
			return;
		}

		// part 1 转场进入part2
		if (
			this.move < -80 &&
			this.comfortSection4Text1.current.style.display == 'block' &&
			this.comfortSection4Image1.current.style.display == 'block' &&
			this.comfortSection4Text2.current.style.display == 'none'
		) {
			// 向上拉动 进入下一页

			// this.comfortSection4Text1.current.className =
			// 	'dFordSubTitle animate__animated animate__fadeOutRight animate__delay-.7s';
			// this.comfortSection4Image1.current.className = 'animate__animated animate__fadeOutRight animate__delay-1s';

			this.comfortSection4Text2.current.style.display = 'block';
			// // this.comfortSection4Image2.current.style.display = 'block';
			// setTimeout(() => {
			// 	this.comfortSection4Hand.current.style.left = '33px';

			// 	// this.comfortSection4Image1.current.style.display = 'none';
			// }, 800);
			this.comfortSection4Text1.current.style.display = 'none';
			this.comfortSection4Text2.current.className = 'dFordSubTitle animate__animated animate__slideInLeft';
			this.comfortSection4Image1.current.className = 'comfortSection4Image1In';
			this.comfortSection4Hand.current.className = 'comfortSection4HandIn';
			return;
		}
		if (
			this.move < -80 &&
			this.comfortSection4Text1.current.style.display == 'none' &&
			this.comfortSection4Text2.current.style.display == 'block'
		) {
			// 向上拉动 进入下一页
			this.comfortSection4Wrapper.current.style.display = 'none';
			this.comfortSection5Wrapper.current.style.display = 'block';
			//	this.comfortSection5Wrapper.current.className = 'sectionWrapper animate__animated animate__fadeIn animate__delay-.5s';
			this.setState({ lastActiveSectionRef: this.comfortSection5Wrapper.current });
			return;
		}
	}

	// COMFORT SECTION
	comfortSection5Start(event) {
		// event.stopPropagation();
		this.updateStartMosePosition(event);
	}
	comfortSection5Move(event) {
		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;
		if (this.move > 80) {
			// 向下拉动 返回上一页
			// setTimeout(()=>{this.comfortSection5Wrapper.current.style.display = 'none';},1300)
			// this.comfortSection5Wrapper.current.className = 'sectionWrapper animate__animated animate__fadeOut animate__delay-1s';
			this.comfortSection5Wrapper.current.style.display = 'none';
			this.comfortSection4Wrapper.current.style.display = 'block';
			this.setState({ lastActiveSectionRef: this.comfortSection4Wrapper.current });
			this.comfortSection4Text2.current.style.display = 'block';
			this.comfortSection4Image2.current.style.display = 'block';
			this.comfortSection4Hand.current.style.left = '163px';
		}
	}
	comfortSection5Tab06Click(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		setTimeout(() => {
			this.comfortSection6Wrapper.current.style.display = 'block';
		}, 1000);
		setTimeout(() => {
			this.comfortSection5Wrapper.current.style.display = 'none';
			this.comfortSection5Wrapper.current.className = 'sectionWrapper';
		}, 1300);
		this.comfortSection5Wrapper.current.className =
			'sectionWrapper animate__animated animate__slideOutUp animate__delay-1s';
		this.setState({ lastActiveSectionRef: this.comfortSection6Wrapper.current });
	}
	comfortSection5End(event) {
		if (this.move > 80) {
			// 向下拉动 返回上一页
			// setTimeout(()=>{this.comfortSection5Wrapper.current.style.display = 'none';},600)
			// this.comfortSection5Wrapper.current.className = 'sectionWrapper animate__animated animate__fadeOut animate__delay-.5s';

			this.comfortSection5Wrapper.current.style.display = 'none';

			this.comfortSection4Wrapper.current.style.display = 'block';
			this.setState({ lastActiveSectionRef: this.comfortSection4Wrapper.current });
			this.comfortSection4Text2.current.style.display = 'block';
			this.comfortSection4Image2.current.style.display = 'block';
			this.comfortSection4Hand.current.style.left = '163px';
		}
	}

	comfortSection6Start(event) {
		this.updateStartMosePosition(event);
	}
	comfortSection6Move(event) {
		this.updateMoveMousePositon(event);
	}
	comfortSection6End(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		if (this.isStopTouchMove) return;

		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;
		this.moveDistance = Math.ceil(Math.pow(Math.abs(this.move), 0.8));
		if (this.move < -80) {
			// 向上拉动 进入下一页
			this.comfortSection6Wrapper.current.style.display = 'none';

			this.comfortSection7Wrapper.current.style.display = 'block';
			this.setState({ lastActiveSectionRef: this.comfortSection7Wrapper.current });
			this.comfortSection7BG.current.className = 'animate__animated animate__fadeInLeft animate__delay-.8s';
			this.comfortSection7Text.current.className = 'animate__animated animate__fadeInDown animate__delay-1s';
			//this.comfortSection7LeftBg.current.className = 'animate__animated animate__fadeInRight animate__delay-.8s';
			return;
		}

		if (this.move > 80) {
			// 向下拉动 返回上一页
			this.comfortSection6Wrapper.current.style.display = 'none';
			//	this.comfortSection5Wrapper.current.className = 'sectionWrapper animate__animated animate__fadeIn animate__delay-1s';
			this.comfortSection5Wrapper.current.style.display = 'block';
			this.setState({ lastActiveSectionRef: this.comfortSection5Wrapper.current });
		}
	}

	comfortSection7Start(event) {
		this.updateStartMosePosition(event);
	}
	comfortSection7Move(event) {
		this.updateMoveMousePositon(event);
	}
	comfortSection7End(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;
		if (this.isStopTouchMove) return;
		if (this.move < 0) {
			// 向上拉动 进入下一页
			this.comfortSection7Wrapper.current.style.display = 'none';

			this.comfortSection8Wrapper.current.style.display = 'block';
			//this.comfortSection8Bg.current.style.top = '0px';
			this.comfortSection8BgPart1.current.style.top = '0px';
			this.setState({ lastActiveSectionRef: this.comfortSection8Wrapper.current });
			return;
		}
		if (this.move > 80) {
			// 向下拉动 返回上一页
			this.comfortSection7Wrapper.current.style.display = 'none';

			this.comfortSection6Wrapper.current.style.display = 'block';
			this.setState({ lastActiveSectionRef: this.comfortSection6Wrapper.current });
		}
	}

	comfortSection8Start(event) {
		this.updateStartMosePosition(event);
	}
	comfortSection8Move(event) {
		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;
		const moveX = this.state.endX - this.state.startX;
		this.moveDistance = Math.ceil(Math.pow(Math.abs(moveX), 0.4));

		if (moveX > 80 && this.comfortSection8BgPart1.current.style.top != '574px') {
			// 杂志翻页状态
			// 向右拉动翻页
			this.debounce(() => {
				// 通过滑动距离控制轮询次数
				const _interval = setInterval(() => {
					if (this.state.comfortSection8ImageSequenceIndex === 0) {
						clearInterval(_interval);
					}
					if (this.state.comfortSection8ImageSequenceIndex === 100) {
						this.comfortSection8ClickMagamizeMockButton.current.style.display = 'block';
					} else {
						this.comfortSection8ClickMagamizeMockButton.current.style.display = 'none';
					}
					this.setState({
						comfortSection8ImageSequenceIndex:
							this.state.comfortSection8ImageSequenceIndex <= 0
								? 0
								: this.state.comfortSection8ImageSequenceIndex - 1
					});

					this.comfortSection8CanvasRef.current.setCurrent(this.state.comfortSection8ImageSequenceIndex);
				}, 10);
			}, 10)();
		}
		if (moveX < -80 && this.comfortSection8BgPart1.current.style.top != '574px') {
			// 向左拉动翻页
			this.debounce(() => {
				// 通过滑动距离控制轮询次数
				const _interval = setInterval(() => {
					if (this.state.comfortSection8ImageSequenceIndex === 100) {
						clearInterval(_interval);
					}
					if (this.state.comfortSection8ImageSequenceIndex === 100) {
						this.comfortSection8ClickMagamizeMockButton.current.style.display = 'block';
					} else {
						this.comfortSection8ClickMagamizeMockButton.current.style.display = 'none';
					}
					this.setState({
						comfortSection8ImageSequenceIndex:
							this.state.comfortSection8ImageSequenceIndex >= 100
								? 100
								: this.state.comfortSection8ImageSequenceIndex + 1
					});

					this.comfortSection8CanvasRef.current.setCurrent(this.state.comfortSection8ImageSequenceIndex);
				}, 10);
			}, 10)();

			// if (this.moveDistance > 15) {
			// 	this.moveDistance = 15;
			// }

			// setTimeout(() => {
			// 	this.comfortSection8CanvasRef.current.setCurrent(this.moveDistance);
			// }, 100);
		}

		if (this.move < -80 && this.comfortSection8BgPart1.current.style.top == '574px') {
			// 向上拉动，进入下一页
			// 杂志1/2显示状态
			this.comfortSection9Wrapper.current.style.display = 'block';
			this.comfortSection9Bg1.current.style.display = 'block';
			this.setState({ lastActiveSectionRef: this.comfortSection9Wrapper.current });
			this.comfortSection8Bg2.current.className =
				'imageCover animate__animated animate__slideOutUp animate__delay-1.5s';
			this.comfortSection8BgPart1.current.className =
				'animate__animated animate__slideOutDown animate__delay-1.5s';
			setTimeout(() => {
				this.comfortSection8Wrapper.current.style.display = 'none';
			}, 1000);

			return;
		}
	}

	comfortSection8ClickMagamize(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		this.comfortSection8ClickMagamizeMockButton.current.style.display = 'none';
		this.comfortSection8Bg2.current.style.display = 'block';

		setTimeout(() => {
			this.comfortSection8BgPart1.current.style.top = '574px';
			this.comfortSection8ClickMagamizeMockButton.current.style.display = 'none';
			//this.comfortSection8Bg.current.style.top = '574px';
		}, 1500);
		this.comfortSection8Bg2.current.className =
			'imageCover animate__animated animate__slideInDown animate__delay-1.5s';
		this.comfortSection8BgPart1.current.className = 'comfortSection8ClickMagamize';
		//	this.comfortSection8Bg.current.className = 'comfortSection8ClickMagamize';
	}
	comfortSection8End(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		if (this.isStopTouchMove) return;
		// 从杂志1/2状态切换到 显示整本杂志状态
		if (this.move > 80 && this.comfortSection8BgPart1.current.style.top == '574px') {
			// 向下拉动 返回上一页
			this.comfortSection8Wrapper.current.style.display = 'block';
			this.setState({ lastActiveSectionRef: this.comfortSection8Wrapper.current });
			this.comfortSection8Bg2.current.className =
				'imageCover animate__animated animate__slideOutUp animate__delay-1.5s';
			this.comfortSection8BgPart1.current.className = 'comfortSection8ClickMagamizeOut';
			//	this.comfortSection8Bg.current.style.top = '0px';
			return;
		}

		// 从整本杂志状态切换到上一页
		if (this.move > 80 && this.comfortSection8Video.current.style.top == '0px') {
			// 向下拉动 返回上一页
			this.comfortSection8Wrapper.current.style.display = 'none';
			this.comfortSection7Wrapper.current.style.display = 'block';
			this.setState({ lastActiveSectionRef: this.comfortSection7Wrapper.current });
		}
	}

	comfortSection9Start(event) {
		this.updateStartMosePosition(event);
	}
	comfortSection9End(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		if (this.isStopTouchMove) return;
		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;
		this.moveDistance = Math.ceil(Math.pow(Math.abs(this.move), 0.8));
		if (this.move < -80) {
			// 向上拉动 进入下一页
			this.comfortSection9Bg1.current.style.display = 'block';

			this.comfortSection9LeftBg.current.className = 'animate__animated animate__fadeOutLeft animate__delay-1.5s';
			this.comfortSection9BgRight.current.className = 'animate__animated animate__fadeOutRight animate__delay-2s';

			this.comfortSection9Bg1.current.style.zIndex = '1';
			this.comfortSection9Bg1.current.style.height = '100%';
			this.comfortSection9Mask1.current.className = 'animate__animated animate__fadeOut animate__delay-2.3s';
			this.comfortSection9Mask2.current.className = 'animate__animated animate__fadeOut animate__delay-2.3s';

			this.comfortSectoin9EndReturnHome.current.className =
				'animate__animated animate__slideInUp  animate__delay-1.3s';
			this.comfortSectoin9EndReturnHomeTitle.current.className =
				'animate__animated animate__slideInUp  animate__delay-1.3s';
			this.comfortSectoin9EndReturnHomeText.current.className =
				'animate__animated animate__slideInUp  animate__delay-1.3s';
			setTimeout(() => {
				this.comfortSection9Wrapper.current.style.display = 'none';
				this.comfortSection9LeftBg.current.className = '';
				this.comfortSection9BgRight.current.className = '';

				this.comfortSection9Bg1.current.style.zIndex = '0';
				this.comfortSection9Mask1.current.className = '';
				this.comfortSection9Mask2.current.className = '';

				this.comfortSection10EndWrapper.current.style.display = 'block';
				this.comfortSectoin9EndReturnHomeTitle.current.style.display = 'block';
				this.comfortSectoin9EndReturnHome.current.style.display = 'block';
				this.comfortSectoin9EndReturnHomeText.current.style.display = 'block';
			}, 1500);
		}

		if (this.move > 80) {
			// 向下拉动 返回上一页

			// this.comfortSection8Wrapper.current.style.display = 'block';

			// this.comfortSection8Bg2.current.style.display = 'block';
			// this.comfortSection8Video.current.style.top = '574px';
			// this.comfortSection8Bg.current.style.top = '574px';

			this.comfortSection8Bg2.current.className =
				'imageCover animate__animated animate__slideInDown animate__delay-1s';
			this.comfortSection8BgPart1.current.className = 'animate__animated animate__slideInUp animate__delay-1s';
			setTimeout(() => {
				this.comfortSection8Wrapper.current.style.display = 'block';
				this.setState({ lastActiveSectionRef: this.comfortSection8Wrapper.current });
				this.comfortSection8ClickMagamizeMockButton.current.style.display = 'none';
			}, 1300);
			setTimeout(() => {
				this.comfortSection9Wrapper.current.style.display = 'none';
			}, 1500);
			// 	this.comfortSection8Bg2.current.className =
			// 	'imageCover animate__animated animate__slideInUp animate__delay-.5s';
			// this.comfortSection8Video.current.className = 'animate__animated animate__slideInDown animate__delay-.5s';
		}
	}
	comfortSection9Move(event) {
		this.updateMoveMousePositon(event);
	}
	dynamicDiv(currentAvtive) {
		const oDiv = document.createElement('div');
		oDiv.setAttribute('id', 'dynamicDiv');
		oDiv.style.background = 'red';
		oDiv.style.position = 'absolute';
		oDiv.style.left = '0px';
		oDiv.style.top = '0px';
		oDiv.style.width = '100%';
		oDiv.style.height = '100%';
		currentAvtive.insertBefore(oDiv);
		const _oDiv: HTMLElement = document.getElementById('dynamicDiv') as HTMLElement;
		_oDiv.addEventListener('click', function() {
			console.log('okokok');
		});
	}

	comfortSection10End(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		if (this.isStopTouchMove) return;
		if (this.move > 0) {
			// 向下拉动 返回上一页
			this.comfortSectoin9EndReturnHome.current.className =
				'animate__animated animate__slideOutDown  animate__delay-2.3s';
			this.comfortSectoin9EndReturnHomeTitle.current.className =
				'animate__animated animate__slideOutDown  animate__delay-2.3s';
			this.comfortSectoin9EndReturnHomeText.current.className =
				'animate__animated animate__slideOutDown  animate__delay-2.3s';
			setTimeout(() => {
				this.comfortSectoin9EndReturnHome.current.className = ' ';
				this.comfortSectoin9EndReturnHomeTitle.current.className = '';
				this.comfortSectoin9EndReturnHomeText.current.className = '';
				this.comfortSectoin9EndReturnHomeTitle.current.style.display = 'none';
				this.comfortSection10EndWrapper.current.style.display = 'none';
				this.comfortSectoin9EndReturnHome.current.style.display = 'none';
				this.comfortSectoin9EndReturnHomeText.current.display = 'none';
			}, 2500);

			setTimeout(() => {
				this.comfortSection9Wrapper.current.style.display = 'block';
				this.setState({ lastActiveSectionRef: this.comfortSection9Wrapper.current });
				this.comfortSection9Bg1.current.style.display = 'block';
				this.comfortSection9LeftBg.current.className =
					'animate__animated animate__fadeInLeft animate__delay-1.5s';
				this.comfortSection9BgRight.current.className =
					'animate__animated animate__fadeInRight animate__delay-1.5s';

				this.comfortSection9Bg1.current.style.zIndex = '0';
				this.comfortSection9Bg1.current.style.height = '752px';
				this.comfortSection9Mask1.current.className = 'animate__animated animate__fadeIn animate__delay-2.3s';
				this.comfortSection9Mask2.current.className = 'animate__animated animate__fadeIn animate__delay-2.3s';
				this.comfortSectoin9EndReturnHome.current.className =
					'animate__animated animate__slideInUp  animate__delay-2.3s';
			}, 2000);
		}

		this.move = this.state.endY - this.state.startY;
		this.moveDistance = Math.ceil(Math.pow(Math.abs(this.move), 0.8));
		if (this.move < -80) {
			// 向上拉动 进入下一页
			this.comfortSection10EndWrapper.current.style.display = 'none';

			this.leisureSection1Wrapper.current.style.display = 'block';
			this.setState({ leisureSection1SequenceImageIndex: 0 });
			this.leisureSection1CanvasRef.current.setCurrent(1);
			this.leisureHomeContent.current.style.display = 'block';
			this.leisureHomeContent.current.className = 'animate__animated animate__fadeInDown animate__delay-.5s';
			this.leisureSection1Title.current.style.display = 'none';
			this.leisureSection1ClickTab.current.style.display = 'none';
			this.setState({ lastActiveSectionRef: this.leisureSection1Wrapper.current });
		}
	}

	comfortSection10Start(event) {
		this.updateStartMosePosition(event);
	}
	comfortSection10Move(event) {
		this.updateMoveMousePositon(event);
	}

	leisureSection1Start(event) {
		this.updateStartMosePosition(event);
	}
	leisureSection1Move(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
	}

	/**
	 * leisure section1 点击跳转到leisure section2
	*/
	onLeisureSection1ClickTab(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		setTimeout(() => {
			this.leisureSection1Wrapper.current.style.display = 'none';
		}, 1500);

		this.leisureSection2Wrapper.current.style.display = 'block';
		this.leisureSection2Wrapper.current.className =
			'sectionWrapper animate__animated animate__slideInRight animate__delay-1.2s';

		this.setState({ lastActiveSectionRef: this.leisureSection2Wrapper.current });
		this.setState({ leisureSection2SequenceImageIndex: 0 });
		this.leisureSection2CanvasRef.current.setCurrent(this.state.leisureSection2SequenceImageIndex);
	}
	leisureSection1End(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		if (this.isStopTouchMove) return;
		if (this.move > 0) {
			// 向下拉动，返回上一页
			this.leisureSection1Wrapper.current.style.display = 'none';
			this.comfortSection10EndWrapper.current.style.display = 'block';
			this.setState({ lastActiveSectionRef: this.comfortSection10EndWrapper.current });
		}

		if (this.isStopTouchMove) return;
		this.move = this.state.endY - this.state.startY;
		if (this.move < -80) {
			// 向上拉动 进入下一页
			if (this.state.leisureSection1SequenceImageIndex == 100) {
				return;
			}

			this.debounce(() => {
				const _interval = setInterval(() => {
					if (this.state.leisureSection1SequenceImageIndex == 100) {
						clearInterval(_interval);
					}
					this.comfortSection1CanvasRef.current &&
						this.leisureSection1CanvasRef.current.setCurrent(this.state.leisureSection1SequenceImageIndex);
					this.setState({
						leisureSection1SequenceImageIndex:
							this.state.leisureSection1SequenceImageIndex >= 100
								? 100
								: this.state.leisureSection1SequenceImageIndex + 1
					});

					if (this.state.leisureSection1SequenceImageIndex == 50) {
						this.leisureHomeContent.current.style.display = 'none';
						this.leisureHomeContent.current.className =
							'animate__animated animate__fadeOutDown animate__delay-.5s';
					}

					if (this.state.leisureSection1SequenceImageIndex === 50) {
						this.leisureSection1Title.current.style.display = 'block';
						this.leisureSection1ClickTab.current.style.display = 'block';
						this.leisureSection1ClickTab.current.className =
							'animate__animated animate__fadeIn animate__delay-1s';
						this.leisureSection1Title.current.className =
							'animate__animated animate__fadeInLeft animate__delay-1.2s';
					}
				}, 60);
			}, 10)();
		}
	}

	leisureSection2TouchStart(event) {
		this.updateStartMosePosition(event);
	}
	leisureSection2TouchMove(event) {
		this.updateMoveMousePositon(event);
	}
	leisureSection2TouchEnd(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		if (this.isStopTouchMove) return;

		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;

		if (this.move < 0 && this.leisureSection2CanvasRefWrapper.current.style.height == '100%') {
			this.debounce(() => {
				// 轮询播放序列帧
				const _this = this;
				const _interval = setInterval(() => {
					_this.setState({
						leisureSection2SequenceImageIndex:
							this.state.leisureSection2SequenceImageIndex >= 40
								? 40
								: this.state.leisureSection2SequenceImageIndex + 1
					});
					_this.leisureSection2CanvasRef.current.setCurrent(_this.state.leisureSection2SequenceImageIndex);
					// 播放到最后一帧，切换转场
					if (this.state.leisureSection2SequenceImageIndex == 40) {
						clearInterval(_interval);
						this.leisureSection2Title.current.style.display = 'none';
						this.leisureSection2Box2.current.style.display = 'block';
						this.leisureSection2Box3.current.style.display = 'block';
						this.leisureSection2Text2.current.style.display = 'block';
						this.leisureSection2CanvasRefWrapper.current.className = 'leisureSection2CanvasRefWrapperIn';
					}
				}, 60);
			}, 10)();
		}

		if (
			this.move < -80 &&
			this.leisureSection2CanvasRefWrapper.current.className == 'leisureSection2CanvasRefWrapperIn'
		) {
			// 向上拉动，进入下一页
			setTimeout(() => {
				this.leisureSection2Wrapper.current.style.display = 'none';
			}, 1500);

			this.leisureSection3WrapperInAnimate();
		}
		// 从的初始状态 返回到上一页
		if (this.move > 80 && this.leisureSection2Text2.current.style.display == 'none') {
			//  重置 leisure section 1的初始状态
			this.leisureSection1Wrapper.current.style.display = 'block';
			this.setState({ lastActiveSectionRef: this.leisureSection1Wrapper.current });

			// 重置leisureSectin2 part1的序列帧
			this.setState({ leisureSection1SequenceImageIndex: 0 });
			this.leisureSection1CanvasRef.current.setCurrent(1);

			// 设定leisureHomeContent 的初始状态
			this.leisureHomeContent.current.style.display = 'block';
			this.leisureHomeContent.current.className = 'animate__animated animate__fadeInDown animate__delay-.5s';

			// 隐藏 leisure section2
			this.leisureSection2Wrapper.current.style.display = 'none';
			this.leisureSection1Title.current.style.display = 'none';
			this.leisureSection1ClickTab.current.style.display = 'none';
		}

		// 从leisure section2 的最终状态返回到初始状态
		if (this.move > 80 && this.leisureSection2Text2.current.style.display == 'block') {
			// 设定 leisure section2 part2 的初始状态
			this.leisureSection2Title.current.style.display = 'block';
			this.leisureSection2CanvasRefWrapper.current.className = 'leisureSection2CanvasRefWrapperBack';

			// 隐藏part 2 文本
			this.leisureSection2Box2.current.style.display = 'none';
			this.leisureSection2Box3.current.style.display = 'none';
			this.leisureSection2Text2.current.style.display = 'none';

			// 重置part1序列帧
			this.setState({ leisureSection2SequenceImageIndex: 0 });
			this.leisureSection2CanvasRef.current.setCurrent(1);
		}
	}

	leisureSection3TouchStart(event) {
		this.updateStartMosePosition(event);
	}
	leisureSection3TouchMove(event) {
		this.updateMoveMousePositon(event);
	}
	leisureSection3TouchEnd(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		if (this.isStopTouchMove) return;
		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;

		// 初始状态 向上拉动 隐藏上层背景，显示下层背景
		if (this.move < -80 && this.leisureSection3Bg1.current.style.display == 'block') {
			this.leisureSection3Bg1.current.className = 'animate__animated animate__fadeOut animate__delay-1.5s';
			this.leisureSection3Bg2.current.className = 'animate__animated animate__fadeIn animate__delay-.3s';
			setTimeout(() => {
				this.leisureSection3Bg1.current.style.display = 'none';
			}, 1500);
			setTimeout(() => {
				this.leisureSection3Bg2.current.style.display = 'block';
			}, 300);
			return;
		}

		// 上层背景隐藏状态时触发向上拉动，进入leisure section4
		if (this.move < -80 && this.leisureSection3Bg2.current.style.display == 'block') {
			// 向上拉动 进入下一页
			this.leisureSection3WrapperOutAnimate();

			setTimeout(() => {
				this.leisureSection4Wrapper.current.style.display = 'block';
				this.leisureSection4Wrapper.current.className = 'animate__animated animate__fadeIn animate__delay-.1s';
			}, 1500);
			this.setState({ lastActiveSectionRef: this.leisureSection4Wrapper.current });
		}

		// clearInterval(const _interval);
		if (this.move > 80 && this.leisureSection3Bg2.current.style.display == 'block') {
			this.leisureSection3Bg1.current.className = 'animate__animated animate__fadeIn animate__delay-.3s';
			this.leisureSection3Bg2.current.className = 'animate__animated animate__fadeOut animate__delay-1.5s';
			setTimeout(() => {
				this.leisureSection3Bg1.current.style.display = 'block';
			}, 300);
			setTimeout(() => {
				this.leisureSection3Bg2.current.style.display = 'none';
			}, 1500);
			return;
		}
		if (this.move > 80 && this.leisureSection3Bg1.current.style.display == 'block') {
			// 向下拉动，返回上一页
			this.leisureSection3WrapperOutAnimate();
			this.leisureSection2Wrapper.current.style.display = 'block';

			this.setState({ lastActiveSectionRef: this.leisureSection2Wrapper.current });
		}
	}

	leisureSection4TouchStart(event) {
		this.updateStartMosePosition(event);
	}
	leisureSection4TouchMove(event) {
		this.updateMoveMousePositon(event);
	}
	leisureSection4Tab(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		this.leisureSection4Wrapper.current.className =
			'sectionWrapper animate__animated animate__fadeOut animate__delay-.5s';
		setTimeout(() => {
			this.leisureSection4Wrapper.current.style.display = 'none';
			this.leisureSection5Wrapper.current.style.display = 'block';
		}, 500);
		this.setState({ lastActiveSectionRef: this.leisureSection5Wrapper.current });
	}
	leisureSection4TouchEnd(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		if (this.isStopTouchMove) return;
		if (this.move > 0) {
			// 向下拉动，返回上一页
			this.leisureSection4Wrapper.current.style.display = 'none';
			this.leisureSection3Wrapper.current.style.display = 'block';
			this.setState({ lastActiveSectionRef: this.leisureSection3Wrapper.current });
			this.leisureSection3WrapperInAnimate();
		}
	}
	leisureSection5TouchStart(event) {
		this.updateStartMosePosition(event);
	}
	leisureSection5TouchMove(event) {
		this.updateMoveMousePositon(event);
	}
	leisureSection5TouchEnd(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		if (this.isStopTouchMove) return;
		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;
		if (this.move < -80) {
			// 向上拉动 进入下一页
			this.leisureSection5Wrapper.current.style.display = 'none';
			this.leisureSection6WrapperInAnimate();
		}
		//	clearInterval(const _interval);
		if (this.move > 80) {
			// 向下拉动，返回上一页
			this.leisureSection5Wrapper.current.style.display = 'none';

			this.leisureSection4WrapperInAnimate();
		}
	}
	leisureSection6TouchStart(event) {
		this.updateStartMosePosition(event);
	}
	leisureSection6TouchMove(event) {
		this.updateMoveMousePositon(event);
	}
	leisureSection6TouchEnd(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		if (this.isStopTouchMove) return;
		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;
		if (this.move < -80) {
			// 向上拉动 进入下一页
			this.leisureSection6WrapperOutAnimate();

			this.leisureSection7WrapperInAnimate();
		}
		// part 返回到上一页
		if (
			this.move > 80 &&
			this.leisureSetion6GrallyMaxImage.current.className != 'imageCover leisureSetion6GrallyMaxImageIn'
		) {
			// 向下拉动，返回上一页
			this.leisureSection6WrapperOutAnimate();
			this.leisureSection5Wrapper.current.style.display = 'block';
			this.setState({ lastActiveSectionRef: this.leisureSection5Wrapper.current });
		}

		// part 返回到上一页
		if (
			this.move > 80 &&
			this.leisureSetion6GrallyMaxImage.current.className == 'imageCover leisureSetion6GrallyMaxImageIn'
		) {
			// 向下拉动，返回上一页
			setTimeout(() => {
				this.leisureSection7Wrapper.current.style.display = 'none';
				this.leisureSetion6GrallyMaxImage.current.className = 'imageCover leisureSetion6GrallyMaxImageOut';
			}, 1200);
			this.leisureSection6Grally.current.className =
				'smallImges animate__animated animate__slideInRight animate__delay-1.5s';
			this.leisureSection7ReturnHome.current.className =
				'animate__animated animate__slideOutDown animate__delay-1.2s';
			this.leisureSection7ReturnHomeTitle.current.className =
				'animate__animated animate__slideOutDown animate__delay-1.2s';
		}
	}
	leisureSection7TouchStart(event) {
		this.updateStartMosePosition(event);
	}
	leisureSection7TouchMove(event) {
		this.updateMoveMousePositon(event);
	}
	leisureSection7TouchEnd(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		if (this.isStopTouchMove) return;
		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;
		if (this.move < 0) {
			// 向上拉动 进入下一页
			this.leisureSection7WrapperOutAnimate();
			setTimeout(() => {
				this.uniqueSection1Wrapper.current.style.display = 'block';
				this.uniqueSection1CanvasRef.current.setCurrent(1);
				this.setState({ uniqueSection1SequenceImageIndex: 0 });
				this.setState({ lastActiveSectionRef: this.uniqueSection1Wrapper.current });
			}, 1500);
		}
		if (this.move > 0) {
			// 向下拉动，返回上一页
			this.leisureSection7WrapperOutAnimate();

			this.leisureSection6WrapperInAnimate();
		}
	}

	uniqueSection1TouchStart(event) {
		this.updateStartMosePosition(event);
	}
	uniqueSection1TouchMove(event) {
		this.updateMoveMousePositon(event);
	}
	uniqueSection1TouchEnd(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		if (this.isStopTouchMove) return;
		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;
		if (this.move > 0) {
			// 向下拉动，返回上一页
			this.uniqueSection1Wrapper.current.style.display = 'none';
			this.leisureSection7Wrapper.current.style.display = 'block';
			this.setState({ lastActiveSectionRef: this.leisureSection7Wrapper.current });
		}

		if (this.move < -80) {
			// 向上拉动 进入下一页
			if (this.state.uniqueSection1SequenceImageIndex == 100) {
				setTimeout(() => {
					this.uniqueSection1Wrapper.current.style.display = 'none';
				}, 1500);

				this.uniqueSection1Text2.current.className =
					'animate__animated animate__slideOutRight animate__delay-.5s';
				this.uniqueSection1Title.current.className =
					'animate__animated animate__slideOutLeft animate__delay-.5s';

				this.uniqueSection2WrapperInAnimate();
			}

			this.debounce(() => {
				const _interval = setInterval(() => {
					if (this.state.uniqueSection1SequenceImageIndex == 100) {
						clearInterval(_interval);
					}
					this.uniqueSection1CanvasRef.current &&
						this.uniqueSection1CanvasRef.current.setCurrent(this.state.uniqueSection1SequenceImageIndex);
					this.setState({
						uniqueSection1SequenceImageIndex:
							this.state.uniqueSection1SequenceImageIndex >= 100
								? 100
								: this.state.uniqueSection1SequenceImageIndex + 1
					});

					if (this.state.uniqueSection1SequenceImageIndex == 50) {
						this.uniqueHomeContent.current.style.display = 'none';
						this.uniqueHomeContent.current.className =
							'animate__animated animate__fadeOutDown animate__delay-.5s';
					}

					if (this.state.uniqueSection1SequenceImageIndex === 50) {
						this.uniqueSection1Text2.current.style.display = 'block';
						this.uniqueSection1Title.current.style.display = 'block';
						this.uniqueSection1Text2.current.className =
							'animate__animated animate__fadeInLeft animate__delay-1s';
						this.uniqueSection1Title.current.className =
							'animate__animated animate__fadeInLeft animate__delay-1.2s';
					}
				}, 10);
			}, 10)();
		}
	}

	uniqueSection2TouchStart(event) {
		this.updateStartMosePosition(event);
	}
	uniqueSection2TouchMove(event) {
		this.updateMoveMousePositon(event);

		this.move = this.state.endY - this.state.startY;
	}
	uniqueSection2TouchEnd(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		if (this.isStopTouchMove) return;
		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;
		if (this.move < 0) {
			// 向上拉动 进入下一页

			setTimeout(() => {
				this.uniqueSection3ReturnHome.current.style.display = 'block';
				this.uniqueSection3ReturnHomeTitle.current.style.display = 'block';
			}, 1300);
			this.uniqueSection3ReturnHome.current.className =
				'animate__animated animate__slideInUp  animate__delay-1.3s';
			this.uniqueSection3ReturnHomeTitle.current.className =
				'animate__animated animate__slideInUp  animate__delay-1.3s';
			this.setState({ lastActiveSectionRef: this.uniqueSection3Wrapper.current });

			this.uniqueSection2InWrapperAnimateHide();

			this.uniqueSection3Wrapper.current.style.display = 'block';
			this.unqiueSection2Bg1.current.className = 'imageCover uniqueSection2MaxImageBgOut';
		}

		if (this.move > 0) {
			// 向下拉动，返回上一页
			this.uniqueSection1Wrapper.current.style.display = 'block';
			this.setState({ lastActiveSectionRef: this.uniqueSection1Wrapper.current });
			this.uniqueSection2InWrapperAnimateHide();
		}
	}
	uniqueSection3TouchStart(event) {
		this.updateStartMosePosition(event);
	}
	uniqueSection3TouchMove(event) {
		this.updateMoveMousePositon(event);
	}
	uniqueSection3TouchEnd(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		if (this.isStopTouchMove) return;
		this.updateMoveMousePositon(event);
		this.move = this.state.endY - this.state.startY;
		if (this.move < 0) {
			// 向上拉动 进入下一页
			this.uniqueSection3Wrapper.current.style.display = 'none';
			this.box.current.style.display = 'flex';
			this.onChange(this.state.slides[3], 3);
		}
		if (this.move > 0) {
			// 向下拉动，返回上一页
			this.uniqueSection3Wrapper.current.style.display = 'none';
			this.uniqueSection2Wrapper.current.style.display = 'block';
			this.setState({ lastActiveSectionRef: this.uniqueSection2Wrapper.current });
			this.uniqueSection2WrapperInAnimate();
		}
	}
	letMeKonwDirection() {
		const moveX = this.state.endX - this.state.startX;
		const moveY = this.state.endY - this.state.startY;

		if (Math.abs(moveX) > Math.abs(moveY) && moveX > 0) {
			return 'toRight';
		} else if (Math.abs(moveX) > Math.abs(moveY) && moveX < 0) {
			return 'toLeft';
		} else if (Math.abs(moveY) > Math.abs(moveX) && moveY > 0) {
			return 'toBottom';
		} else if (Math.abs(moveY) > Math.abs(moveX) && moveY < 0) {
			return 'toTop';
		}
	}
	onInfoItemChange(index, className) {
		this.effectComponent.current.init();
		// IMPP.init();
		const _arr = [
			48,
			28,
			32,
			51
		];
		if (className === 'activeInfo') {
			this.setState({
				uniqueSection2Total: this.state.uniqueSection2Total + _arr[index]
			});
		} else {
			this.setState({
				uniqueSection2Total: this.state.uniqueSection2Total - _arr[index]
			});
		}
		// this.uniqueSection2DynamicBg.current.childNodes.forEach((item, i) => {
		// 	if (i === index) {
		// 		item.style.display = 'block';
		// 	} else {
		// 		item.style.display = 'none';
		// 	}
		// });
	}
	leisureSetion6GrallySmallImage(index) {
		this.setState({ leisureSetion6GrallyMaxImage: this.grallyList[index] });

		this.leisureSection6Grally.current.childNodes.forEach((item, i) => {
			if (i === index) {
				item.className = `activeGrally${index}`;
			} else {
				item.className = 'normalGrally';
			}
		});
	}
	onReturnToHome(event, currentPosition, targetSlideIndex) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		currentPosition.current.style.display = 'none';
		this.box.current.style.display = 'flex';
		this.onChange(this.state.slides[targetSlideIndex], targetSlideIndex);
	}

	// demoIntroSection1Wrapper 结束动画
	demoIntroSection1WrapperOutAnimate() {
		this.demoIntroSection1Wrapper.current.className =
			'demoIntroSection1Wrapper animate__animated animate__fadeOut  animate__delay-1s';
		setTimeout(() => {
			this.demoIntroSection1Wrapper.current.style.display = 'none';
			'demoIntroSection1Wrapper';
		}, 1000);
	}

	// demoIntroSection2Wrapper  入场动画
	demoIntroSection2WrapperInAnimate() {
		this.demoIntroSection2Wrapper.current.style.display = 'block';
		this.demoIntroSection2Wrapper.current.className = 'animate__animated animate__fadeIn animate__delay-.5s';
		this.setState({ lastActiveSectionRef: this.demoIntroSection2Wrapper.current });
	}

	// demoIntroSection2Wrapper  结束动画
	demoIntroSection2WrapperOutAnimate() {
		this.demoIntroSection2Wrapper.current.className = 'animate__animated animate__fadeOut  animate__delay-1s';
		setTimeout(() => {
			this.demoIntroSection2Wrapper.current.style.display = 'none';
			this.demoIntroSection2Wrapper.current.className = '';
		}, 1000);
	}

	// demoIntroSection3Wrapper  入场动画
	demoIntroSection3WrapperInAnimate() {
		this.demoIntroSection3Wrapper.current.style.display = 'block';
		this.demoIntroSection3Wrapper.current.className = 'animate__animated animate__fadeIn animate__delay-.5s';
		this.setState({ lastActiveSectionRef: this.demoIntroSection3Wrapper.current });
	}
	// demoIntroSection3Wrapper  结束动画
	demoIntroSection3WrapperOutAnimate() {
		this.demoIntroSection3Wrapper.current.className = 'animate__animated animate__fadeOut  animate__delay-1s';
		setTimeout(() => {
			this.demoIntroSection3Wrapper.current.style.display = 'none';
			this.demoIntroSection3Wrapper.current.className = '';
		}, 1000);
	}

	// homeSectionWrapper  进入动画
	homeSectionWrapperInAnimate() {
		this.box.current.style.display = 'flex';
		this.box.current.className = 'homePageWrapper animate__animated animate__fadeIn animate__delay-.5s';
		this.setState({ lastActiveSectionRef: this.box.current });
	}
	homeSectionWrapper1InAnimate() {
		this.start = 0;
		this.box.current.style.display = 'flex';
		const image = require(`../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy0.jpg`);
		const _image = new Image();
		_image.src = image;
		this.setState({ lastActiveSectionRef: this.box });
		_image.onload = () => {
			this.box.current.childNodes[0].style.backgroundImage = `url(${image})`;
		};
	}
	// privacySection1Wrapper 结束动画
	privacySection1WrapperOutAnimate() {
		this.start = 0;
		this.privacySection1WrapperLeftContent.current.className =
			'privacySection1WrapperLeftContent animate__animated animate__slideOutLeft animate__delay-1s';
		this.section_2_colorBg.current.className = 'animate__animated animate__slideOutLeft animate__delay-1s';
		setTimeout(() => {
			this.privacySection1WrapperLeftContent.current.className = 'privacySection1WrapperLeftContent ';
			this.section_2_colorBg.current.className = '';
			this.privacySection1Wrapper.current.style.display = 'none';
			this.box.current.style.display = 'none';
		}, 1500);
	}

	// privacySection2Wrapper 入场动画
	privacySection2WrapperInAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 4500);
		this.setState({ lastActiveSectionRef: this.privacySection2Wrapper.current });
		setTimeout(() => {
			this.privacySection2Wrapper.current.style.display = 'block';
		}, 1000);
		this.privacySection2Wrapper.current.className =
			'sectionWrapper animate__animated animate__fadeIn animate__delay-1.8s';
		setTimeout(() => {
			this.section_2_colorBg.current.style.display = 'block';
			this.privacySection2leftContent.current.style.display = 'block';
		}, 2500);
		setTimeout(() => {
			this.section_2_colorBg.current.className = 'animate__animated animate__slideInLeft ';
			this.privacySection2leftContent.current.className =
				'privacySection2leftContent animate__animated animate__slideInLeft';
		}, 2000);
		this.section_2_bgLine.current.className = 'animate__animated animate__fadeIn';

		// 播放序列帧
		this.debounce(() => {
			const _interval = setInterval(() => {
				if (
					this.privacySection2Wrapper.current &&
					this.privacySection2Wrapper.current.style.display === 'none'
				) {
					clearInterval(_interval);
				}

				if (!this.privacySection2Wrapper.current) return;
				const image = require(`../../assets/Video01_AdvancedDimmableWindow/Video01_AdvancedDimmableWindow${this
					.state.section3SequenceImageIndex}.jpg`);
				const _image = new Image();
				_image.src = image;
				_image.onload = () => {
					this.privacySection2Wrapper.current.style.backgroundImage = `url(${image})`;
				};
				this.setState({
					section3SequenceImageIndex:
						this.state.section3SequenceImageIndex >= 269 ? 0 : this.state.section3SequenceImageIndex + 1
				});
			}, 55);
		}, 10)();
	}

	// privacySection2Wrapper 结束动画
	privacySection2WrapperOutAnimate() {
		this.privacySection2leftContent.current.className =
			'privacySection2leftContent animate__animated animate__slideOutLeft animate__delay-1.5s';
		this.section_2_colorBg.current.className = 'animate__animated animate__slideOutLeft animate__delay-1.5s';
		setTimeout(() => {
			this.privacySection2Wrapper.current.style.display = 'none';
			this.section_2_colorBg.current.style.display = 'none';
			this.privacySection2leftContent.current.style.display = 'none';
			this.privacySection2leftContent.current.className = 'privacySection2leftContent   ';
			this.section_2_colorBg.current.className = ' ';
			this.isStopTouchMove = false;
		}, 1500);
	}

	privacySection3WrapperInAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 4500);
		this.privacySection3colorBg.current.style.background = '#48423D';
		setTimeout(() => {
			this.privacySection3Wrapper.current.style.display = 'block';
		}, 1500);
		this.setState({ lastActiveSectionRef: this.privacySection3Wrapper.current });
		setTimeout(() => {
			this.privacySection3image.current.className = 'privacySection3imageIn';
		}, 2500);

		setTimeout(() => {
			this.privacySection3leftContent.current.style.display = 'block';
			this.privacySection3colorBg.current.style.display = 'block';
			this.isStopTouchMove = false;
		}, 3500);

		setTimeout(() => {
			this.privacySection3leftContent.current.className = 'animate__animated animate__slideInLeft';
			this.privacySection3colorBg.current.className = 'animate__animated animate__slideInLeft';

			this.privacySection3Text.current.className = 'dFordText animate__animated animate__slideInLeft';
			this.privacySection3Title.current.className = 'animate__animated animate__slideInLeft';
		}, 3000);
	}

	privacySection3WrapperOutAnimate() {
		setTimeout(() => {
			this.privacySection3Wrapper.current.style.display = 'none';
			this.privacySection3image.current.className = ' ';
		}, 2800);
		this.setState({ lastActiveSectionRef: this.privacySection3Wrapper.current });
		setTimeout(() => {
			this.privacySection3image.current.className = 'privacySection3imageOut';
		}, 2500);

		setTimeout(() => {
			this.privacySection3leftContent.current.style.display = 'none';
			this.privacySection3colorBg.current.style.display = 'none';
			this.privacySection3leftContent.current.className = '';
			this.privacySection3colorBg.current.className = '';
			this.privacySection3image.current.className = '';
		}, 1500);

		setTimeout(() => {
			this.privacySection3leftContent.current.className =
				'animate__animated animate__slideOutLeft animate__delay-2.5s';
			this.privacySection3colorBg.current.className =
				'animate__animated animate__slideOutLeft animate__delay-2.5s';
		}, 1000);
	}
	privacySection3WrapperPart2InAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 2500);
		this.privacySection3leftContent.current.className = 'privacySection3leftContentIn';
		this.privacySection3colorBg.current.style.background = '#2B393A';
		this.privacySection3PhoneVideo.current.style.display = 'block';
		this.privacySection3PhoneVideo.current.className = 'animate__animated animate__slideInDown animate__delay-1.7s';
		this.player.play();
	}

	privacySection3WrapperPart2OutAnimate() {
		setTimeout(() => {
			this.privacySection3PhoneVideo.current.style.display = 'none';
			this.privacySection3Wrapper.current.style.display = 'none';
			this.privacySection3leftContent.current.style.display = 'none';
			this.privacySection3image.current.className = ' ';
			this.privacySection3colorBg.current.className = '';
			this.privacySection3colorBg.current.style.display = 'none';
			this.privacySection3Text.current.className = ' dFordText';
			this.privacySection3Title.current.className = ' ';
			this.privacySection3leftContent.current.className = ' ';
			this.privacySection3colorBg.current.style.background = '#48423D';
			this.privacySection3PhoneVideo.current.className = ' ';
			this.privacySection3image.current.className = ' ';
		}, 2500);

		this.privacySection3PhoneVideo.current.className = 'animate__animated animate__slideOutUp animate__delay-1.7s';
		this.privacySection3Text.current.className =
			'dFordText animate__animated animate__slideOutLeft animate__delay-1.7s';
		this.privacySection3Title.current.className = 'animate__animated animate__slideOutLeft animate__delay-1.7s';
	}

	privacySection4WrapperInAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 2500);
		this.privacySection4Wrapper.current.style.display = 'block';
		this.setState({ lastActiveSectionRef: this.privacySection4Wrapper.current });
		this.privacySection4Wrapper.current.style.zIndex = '1';
		this.section_4_leftContent.current.style.zIndex = '1';
		this.section_4_bgline.current.style.zIndex = '1';
		this.section_4_colorBg.current.style.zIndex = '1';
		this.section_4_image.current.style.zIndex = '1';
		this.section_4_leftContent.current.style.width = '100%';
		this.section_4_colorBg.current.style.backgroundColor = '#2B393A';
		this.privacySection3PhoneVideo.current.style.zIndex = '1';
		this.section_4_colorBg.current.className = 'animate__animated animate__slideInLeft';
		this.section_4_leftContent.current.className = 'animate__animated animate__slideInLeft ';
		this.privacySection3PhoneVideo.current.className = 'animate__animated animate__slideInRight';
		this.player.play();
	}
	privacySection4WrapperOutAnimate() {
		this.privacySection4Wrapper.current.style.zIndex = '-5';
		this.privacySection4Wrapper.current.style.display = 'none';
		this.section_4_leftContent.current.style.zIndex = '-5';
		this.section_4_bgline.current.style.zIndex = '-5';
		this.section_4_colorBg.current.style.zIndex = '-5';
		this.section_4_image.current.style.zIndex = '-5';
	}
	privacySection5WrapperInAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 4500);
		this.privacySection5Wrapper.current.style.display = 'block';
		this.privacySection5Wrapper.current.className = 'animate__animated animate__fadeIn';
		this.setState({ lastActiveSectionRef: this.privacySection5Wrapper.current });
		this.privacySection5title.current.className =
			'dFordTitle animate__animated animate__slideInDown animate__delay-2.4s';
		this.privacySection5titleBg.current.className = 'animate__animated animate__slideInDown animate__delay-2.4s';

		this.debounce(() => {
			// 通过滑动距离控制轮询次数
			const _interval = setInterval(() => {
				if (this.state.privacySection5SequenceImageIndex === 40) {
					clearInterval(_interval);
				}
				if (this.state.privacySection5SequenceImageIndex >= 0) {
					const image = require(`../../assets/Video02_DigitalSealInsert/Video02_DigitalSealInsert${this.state
						.privacySection5SequenceImageIndex}.jpg`);
					const _image = new Image();
					_image.src = image;
					_image.onload = () => {
						this.privacySection5Wrapper.current &&
							(this.privacySection5Wrapper.current.style.backgroundImage = `url(${image})`);
					};
					this.setState({
						privacySection5SequenceImageIndex:
							this.state.privacySection5SequenceImageIndex >= 40
								? 40
								: this.state.privacySection5SequenceImageIndex + 1
					});
				}
			}, 10);
		}, 10)();
	}
	privacySection5WrapperOutAnimate() {
		this.privacySection5Wrapper.current.className = 'animate__animated animate__fadeOut animate__delay-.5s';
		setTimeout(() => {
			this.privacySection5Wrapper.current.style.display = 'none';
			this.privacySection5Wrapper.current.className = '';
			this.setState({
				privacySection5SequenceImageIndex: 0
			});
			const image = require(`../../assets/Video02_DigitalSealInsert/Video02_DigitalSealInsert${this.state
				.privacySection5SequenceImageIndex}.jpg`);
			const _image = new Image();
			_image.src = image;
			_image.onload = () => {
				this.privacySection5Wrapper.current.style.backgroundImage = `url(${image})`;
			};
		}, 1600);
	}
	privacySection6WrapperOutAnimate() {
		// BackgroundTransition: FromPrevious, Fade&ZoomOut, Ease
		// @SameTime Box03: SlideOut_Right, Ease
		this.privacySection6text4.current.className = 'animate__animated animate__slideOutRight animate__delay-.5s';
		this.privacySection6Wrapper.current.className = 'animate__animated animate__zoomOut animate__delay-2s';
		this.privacySection6Wrapper.current.className = 'animate__animated animate__fadeOut animate__delay-2s';
		setTimeout(() => {
			this.privacySection6Wrapper.current.style.display = 'none';
			this.privacySection6text4.current.className = '';
			this.privacySection6text3.current.className = '';
			this.privacySection6text2.current.className = '';
			this.privacySection6text1.current.className = '';
			this.privacySection6Wrapper.current.className = '';
			this.privacySection6text4.current.style.display = 'none';
			this.privacySection6text3.current.style.display = 'none';
			this.privacySection6text2.current.style.display = 'none';
			this.privacySection6text1.current.style.display = 'none';
			this.privacySection6CanvasRef.current.setCurrent(0);
			this.setState({ privacySection6SequenceImageIndex: 0 });
		}, 2500);
	}
	privacySection6WrapperInAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 2500);
		this.privacySection6Wrapper.current.style.display = 'block';
		this.setState({ lastActiveSectionRef: this.privacySection6Wrapper.current });
		this.debounce(() => {
			const _interval = setInterval(() => {
				if (this.state.privacySection6SequenceImageIndex == 100) {
					clearInterval(_interval);
				}
				this.privacySection6CanvasRef.current &&
					this.privacySection6CanvasRef.current.setCurrent(this.state.privacySection6SequenceImageIndex);
				this.setState({
					privacySection6SequenceImageIndex:
						this.state.privacySection6SequenceImageIndex >= 100
							? 100
							: this.state.privacySection6SequenceImageIndex + 1
				});

				if (this.state.privacySection6SequenceImageIndex == 25 && this.privacySection6text2.current) {
					clearInterval(_interval);
					this.privacySection6text1.current.style.display = 'block';
					this.privacySection6text1.current.className = 'animate__animated animate__slideInLeft ';
					this.privacySection6text2.current.className = 'animate__animated animate__fadeOut';
					this.privacySection6text3.current.className = 'animate__animated animate__fadeOut';
					this.privacySection6text4.current.className = 'animate__animated animate__fadeOut';
				}

				if (this.state.privacySection6SequenceImageIndex == 50) {
					clearInterval(_interval);
					this.privacySection6text2.current.style.display = 'block';
					this.privacySection6text2.current.className = 'animate__animated animate__slideInRight';
					this.privacySection6text1.current.className = 'animate__animated animate__fadeOut';
					this.privacySection6text1.current.className = 'animate__animated animate__fadeOut';
					this.privacySection6text3.current.className = 'animate__animated animate__fadeOut';
					this.privacySection6text4.current.className = 'animate__animated animate__fadeOut';
				}

				if (this.state.privacySection6SequenceImageIndex == 80 && this.privacySection6text3.current) {
					clearInterval(_interval);
					this.privacySection6text3.current.style.display = 'block';
					this.privacySection6text3.current.className = 'animate__animated animate__slideInLeft ';
					this.privacySection6text2.current.className = 'animate__animated animate__fadeOut';
					this.privacySection6text2.current.className = 'animate__animated animate__fadeOut';
					this.privacySection6text1.current.className = 'animate__animated animate__fadeOut';
					this.privacySection6text4.current.className = 'animate__animated animate__fadeOut';
				}

				if (this.state.privacySection6SequenceImageIndex == 100 && this.privacySection6text4.current) {
					clearInterval(_interval);
					setTimeout(() => {
						this.privacySection6text4.current.style.display = 'block';
					}, 500);
					this.privacySection6text4.current.className =
						'animate__animated animate__fadeInRight animate__delay-.5s ';
					this.privacySection6text3.current.className = 'animate__animated animate__fadeOut';
					this.privacySection6text1.current.className = 'animate__animated animate__fadeOut';
					this.privacySection6text2.current.className = 'animate__animated animate__fadeOut';
					this.privacySection6text3.current.className = 'animate__animated animate__fadeOut';
				}
			}, 10);
		}, 10)();
	}

	privacySection7WrapperInAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 2500);
		setTimeout(() => {
			this.privacySection7Wrapper.current.style.display = 'block';
		}, 2300);
	}
	privacySection7WrapperOutPart2Animate() {
		setTimeout(() => {
			this.privacySection7Wrapper.current.style.display = 'none';
			this.privacySection8bg.current.className = ' ';
			this.privacySection8title.current.className = '';
			this.privacySection7bg.current.className = '';
			this.privacySection8bg.current.style.display = 'none';
			this.privacySection8title.current.style.display = 'none';
			this.privacySection7text.current.className = 'dFordText ';
			this.privacySection7bg.current.className = '';
			this.privacySection7SubMenu.current.className = '';
		}, 2300);

		this.privacySection8bg.current.className = '  animate__animated animate__slideOutDown animate__delay-1.5s';
		this.privacySection8title.current.className = '  animate__animated animate__fadeOut animate__delay-1.5s';
		this.privacySection7bg.current.className = 'animate__animated animate__fadeOut animate__delay-2s';
	}
	privacySection8WrapperInAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 2500);
		this.privacySection8text.current.style.display = 'block';
		this.privacySection8title.current.style.display = 'block';
		this.privacySection8bg.current.style.display = 'block';
		this.privacySection8Wrapper.current.style.display = 'block';
		this.setState({ lastActiveSectionRef: this.privacySection8Wrapper.current });
		this.privacySection8bg.current.className = 'animate__animated animate__fadeInUp  animate__delay-1.5s';
		this.privacySection8text.current.className = 'animate__animated animate__fadeInUp  animate__delay-1.5s';
		this.privacySection8title.current.className = 'animate__animated animate__fadeInUp  animate__delay-1.5s';
	}
	privacySection8WrapperOutAnimate() {
		this.privacySection8Wrapper.current.style.display = 'none';
		this.privacySection8bg.current.className = 'animate__animated animate__fadeOutUp  animate__delay-1.5s';
		this.privacySection8text.current.className = 'animate__animated animate__fadeOutUp  animate__delay-1.5s';
		this.privacySection8title.current.className = 'animate__animated animate__fadeOutUp  animate__delay-1.5s';
	}
	comfortSection1WrapperInAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 2500);
		this.setState({ lastActiveSectionRef: this.comfortSection1Wrapper.current });
		this.comfortSection1Wrapper.current.style.display = 'block';
		this.comfortSection1Text.current.style.display = 'block';
		this.comfortSection1Text.current.className = 'animate__animated animate__fadeInDown animate__delay-.5s';
		this.comfortSection1Text2.current.style.display = 'none';
		this.comfortSection1Title.current.style.display = 'none';
	}

	comfortSection1WrapperOutAnimate() {
		setTimeout(() => {
			this.comfortSection1Wrapper.current.style.display = 'none';
			this.comfortSection1BgLine.current.className = ' ';
			this.comfortSection1Text2.current.className = ' ';
			this.comfortSection1Title.current.className = ' ';
		}, 2200);
		this.comfortSection1BgLine.current.className = 'animate__animated animate__fadeOutIn animate__delay-1.5s';
		this.comfortSection1Text2.current.className = 'animate__animated animate__fadeOutLeft animate__delay-1.5s';
		this.comfortSection1Title.current.className = 'animate__animated animate__fadeOutLeft animate__delay-1.5s';
	}
	comfortSection2WrapperInAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 2500);
		this.comfortSection2Wrapper.current.style.display = 'block';
		this.setState({ lastActiveSectionRef: this.comfortSection2Wrapper.current });
		this.comfortSection2Splitter.current.style.display = 'flex';
		this.comfortSection2Desc.current.className = 'animate__animated animate__fadeInUp animate__delay-1.2s';
		this.comfortSection2Box05.current.className = 'animate__animated animate__fadeInUp animate__delay-1.2s';
		this.comfortSection2Splitter.current.className = 'animate__animated animate__slideInLeft animate__delay-1.2s';
	}
	comfortSection2WrapperOutAnimate() {
		this.comfortSection2Desc.current.className = 'animate__animated animate__fadeOutDown animate__delay-.5s';
		this.comfortSection2Box05.current.className = 'animate__animated animate__fadeOutDown animate__delay-.5s';
		this.comfortSection2Wrapper.current.style.display = 'none';
		this.comfortSection2Splitter.current.style.display = 'none';
	}
	comfortSection3WrapperInAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 2500);
		this.comfortSection3Wrapper.current.style.display = 'block';
		this.comfortSection3Wrapper.current.className =
			'sectionWrapper animate__animated animate__fadeIn animate__delay-.5s';
		this.comfortSection3Text.current.className = 'animate__animated animate__slideInUp animate__delay-1.2s';
		this.setState({ lastActiveSectionRef: this.comfortSection3Wrapper.current });
	}
	comfortSection3WrapperOutAnimate() {
		setTimeout(() => {
			this.comfortSection3Wrapper.current.style.display = 'none';
			this.comfortSection3Text.current.className = '';
		}, 2000);
		this.comfortSection3Text.current.className = 'animate__animated animate__slideOutDown animate__delay-1.2s';
	}
	comfortSection3Start1(event) {
		console.log('works');
	}
	comfortSection3Move1(event) {
		console.log('works');
	}
	comfortSection3End1(event) {
		console.log('works');
	}
	comfortSection5WrapperInAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 2500);
	}
	leisureSection2WrapperInAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 2500);
	}
	leisureSection3WrapperInAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 2500);
		setTimeout(() => {
			this.leisureSection3Wrapper.current.style.display = 'block';
			this.leisureSection3Text.current.style.display = 'block';
			this.leisureSection3Title.current.style.display = 'block';
			this.leisureSection3Bg1.current.style.display = 'block';
		}, 1200);
		this.leisureSection3Bg1.current.className = 'animate__animated animate__slideInDown animate__delay-1.2s';
		this.leisureSection3Title.current.className =
			'dFordNormalTitle animate__animated animate__slideInDown animate__delay-1.2s';
		this.leisureSection3Text.current.className = 'animate__animated animate__slideInDown animate__delay-1.2s';
		this.setState({ lastActiveSectionRef: this.leisureSection3Wrapper.current });
	}
	leisureSection3WrapperOutAnimate() {
		this.leisureSection3Title.current.className =
			'dFordNormalTitle animate__animated animate__slideOutDown animate__delay-1.5s';
		this.leisureSection3Text.current.className = 'animate__animated animate__slideOutRight animate__delay-1.5s';
		setTimeout(() => {
			this.leisureSection3Title.current.className = 'dFordNormalTitle ';
			this.leisureSection3Text.current.className = '';
			this.leisureSection3Wrapper.current.style.display = 'none';
		}, 1500);
	}

	leisureSection4WrapperInAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 2500);
		setTimeout(() => {
			this.leisureSection4Wrapper.current.style.display = 'block';
		}, 500);
		this.leisureSection4Wrapper.current.className =
			'sectionWrapper animate__animated animate__fadeIn animate__delay-.5s';
		this.setState({ lastActiveSectionRef: this.leisureSection4Wrapper.current });
	}

	leisureSection6WrapperInAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 2500);
		this.leisureSection6Wrapper.current.style.display = 'block';
		this.leisureSection6Grally.current.className =
			'smallImges animate__animated animate__slideInRight animate__delay-1.5s';
		this.setState({ lastActiveSectionRef: this.leisureSection6Wrapper.current });
	}

	leisureSection6WrapperOutAnimate() {
		setTimeout(() => {
			this.leisureSection6Wrapper.current.style.display = 'none';
			this.leisureSection6Grally.current.className = 'smallImges';
		}, 1500);
		this.leisureSection6Grally.current.className =
			'smallImges animate__animated animate__slideOutRight animate__delay-1.5s';
	}

	leisureSection7WrapperInAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 2500);
		setTimeout(() => {
			this.leisureSection7Wrapper.current.style.display = 'block';
		}, 1200);
		this.leisureSection7ReturnHome.current.className = 'animate__animated animate__slideInUp animate__delay-1.2s';
		this.leisureSection7ReturnHomeTitle.current.className =
			'animate__animated animate__slideInUp animate__delay-1.2s';
		this.leisureSetion6GrallyMaxImage.current.className = 'imageCover leisureSetion6GrallyMaxImageIn';
		this.setState({ lastActiveSectionRef: this.leisureSection7Wrapper.current });
	}

	leisureSection7WrapperOutAnimate() {
		setTimeout(() => {
			this.leisureSection7Wrapper.current.style.display = 'none';
			this.leisureSection7ReturnHome.current.className = '';
			this.leisureSection7ReturnHomeTitle.current.className = '';
			this.leisureSetion6GrallyMaxImage.current.className = 'imageCover';
		}, 1500);

		this.leisureSection7ReturnHome.current.className = 'animate__animated animate__slideOutDown';
		this.leisureSection7ReturnHomeTitle.current.className = 'animate__animated animate__slideOutDown';
		this.leisureSetion6GrallyMaxImage.current.className = 'imageCover leisureSetion6GrallyMaxImageOut';
	}

	uniqueSection2WrapperInAnimate() {
		this.isStopTouchMove = true;
		setTimeout(() => {
			this.isStopTouchMove = false;
		}, 2500);
		this.uniqueSection2Wrapper.current.style.display = 'block';
		this.uniqueSection2RightBox.current.className = 'animate__animated animate__slideInRight animate__delay-2.5s';
		this.setState({ lastActiveSectionRef: this.uniqueSection2Wrapper.current });

		setTimeout(() => {
			this.uniqueSection2MaxImageBg.current.className = 'imageCover uniqueSection2MaxImageBgIn';
		}, 1000);
	}
	uniqueSection2InWrapperAnimateHide() {
		this.uniqueSection2Wrapper.current.style.display = 'none';
	}

	// DEMO INTRO
	login() {
		if (this.state.userName) {
			// 跳转
			this.props.onUserNameChange(this.state.userName);

			// demoIntroSection1Wrapper 结束动画
			this.demoIntroSection1WrapperOutAnimate();

			//demoIntroSection2Wrapper  入场动画
			this.demoIntroSection2WrapperInAnimate();
		}
	}

	goToDemoInfoSection3Wrapper() {
		//demoIntroSection2Wrapper  结束动画
		this.demoIntroSection2WrapperOutAnimate();

		//demoIntroSection3Wrapper  入场动画
		this.demoIntroSection3WrapperInAnimate();

		// 显示顶部菜单
		this.props.onShowMenu();
	}

	demoIntroSection3WrapperTouchStart(event) {
		this.updateStartMosePosition(event);
	}
	demoIntroSection3WrapperTouchMove(event) {
		this.updateMoveMousePositon(event);
	}
	demoIntroSection3WrapperTouchEnd(event) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		this.move = this.state.endY - this.state.startY;
		if (this.move < -80) {
			// 向上拉动，进入下一页
			//demoIntroSection3Wrapper  结束动画
			this.demoIntroSection3WrapperOutAnimate();

			//homeSectionWrapper  进入动画
			this.homeSectionWrapperInAnimate();
			//this.privacySection5WrapperInAnimate();
			//this.comfortSection1WrapperInAnimate();
		}
	}

	render() {
		return (
			<div
				style={{
					position: 'relative',
					top: '0px',
					left: '0px',
					zIndex: '1',
					width: '100%',
					height: ' 100%'
				}}
			>
				{/*********************demoIntroSection1Wrapper start *************************/}
				<div
					className="demoIntroSection1Wrapper"
					style={{
						backgroundImage: `url(${demoIntroSection1Bg3})`
					}}
					ref={this.demoIntroSection1Wrapper}
					id="demoIntroSection1Wrapper"
				>
					<div
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							top: '0px'
						}}
					>
						<img
							className="imageCover"
							src={demoIntroSection1Bg}
							style={{
								position: 'absolute',
								clipPath:
									'polygon(35% 60%, 90% 60%, 90% 0%, 72% 0%, 72% 90%, 100% 90%, 100% 60%, 72% 60%, 72% 100%, 90% 100%, 90% 90%, 35% 90%)'
							}}
						/>
					</div>
					<div
						className="dFordMainTitle"
						style={{
							position: 'absolute',
							width: '100%',
							height: '190px',
							left: '-100px',
							top: '170px'
						}}
					>
						Demo Intro
					</div>
					<div
						className="dFordNormalText"
						style={{
							position: 'absolute',
							width: '636px',
							height: '167px',
							left: '165px',
							top: '341px'
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
					</div>
					<div>
						<div>
							<input
								value={this.state.userName}
								onChange={(e) => this.setState({ userName: e.target.value })}
								placeholder="Input your name"
								style={{
									position: 'absolute',
									width: '310px',
									height: '62px',
									left: '160px',
									top: '477px',
									background: '#5E504B',
									border: '3px solid #929292',
									boxSizing: 'border-box',
									textAlign: 'center',
									borderRadius: '41px',
									fontFamily: 'Lincoln Proxima Nova Light',
									fontStyle: 'normal',
									fontWeight: 300,
									fontSize: '22px',
									lineHeight: '110%',
									letterSpacing: '-0.01em',
									color: '#FFFFFF',
									opacity: 0.5
								}}
							/>
						</div>

						<div
							style={{
								position: 'absolute',
								width: '82px',
								height: '57px',
								left: '744px',
								top: '477px',
								fontStyle: 'normal',
								fontWeight: '900',
								fontSize: '36px',
								lineHeight: '57px',
								color: '#FFFFFF',
								opacity: 0.9
							}}
							onTouchStart={() => {
								this.login();
							}}
						>
							<svg
								width="82"
								height="23"
								viewBox="0 0 82 23"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.9"
									d="M0.544922 15.9883L0.720703 22.2109H0.966797L1.98633 20.998C2.4082 21.3496 3.16406 21.6836 4.28906 22.0352C5.41406 22.3867 6.50391 22.5449 7.55859 22.5449C8.50781 22.5449 9.43945 22.4395 10.3535 22.1934C11.2676 21.9473 12.0938 21.5957 12.8496 21.1387C13.6055 20.6816 14.2207 20.0664 14.6777 19.293C15.1348 18.5371 15.3633 17.6758 15.3633 16.709C15.3633 15.2676 14.959 14.1074 14.168 13.2285C13.377 12.3496 12.1641 11.6289 10.5469 11.084C9.94922 10.8906 9.49219 10.7324 9.17578 10.627C8.85938 10.5215 8.45508 10.3633 7.99805 10.1699C7.54102 9.99414 7.18945 9.81836 6.94336 9.66016C6.69727 9.50195 6.45117 9.30859 6.20508 9.08008C5.94141 8.86914 5.76562 8.62305 5.66016 8.37695C5.55469 8.13086 5.50195 7.84961 5.50195 7.5332C5.50195 6.88281 5.73047 6.35547 6.20508 5.93359C6.66211 5.51172 7.24219 5.30078 7.92773 5.30078C10.0723 5.30078 12.1992 7.05859 14.291 10.5566H14.5371L14.3262 4.86133H14.0801L13.2539 5.86328C12.6738 5.61719 11.8828 5.38867 10.8809 5.19531C9.86133 5.00195 8.82422 4.89648 7.73438 4.89648C5.73047 4.89648 4.11328 5.40625 2.86523 6.4082C1.61719 7.41016 1.00195 8.71094 1.00195 10.3281C1.00195 11.1367 1.125 11.8398 1.38867 12.4727C1.63477 13.1055 2.00391 13.6504 2.47852 14.0723C2.95312 14.4941 3.44531 14.8457 3.95508 15.127C4.46484 15.4082 5.0625 15.6543 5.73047 15.8828C7.69922 16.5684 9.05273 17.1484 9.79102 17.6406C10.5293 18.1328 10.916 18.7832 10.916 19.5566C10.916 20.3477 10.6523 20.9805 10.125 21.4375C9.59766 21.9121 8.80664 22.1406 7.73438 22.1406C7.03125 22.1406 6.32812 21.9648 5.625 21.5957C4.92188 21.2266 4.27148 20.7344 3.67383 20.1016C3.07617 19.4688 2.54883 18.8184 2.07422 18.1504C1.59961 17.4824 1.17773 16.7617 0.791016 15.9883H0.544922ZM15.4863 5.65234H18.5449V17.3242C18.5449 20.7695 20.3379 22.4746 23.9238 22.4746C25.8223 22.4746 27.2637 22.0176 28.2832 21.0859C29.2852 20.1543 29.8125 18.7832 29.8477 16.9551H29.4258C29.3906 17.834 29.1621 18.5898 28.7402 19.2051C28.3184 19.8379 27.7207 20.1367 26.9473 20.1367C26.209 20.1367 25.6641 19.8379 25.3477 19.2402C25.0137 18.6426 24.8555 17.9043 24.8555 17.0605V5.65234H29.3906V5.00195H24.8555V0.185547H18.6152V5.00195H15.4863V5.65234ZM30.498 18.4316C30.498 19.6973 30.9199 20.6992 31.7988 21.4375C32.6602 22.1758 34.0312 22.5449 35.9297 22.5449C36.5977 22.5449 37.1953 22.4922 37.7227 22.3691C38.25 22.2637 38.707 22.0703 39.1289 21.8066C39.5508 21.543 39.8848 21.2969 40.1309 21.0684C40.377 20.8574 40.6934 20.541 41.0801 20.1367H41.1855C41.4492 20.6465 41.7305 21.0508 42.0469 21.3672C42.3633 21.6836 42.8379 21.9473 43.4707 22.1582C44.1035 22.3691 44.9121 22.4746 45.8613 22.4746C47.4082 22.4746 48.6211 22 49.4648 21.0332C50.3086 20.0664 50.7656 18.8008 50.8008 17.2188H50.2559C50.2207 18.0977 50.0625 18.8535 49.7461 19.5039C49.4297 20.1719 49.0078 20.4883 48.498 20.4883C48.0762 20.4883 47.7422 20.3301 47.5312 19.9961C47.3027 19.6797 47.1973 19.2754 47.1973 18.8008C47.1973 18.5898 47.2324 17.377 47.3027 15.1621C47.373 12.9473 47.4258 11.207 47.4258 9.94141C47.4258 9.02734 47.25 8.21875 46.9336 7.55078C46.5996 6.88281 46.1777 6.35547 45.6855 5.96875C45.1934 5.59961 44.5605 5.30078 43.8047 5.07227C43.0488 4.86133 42.3281 4.7207 41.6602 4.65039C40.9746 4.58008 40.2012 4.54492 39.3223 4.54492C38.5312 4.54492 37.7051 4.65039 36.8438 4.82617C35.9648 5.01953 35.1562 5.2832 34.4004 5.59961C33.6445 5.93359 33.0293 6.35547 32.5371 6.86523C32.0449 7.375 31.7988 7.91992 31.7988 8.5C31.7988 9.23828 32.0273 9.88867 32.502 10.4336C32.959 10.9785 33.6797 11.2422 34.6289 11.2422C35.5781 11.2422 36.3691 10.9961 36.9844 10.4863C37.5996 9.99414 37.916 9.48438 37.916 8.97461C37.916 8.48242 37.793 7.7793 37.5469 6.84766L37.1953 5.47656C37.5996 5.125 38.2148 4.93164 39.0234 4.93164C39.3398 4.93164 39.6387 5.00195 39.8848 5.10742C40.1309 5.21289 40.3242 5.38867 40.4648 5.61719C40.6055 5.8457 40.7285 6.07422 40.8164 6.28516C40.9043 6.49609 40.9746 6.77734 41.0098 7.09375C41.0449 7.42773 41.0625 7.69141 41.0625 7.86719C41.0625 8.04297 41.0801 8.28906 41.0801 8.57031V11.8398C40.8164 12.0508 40.2539 12.2617 39.3926 12.5078C38.5137 12.7539 37.5293 13.0176 36.4043 13.2988C35.2793 13.5801 34.4355 13.8262 33.873 14.0371C32.8184 14.4238 31.9922 14.9336 31.3945 15.6016C30.7969 16.2695 30.498 17.2188 30.498 18.4316ZM37.0547 17.4297C37.0547 16.375 37.2305 15.5312 37.5996 14.8809C37.9688 14.2305 38.5312 13.668 39.2871 13.2109C39.709 12.9648 40.3242 12.666 41.1152 12.3496L40.9746 19.5215C40.4648 20.2598 39.7969 20.6289 38.9883 20.6289C38.3555 20.6289 37.8809 20.3652 37.5469 19.8203C37.2129 19.293 37.0547 18.4844 37.0547 17.4297ZM50.3438 5.40625C51.1172 5.45898 51.7324 5.63477 52.1895 5.91602C52.7344 6.26758 53.0156 6.91797 53.0156 7.84961V20.1367C53.0156 20.541 52.9453 20.8398 52.8223 21.0508C52.6816 21.2617 52.4707 21.4199 52.1543 21.5254C51.7676 21.6484 51.2402 21.7188 50.6074 21.7539V22H62.6309V21.7539C62.5254 21.7539 62.2793 21.7363 61.875 21.7012C61.4707 21.666 61.1016 21.6309 60.75 21.5781C60.3984 21.543 60.1699 21.4902 60.0293 21.4199C59.5371 21.209 59.3086 20.7168 59.3086 19.9434V8.14844C59.502 7.79688 59.8711 7.41016 60.416 7.02344C60.9609 6.63672 61.5762 6.42578 62.2617 6.4082C62.2441 6.47852 62.1914 6.68945 62.0859 7.00586C61.9805 7.32227 61.9102 7.63867 61.8398 7.91992C61.7695 8.21875 61.7344 8.46484 61.7344 8.64062C61.7344 9.37891 61.9805 9.94141 62.4727 10.3633C62.9648 10.7852 63.5977 10.9785 64.3887 10.9785C65.1973 10.9785 65.8477 10.6797 66.375 10.082C66.9023 9.48438 67.166 8.76367 67.166 7.88477C67.166 6.90039 66.8672 6.10938 66.2871 5.51172C65.6895 4.91406 64.9512 4.61523 64.0371 4.61523C62.4199 4.61523 60.8555 5.58203 59.3789 7.49805H59.3086V4.89648L59.168 4.75586L50.3438 5.19531V5.40625ZM67.4473 5.65234H70.5059V17.3242C70.5059 20.7695 72.2988 22.4746 75.8848 22.4746C77.7832 22.4746 79.2246 22.0176 80.2441 21.0859C81.2461 20.1543 81.7734 18.7832 81.8086 16.9551H81.3867C81.3516 17.834 81.123 18.5898 80.7012 19.2051C80.2793 19.8379 79.6816 20.1367 78.9082 20.1367C78.1699 20.1367 77.625 19.8379 77.3086 19.2402C76.9746 18.6426 76.8164 17.9043 76.8164 17.0605V5.65234H81.3516V5.00195H76.8164V0.185547H70.5762V5.00195H67.4473V5.65234Z"
									fill="white"
								/>
							</svg>
						</div>

						<div
							style={{
								position: 'absolute',
								width: '81px',
								height: '15px',
								left: '844px',
								top: '500px',
								opacity: 0.5
							}}
						>
							<svg
								width="82"
								height="17"
								viewBox="0 0 82 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g opacity="0.5">
									<path d="M72 1L81 8.5L72 16" stroke="white" />
									<line x1="4.37114e-08" y1="8.5" x2="81" y2="8.50001" stroke="white" />
								</g>
							</svg>
						</div>
					</div>
				</div>
				{/*********************demoIntroSection1Wrapper end *************************/}

				{/*********************demoIntroSection2Wrapper start *************************/}
				<div
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						left: '0px',
						top: '0px',
						display: 'none',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundImage: `url(${demoIntroSection1Bg3})`
					}}
					id="demoIntroSection2Wrapper"
					ref={this.demoIntroSection2Wrapper}
				>
					<div
						style={{
							position: 'absolute',
							width: '244px',
							height: '244px',
							left: '556px',
							top: '375px',
							opacity: 0.6
						}}
					>
						<svg
							width="244"
							height="244"
							viewBox="0 0 244 244"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<mask
								id="mask0_1275_1109"
								style={{ maskType: 'alpha' }}
								maskUnits="userSpaceOnUse"
								x="0"
								y="0"
								width="244"
								height="244"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M66 0H0V66H66V0ZM66 178H0V244H66V178ZM178 0H244V66H178V0ZM244 178H178V244H244V178Z"
									fill="#C4C4C4"
								/>
							</mask>
							<g mask="url(#mask0_1275_1109)">
								<rect
									opacity="0.6"
									x="2.5"
									y="2.5"
									width="239"
									height="239"
									rx="17.5"
									stroke="white"
									strokeWidth="5"
								/>
							</g>
						</svg>
					</div>

					<div
						style={{
							position: 'absolute',
							width: '363px',
							height: '224px',
							left: '501px',
							top: '386px',
							zIndex: '4'
						}}
						onTouchStart={() => {
							this.goToDemoInfoSection3Wrapper();
						}}
					>
						<svg
							width="363"
							height="224"
							viewBox="0 0 363 224"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
						>
							<mask
								id="mask0_1275_1100"
								style={{ maskType: 'alpha' }}
								maskUnits="userSpaceOnUse"
								x="0"
								y="0"
								width="363"
								height="224"
							>
								<rect width="363" height="224" fill="url(#pattern0)" />
							</mask>
							<g mask="url(#mask0_1275_1100)">
								<rect x="90" y="19" width="245" height="205" fill="white" />
							</g>
							<defs>
								<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
									<use
										xlinkHref="#image0_1275_1100"
										transform="translate(-0.000275482) scale(0.00440771 0.00714286)"
									/>
								</pattern>
								<image
									id="image0_1275_1100"
									width="227"
									height="140"
									xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAACMCAYAAACOLB7DAAAOR0lEQVR4Ae2d63HjuBKFN4QbwoQwIUwIDkE/b23Zmu4GKMu7fxSCQlAICkEhOASFwAx464CATM2VANB62jpTxaJGfIGfeNyN7gb411/8RwIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIk8BgEROQ/XuSXE3kys8WhxXu/SItz7sl7/wvHPQYh3iUJXIAABDQTeZqJLRrRjVdrvVqXFjPrsDjn9hbvfXdkab33GwgVIqVAL/Cj8ZTfh4CI/JiJyavo+6tYN1waSUKEMHVzyCriu2QV4xriw3JMoGszE1z3+1DknZDAJwn0FvCwAHtR6hIW8lTBNCI/G7NJ43Q5c/o+89YNFzODMCefvA0eRgJflwDE5UVXQ+vXf9Z1IzK5tBsZrm8mjdcNRDlwd1tY2Etf/+v+cmz5tyEAETjRFdxOLFGA79cQ4DGIvTBl4Z1uG6cdFuccRXkMGL//HgSc6nsKwsAyIjp6T3fWmEy86fvAUq7uqX1sCwmcjYCqLlV1LSI/z3bSC5wIfyQaC4Ei9iMvwJenJAESIAESOAcB9O1E5BfSEaXUxszbIricXpj0Pwd8nuOxCUistNE+rxiS/CnZn9aDvl2IiKac4kfaQrq5l27uXto3/7yZ23Qxl+e76qc+9q/Mu79bAiIyUZW1N+n2lr76pkXCH9FYL7YICxL9g9K4lPQPltHruvGygRjf3HRv+cde2n91upo5ebpbGGwYCVybANxPVVmaSWsmHRYI0ZlsncoStajY55R2NfL3z7m9TOZuunpzL9t/bdpheXMQqmxhMUUmrGE9BTKP/boEehHqqnc5exGaydZMkHQ/SXwlKkGc8rx8tWk7t98dFnyeUZQldNz+nQigugUpjtTvgyVUlQ36iLe4z7m8TOY63UCQs7Bo600Wt2gLr0kCVyPgnDw5r22qdEEu714S/16efzUqm0YljA5xatt7advVfiBe6PsTgDVEMbbz2mFB6dm9PugozRsO2XKiy+//C/EOH4IAqm2cc9uQhvDamb9/FxB/PCDCVLqHMr5L92Mf4mHgTd6OAIYloeg65gO3p5bBYSiUE/c0SGdg6NMGfc64rBEAikEgRGFPKrtDJHdgJdtTz3e7X4JXfmgCqJRpzHVYvBrqUUenDhD1RISzUd3MTLuZubCk86b1Xk5ykKOMaZLWI3eJYcSfiNLimGGBu4mwXvWhn+wvdvPOuRWsYS9EN2rkA/J93l6ksem2j24iygkhKs63bdQ2sIxYGrEJ+p5pwcB9REKRn/Qqm5S7TGJFcCYEaUYKKrqtq+S2UpBf7IF81OYmIQYxSv3oeTzwsIKzkO9LaYZpO9PpKo53/FTuEZYtiPSPyh4UFYwVVaj+iXPxjD32UZ8H3veNCKCAO/YPUUta7c7NTBYz03ZnCXX63sjL5NxVMRAmLKc3QS6xr/RReR8T2R0KEn3KG6HmZUngOIEYrAkF23Afj+/5sQUBmVfV97lqF5fN/EoDjmOgJ5Tgwf0ck8IYCJJBnY+fk5/ugUBMX4SoKapratqEmeDm6josr6rtfGQ/ruYapX3gGofC9Oh6xhRGVaApBXVQHPCZ4FSpbdxOAp8ikPKISOzXnOBN3OofcV2/fC7SWnOd2n3icC3MewP3usrahaAOqnR6qzoqSFXbLu5HAqMJxFxi0ULgAX4T2yQhvonJ6Itd6AD0J1X1HYJEbrEmpxiiuGrtGBf3Qs3naUmgJ1DjpmGfV7V3uKVv4to3cZ8KfkA06JPOzBYzdSukOmJN6aYRWXqRxWeHXaGNEGRMYVQJks8ACXw5AnNxq75/6FoEbsbcQJiEWHWJPGNK/A/XMX+IHOLeksZEQsC114MgU3+w1kLWnpv7kcDNCbyKLlOwZowQ4Qb21Td95U0UYAtrCMvozSQl/ON6Aeu4G30R0xeDYVpVfwSGgmSA5uaPDxtwLgIzcU9JiPPKlEdwaUXWqfImiFDdCuca066+tlRQrxpmEIiiXOL8pfP0guwDNJjuo7Q/t5PAXRPAAz0z1wb3tHIo0kyen/aqcFRWY9zMQ0BwvNe+RA9FCR5ldRWucnCPXT/+kgOOD5Hld1+GAAIssGoI3NQ0GjWp+1U4f1e5lTXnxj6Y6hFpmFhg3tYUJ2DKx91g6AoB17aF+5HA1QigD5eCLDVVNXOR1UCIF8vbwVqHCGwcUVIjSG+yDoI0uqtXe4B4ofMR6IMsroN1LJ0V1Tcoh4MYUZNa2v8c2+G2fljIfHQ3pFOSu3qlcr1z3CPPQQJwB38kq1jq72HumRSogZt6TXzJQmIakFJQB31GWsdr/jq81lkINKrLFAEtnbAft6jdTKVoQYfnQmQ1pjfC2MY4xlFqAjPpPBBgehUcXNH0/aF1tI7hlXFjrnHoXPyOBK5GYJecL6Qi+vGLYfAwql1q0g0hKtqYa9Mo/0Nrr/Ze0xcEkBgxDSJDPzcHyTtZBeuoUlUMnzsXt5HAxQng4Y4uapu7GMTXj2HUDoOHc/tiG6Kag/l0MFRrG+df/bCMaut9cSrmYy2KfCeyQoAGU01CjLCmpfZyOwncnADcxRoXta8vxdQc5Qcb8+mkQcvqDQI7asGC64kpOWA9IRzDzG75qftF/vujcb+7sEg+nRIso9Ou1Be++Q/BBpAAJp+CGEtu4kztHfuhpC1HLVrEMGjZvFXP9B3dzyjIabY/iOt7N10FMeo064Ji4uUgSCtb89x9cRsJXJwAqluCyArWK1hPc1kLAyuHGchhFdXVDVoe3mAvyN7ieZ9/FZxzz08Qo7dptkBhF1Vlv3GImp/vkQD6bBBarm27goBCZQ4efMxArq6ugufQNYPF8y+d9y9Z6whXNrmquX5m6jfCQh66Hr8jgbsggIe4RoxhLCJc2cIUHbCysa84qkB8CGPYHxx+f+gzrGKwjhmrjj8kqS966Bz8jgTugkB4UIPILGs1dnlIO94HDHk9c6GveOrNeTfdBpEVXFVv03WwjoX+YArinNouHk8CFyNQL0aMR3Qd9j/WmHQuTN9/bB98HyfDylrOFJzx/jkbAPKYvTz0G/PvA6EYc78It90FgSQglJnlGpTqVs8hxjQZVq6f19jLpLeM+X5jmMm8F2M+wus0FAnk7pHbSOCmBMaIEX3LGjGWhA3LGfpwGSuLd3YEMbppMVmfaxPgDip2skUNN/0heHESuKUYEeXM/QKhL+h+dwjo5PYrbfMm0gdw8rWspfNwOwlclEAKuqD6JXchFAYEy5hJ+NeeCyVxURyl/mAfnCkk9XPtxrZUWI5ihNK+3E4CNyUAkWHJNSK8QaqvvskKKJ0r1x90zvX1oqb5ZD1eEx5L3j5rHZNVbJxWFbbnGHAbCVycQBpRkavdRAlcsIyan4E8jTfEC1KPNTzkNmNAJXdNHJ9K2fp61XIB+fCag74iXpiTDfAMj+NnErgZgSSgXCAk9S0x1CnXUOQjg3UsFAd8iCwvkuD6phH7oYC8bj7VWHUT61zZV8z9Ztx2RwTSdBZwRY81K1XqQGhZF1TcU7SgedHGSaNqhjYNC8jhbqLk7lgbIN7d8KrdCJBxFvUYA35PAhcnUOuChgHAqLApuaCxD1p0QXcWL28dASBYyDT6Irq4wbrijcd4f6OTFVzZlNwPaxaGX/zZ4QXOTCBYnhCccdmcXq0LmiKv5TrWPuUwJriCiOj/iS6JM66DZeQUjWd+Sni6qxGoCeLAIgYX1PKiTfuV0iW4uSSs0nw2f4II7qjIr2AV+zcbh9cGHHNf/zye/yeBuyWQrFl54HA/l03OVcVNhhnA4a4WXg8w7A/Cot0tIDaMBK5FAKKpCrzEaCmCPrm27c5nrjilIlzP1NejIHNUue0hCPQBkj75nwu81O4HaMk65qK0Ce6eIE3WdDcTGa4fkkByVXNiBJhdXrJgHQd9x2yBeYK9J0in21LtajqOaxL4lgRKQsRNpwKAmHPMFnGnHCaCOTXWDn3IXS0poqNIZ7Cm9Fs+a7ypMxFIVrQ0XAoCTPlJrGsEGY7pp+YPFTSxP9mGlIXJ5NgfDHyfqyI6063zNCRwXwTw4Kd5UVH4nWtd3DfMGGdWJ0icrxcl3na8eyVcKGiPgabOq3V4KWq/xud+caLZ4FKurdxGAl+SgJktoiCLLmicamO0IBOY4L5iomO1DVzeJLw/1i3EiWul47gmgYchAEsHQZrlR3MAyFCQwXU9UTTBcor8qnF9H+YH4Y0+LoEosH728MzA40QoCRKuJixcqXggHcc1CZBABYHhezVK/UecLlg0vHUqFpQjGETrVgGau5BADQHn3GrQf6zqs6XZA5KVxP8pyhra3IcECgRS/xGvgasNooTa1D4okyKlbRRlNn9ZaAo3k8BjE4BVS4LEegwN1LL+mcJAkIfCHEOR+5LAgEAU5Lo0q/jgkL2PCOjsCgo++pSjhL13Qv6HBEjgNAIQdRj5obpkVc1pLHk0CZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACZAACdQT+B85Z4VXY8lg7QAAAABJRU5ErkJggg=="
								/>
							</defs>
						</svg>
					</div>

					<div
						style={{
							position: 'absolute',
							width: '321px',
							height: '0px',
							left: '522px',
							top: '485px'
						}}
					>
						<svg width="321" height="3" viewBox="0 0 321 3" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line y1="1.5" x2="321" y2="1.5" stroke="url(#paint0_linear_1275_1110)" strokeWidth="3" />
							<defs>
								<linearGradient
									id="paint0_linear_1275_1110"
									x1="22.5383"
									y1="3"
									x2="290.949"
									y2="3"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="white" stopOpacity="0" />
									<stop offset="0.520864" stopColor="white" />
									<stop offset="1" stopColor="white" stopOpacity="0" />
								</linearGradient>
							</defs>
						</svg>
					</div>

					<div
						style={{
							position: 'absolute',
							width: '321px',
							height: '0px',
							left: '522px',
							top: '487px',
							filter: ' blur(12px)'
						}}
					>
						<svg
							width="345"
							height="31"
							viewBox="0 0 345 31"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g filter="url(#filter0_f_1275_1111)">
								<line
									x1="12"
									y1="15.5"
									x2="333"
									y2="15.5"
									stroke="url(#paint0_linear_1275_1111)"
									strokeWidth="7"
								/>
							</g>
							<defs>
								<filter
									id="filter0_f_1275_1111"
									x="0"
									y="0"
									width="345"
									height="31"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
									<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_1275_1111" />
								</filter>
								<linearGradient
									id="paint0_linear_1275_1111"
									x1="4.48723"
									y1="19"
									x2="327.536"
									y2="19"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="white" stopOpacity="0" />
									<stop offset="0.520864" stopColor="white" />
									<stop offset="1" stopColor="white" stopOpacity="0" />
								</linearGradient>
							</defs>
						</svg>
					</div>

					<div
						style={{
							position: 'absolute',
							width: '388px',
							height: '150px',
							left: '484px',
							top: '500px'
						}}
					>
						<svg
							width="388"
							height="150"
							viewBox="0 0 388 150"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="388" height="150" fill="url(#paint0_radial_1275_1112)" />
							<defs>
								<radialGradient
									id="paint0_radial_1275_1112"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(194) rotate(90) scale(98.6842 134.209)"
								>
									<stop stopColor="white" />
									<stop offset="0.437775" stopColor="#C1B9B4" stopOpacity="0.37" />
									<stop offset="1" stopColor="#C5B297" stopOpacity="0" />
								</radialGradient>
							</defs>
						</svg>
					</div>

					<div
						className="dFordTextThin"
						style={{
							position: 'absolute',
							width: '355px',
							height: '37px',
							left: '509px',
							top: '683px'
						}}
					>
						Finger Print Sensor Login
					</div>
				</div>

				{/*********************demoIntroSection2Wrapper end *************************/}

				{/*********************demoIntroSection3Wrapper start *************************/}
				<div
					id="demoIntroSection3Wrapper"
					ref={this.demoIntroSection3Wrapper}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						left: '0px',
						top: '0px',
						display: 'none',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundImage: `url(${demoIntroSection3Bg1})`
					}}
					onTouchStart={(event) => this.demoIntroSection3WrapperTouchStart(event)}
					onTouchMove={(event) => this.demoIntroSection3WrapperTouchMove(event)}
					onTouchEnd={(event) => this.demoIntroSection3WrapperTouchEnd(event)}
				>
					{/* 标题*/}
					<div
						style={{
							position: 'absolute',
							width: '100%',
							height: '190px',
							textAlign: 'center',
							top: '439px'
						}}
						className="dFordMainTitle"
					>
						Demo Intro
					</div>

					{/*文本*/}
					<div
						className="dFordNormalText"
						style={{
							position: 'absolute',
							width: '636px',
							height: '167px',
							left: '365px',
							top: '610px'
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
					</div>
				</div>
				{/*********************demoIntroSection3Wrapper end *************************/}

				{/*********************homePageWrapper start *************************/}
				<div
					className="homePageWrapper"
					ref={this.box}
					style={{ display: 'none' }}
				>

					{this.state.slides.map((item: any, index: any) => {
						return (
							<div
								className="box"
								key={index}
								style={{
									position: 'relative',
									backgroundSize: 'cover',
									backgroundPosition: 'center'
									// backgroundImage: `url(${this.state.slides[index].defaultImage})`
								}}
								onTouchStart={(event) => this.homePageTouchStart(event, item, index)}
								onTouchMove={(event) => this.homePageTouchMove(event, item, index)}
								onTouchEnd={(event) => this.homePageTouchEnd(event, item, index)}
							>
								
								<CanvasImageSequence
									ref={this[`homePageCanvasRef${index}`]}
									data={this.sectionImageSequenceList[item.key]}
									loop={true}
									forward={true}
									autoPlay={false}
									fps={1}
									canvasWidth={this.state.canvasWidth}
									canvasHeight={this.state.canvasHeight}
									onChange={() => this.change}
								/>

								{/* 手风琴 收起状态虚化效果*/}
								<div
									style={{
										position: 'absolute',
										width: '100%',
										height: '100%',
										backdropFilter: item.isFilter ? 'blur(20px)' : 'blur(0px)',
										backgroundColor: item.isFilter ? item.bgFilter : ''
									}}
								/>

								{/* 手风琴 激活状态下滑动提示*/}
								<div
									className="dFordMainTitle"
									style={{
										position: 'absolute',
										width: '659px',
										height: '155px',
										left: '0px',
										top: '70%',
										bottom: ' 0px',
										right: '0px',
										margin: '0 auto',
										display: item.isActive ? 'block' : 'none'
									}}
								>
									{this.state.slides[index].maxTitle}
								</div>
								{/* 手风琴 激活状态下滑动提示*/}
								<div
									style={{
										position: 'absolute',
										width: '211px',
										height: '57px',
										left: '0px',
										top: '90%',
										bottom: ' 0px',
										right: '0px',
										margin: '0 auto',
										display: this.state.slides[index].isActive ? 'block' : 'none'
									}}
								>
									<svg
										width="211"
										height="59"
										viewBox="0 0 211 59"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M6.01203 18.24C9.61203 18.24 11.172 16.34 11.172 14.12C11.172 9.14 3.41203 10.68 3.41203 8.2C3.41203 7.2 4.29203 6.54 5.67203 6.54C7.07203 6.54 8.49203 7.02 9.53203 8.06L10.872 6.32C9.63203 5.12 7.95203 4.46 5.87203 4.46C2.95203 4.46 1.01203 6.16 1.01203 8.36C1.01203 13.28 8.79203 11.54 8.79203 14.34C8.79203 15.22 8.03203 16.16 6.11203 16.16C4.25203 16.16 2.81203 15.3 1.89203 14.32L0.592028 16.12C1.77203 17.38 3.55203 18.24 6.01203 18.24ZM19.527 18.24C22.227 18.24 23.867 16.84 24.887 15.24L22.887 14.22C22.247 15.34 20.967 16.16 19.527 16.16C16.887 16.16 14.927 14.14 14.927 11.34C14.927 8.54 16.887 6.52 19.527 6.52C20.967 6.52 22.247 7.36 22.887 8.46L24.887 7.44C23.887 5.84 22.227 4.44 19.527 4.44C15.587 4.44 12.527 7.24 12.527 11.34C12.527 15.44 15.587 18.24 19.527 18.24ZM36.8798 18L33.6198 12.76C35.2198 12.5 36.7798 11.22 36.7798 8.84C36.7798 6.38 35.0598 4.66 32.4198 4.66H26.5598V18H28.8998V13.02H31.2198L34.1798 18H36.8798ZM32.0998 10.96H28.8998V6.72H32.0998C33.4198 6.72 34.3798 7.56 34.3798 8.84C34.3798 10.12 33.4198 10.96 32.0998 10.96ZM45.1384 18.24C49.1384 18.24 51.9584 15.32 51.9584 11.34C51.9584 7.36 49.1384 4.44 45.1384 4.44C41.1384 4.44 38.3184 7.36 38.3184 11.34C38.3184 15.32 41.1384 18.24 45.1384 18.24ZM45.1384 16.16C42.4384 16.16 40.7184 14.08 40.7184 11.34C40.7184 8.58 42.4384 6.52 45.1384 6.52C47.8184 6.52 49.5584 8.58 49.5584 11.34C49.5584 14.08 47.8184 16.16 45.1384 16.16ZM62.2314 18V15.94H56.3514V4.66H54.0114V18H62.2314ZM72.3634 18V15.94H66.4834V4.66H64.1434V18H72.3634ZM84.7322 18V6.72H88.7722V4.66H78.3522V6.72H82.3922V18H84.7322ZM96.2673 18.24C100.267 18.24 103.087 15.32 103.087 11.34C103.087 7.36 100.267 4.44 96.2673 4.44C92.2673 4.44 89.4473 7.36 89.4473 11.34C89.4473 15.32 92.2673 18.24 96.2673 18.24ZM96.2673 16.16C93.5673 16.16 91.8473 14.08 91.8473 11.34C91.8473 8.58 93.5673 6.52 96.2673 6.52C98.9473 6.52 100.687 8.58 100.687 11.34C100.687 14.08 98.9473 16.16 96.2673 16.16ZM115.037 18C119.197 18 122.017 15.26 122.017 11.34C122.017 7.42 119.197 4.66 115.037 4.66H110.077V18H115.037ZM115.037 15.94H112.417V6.72H115.037C118.017 6.72 119.617 8.76 119.617 11.34C119.617 13.86 117.937 15.94 115.037 15.94ZM133.216 18V15.94H126.416V12.24H133.076V10.18H126.416V6.72H133.216V4.66H124.076V18H133.216ZM139.979 18.24C143.579 18.24 145.139 16.34 145.139 14.12C145.139 9.14 137.379 10.68 137.379 8.2C137.379 7.2 138.259 6.54 139.639 6.54C141.039 6.54 142.459 7.02 143.499 8.06L144.839 6.32C143.599 5.12 141.919 4.46 139.839 4.46C136.919 4.46 134.979 6.16 134.979 8.36C134.979 13.28 142.759 11.54 142.759 14.34C142.759 15.22 141.999 16.16 140.079 16.16C138.219 16.16 136.779 15.3 135.859 14.32L134.559 16.12C135.739 17.38 137.519 18.24 139.979 18.24ZM153.494 18.24C156.194 18.24 157.834 16.84 158.854 15.24L156.854 14.22C156.214 15.34 154.934 16.16 153.494 16.16C150.854 16.16 148.894 14.14 148.894 11.34C148.894 8.54 150.854 6.52 153.494 6.52C154.934 6.52 156.214 7.36 156.854 8.46L158.854 7.44C157.854 5.84 156.194 4.44 153.494 4.44C149.554 4.44 146.494 7.24 146.494 11.34C146.494 15.44 149.554 18.24 153.494 18.24ZM166.747 18.24C170.747 18.24 173.567 15.32 173.567 11.34C173.567 7.36 170.747 4.44 166.747 4.44C162.747 4.44 159.927 7.36 159.927 11.34C159.927 15.32 162.747 18.24 166.747 18.24ZM166.747 16.16C164.047 16.16 162.327 14.08 162.327 11.34C162.327 8.58 164.047 6.52 166.747 6.52C169.427 6.52 171.167 8.58 171.167 11.34C171.167 14.08 169.427 16.16 166.747 16.16ZM181.989 18L187.229 4.66H184.569L180.529 15.46L176.489 4.66H173.829L179.069 18H181.989ZM197.626 18V15.94H190.826V12.24H197.486V10.18H190.826V6.72H197.626V4.66H188.486V18H197.626ZM210.149 18L206.889 12.76C208.489 12.5 210.049 11.22 210.049 8.84C210.049 6.38 208.329 4.66 205.689 4.66H199.829V18H202.169V13.02H204.489L207.449 18H210.149ZM205.369 10.96H202.169V6.72H205.369C206.689 6.72 207.649 7.56 207.649 8.84C207.649 10.12 206.689 10.96 205.369 10.96Z"
											fill="#DEDEDE"
										/>
										<path
											d="M98 49L109.275 57L120 49"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</div>

								<div
									style={{
										position: 'absolute',
										width: '81px',
										height: '105px',
										top: '891px',
										left: '0px',
										transform: 'scale(0.4)',
										display: !this.state.slides[index].isActive && item.isFilter ? 'block' : 'none'
									}}
								>
									<img src={this.state.slides[index].smallIndex} style={{ objectFit: 'contain' }} />
								</div>
								<div
									style={{
										position: 'absolute',
										width: '250px',
										height: '50px',
										top: '820px',
										left: '0px',
										right: '0px',
										bottom: '0px',
										margin: '0 auto',
										display: item.isActive || item.isFilter ? 'none' : 'block'
									}}
								>
									<img src={this.state.slides[index].smallTitle} style={{ objectFit: 'contain' }} />
								</div>

								<div
									style={{
										position: 'absolute',
										width: '81px',
										height: '105px',
										top: '891px',
										right: !item.isActive ? '0px' : 'none',
										bottom: !item.isActive ? '0px' : 'none',
										margin: !item.isActive ? '0 auto' : '0',
										left: item.isActive ? '40px' : '0px',
										display: item.isFilter ? 'none' : 'block'
									}}
								>
									<img src={this.state.slides[index].smallIndex} style={{ objectFit: 'contain' }} />
								</div>
							</div>
						);
					})}
				</div>
				{/*********************homePageWrapper end *************************/}
				<div
					ref={this.privacySection1Wrapper}
					id="privacySection1Wrapper"
					className="sectionWrapper"
					style={{
						position: 'absolute',
						display: 'none',
						backgroundSize: 'cover',
						backgroundPosition: 'center'
					}}
					onTouchStart={(event) => {
						this.privacySection1WrapperTouchStart(event);
					}}
					onTouchMove={(event) => {
						this.privacySection1WrapperTouchMove(event);
					}}
					onTouchEnd={(event) => {
						this.privacySection1WrapperTouchEnd(event);
					}}
				>
					{/* 侧边栏背景 */}
					<div ref={this.privacySection1WrapperLeftContent} className="privacySection1WrapperLeftContent">
						{/* 左侧文本 */}
						<div
							style={{
								position: 'absolute',
								width: '298px',
								height: '490px',
								left: '109px',
								top: '476px'
							}}
							className={'dFordText '}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
							interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim
							sem velit, eu blandit purus porta non. Fusce tristique, risus eget finibus euismod, diam
							arcu pellentesque lectus, ac consequat nulla purus at tellus.
						</div>
						{/* 左侧标题 */}
						<div
							style={{
								position: 'absolute',
								width: '335px',
								height: '94px',
								left: '105px',
								top: '342px'
							}}
							className={'dFordTitle '}
						>
							Privacy
						</div>
						{/* 左侧标题加号icon */}
						<div
							style={{
								position: 'absolute',
								width: '45px',
								height: '110px',
								left: '448px',
								top: '335px'
							}}
						>
							<svg
								width="41"
								height="44"
								viewBox="0 0 41 44"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.8"
									d="M40.2058 23.56V19.78H22.5658V0.789999H18.5158V19.78H0.785781V23.56H18.5158V43.09H22.5658V23.56H40.2058Z"
									fill="white"
								/>
							</svg>
						</div>
					</div>
					{/* 背景竖纹 */}

					<div
						ref={this.bgLine}
						style={{
							position: 'absolute',
							width: '822px',
							height: '892px',
							left: '272px',
							top: '131px',
							zIndex: '9'
						}}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
				</div>
				{/* section 1  end*/}
				{/*secion 2*/}
				<div
					id="privacySection2Wrapper"
					ref={this.privacySection2Wrapper}
					className="sectionWrapper"
					style={{
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundImage: `url(${this.state.section_2_ImageSrc})`
					}}
					onTouchStart={(event) => {
						this.privacySection2WrapperTouchStart(event);
					}}
					onTouchMove={(event) => {
						this.privacySection2WrapperTouchMove(event);
					}}
					onTouchEnd={(event) => {
						this.privacySection2WrapperTouchEnd(event);
					}}
				>
					<div
						ref={this.section_2_colorBg}
						style={{
							position: 'absolute',
							width: '20%',
							height: '100%',
							top: '0px',
							left: '0px',
							display: 'none',
							background: '#3F3E44'
						}}
					/>

					{/* 左下角背景 */}
					<div
						ref={this.privacySection2leftContent}
						style={{ display: 'none' }}
						className="privacySection2leftContent"
					>
						{/* 左下角标题 */}
						<div
							style={{
								position: 'absolute',
								width: '850px',
								height: '156px',
								left: '124px',
								top: '-88px',
								textAlign: 'left'
							}}
							className={'dFordTitle '}
						>
							Advanced Dimmable window
						</div>
						{/* 左下角文本 */}
						<div
							style={{
								position: 'absolute',
								width: '328px',
								height: '194px',
								left: '123px',
								top: '173px'
							}}
							className={'dFordText '}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
							interdum libero tincidunt efficitur.
						</div>
					</div>
					{/* 背景竖纹 */}
					<div
						ref={this.section_2_bgLine}
						style={{
							position: 'absolute',
							width: '822px',
							height: '892px',
							left: '272px',
							top: '131px',
							zIndex: '9'
						}}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>

					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[0].bgColor}
						indexGroup={subMenuList[0].indexGroup}
						noScale="true"
					/>
				</div>
				{/*secion 3*/}
				<div
					id="privacySection3Wrapper"
					ref={this.privacySection3Wrapper}
					onTouchStart={(event) => {
						this.privacySection3WrapperTouchStart(event);
					}}
					onTouchMove={(event) => {
						this.privacySection3WrapperTouchMove(event);
					}}
					onTouchEnd={(event) => {
						this.privacySection3WrapperTouchEnd(event);
					}}
					className="sectionWrapper"
					style={{
						display: 'none'
					}}
				>
					<img
						src={privacy_section_3_bg}
						ref={this.privacySection3image}
						style={{
							position: 'absolute',
							width: '100%',
							height: ' 100%',
							objectFit: 'cover'
						}}
					/>

					{/* 背景栅格 */}
					<div
						ref={this.privacySection3bgline}
						style={{
							position: 'absolute',
							width: '822px',
							height: '892px',
							left: '272px',
							top: '131px',
							zIndex: '0'
						}}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
					<div
						ref={this.privacySection3colorBg}
						id="privacySection3colorBg"
						style={{
							position: 'absolute',
							width: '273px',
							height: '100%',
							top: '0px',
							left: '0px',
							background: '#48423D',
							display: 'none'
						}}
					/>
					{/* 左侧模糊背景 */}
					<div
						ref={this.privacySection3leftContent}
						id="privacySection3leftContent"
						style={{
							position: 'absolute',
							width: '545px',
							height: '100%',
							left: '0px',
							top: '0px',
							background: 'rgba(13, 19, 20, 0.38)',
							backdropFilter: 'blur(5px)',
							display: 'none'
						}}
						className={'dFordText '}
					>
						{/* 文本 */}
						<div
							style={{
								position: 'absolute',
								width: '370px',
								height: '248px',
								left: '113px',
								top: '322px'
							}}
							className={'dFordText '}
							id="privacySection3Text"
							ref={this.privacySection3Text}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
							interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim
							sem velit, eu blandit purus porta non.
						</div>
						{/* 标题*/}
						<div
							style={{
								position: 'absolute',
								width: '913px',
								height: '142px',
								left: '113px',
								top: '731px'
							}}
							id="privacySection3Title"
							ref={this.privacySection3Title}
						>
							<svg
								width="917"
								height="146"
								viewBox="0 0 917 146"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.2"
									d="M915 18V2H2V79.5M915 64V144H2V126"
									stroke="white"
									strokeWidth="4"
								/>
							</svg>
							{/* 标题 */}
							<div
								className="dFordTitle"
								style={{
									/* remote chauffeur */

									position: 'absolute',
									width: '851px',
									height: '102px',
									left: '20px',
									top: '30px'
								}}
							>
								remote chauffeur
							</div>
						</div>

						{/*part 2*/}

						<div
							ref={this.privacySection3PhoneVideo}
							style={{
								position: 'absolute',
								width: '750px',
								height: '750px',
								left: '573px',
								top: '120px',
								backgroundSize: 'contain',
								display: 'none',
								zIndex: '-1'
							}}
						>
							<Player
								ref={(player) => {
									this.player = player;
								}}
								autoPlay
								loop={true}
							>
								<source src={videoPRemoteVhauffeur} />
							</Player>
						</div>
					</div>

					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[1].bgColor}
						indexGroup={subMenuList[1].indexGroup}
						noScale="true"
					/>
				</div>
				<div
					id="privacySection4Wrapper"
					onTouchStart={(event) => {
						this.privacySection4WrapperTouchStart(event);
					}}
					onTouchMove={(event) => {
						this.privacySection4WrapperTouchMove(event);
					}}
					onTouchEnd={(event) => {
						this.privacySection4WrapperTouchEnd(event);
					}}
					ref={this.privacySection4Wrapper}
					className="sectionWrapper"
					style={{
						zIndex: '-4',
						display: 'none'
					}}
				>
					<img
						src={privacy_section_3_bg}
						ref={this.section_4_image}
						style={{
							position: 'absolute',
							width: '100%',
							height: ' 100%',
							objectFit: 'cover',
							zIndex: '-4'
						}}
					/>

					{/* 背景栅格 */}
					<div
						ref={this.section_4_bgline}
						style={{
							position: 'absolute',
							width: '832px',
							height: '892px',
							left: '257px',
							top: '145px',
							zIndex: '-4'
						}}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
					<div
						ref={this.section_4_colorBg}
						style={{
							position: 'absolute',
							width: '257px',
							height: '100%',
							top: '0px',
							left: '0px',
							zIndex: '-4',
							background: '#48423D'
						}}
					/>

					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[1].bgColor}
						indexGroup={subMenuList[1].indexGroup}
						noScale="true"
					/>
				</div>
				<div
					id="privacySection5Wrapper"
					ref={this.privacySection5Wrapper}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						top: '0px',
						left: '0px',
						zIndex: '-5',
						display: 'none',
						overflow: 'hidden',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundImage: `url(${this.state.privacySection5ImageSequence})`
					}}
					onTouchStart={(event) => {
						this.privacySection5WrapperTouchStart(event);
					}}
					onTouchMove={(event) => {
						this.privacySection5WrapperTouchMove(event);
					}}
					onTouchEnd={(event) => {
						this.privacySection5WrapperTouchEnd(event);
					}}
				>
					{/* 栅格背景 */}
					<div
						ref={this.privacySection5bgline}
						style={{
							position: 'absolute',
							width: '832px',
							height: '892px',
							left: '257px',
							top: '145px',
							zIndex: '-4'
						}}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
					{/* 右侧标题背景 */}
					<div
						ref={this.privacySection5titleBg}
						style={{
							position: 'absolute',
							width: '582px',
							height: '142px',
							left: '120px',
							top: '750px',
							zIndex: '-5'
						}}
					>
						<svg
							width="586"
							height="146"
							viewBox="0 0 586 146"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path opacity="0.2" d="M584 18V2H2V79.5M584 64V144H2V126" stroke="white" strokeWidth="4" />
						</svg>
					</div>
					{/* 右侧标题 */}
					<div
						ref={this.privacySection5title}
						style={{
							position: 'absolute',
							width: '538px',
							height: '102px',
							left: '143px',
							top: '779px',
							opacity: '0.9',
							zIndex: '-5'
						}}
						className="dFordTitle"
					>
						digital seal
					</div>
					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[2].bgColor}
						indexGroup={subMenuList[2].indexGroup}
						noScale="true"
					/>
				</div>
				<div
					id="privacySection6Wrapper"
					onTouchStart={(event) => {
						this.privacySection6WrapperTouchStart(event);
					}}
					onTouchMove={(event) => {
						this.privacySection6WrapperTouchMove(event);
					}}
					onTouchEnd={(event) => {
						this.privacySection6WrapperTouchEnd(event);
					}}
					ref={this.privacySection6Wrapper}
					className="sectionWrapper"
					style={{
						zIndex: '-6',
						display: 'none'
					}}
				>
					<CanvasImageSequence
						ref={this.privacySection6CanvasRef}
						data={this.state.privactSection6ImageSequence}
						loop={true}
						forward={true}
						fps={1}
						canvasWidth={this.state.canvasWidth}
						canvasHeight={this.state.canvasHeight}
						onChange={() => this.change}
					/>

					<div
						id="privacySection6text1"
						ref={this.privacySection6text1}
						style={{
							display: 'none',
							position: 'absolute',
							top: '0px',
							width: '100%',
							height: '100%'
						}}
					>
						{/* 右侧指纹 */}

						<div
							style={{
								position: 'absolute',
								width: '469.5px',
								height: '550px',
								left: '0px',
								top: '150px'
							}}
						>
							<svg
								width="435"
								height="550"
								viewBox="0 0 435 477"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g filter="url(#filter0_f_771_1293)" className="floating-island">
									<path
										strokeDasharray="150"
										strokeDashoffset="450"
										stroke="#AFA4A4"
										fillRule="evenodd"
										clipRule="evenodd"
										style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
										d="M411.845 246.763C413.806 220.165 417.201 188.618 425.4 149.146C433.502 110.14 427.478 80.3431 412.317 58.3074C397.138 36.2473 372.594 21.6632 343.062 13.4831C283.927 -2.89742 205.487 6.61626 145.263 32.3889C25.0933 83.8156 -27.7829 214.909 26.8214 325.073C54.1588 380.227 109.88 430.643 170.476 455.384C231.026 480.107 296.018 479.07 342.563 432.103C366.127 408.325 380.978 388.647 390.555 370.084C400.121 351.543 404.468 334.027 406.91 314.502C408.482 301.93 409.258 288.61 410.13 273.646L410.13 273.641C410.619 265.251 411.138 256.345 411.845 246.763ZM412.175 273.736C414.027 241.96 416.295 203.073 427.403 149.594C460.118 -7.89878 265.457 -21.22 144.375 30.597C23.2931 82.414 -30.1607 214.608 24.9827 325.86C80.1262 437.112 249.48 528.923 344.067 433.477C406.536 370.441 408.571 335.539 412.175 273.736ZM364.918 203.926C368.613 196.04 368.308 187.331 361.789 176.463C335.35 132.384 267.638 116.346 199.527 145.494C177.927 154.738 157.204 167.294 145.705 185.152C134.308 202.851 131.777 226.07 147.222 257.231C155.038 272.999 162.863 286.095 171.003 296.046C179.148 306.003 187.502 312.678 196.341 315.816C213.785 322.009 234.433 314.77 261.132 287.75C280.304 268.348 302.265 253.966 321.132 241.61L321.133 241.609C328.759 236.615 335.88 231.951 342.107 227.421C353.043 219.466 361.133 212.004 364.918 203.926ZM322.138 243.367C356.311 220.99 381.084 204.767 363.55 175.535C336.363 130.207 267.282 114.327 198.639 143.703C155.216 162.285 113.994 194.689 145.383 258.018C176.773 321.346 209.069 343.337 262.639 289.122C281.66 269.873 303.323 255.687 322.138 243.367ZM45.9715 314.158C-4.93335 211.457 46.1607 96.4343 153.866 50.3419C209.877 26.3718 281.15 17.843 335.501 32.5436C362.661 39.8895 385.515 53.0119 400.179 72.8225C414.832 92.6183 421.406 119.225 415.755 153.73C410.067 188.461 407.316 216.27 405.018 239.812L404.907 240.954L404.907 240.955C402.659 263.992 400.815 282.891 397.014 300.267C389.306 335.498 373.54 364.524 329.746 408.729C286.224 452.659 228.14 454.788 174.431 433.024C120.684 411.244 71.454 365.569 45.9715 314.158ZM152.978 48.55C44.4052 95.0135 -7.33125 211.115 44.1328 314.945C69.8347 366.798 119.452 412.842 173.695 434.822C227.975 456.818 287.022 454.747 331.251 410.103C375.208 365.734 391.208 336.41 399.013 300.734C402.838 283.251 404.691 264.256 406.933 241.281L406.933 241.279L407.052 240.064C409.349 216.527 412.095 188.77 417.773 154.101C423.487 119.207 416.869 92.0457 401.83 71.7291C386.802 51.4271 363.464 38.0926 335.989 30.6614C281.072 15.8076 209.308 24.4433 152.978 48.55ZM162.905 69.1967C68.1141 109.762 19.0997 208.166 66.033 302.854C89.5458 350.292 132.085 391.048 178.749 409.771C225.356 428.471 276.039 425.195 316.169 384.674C356.591 343.859 375.585 317.227 386.109 285.873C394.801 259.977 397.73 230.842 402.062 187.747C402.987 178.54 403.977 168.695 405.101 158.109C408.265 128.289 401.15 105.152 387.193 87.8668C373.223 70.5653 352.309 59.0168 327.683 52.5496C278.404 39.6081 214.545 47.0972 162.905 69.1967ZM64.1943 303.641C16.6768 207.774 66.4158 108.317 162.016 67.4048C213.978 45.1678 278.321 37.5758 328.156 50.6634C353.087 57.2108 374.459 68.9544 388.791 86.7045C403.136 104.471 410.341 128.144 407.132 158.377C406.013 168.919 405.027 178.737 404.103 187.93L404.103 187.931C399.772 231.033 396.818 260.424 388.055 286.533C377.397 318.286 358.167 345.161 317.674 386.048C276.89 427.229 225.281 430.535 178.019 411.572C130.815 392.633 87.907 351.482 64.1943 303.641ZM86.1024 291.545C43.1441 204.877 90.066 123.088 171.951 88.0457C219.221 67.8168 275.666 61.367 319.875 72.5503C341.968 78.139 360.945 88.1148 374.224 102.912C387.488 117.694 395.141 137.368 394.456 162.503C393.075 213.181 388.565 243.992 375.229 271.461C361.881 298.955 339.655 323.182 302.6 360.613C284.202 379.198 264.187 389.563 243.867 393.345C223.544 397.128 202.85 394.339 183.074 386.512C143.497 370.847 107.649 335.016 86.1024 291.545ZM171.063 86.2538C88.4435 121.611 40.6892 204.42 84.2637 292.332C105.984 336.152 142.181 372.416 182.353 388.317C202.452 396.272 223.557 399.133 244.326 395.267C265.097 391.4 285.465 380.817 304.106 361.987C341.129 324.588 363.583 300.152 377.086 272.339C390.602 244.5 395.115 213.358 396.497 162.625C397.194 137.055 389.399 116.876 375.751 101.667C362.117 86.4737 342.716 76.3222 320.328 70.6591C275.577 59.3384 218.656 65.8864 171.063 86.2538ZM103.095 175.15C88.1558 204.917 86.6481 240.849 106.172 280.238C125.758 319.754 154.916 350.65 187.396 363.254C203.619 369.549 220.678 371.288 237.835 367.266C254.997 363.244 272.322 353.441 289.031 336.554C297.443 328.053 305.35 320.308 312.729 313.104C313.562 312.291 314.388 311.485 315.208 310.685L315.208 310.685C321.65 304.399 327.673 298.522 333.268 292.897C345.886 280.213 356.294 268.846 364.374 257.041C380.492 233.496 387.415 208.12 383.82 166.934C382.034 146.478 373.846 130.255 361.267 117.968C348.675 105.669 331.63 97.2643 312.069 92.5534C272.929 83.1276 223.896 88.5386 180.998 106.897C146.504 121.658 118.049 145.354 103.095 175.15ZM101.249 174.251C116.445 143.973 145.294 120.004 180.11 105.105C223.334 86.6069 272.832 81.1035 312.499 90.6563C332.34 95.4347 349.767 103.992 362.699 116.623C375.643 129.266 384.03 145.94 385.855 166.841C389.48 208.372 382.497 234.193 366.094 258.156C357.914 270.105 347.408 281.57 334.77 294.274C329.165 299.908 323.134 305.794 316.695 312.077L316.69 312.082C315.87 312.882 315.044 313.688 314.212 314.5C306.833 321.703 298.936 329.439 290.537 337.928C273.625 355.019 255.987 365.043 238.387 369.168C220.781 373.295 203.281 371.503 186.689 365.064C153.541 352.201 124.054 320.813 104.333 281.025C84.5494 241.112 86.0378 204.559 101.249 174.251ZM126.237 268.929C108.691 233.531 110.689 203.77 123.969 179.873C137.277 155.927 161.978 137.755 190.04 125.746C228.567 109.258 270.189 104.885 304.263 112.555C338.317 120.221 364.728 139.873 373.205 171.421C377.468 187.283 377.256 200.155 373.659 211.496C370.057 222.848 363.038 232.747 353.544 242.618C344.77 251.741 333.931 260.793 321.789 270.933C320.78 271.775 319.763 272.624 318.738 273.482C305.373 284.655 290.594 297.187 275.459 312.493C245.419 342.871 216.941 349.481 191.711 339.993C166.339 330.451 143.873 304.51 126.237 268.929ZM189.152 123.954C160.849 136.066 135.737 154.473 122.159 178.904C108.555 203.384 106.596 233.799 124.399 269.716C142.111 305.451 164.888 331.982 191.025 341.811C217.304 351.694 246.598 344.574 276.964 313.866C292.032 298.629 306.753 286.146 320.111 274.976C321.143 274.114 322.167 273.258 323.183 272.41C335.3 262.292 346.218 253.174 355.069 243.972C364.67 233.989 371.895 223.851 375.614 212.126C379.337 200.39 379.521 187.146 375.182 170.998C366.456 138.524 339.259 118.439 304.661 110.651C270.082 102.867 228.009 107.325 189.152 123.954Z"
										fill="url(#paint0_angular_771_1293)"
									>
										<animate
											attributeName="stroke-dashoffset"
											to="0"
											dur="20s"
											fill="freeze"
											restart="never"
											repeatCount="indefinite"
										/>
									</path>
								</g>
								<defs>
									<filter
										id="filter0_f_771_1293"
										x="0.257812"
										y="0.417969"
										width="433.797"
										height="475.949"
										filterUnits="userSpaceOnUse"
										colorInterpolationFilters="sRGB"
									>
										<feFlood floodOpacity="0" result="BackgroundImageFix" />
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="BackgroundImageFix"
											result="shape"
										/>
										<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_771_1293" />
									</filter>
									<radialGradient
										id="paint0_angular_771_1293"
										cx="0"
										cy="0"
										r="1"
										gradientUnits="userSpaceOnUse"
										gradientTransform="translate(243.026 237.992) rotate(-67.7938) scale(256.317 286.316)"
									>
										<stop offset="0.167962" stopColor="#4F4542" stopOpacity="0.926143" />
										<stop offset="0.376062" stopColor="#F9CDA5" stopOpacity="0.72" />
										<stop offset="0.515744" stopColor="#D78A55" stopOpacity="0" />
										<stop offset="0.58323" stopColor="#D8A27C" stopOpacity="0.0959917" />
										<stop offset="0.719624" stopColor="#DBD2CB" stopOpacity="0.29" />
										<stop offset="0.794043" stopColor="#BCB4AD" stopOpacity="0.54" />
										<stop offset="0.91435" stopColor="#E4B79E" />
										<stop offset="1" stopColor="#AFA4A4" stopOpacity="0.5" />
									</radialGradient>
								</defs>
							</svg>
						</div>
						{/* 文本标题 */}
						<div
							style={{
								position: 'absolute',
								width: '254px',
								height: '70px',
								left: '134px',
								top: '255px',
								textAlign: 'left'
							}}
							className="dFordSmallTitle"
						>
							Imaging sensors
						</div>
						<div
							className="dFordNormalText"
							style={{
								position: 'absolute',
								width: '254px',
								height: '251px',
								left: '134px',
								top: '336px'
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
							interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.
						</div>
					</div>

					<div
						id="privacySection6text2"
						ref={this.privacySection6text2}
						style={{
							display: 'none',
							position: 'absolute',
							top: '0px',
							width: '100%',
							height: '100%'
						}}
					>
						{/* 右侧指纹 */}

						<div
							style={{
								position: 'absolute',
								width: '469.5px',
								height: '550px',
								right: '0px',
								top: '150px'
							}}
						>
							<svg
								width="396"
								height="484"
								viewBox="0 0 396 484"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g filter="url(#filter0_f_771_1417)">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M379.104 207.136C397.442 261.653 392.313 302.247 367.952 339.467C343.449 376.903 299.404 411.077 239.367 452.352C209.655 472.779 182.352 480.219 158.157 478.317C133.962 476.415 112.634 465.153 94.902 447.735C74.6431 427.835 59.1493 399.957 49.5734 369.12C58.2232 393.305 71.0004 414.829 87.1782 430.838C103.422 446.911 123.118 457.442 145.508 459.464C167.899 461.487 192.871 454.99 219.65 437.214C272.892 401.871 312.93 372.381 336.169 338.951C359.477 305.42 365.84 267.997 351.99 216.975C338.13 165.916 298.158 113.794 247.531 77.0882C196.906 40.3838 135.452 18.9726 78.556 29.611L78.5478 29.6126C50.9221 35.0174 34.3809 47.7122 25.239 65.4271C16.1333 83.0719 14.4462 105.553 16.1702 130.4C17.6614 151.89 21.717 175.278 25.8305 198.999C26.4749 202.715 27.1207 206.439 27.7583 210.166C28.8824 216.736 29.9811 223.313 31.0027 229.867C29.4811 221.914 27.8144 213.946 26.0878 206.009C24.5115 198.764 22.8863 191.548 21.2745 184.392C16.0672 161.273 10.9993 138.772 8.17049 117.881C4.46355 90.5047 4.67444 66.3161 13.2208 47.4911C21.6882 28.84 38.5057 15.1111 68.8977 8.95911C129.932 -3.39555 198.258 18.7025 256.067 57.7811C313.869 96.8547 360.779 152.656 379.104 207.136ZM381 206.499C418.001 316.499 360.5 371.5 240.501 454C120.501 536.5 36.5005 411.099 36.5005 296.5C36.5005 261.093 27.7662 222.316 19.3372 184.894C0.484439 101.195 -16.8415 24.2741 68.5009 6.99887C192 -18.0001 343.999 96.4988 381 206.499ZM96.9675 259.873L97.0026 259.688V259.5C97.0026 252.495 101.014 243.754 107.85 234.389C114.634 225.096 123.983 215.478 134.171 206.776C144.355 198.077 155.319 190.344 165.296 184.797C175.342 179.212 184.088 176.014 189.963 176C202.185 176.492 211.791 180.265 218.938 186.308C226.101 192.365 230.923 200.812 233.372 210.849C238.281 230.971 233.588 257.321 219.264 282.511C204.891 307.788 191.465 319.653 178.699 325.296C166.78 330.565 155.22 330.535 143.248 330.505C142.335 330.502 141.42 330.5 140.503 330.5C127.994 330.5 114.531 326.844 105.507 316.44C96.515 306.072 91.5304 288.534 96.9675 259.873ZM221.003 283.5C250.003 232.5 240.503 176 190.002 174C164.321 174 95.0026 228.848 95.0026 259.5C84 317.5 114.821 332.5 140.503 332.5C141.436 332.5 142.37 332.503 143.304 332.505C168.065 332.575 193.057 332.646 221.003 283.5ZM246.357 78.7074C196.002 42.1987 135.101 21.0744 78.9277 31.5762C51.7934 36.8857 35.8295 49.2664 27.0163 66.3443C18.1665 83.4932 16.4489 105.523 18.1654 130.262C19.6489 151.641 23.6843 174.914 27.7991 198.645L27.8 198.65C28.4444 202.367 29.0908 206.095 29.7296 209.829C34.4419 237.369 38.7396 265.205 38.7396 290.952V290.959L38.7395 290.967C37.9566 344.021 56.6028 397.769 88.5849 429.416C104.561 445.225 123.842 455.499 145.688 457.472C167.534 459.446 192.059 453.128 218.544 435.547C271.828 400.176 311.539 370.879 334.526 337.809C357.444 304.84 363.781 268.048 350.06 217.499C336.348 166.986 296.713 115.216 246.357 78.7074ZM42.8498 85.6617C51.8509 70.5061 66.6529 59.6367 90.288 55.2178C141.242 46.6405 194.441 66.6509 237.215 100.5C279.993 134.351 312.186 181.924 321.203 228.21C330.23 274.552 322.682 307.218 301.403 335.643C280.055 364.16 244.843 388.481 198.292 417.96C175.181 432.597 153.656 437.698 134.435 435.676C115.212 433.653 98.1902 424.496 84.1035 410.428C55.9041 382.266 39.5473 334.488 41.1125 285.48L41.113 285.464V285.448C41.113 263.199 38.3754 239.031 35.6554 215.019L35.4823 213.492C32.7034 188.95 30.0042 164.618 30.2814 142.569C30.5586 120.512 33.816 100.873 42.8498 85.6617ZM323.166 227.828C314.038 180.971 281.518 133.008 238.456 98.9314C195.393 64.8538 141.633 44.5432 89.9471 53.247L89.9382 53.2485L89.9294 53.2502C65.7941 57.7605 50.461 68.9296 41.1302 84.6404C31.8311 100.298 28.5604 120.356 28.2815 142.544C28.0025 164.74 30.7191 189.201 33.495 213.717L33.6616 215.187C36.3858 239.237 39.1117 263.302 39.113 285.432C37.5387 334.846 54.0128 383.204 82.6903 411.843C97.0436 426.177 114.474 435.587 134.225 437.665C153.978 439.743 175.948 434.478 199.362 419.65C245.864 390.202 281.401 365.7 303.004 336.842C324.677 307.891 332.282 274.628 323.166 227.828ZM103.974 78.9189C83.8375 82.4483 70.1962 91.8071 61.0026 105.046C51.7811 118.325 46.9847 135.581 44.7172 154.957C42.4503 174.328 42.7199 195.725 43.5616 217.231C43.8136 223.67 44.1171 230.122 44.4185 236.53C45.1225 251.495 45.8154 266.224 45.8154 280.003V280.03L45.814 280.056C43.4672 325.018 57.5359 366.825 81.952 391.5C94.1491 403.826 108.914 411.868 125.514 413.939C142.113 416.009 160.639 412.122 180.377 400.429C220.196 376.84 250.909 357.495 270.617 333.529C290.257 309.645 299.012 281.102 294.677 238.962C290.351 196.9 265.591 153.529 230.393 122.341C195.202 91.1585 149.706 72.2648 103.974 78.9189ZM231.719 120.844C267.217 152.298 292.279 196.105 296.667 238.758C301.047 281.332 292.198 310.433 272.161 334.799C252.192 359.083 221.155 378.596 181.396 402.15C161.346 414.028 142.379 418.058 125.267 415.923C108.156 413.789 92.9933 405.502 80.5304 392.907C55.6311 367.743 41.4536 325.347 43.8154 279.977C43.8145 266.254 43.1256 251.611 42.4231 236.678L42.4231 236.678L42.4231 236.678L42.4231 236.678C42.1211 230.259 41.8166 223.786 41.5631 217.309C40.7208 195.788 40.4447 174.259 42.7307 154.725C45.016 135.197 49.871 117.569 59.3599 103.905C68.8745 90.204 82.9982 80.5615 103.643 76.9464L103.657 76.9439L103.671 76.9419C150.148 70.174 196.218 89.3867 231.719 120.844ZM64.7604 167.455C73.2702 134.047 90.0807 107.973 123.279 102.702C163.786 97.9695 201.574 115.742 229.183 144.247C256.802 172.762 274.14 211.928 273.785 249.774C273.43 287.716 263.468 312.139 245.467 331.486C227.401 350.903 201.19 365.274 168.1 382.973C151.735 391.726 136.207 394.403 122.226 392.285C108.244 390.167 95.7345 383.24 85.4268 372.655C64.7953 351.469 53.0121 315.636 56.1397 274.717L56.1426 274.679V274.641C56.1426 241.298 56.2475 200.875 64.7604 167.455ZM275.785 249.792C276.145 211.352 258.554 171.697 230.62 142.855C202.679 114.008 164.297 95.8886 123.026 100.718L123.006 100.721L122.986 100.724C88.5943 106.174 71.41 133.247 62.8223 166.961C54.2394 200.656 54.1427 241.323 54.1426 274.603C50.9933 315.924 62.8718 352.361 83.994 374.051C94.5664 384.907 107.461 392.071 121.927 394.263C136.394 396.455 152.356 393.662 169.043 384.737C202.056 367.079 228.595 352.557 246.931 332.848C265.334 313.07 275.426 288.135 275.785 249.792ZM145.317 126.603C119.038 130.115 100.007 151.992 87.5138 180.097C75.0329 208.174 69.2111 242.193 69.2111 269.394V269.447L69.2056 269.499C65.298 306.378 74.7998 336.236 91.6451 353.929C108.446 371.576 132.651 377.241 158.588 365.624C159.633 365.156 160.671 364.692 161.701 364.231C186.667 353.062 207.31 343.826 223.08 329.545C239.437 314.733 250.606 294.427 255.651 260.674C260.68 227.027 250.742 192.068 230.698 166.239C210.667 140.429 180.593 123.787 145.317 126.603ZM232.278 165.013C252.644 191.255 262.742 226.76 257.629 260.97C252.531 295.075 241.193 315.84 224.422 331.028C208.41 345.528 187.495 354.884 162.664 365.991C161.585 366.474 160.499 366.96 159.406 367.449C132.713 379.404 107.596 373.583 90.1966 355.308C72.8498 337.089 63.2743 306.609 67.2111 269.341C67.2187 241.914 73.0827 207.637 85.6863 179.284C98.2814 150.95 117.742 128.257 145.079 124.617L145.105 124.613L145.131 124.611C181.201 121.723 211.902 138.758 232.278 165.013ZM137.902 163.903C147.729 156.391 157.874 151.561 167.522 150.684C197.555 149.779 219.908 165.27 232.377 188.357C244.867 211.484 247.435 242.249 237.727 271.73C227.989 301.298 215.617 317.485 200.912 327.768C187.644 337.046 172.421 341.569 155.211 346.683C153.272 347.26 151.307 347.843 149.317 348.442C130.075 354.234 111.089 349.564 98.0499 335.389C84.9931 321.195 77.7649 297.316 82.4523 264.47L82.4623 264.399V264.328C82.4623 243.3 93.9224 215.736 110.402 192.94C118.629 181.559 128.075 171.415 137.902 163.903ZM239.626 272.355C249.489 242.407 246.914 211.066 234.137 187.407C221.342 163.716 198.312 147.745 167.431 148.686L167.402 148.687L167.372 148.69C157.202 149.605 146.693 154.666 136.688 162.314C126.673 169.969 117.096 180.266 108.781 191.769C92.1926 214.715 80.488 242.652 80.4624 264.257C75.7392 297.461 83.004 321.987 96.578 336.743C110.179 351.529 129.98 356.351 149.893 350.357C151.883 349.758 153.853 349.173 155.802 348.595L155.804 348.594C172.961 343.499 188.507 338.882 202.058 329.407C217.207 318.814 229.792 302.216 239.626 272.355Z"
										fill="url(#paint0_angular_771_1417)"
									/>
								</g>
								<defs>
									<filter
										id="filter0_f_771_1417"
										x="0.882812"
										y="0.527344"
										width="394.234"
										height="483.076"
										filterUnits="userSpaceOnUse"
										colorInterpolationFilters="sRGB"
									>
										<feFlood floodOpacity="0" result="BackgroundImageFix" />
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="BackgroundImageFix"
											result="shape"
										/>
										<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_771_1417" />
									</filter>
									<radialGradient
										id="paint0_angular_771_1417"
										cx="0"
										cy="0"
										r="1"
										gradientUnits="userSpaceOnUse"
										gradientTransform="translate(198.001 242.065) rotate(-49.6212) scale(245.689 256.748)"
									>
										<stop offset="0.167962" stopColor="#4F4542" stopOpacity="0.926143" />
										<stop offset="0.376062" stopColor="#F9CDA5" stopOpacity="0.72" />
										<stop offset="0.515744" stopColor="#D78A55" stopOpacity="0" />
										<stop offset="0.58323" stopColor="#D8A27C" stopOpacity="0.0959917" />
										<stop offset="0.719624" stopColor="#DBD2CB" stopOpacity="0.29" />
										<stop offset="0.794043" stopColor="#BCB4AD" stopOpacity="0.54" />
										<stop offset="0.91435" stopColor="#E4B79E" />
										<stop offset="1" stopColor="#AFA4A4" stopOpacity="0.5" />
									</radialGradient>
								</defs>
							</svg>
						</div>
						{/* 文本标题 */}
						<div
							style={{
								position: 'absolute',
								width: '254px',
								height: '70px',
								left: '986px',
								top: '274px',
								textAlign: 'left'
							}}
							className="dFordSmallTitle"
						>
							interior microphones
						</div>
						{/* 文本内容 */}
						<div
							style={{
								position: 'absolute',
								width: '254px',
								height: '251px',
								left: '986px',
								top: '355px'
							}}
							className="dFordNormalText"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
							interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.
						</div>
					</div>

					<div
						id="privacySection6text3"
						ref={this.privacySection6text3}
						style={{
							display: 'none',
							position: 'absolute',
							top: '0px',
							width: '100%',
							height: '100%'
						}}
					>
						{/* 右侧指纹 */}

						<div
							style={{
								position: 'absolute',
								width: '469.5px',
								height: '550px',
								left: '0px',
								top: '150px'
							}}
						>
							<svg
								width="435"
								height="550"
								viewBox="0 0 435 477"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g filter="url(#filter0_f_771_1293)" className="floating-island">
									<path
										strokeDasharray="150"
										strokeDashoffset="450"
										stroke="#AFA4A4"
										fillRule="evenodd"
										clipRule="evenodd"
										style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
										d="M411.845 246.763C413.806 220.165 417.201 188.618 425.4 149.146C433.502 110.14 427.478 80.3431 412.317 58.3074C397.138 36.2473 372.594 21.6632 343.062 13.4831C283.927 -2.89742 205.487 6.61626 145.263 32.3889C25.0933 83.8156 -27.7829 214.909 26.8214 325.073C54.1588 380.227 109.88 430.643 170.476 455.384C231.026 480.107 296.018 479.07 342.563 432.103C366.127 408.325 380.978 388.647 390.555 370.084C400.121 351.543 404.468 334.027 406.91 314.502C408.482 301.93 409.258 288.61 410.13 273.646L410.13 273.641C410.619 265.251 411.138 256.345 411.845 246.763ZM412.175 273.736C414.027 241.96 416.295 203.073 427.403 149.594C460.118 -7.89878 265.457 -21.22 144.375 30.597C23.2931 82.414 -30.1607 214.608 24.9827 325.86C80.1262 437.112 249.48 528.923 344.067 433.477C406.536 370.441 408.571 335.539 412.175 273.736ZM364.918 203.926C368.613 196.04 368.308 187.331 361.789 176.463C335.35 132.384 267.638 116.346 199.527 145.494C177.927 154.738 157.204 167.294 145.705 185.152C134.308 202.851 131.777 226.07 147.222 257.231C155.038 272.999 162.863 286.095 171.003 296.046C179.148 306.003 187.502 312.678 196.341 315.816C213.785 322.009 234.433 314.77 261.132 287.75C280.304 268.348 302.265 253.966 321.132 241.61L321.133 241.609C328.759 236.615 335.88 231.951 342.107 227.421C353.043 219.466 361.133 212.004 364.918 203.926ZM322.138 243.367C356.311 220.99 381.084 204.767 363.55 175.535C336.363 130.207 267.282 114.327 198.639 143.703C155.216 162.285 113.994 194.689 145.383 258.018C176.773 321.346 209.069 343.337 262.639 289.122C281.66 269.873 303.323 255.687 322.138 243.367ZM45.9715 314.158C-4.93335 211.457 46.1607 96.4343 153.866 50.3419C209.877 26.3718 281.15 17.843 335.501 32.5436C362.661 39.8895 385.515 53.0119 400.179 72.8225C414.832 92.6183 421.406 119.225 415.755 153.73C410.067 188.461 407.316 216.27 405.018 239.812L404.907 240.954L404.907 240.955C402.659 263.992 400.815 282.891 397.014 300.267C389.306 335.498 373.54 364.524 329.746 408.729C286.224 452.659 228.14 454.788 174.431 433.024C120.684 411.244 71.454 365.569 45.9715 314.158ZM152.978 48.55C44.4052 95.0135 -7.33125 211.115 44.1328 314.945C69.8347 366.798 119.452 412.842 173.695 434.822C227.975 456.818 287.022 454.747 331.251 410.103C375.208 365.734 391.208 336.41 399.013 300.734C402.838 283.251 404.691 264.256 406.933 241.281L406.933 241.279L407.052 240.064C409.349 216.527 412.095 188.77 417.773 154.101C423.487 119.207 416.869 92.0457 401.83 71.7291C386.802 51.4271 363.464 38.0926 335.989 30.6614C281.072 15.8076 209.308 24.4433 152.978 48.55ZM162.905 69.1967C68.1141 109.762 19.0997 208.166 66.033 302.854C89.5458 350.292 132.085 391.048 178.749 409.771C225.356 428.471 276.039 425.195 316.169 384.674C356.591 343.859 375.585 317.227 386.109 285.873C394.801 259.977 397.73 230.842 402.062 187.747C402.987 178.54 403.977 168.695 405.101 158.109C408.265 128.289 401.15 105.152 387.193 87.8668C373.223 70.5653 352.309 59.0168 327.683 52.5496C278.404 39.6081 214.545 47.0972 162.905 69.1967ZM64.1943 303.641C16.6768 207.774 66.4158 108.317 162.016 67.4048C213.978 45.1678 278.321 37.5758 328.156 50.6634C353.087 57.2108 374.459 68.9544 388.791 86.7045C403.136 104.471 410.341 128.144 407.132 158.377C406.013 168.919 405.027 178.737 404.103 187.93L404.103 187.931C399.772 231.033 396.818 260.424 388.055 286.533C377.397 318.286 358.167 345.161 317.674 386.048C276.89 427.229 225.281 430.535 178.019 411.572C130.815 392.633 87.907 351.482 64.1943 303.641ZM86.1024 291.545C43.1441 204.877 90.066 123.088 171.951 88.0457C219.221 67.8168 275.666 61.367 319.875 72.5503C341.968 78.139 360.945 88.1148 374.224 102.912C387.488 117.694 395.141 137.368 394.456 162.503C393.075 213.181 388.565 243.992 375.229 271.461C361.881 298.955 339.655 323.182 302.6 360.613C284.202 379.198 264.187 389.563 243.867 393.345C223.544 397.128 202.85 394.339 183.074 386.512C143.497 370.847 107.649 335.016 86.1024 291.545ZM171.063 86.2538C88.4435 121.611 40.6892 204.42 84.2637 292.332C105.984 336.152 142.181 372.416 182.353 388.317C202.452 396.272 223.557 399.133 244.326 395.267C265.097 391.4 285.465 380.817 304.106 361.987C341.129 324.588 363.583 300.152 377.086 272.339C390.602 244.5 395.115 213.358 396.497 162.625C397.194 137.055 389.399 116.876 375.751 101.667C362.117 86.4737 342.716 76.3222 320.328 70.6591C275.577 59.3384 218.656 65.8864 171.063 86.2538ZM103.095 175.15C88.1558 204.917 86.6481 240.849 106.172 280.238C125.758 319.754 154.916 350.65 187.396 363.254C203.619 369.549 220.678 371.288 237.835 367.266C254.997 363.244 272.322 353.441 289.031 336.554C297.443 328.053 305.35 320.308 312.729 313.104C313.562 312.291 314.388 311.485 315.208 310.685L315.208 310.685C321.65 304.399 327.673 298.522 333.268 292.897C345.886 280.213 356.294 268.846 364.374 257.041C380.492 233.496 387.415 208.12 383.82 166.934C382.034 146.478 373.846 130.255 361.267 117.968C348.675 105.669 331.63 97.2643 312.069 92.5534C272.929 83.1276 223.896 88.5386 180.998 106.897C146.504 121.658 118.049 145.354 103.095 175.15ZM101.249 174.251C116.445 143.973 145.294 120.004 180.11 105.105C223.334 86.6069 272.832 81.1035 312.499 90.6563C332.34 95.4347 349.767 103.992 362.699 116.623C375.643 129.266 384.03 145.94 385.855 166.841C389.48 208.372 382.497 234.193 366.094 258.156C357.914 270.105 347.408 281.57 334.77 294.274C329.165 299.908 323.134 305.794 316.695 312.077L316.69 312.082C315.87 312.882 315.044 313.688 314.212 314.5C306.833 321.703 298.936 329.439 290.537 337.928C273.625 355.019 255.987 365.043 238.387 369.168C220.781 373.295 203.281 371.503 186.689 365.064C153.541 352.201 124.054 320.813 104.333 281.025C84.5494 241.112 86.0378 204.559 101.249 174.251ZM126.237 268.929C108.691 233.531 110.689 203.77 123.969 179.873C137.277 155.927 161.978 137.755 190.04 125.746C228.567 109.258 270.189 104.885 304.263 112.555C338.317 120.221 364.728 139.873 373.205 171.421C377.468 187.283 377.256 200.155 373.659 211.496C370.057 222.848 363.038 232.747 353.544 242.618C344.77 251.741 333.931 260.793 321.789 270.933C320.78 271.775 319.763 272.624 318.738 273.482C305.373 284.655 290.594 297.187 275.459 312.493C245.419 342.871 216.941 349.481 191.711 339.993C166.339 330.451 143.873 304.51 126.237 268.929ZM189.152 123.954C160.849 136.066 135.737 154.473 122.159 178.904C108.555 203.384 106.596 233.799 124.399 269.716C142.111 305.451 164.888 331.982 191.025 341.811C217.304 351.694 246.598 344.574 276.964 313.866C292.032 298.629 306.753 286.146 320.111 274.976C321.143 274.114 322.167 273.258 323.183 272.41C335.3 262.292 346.218 253.174 355.069 243.972C364.67 233.989 371.895 223.851 375.614 212.126C379.337 200.39 379.521 187.146 375.182 170.998C366.456 138.524 339.259 118.439 304.661 110.651C270.082 102.867 228.009 107.325 189.152 123.954Z"
										fill="url(#paint0_angular_771_1293)"
									>
										<animate
											attributeName="stroke-dashoffset"
											to="0"
											dur="20s"
											fill="freeze"
											restart="never"
											repeatCount="indefinite"
										/>
									</path>
								</g>
								<defs>
									<filter
										id="filter0_f_771_1293"
										x="0.257812"
										y="0.417969"
										width="433.797"
										height="475.949"
										filterUnits="userSpaceOnUse"
										colorInterpolationFilters="sRGB"
									>
										<feFlood floodOpacity="0" result="BackgroundImageFix" />
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="BackgroundImageFix"
											result="shape"
										/>
										<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_771_1293" />
									</filter>
									<radialGradient
										id="paint0_angular_771_1293"
										cx="0"
										cy="0"
										r="1"
										gradientUnits="userSpaceOnUse"
										gradientTransform="translate(243.026 237.992) rotate(-67.7938) scale(256.317 286.316)"
									>
										<stop offset="0.167962" stopColor="#4F4542" stopOpacity="0.926143" />
										<stop offset="0.376062" stopColor="#F9CDA5" stopOpacity="0.72" />
										<stop offset="0.515744" stopColor="#D78A55" stopOpacity="0" />
										<stop offset="0.58323" stopColor="#D8A27C" stopOpacity="0.0959917" />
										<stop offset="0.719624" stopColor="#DBD2CB" stopOpacity="0.29" />
										<stop offset="0.794043" stopColor="#BCB4AD" stopOpacity="0.54" />
										<stop offset="0.91435" stopColor="#E4B79E" />
										<stop offset="1" stopColor="#AFA4A4" stopOpacity="0.5" />
									</radialGradient>
								</defs>
							</svg>
						</div>
						{/* 文本标题 */}
						<div
							style={{
								/* Imaging sensors */

								position: 'absolute',
								width: '254px',
								height: '70px',
								left: '134px',
								top: '255px',
								textAlign: 'left'
							}}
							className="dFordSmallTitle"
						>
							Interface tracking
						</div>
						<div
							className="dFordNormalText"
							style={{
								/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. */

								position: 'absolute',
								width: '254px',
								height: '251px',
								left: '134px',
								top: '336px'
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
							interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.
						</div>
					</div>

					<div
						id="privacySection6text4"
						style={{
							display: 'none',
							position: 'absolute',
							top: '0px',
							width: '100%',
							height: '100%',
							zIndex: '1'
						}}
						ref={this.privacySection6text4}
					>
						<Info isStatic={true} isInfoExpanded={true} />
					</div>
					{/* 背景栅格 */}
					<div
						ref={this.privacySection6bgline}
						style={{
							position: 'absolute',
							width: '832px',
							height: '892px',
							left: '257px',
							top: '145px'
						}}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[2].bgColor}
						indexGroup={subMenuList[2].indexGroup}
						noScale="true"
					/>
				</div>
				<div
					id="privacySection7Wrapper"
					ref={this.privacySection7Wrapper}
					className="sectionWrapper"
					style={{ display: 'none' }}
					onTouchStart={(event) => {
						this.privacySection7WrapperTouchStart(event);
					}}
					onTouchMove={(event) => {
						this.privacySection7WrapperTouchMove(event);
					}}
					onTouchEnd={(event) => {
						this.privacySection7WrapperTouchEnd(event);
					}}
				>
					<img
						ref={this.privacySection7bg}
						src={privacy_section_7_bg}
						style={{
							position: 'absolute',
							width: '100%',
							top: '200px',
							left: '-660px',
							height: '100%',
							objectFit: 'cover',
							transform: 'scale(2)'
						}}
					/>

					{/* 栅格背景 */}
					<div
						style={{
							position: 'absolute',
							width: '832px',
							height: '892px',
							left: '257px',
							top: '145px'
						}}
						ref={this.privacySection7bgline}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>

					{/* 右侧文本内容 */}
					<div
						style={{
							position: 'absolute',
							width: '349px',
							height: '155px',
							left: '956px',
							top: '404px'
						}}
						ref={this.privacySection7text}
						className="dFordText"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
						interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.
					</div>

					{/* <div
						ref={this.privacySection7bgMask}
						id="privacySectionBg7Mask"
						style={{
							position: 'absolute',
							width: '1366px',
							height: '1024px',
							left: '0px',
							top: '0px',
							display: 'none',
							background:
								'linear-gradient(175.17deg, rgba(236, 168, 158, 0.16) 12.52%, rgba(27, 22, 82, 0.16) 96.1%)'
						}}
					/> */}
					<div
						id="privacySection8bgPlaceHolder"
						ref={this.privacySection8bgPlaceHolder}
						style={{
							position: 'absolute',
							width: '1366px',
							height: '612.5px',
							left: '0px',
							top: '412px',
							opacity: '.9',
							background: '#1D1B1D',
							display: 'none'
						}}
					/>
					<div
						id="privacySection8bg"
						style={{
							position: 'absolute',
							top: '0px',
							left: '0px',
							width: '100%',
							height: '100%',
							display: 'none'
						}}
						ref={this.privacySection8bg}
					>
						{/* 背景下部底色 */}

						<div
							style={{
								position: 'absolute',
								width: '1366px',
								height: '612.5px',
								left: '0px',
								top: '412px'
							}}
						>
							<svg
								width="1366"
								height="612"
								viewBox="0 0 1366 612"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path opacity="0.25" d="M0 0L683 90.5L1366 0V612.5H0V0Z" fill="#1D1B1D" />
							</svg>
						</div>
						{/* 背景下部遮罩 */}
						<div
							style={{
								position: 'absolute',
								width: '1366px',
								height: '612.5px',
								left: '0px',
								top: '411.5px'
							}}
						>
							<svg
								width="1366"
								height="613"
								viewBox="0 0 1366 613"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path opacity="0.75" d="M0 0.5L683 91L1366 0.5V613H0V0.5Z" fill="#1D1B1D" />
							</svg>
						</div>
						{/* 中部腰线 */}
						<div
							style={{
								position: 'absolute',
								width: '1366px',
								height: '612.5px',
								left: '0px',
								top: '412px'
							}}
						>
							<svg
								width="1366"
								height="612"
								viewBox="0 0 1366 612"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path opacity="0.75" d="M0 0L683 90.5L1366 0V612.5H0V0Z" fill="#1D1B1D" />
							</svg>
						</div>
						{/* 底部中线背景 */}
						<div
							style={{
								position: 'absolute',
								width: '118px',
								height: '0px',
								left: '685px',
								top: '906px'
							}}
						>
							<svg
								width="2"
								height="118"
								viewBox="0 0 2 118"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line x1="1" y1="-4.37114e-08" x2="1.00001" y2="118" stroke="white" strokeWidth="2" />
							</svg>
						</div>
						{/* 底部原型背景 */}
						<div
							style={{
								position: 'absolute',
								width: '139px',
								height: '139px',
								left: '615px',
								top: '835px'
							}}
						>
							<svg
								width="139"
								height="139"
								viewBox="0 0 139 139"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle opacity="0.28" cx="69.5" cy="69.5" r="68.5" stroke="white" strokeWidth="2" />
							</svg>
						</div>
					</div>

					{/* 中部文本 continue to */}
					<div
						id="privacySection8title"
						ref={this.privacySection8title}
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							left: '0px',
							top: '0px',
							display: 'none'
						}}
					>
						<div
							style={{
								position: 'absolute',
								width: '429px',
								height: '72px',
								left: '302px',
								top: '641px'
							}}
							className="dFordNormalTitle"
						>
							continue to
						</div>
						{/* 中部文本 Comfort */}
						<div
							style={{
								position: 'absolute',
								width: '309px',
								height: '72px',
								left: '745px',
								top: '641px',
								color: '#AFCDFA'
							}}
							className="dFordNormalTitle"
						>
							Comfort
						</div>

						<div
							style={{
								position: 'absolute',
								width: '43px',
								height: '102px',
								left: '1062px',
								top: '632px',
								color: '#AFCDFA'
							}}
						>
							<svg
								width="39"
								height="40"
								viewBox="0 0 39 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.8"
									d="M38.15 22.548V16.836H22.61V0.0359967H16.394V16.836H0.853969V22.548H16.394V39.936H22.61V22.548H38.15Z"
									fill="#AFCDFA"
								/>
							</svg>
						</div>
					</div>
					{/* 中部文本 + */}

					<div
						id="privacySection8text"
						ref={this.privacySection8text}
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							left: '0px',
							top: '0px'
						}}
					>
						<div
							className="dFordNormalText"
							onTouchStart={(event) => {
								this.onReturnToHome(event, this.privacySection8Wrapper, 0);
							}}
							style={{
								position: 'absolute',
								width: '151px',
								height: '31px',
								right: '20px',
								top: '965px',
								fontSize: '22px',
								color: '#D8D8D8'
							}}
						>
							Return to Home
						</div>
					</div>
					<div ref={this.privacySection7SubMenu}>
						<SubMenu
							right="0px"
							bottom="0px"
							bgColor={subMenuList[2].bgColor}
							indexGroup={subMenuList[2].indexGroup}
							noScale="true"
						/>
					</div>
				</div>
				{/* <div
					id="privacySection8Wrapper"
					ref={this.privacySection8Wrapper}
					className="sectionWrapper"
					onTouchStart={(event) => {
						this.privacySection8WrapperTouchStart(event);
					}}
					onTouchMove={(event) => {
						this.privacySection8WrapperTouchMove(event);
					}}
				>
				
					<img src={privacy_section_8_bg} />
				

				
				</div> */}

				{/*comfort_section_1*/}

				<div
					id="comfortSection1Wrapper"
					ref={this.comfortSection1Wrapper}
					style={{ display: 'none' }}
					className="sectionWrapper"
					onTouchStart={(event) => {
						this.comfortSection1Start(event);
					}}
					onTouchMove={(event) => {
						this.comfortSection1Move(event);
					}}
					onTouchEnd={(event) => {
						this.comfortSection1End(event);
					}}
				>
					{/* 背景图片 */}
					<div
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							top: '0px',
							left: '0px'
						}}
					>
						<CanvasImageSequence
							ref={this.comfortSection1CanvasRef}
							data={this.state.comfortSection1ImageSequence}
							loop={true}
							forward={true}
							autoPlay={false}
							fps={1}
							canvasWidth={this.state.canvasWidth}
							canvasHeight={this.state.canvasHeight}
							onChange={() => this.change}
						/>
					</div>

					<div id="comfortSection1Text" ref={this.comfortSection1Text} style={{ display: 'block' }}>
						{/* 左下角编号 */}
						<div className="homePageIndex">
							<svg
								width="83"
								height="47"
								viewBox="0 0 83 47"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.24"
									d="M22.4609 46.128C19.1395 46.128 16.1315 45.5953 13.4369 44.53C10.7422 43.402 8.45485 41.8353 6.57485 39.83C4.69485 37.8247 3.22218 35.4433 2.15685 32.686C1.15418 29.866 0.65285 26.764 0.65285 23.38C0.65285 20.184 1.18552 17.176 2.25085 14.356C3.37885 11.536 4.91418 9.092 6.85685 7.024C8.79952 4.956 11.0869 3.32667 13.7189 2.136C16.4135 0.882665 19.3275 0.255999 22.4609 0.255999C25.5942 0.255999 28.4769 0.851332 31.1089 2.042C33.8035 3.17 36.1222 4.768 38.0649 6.836C40.0075 8.84133 41.5115 11.254 42.5769 14.074C43.7049 16.894 44.2689 19.996 44.2689 23.38C44.2689 26.576 43.7362 29.5527 42.6709 32.31C41.6682 35.0673 40.2269 37.48 38.3469 39.548C36.4669 41.616 34.1795 43.2453 31.4849 44.436C28.7902 45.564 25.7822 46.128 22.4609 46.128ZM9.95885 23.38C9.95885 26.5133 10.2722 29.2393 10.8989 31.558C11.5882 33.814 12.4969 35.7253 13.6249 37.292C14.8155 38.8587 16.1629 40.018 17.6669 40.77C19.2335 41.522 20.8942 41.898 22.6489 41.898C24.2782 41.898 25.8135 41.522 27.2549 40.77C28.7589 40.018 30.0749 38.89 31.2029 37.386C32.3309 35.882 33.2082 33.9707 33.8349 31.652C34.5242 29.3333 34.8689 26.576 34.8689 23.38C34.8689 20.184 34.5242 17.3953 33.8349 15.014C33.2082 12.6327 32.3309 10.69 31.2029 9.186C30.0749 7.61933 28.7589 6.46 27.2549 5.708C25.7509 4.89333 24.1529 4.486 22.4609 4.486C20.7689 4.486 19.1709 4.862 17.6669 5.614C16.1629 6.366 14.8155 7.52533 13.6249 9.092C12.4969 10.596 11.5882 12.5387 10.8989 14.92C10.2722 17.3013 9.95885 20.1213 9.95885 23.38ZM52.5577 11.254C52.4324 11.3793 52.2444 11.536 51.9937 11.724C51.8057 11.8493 51.5864 11.912 51.3357 11.912C50.5837 11.912 49.9257 11.5047 49.3617 10.69C51.8057 7.55667 54.5004 5.05 57.4457 3.17C60.4537 1.22733 63.7124 0.255999 67.2217 0.255999C71.5457 0.255999 74.7731 1.384 76.9037 3.64C79.0971 5.83333 80.1937 8.716 80.1937 12.288C80.1937 14.168 79.8177 16.048 79.0657 17.928C78.3764 19.808 77.1857 21.782 75.4937 23.85C73.8017 25.918 71.5457 28.174 68.7257 30.618C65.9057 33.062 62.3964 35.8193 58.1977 38.89H74.0837C75.3371 38.89 76.3711 38.6393 77.1857 38.138C78.0631 37.574 78.8464 36.4773 79.5357 34.848C79.8491 34.1587 80.3504 33.814 81.0397 33.814C81.2277 33.814 81.5724 33.8767 82.0737 34.002C82.2617 34.0647 82.4497 34.096 82.6377 34.096C82.0737 35.7253 81.5411 37.4173 81.0397 39.172C80.6011 40.9267 80.1937 42.6187 79.8177 44.248C79.6924 44.7493 79.5357 45.0627 79.3477 45.188C79.1597 45.3133 78.8464 45.376 78.4077 45.376C77.2797 45.376 75.8697 45.3133 74.1777 45.188C72.4857 45.0627 70.6371 45 68.6317 45H49.3617V42.744C53.2471 39.4853 56.5371 36.5713 59.2317 34.002C61.9891 31.37 64.2137 28.9573 65.9057 26.764C67.5977 24.508 68.8197 22.4087 69.5717 20.466C70.3864 18.5233 70.7937 16.612 70.7937 14.732C70.7937 12.476 70.2297 10.5333 69.1017 8.904C68.0364 7.212 66.1564 6.366 63.4617 6.366C61.6444 6.366 59.8897 6.742 58.1977 7.494C56.5057 8.246 54.6257 9.49933 52.5577 11.254Z"
									fill="white"
								/>
							</svg>
						</div>
						{/* 标题  Comfort */}
						<div
							style={{
								position: 'absolute',
								width: '659px',
								height: '155px',
								left: '340px',
								top: '741px'
							}}
							className="dFordMainTitle"
						>
							Comfort
						</div>
						{/* 标题  + */}
						<div
							style={{
								position: 'absolute',
								width: '72px',
								height: '173px',
								left: '1009px',
								top: '734px'
							}}
						>
							<svg
								width="64"
								height="69"
								viewBox="0 0 64 69"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.8"
									d="M63.5273 38.974V29.318H37.2573V0.917994H26.7493V29.318H0.479328V38.974H26.7493V68.368H37.2573V38.974H63.5273Z"
									fill="white"
								/>
							</svg>
						</div>
						{/* 向下滚动图标*/}
						<div
							style={{
								position: 'absolute',
								width: '22px',
								height: '8px',
								left: '670px',
								top: '965px'
							}}
						>
							<svg
								width="24"
								height="11"
								viewBox="0 0 24 11"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M1 1L12.275 9L23 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
							</svg>
						</div>
						{/* 向下滚动文本 scroll to descover*/}
						<div
							style={{
								position: 'absolute',
								width: '211px',
								height: '24px',
								left: '572px',
								top: '916px'
							}}
						>
							<svg
								width="211"
								height="15"
								viewBox="0 0 211 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.01203 14.24C9.61203 14.24 11.172 12.34 11.172 10.12C11.172 5.14 3.41203 6.68 3.41203 4.2C3.41203 3.2 4.29203 2.54 5.67203 2.54C7.07203 2.54 8.49203 3.02 9.53203 4.06L10.872 2.32C9.63203 1.12 7.95203 0.459999 5.87203 0.459999C2.95203 0.459999 1.01203 2.16 1.01203 4.36C1.01203 9.28 8.79203 7.54 8.79203 10.34C8.79203 11.22 8.03203 12.16 6.11203 12.16C4.25203 12.16 2.81203 11.3 1.89203 10.32L0.592028 12.12C1.77203 13.38 3.55203 14.24 6.01203 14.24ZM19.527 14.24C22.227 14.24 23.867 12.84 24.887 11.24L22.887 10.22C22.247 11.34 20.967 12.16 19.527 12.16C16.887 12.16 14.927 10.14 14.927 7.34C14.927 4.54 16.887 2.52 19.527 2.52C20.967 2.52 22.247 3.36 22.887 4.46L24.887 3.44C23.887 1.84 22.227 0.439999 19.527 0.439999C15.587 0.439999 12.527 3.24 12.527 7.34C12.527 11.44 15.587 14.24 19.527 14.24ZM36.8798 14L33.6198 8.76C35.2198 8.5 36.7798 7.22 36.7798 4.84C36.7798 2.38 35.0598 0.659999 32.4198 0.659999H26.5598V14H28.8998V9.02H31.2198L34.1798 14H36.8798ZM32.0998 6.96H28.8998V2.72H32.0998C33.4198 2.72 34.3798 3.56 34.3798 4.84C34.3798 6.12 33.4198 6.96 32.0998 6.96ZM45.1384 14.24C49.1384 14.24 51.9584 11.32 51.9584 7.34C51.9584 3.36 49.1384 0.439999 45.1384 0.439999C41.1384 0.439999 38.3184 3.36 38.3184 7.34C38.3184 11.32 41.1384 14.24 45.1384 14.24ZM45.1384 12.16C42.4384 12.16 40.7184 10.08 40.7184 7.34C40.7184 4.58 42.4384 2.52 45.1384 2.52C47.8184 2.52 49.5584 4.58 49.5584 7.34C49.5584 10.08 47.8184 12.16 45.1384 12.16ZM62.2314 14V11.94H56.3514V0.659999H54.0114V14H62.2314ZM72.3634 14V11.94H66.4834V0.659999H64.1434V14H72.3634ZM84.7322 14V2.72H88.7722V0.659999H78.3522V2.72H82.3922V14H84.7322ZM96.2673 14.24C100.267 14.24 103.087 11.32 103.087 7.34C103.087 3.36 100.267 0.439999 96.2673 0.439999C92.2673 0.439999 89.4473 3.36 89.4473 7.34C89.4473 11.32 92.2673 14.24 96.2673 14.24ZM96.2673 12.16C93.5673 12.16 91.8473 10.08 91.8473 7.34C91.8473 4.58 93.5673 2.52 96.2673 2.52C98.9473 2.52 100.687 4.58 100.687 7.34C100.687 10.08 98.9473 12.16 96.2673 12.16ZM115.037 14C119.197 14 122.017 11.26 122.017 7.34C122.017 3.42 119.197 0.659999 115.037 0.659999H110.077V14H115.037ZM115.037 11.94H112.417V2.72H115.037C118.017 2.72 119.617 4.76 119.617 7.34C119.617 9.86 117.937 11.94 115.037 11.94ZM133.216 14V11.94H126.416V8.24H133.076V6.18H126.416V2.72H133.216V0.659999H124.076V14H133.216ZM139.979 14.24C143.579 14.24 145.139 12.34 145.139 10.12C145.139 5.14 137.379 6.68 137.379 4.2C137.379 3.2 138.259 2.54 139.639 2.54C141.039 2.54 142.459 3.02 143.499 4.06L144.839 2.32C143.599 1.12 141.919 0.459999 139.839 0.459999C136.919 0.459999 134.979 2.16 134.979 4.36C134.979 9.28 142.759 7.54 142.759 10.34C142.759 11.22 141.999 12.16 140.079 12.16C138.219 12.16 136.779 11.3 135.859 10.32L134.559 12.12C135.739 13.38 137.519 14.24 139.979 14.24ZM153.494 14.24C156.194 14.24 157.834 12.84 158.854 11.24L156.854 10.22C156.214 11.34 154.934 12.16 153.494 12.16C150.854 12.16 148.894 10.14 148.894 7.34C148.894 4.54 150.854 2.52 153.494 2.52C154.934 2.52 156.214 3.36 156.854 4.46L158.854 3.44C157.854 1.84 156.194 0.439999 153.494 0.439999C149.554 0.439999 146.494 3.24 146.494 7.34C146.494 11.44 149.554 14.24 153.494 14.24ZM166.747 14.24C170.747 14.24 173.567 11.32 173.567 7.34C173.567 3.36 170.747 0.439999 166.747 0.439999C162.747 0.439999 159.927 3.36 159.927 7.34C159.927 11.32 162.747 14.24 166.747 14.24ZM166.747 12.16C164.047 12.16 162.327 10.08 162.327 7.34C162.327 4.58 164.047 2.52 166.747 2.52C169.427 2.52 171.167 4.58 171.167 7.34C171.167 10.08 169.427 12.16 166.747 12.16ZM181.989 14L187.229 0.659999H184.569L180.529 11.46L176.489 0.659999H173.829L179.069 14H181.989ZM197.626 14V11.94H190.826V8.24H197.486V6.18H190.826V2.72H197.626V0.659999H188.486V14H197.626ZM210.149 14L206.889 8.76C208.489 8.5 210.049 7.22 210.049 4.84C210.049 2.38 208.329 0.659999 205.689 0.659999H199.829V14H202.169V9.02H204.489L207.449 14H210.149ZM205.369 6.96H202.169V2.72H205.369C206.689 2.72 207.649 3.56 207.649 4.84C207.649 6.12 206.689 6.96 205.369 6.96Z"
									fill="#DEDEDE"
								/>
							</svg>
						</div>
					</div>

					<div
						style={{
							position: 'absolute',
							width: '821px',
							height: '327px',
							left: '0px',
							top: '697px',
							background: ' rgba(39, 42, 51, 0.32)',
							backdropFilter: 'blur(48px)',
							display: 'none'
						}}
						ref={this.comfortSection1Text2}
					>
						<div
							className="dFordText"
							style={{
								/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim sem velit, eu blandit purus porta non. */

								position: 'absolute',
								width: '559px',
								height: '273px',
								left: '118px',
								top: '64px'
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
							interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim
							sem velit, eu blandit purus porta non.
						</div>
					</div>

					<div
						id="comfortSection1Title"
						ref={this.comfortSection1Title}
						style={{
							display: 'none'
						}}
					>
						{/*标题*/}
						<div
							className="dFordTitle"
							style={{
								position: 'absolute',
								width: '396px',
								height: '94px',
								left: '862px',
								top: '796px'
							}}
						>
							Comfort
						</div>

						<div
							style={{
								position: 'absolute',
								width: '45px',
								height: '110px',
								right: '60px',
								top: '790px'
							}}
						>
							<svg
								width="41"
								height="44"
								viewBox="0 0 41 44"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.8"
									d="M40.2058 23.56V19.78H22.5658V0.789999H18.5158V19.78H0.785781V23.56H18.5158V43.09H22.5658V23.56H40.2058Z"
									fill="white"
								/>
							</svg>
						</div>
					</div>

					{/* 背景栅格 */}
					<div
						ref={this.comfortSection1BgLine}
						style={{
							position: 'absolute',
							width: '822px',
							height: '892px',
							left: '272px',
							top: '131px'
						}}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
				</div>

				{/* comfort section 2*/}

				<div
					id="comfortSection2Wrapper"
					ref={this.comfortSection2Wrapper}
					style={{ display: 'none' }}
					className="sectionWrapper"
					onTouchStart={(event) => {
						this.comfortSection2Start(event);
					}}
					onTouchMove={(event) => {
						this.comfortSection2Move(event);
					}}
					onTouchEnd={(event) => {
						this.comfortSection2End(event);
					}}
				>
					<div className="imageWrapper">
						<img src={this.state.comfortSection2Bg} className="imageCover" />
						<div
							id="comfortSection2Box05"
							style={{
								position: 'absolute',
								width: '100%',
								height: '208px',
								left: '0px',
								top: '816px',
								background: '#5F6871',
								zIndex: '2'
							}}
						/>
						<div
							id="comfortSection2Box05"
							ref={this.comfortSection2Box05}
							style={{
								position: 'absolute',
								width: '100%',
								height: '208px',
								left: '0px',
								top: '816px',
								background: '#5F6871',
								zIndex: '2'
							}}
						>
							<div
								className="dFordNormalTitle"
								style={{
									position: 'absolute',
									width: '621px',
									height: '72px',
									left: '101px',
									top: '-70px',
									color: '#FCE9CA',
									opacity: '0.9'
								}}
							>
								MAXIMAL
							</div>
							<div
								className="dFordNormalTitle"
								style={{
									position: 'absolute',
									width: '819px',
									height: '72px',
									left: '101px',
									top: '10px',
									opacity: '0.9'
								}}
							>
								SPACE UTILIZATION
							</div>
						</div>

						<div
							id="comfortSection2TextBox05"
							style={{
								position: 'absolute',
								width: '545px',
								height: '288px',
								left: '821px',
								top: '736px',
								background: 'rgba(30, 33, 41, 0.26)',
								backdropFilter: ' blur(48px)',
								zIndex: '2'
							}}
							ref={this.comfortSection2Desc}
						>
							<div
								className="dFordText"
								style={{
									position: 'absolute',
									left: '100px',
									top: '60px',
									width: '441px',
									height: '62px'
								}}
							>
								providing natural and relaxing viewing by conforming to user’s learned behaviors
							</div>
						</div>

						{/* 背景栅格 */}
						<div
							ref={this.comfortSection2BgLine}
							style={{
								position: 'absolute',
								width: '822px',
								height: '892px',
								left: '272px',
								top: '131px'
							}}
						>
							<svg
								width="823"
								height="892"
								viewBox="0 0 823 892"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line
									opacity="0.3"
									x1="0.5"
									y1="-2.18557e-08"
									x2="0.500039"
									y2="892"
									stroke="#E8E8E8"
								/>
								<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
								<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
								<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
							</svg>
						</div>
					</div>

					<div
						id="comfortSection2Splitter"
						ref={this.comfortSection2Splitter}
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							left: '0px',
							top: '0px',
							zIndex: '1',
							display: 'flex'
						}}
					>
						<div
							id="mask1"
							ref={this.mask1}
							style={{
								flex: 'none',
								background: ' rgba(255, 255, 255, 0.05)',
								backdropFilter: 'blur(80px)',
								minWidth: '10%',
								display: 'block',
								zIndex: '1'
							}}
						>
							<div
								id="comfortSection2SplitterMoveHanlder"
								className="comfortSection2SplitterMoveHanlder"
								style={{
									position: 'absolute',
									top: '50%',
									left: '90px',
									flex: '1 auto',
									width: ' 97px',
									height: '97px',
									borderRadius: '100%',
									background: ' rgba(255, 255, 255, 0.3)',
									backdropFilter: 'blur(2px)'
								}}
								ref={this.comfortSection2SplitterMoveHanlder}
								onTouchStart={(event) => {
									this.comfortSection2SplitterStart(event);
								}}
								onTouchMove={(event) => {
									this.comfortSection2SplitterMove(event);
								}}
								onTouchEnd={(event) => {
									this.comfortSection2SplitterEnd(event);
								}}
							/>
						</div>

						<div
							id="mask2"
							ref={this.mask2}
							style={{
								flex: '1 1 auto',
								display: 'none',
								background: ' rgba(255, 255, 255, 0.05)',
								backdropFilter: 'blur(80px)',
								minWidth: '10%'
							}}
						/>
					</div>
					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[3].bgColor}
						indexGroup={subMenuList[3].indexGroup}
						noScale="true"
					/>
				</div>
				{/* <div 	className="sectionWrapper" 
				style = {{display:'block'}}
					onTouchStart={(event) => {
						this.comfortSection3Start1(event);
					}}
					onTouchMove={(event) => {
						this.comfortSection3Move1(event);
					}}
					onTouchEnd={(event) => {
						this.comfortSection3End1(event);
					}}></div> */}
				<div
					id="comfortSection3Wrapper"
					ref={this.comfortSection3Wrapper}
					onTouchStart={(event) => {
						this.comfortSection3Start(event);
					}}
					onTouchMove={(event) => {
						this.comfortSection3Move(event);
					}}
					onTouchEnd={(event) => {
						this.comfortSection3End(event);
					}}
					className="sectionWrapper"
					style={{
						background:
							'linear-gradient(175.17deg, rgba(236, 168, 158, 0.16) 12.52%, rgba(27, 22, 82, 0.16) 96.1%)'
					}}
				>
					<img src={comfortBg_4_new} className="imageCover" />
					<div
						id="comfortSection3Title"
						ref={this.comfortSection3Title}
						style={{
							position: 'absolute',
							left: '0px',
							top: '90px',
							width: '768.73px',
							height: '239px'
						}}
					>
						<div
							style={{
								position: 'absolute',
								width: '768.73px',
								height: '239px',
								left: '434px',
								top: '151px'
							}}
						>
							<svg
								width="773"
								height="243"
								viewBox="0 0 773 243"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.2"
									d="M770.726 28.9296V2H2V132.44M770.726 106.352V241H2V210.704"
									stroke="white"
									strokeWidth="4"
								/>
							</svg>
						</div>

						<div
							className="dFordTitle"
							style={{
								position: 'absolute',
								width: '769.81px',
								height: '204px',
								left: ' 414.19px',
								top: '177px'
							}}
						>
							voice-initiated control system
						</div>
					</div>

					<div
						id="comfortSection3Text"
						ref={this.comfortSection3Text}
						style={{
							/* Rectangle 81 */

							position: 'absolute',
							width: '545px',
							height: '288px',
							left: '821px',
							top: '736px',

							background: 'rgba(30, 33, 41, 0.26)',
							backdropFilter: 'blur(48px)'
						}}
					>
						<div
							className="dFordText"
							style={{
								position: 'absolute',
								width: '441px',
								height: '62px',
								left: '100px',
								top: '60px'
							}}
						>
							providing natural and relaxing viewing by conforming to user’s learned behaviors
						</div>
					</div>
					{/* 背景栅格 */}
					<div
						ref={this.comfortSection3BgLine}
						style={{
							position: 'absolute',
							width: '822px',
							height: '892px',
							left: '272px',
							top: '131px',
							zIndex: '9'
						}}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>

					<div
						id="comfortSection3Tab06"
						ref={this.comfortSection3Tab06}
						onTouchEnd={(event) => {
							this.comfortSection3Tab06Click(event);
						}}
						style={{
							position: 'absolute',
							width: '97px',
							height: '97px',
							left: '534px',
							top: '559px',
							zIndex: '10'
						}}
					>
						<div>
							<svg
								width="97"
								height="97"
								viewBox="0 0 97 97"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g filter="url(#filter0_b_2720_1120)">
									<circle cx="48.5" cy="48.5" r="48.5" fill="white" fillOpacity="0.3" />
								</g>
								<circle opacity="0.9" cx="48.5" cy="48.5" r="18.5" fill="white" />
								<defs>
									<filter
										id="filter0_b_2720_1120"
										x="-2"
										y="-2"
										width="101"
										height="101"
										filterUnits="userSpaceOnUse"
										colorInterpolationFilters="sRGB"
									>
										<feFlood floodOpacity="0" result="BackgroundImageFix" />
										<feGaussianBlur in="BackgroundImage" stdDeviation="1" />
										<feComposite
											in2="SourceAlpha"
											operator="in"
											result="effect1_backgroundBlur_2720_1120"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_backgroundBlur_2720_1120"
											result="shape"
										/>
									</filter>
								</defs>
							</svg>
						</div>

						<div
							className="dFordNormalText"
							style={{
								position: 'absolute',
								width: '148px',
								height: '31px',
								left: '509px',
								top: '661px'
							}}
						>
							Click to Explore
						</div>
					</div>
					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[4].bgColor}
						indexGroup={subMenuList[4].indexGroup}
						noScale="true"
					/>
				</div>

				{/* comfort section 4 */}
				<div
					id="comfortSection4Wrapper"
					className="sectionWrapper"
					onTouchStart={(event) => {
						this.comfortSection4Start(event);
					}}
					onTouchMove={(event) => {
						this.comfortSection4Move(event);
					}}
					onTouchEnd={(event) => {
						this.comfortSection4End(event);
					}}
					ref={this.comfortSection4Wrapper}
				>
					{/* 上半部分背景 */}
					<div id="comfortSection4Box07" ref={this.comfortSection4Box07}>
						<div>
							<img src={comfortSection4Bg} />
						</div>

						{/* 上半部分上遮罩 */}
						<div
							style={{
								position: 'absolute',
								left: '0px',
								top: '0px'
							}}
						>
							<svg
								width="1366"
								height="574"
								viewBox="0 0 1366 574"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="-19"
									width="1385"
									height="1024"
									fill="url(#paint0_linear_1205_1254)"
									fillOpacity="0.16"
								/>
								<defs>
									<linearGradient
										id="paint0_linear_1205_1254"
										x1="588.382"
										y1="101.099"
										x2="646.168"
										y2="1025.71"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#ECA89E" />
										<stop offset="1" stopColor="#1B1652" />
									</linearGradient>
								</defs>
							</svg>
						</div>
						{/* 上半部分下遮罩 */}
						<div
							style={{
								position: 'absolute',
								left: '0px',
								top: '130px'
							}}
						>
							<svg
								width="1366"
								height="444"
								viewBox="0 0 1366 444"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="-10"
									width="1396"
									height="447"
									fill="url(#paint0_linear_1205_1252)"
									style={{ mixBlendMode: 'multiply' }}
								/>
								<defs>
									<linearGradient
										id="paint0_linear_1205_1252"
										x1="594"
										y1="255"
										x2="589"
										y2="586"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopOpacity="0" />
										<stop offset="1" stopColor="#423C51" stopOpacity="0.42" />
									</linearGradient>
								</defs>
							</svg>
						</div>
					</div>
					{/* 左下角背景 */}
					<div
						style={{
							position: 'absolute',
							left: '0px',
							bottom: '0px',
							width: '545px',
							height: '450px',
							display: 'block'
						}}
						className="comfortSection4Image1"
						ref={this.comfortSection4Image1}
						id="comfortSection4Image1"
					>
						<img src={comfortSection4Bg2} className="imageCover" />
					</div>

					{/* 左下角背景 */}
					<div
						style={{
							position: 'absolute',
							left: '0px',
							bottom: '0px',
							width: '821px',
							height: '450px',
							display: 'none'
						}}
						ref={this.comfortSection4Image2}
					>
						<img src={comfortSection4Bg3} className="imageCover" />
					</div>
					{/* 左下角背景遮罩*/}
					<div
						style={{
							position: 'absolute',
							width: '545px',
							height: '450px',
							left: '821px',
							top: '574px',
							background: '#6c6b6f',
							display: 'none'
						}}
						className="dFordSubTitle"
						ref={this.comfortSection4Text2}
					>
						<div
							style={{
								position: 'absolute',
								left: '55px',
								top: '80px'
							}}
						>
							Clicking for activating the selected function
						</div>
					</div>

					{/*右下角背景*/}
					<div
						style={{
							position: 'absolute',
							width: '832px',
							height: '450px',
							left: '545px',
							top: '574px',
							background: '#6c6b6f',
							display: 'block'
						}}
						ref={this.comfortSection4Text1}
					>
						{/*右下角文本标题 Voice-initiated control system*/}
						<div
							style={{
								position: 'absolute',
								left: '55px',
								top: '80px'
							}}
							className="dFordSubTitle"
						>
							Voice-initiated control system
						</div>
						{/*右下角文本标题 control principles: */}
						<div
							className="dFordSubTitle"
							style={{
								position: 'absolute',
								left: '55px',
								top: '128px'
							}}
						>
							control principles:
						</div>
						{/*右下角文本内容 */}
						<div
							className="dFordText"
							style={{
								/* Efficient control by enlarging the advantages of voice commands ; No need for precise hand movements to reduce the burden of keeping attention ; Universal interaction among multiple in-car applications */

								position: 'absolute',
								left: '55px',
								top: '215px',
								width: '752px',
								height: '100px'
							}}
						>
							Efficient control by enlarging the advantages of voice commands ; No need for precise hand
							movements to reduce the burden of keeping attention ; Universal interaction among multiple
							in-car applications
						</div>
					</div>

					{/*手型图标 */}
					<div
						id="comfortSectoin4Hand"
						ref={this.comfortSection4Hand}
						style={{
							position: 'absolute',
							width: '184px',
							height: '335px',
							left: '163px',
							top: '667px'
						}}
					>
						<div
							style={{
								position: 'absolute',
								left: '180px',
								top: '60px'
							}}
						>
							<svg
								width="133"
								height="277"
								viewBox="0 0 133 277"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.8"
									fillRule="evenodd"
									clipRule="evenodd"
									d="M33.7786 2.03681C30.2706 4.74562 27.1755 10.7913 26.5784 16.0996C26.3173 18.4238 25.8881 27.2568 25.6249 35.728C24.6725 66.4033 22.9881 85.5 22.9881 87.5C22.4881 88 22.0056 86.7114 19.5158 84.5651C17.5826 82.8996 14.3691 81.2352 12.3732 80.8675C8.72954 80.1968 2.00102 80.5 0.500569 82.5C0 83.5 0.760095 86.0815 2.32585 90.6038C4.77216 97.6679 5.23571 100.797 5.61222 112.79C5.85412 120.47 5.5272 132.32 4.88652 139.123C1.98071 169.961 1.85924 172.303 2.81469 178.917C3.35112 182.63 5.19623 189.157 6.91583 193.422C11.5109 204.823 28.1714 237.015 36.1986 250.004C40.0366 256.215 44.162 263.95 45.3675 267.194C47.3097 272.425 48.0324 273.286 51.7479 274.804C57.6577 277.218 72.3446 277.745 81.3859 275.867C94.6954 273.103 110.72 265.591 118.526 258.458C120.107 257.013 122.519 253.967 123.887 251.689L126.375 247.548L123.7 241.307C120.66 234.216 120.759 232.191 124.739 219.818C126.111 215.555 127.699 208.842 128.269 204.901C130.1 192.229 133.523 143.695 132.917 139.003C132.312 134.309 125.186 114.893 121.394 107.606C118.588 102.212 114.045 99.1197 108.104 98.5593L103.344 98.1101L101.441 92.616C97.6366 81.6267 90.7228 75.6576 83.3687 77.013C80.3495 77.5685 79.9143 77.3359 78.7332 74.5377C78.0166 72.8385 75.1047 69.3963 72.2616 66.8873C67.1605 62.3838 67.0198 62.3312 61.3711 62.834L55.6486 63.3437L54.9857 55.746C54.6203 51.5675 53.8946 44.7955 53.3734 40.6965C52.8511 36.5975 51.9452 28.1292 51.3602 21.8779C50.2246 9.7429 47.9484 2.86654 44.4596 1.03417C41.237 -0.660081 36.7209 -0.235771 33.7786 2.03681ZM43.3341 6.46289C46.67 11.1382 43.5882 15.9167 38.9881 13.5C36.2472 12.0591 35.2614 7.09885 37.4881 5.5C39.9951 3.70042 41.5467 3.9558 43.3341 6.46289ZM35.4881 15.5C37.6287 17.6017 42.4881 19 45.4881 16C45.4881 16 45.4342 15.6762 47.8623 39.7028C48.7186 48.174 50.0779 60.2474 50.8815 66.5325C51.6861 72.8176 52.6274 83.9967 52.9746 91.3749C53.6011 104.709 54.7974 112.242 56.2883 112.242C56.7174 112.242 57.7882 111.684 58.6678 111C60.0048 109.963 60.1253 108.696 59.3986 103.299C58.9208 99.7467 58.1202 90.8035 57.6192 83.4253C56.8257 71.7504 56.9127 69.8495 58.2872 68.7683C62.6191 65.3609 70.4095 69.4868 73.708 76.9335C74.7737 79.3392 75.9508 86.1043 76.6532 93.8591C78.0206 108.963 79.4619 116.223 81.0884 116.202C83.8606 116.166 85.0559 114.442 84.2796 111.603C83.2766 107.934 80.9102 84.1537 81.4527 83.1769C81.6794 82.7675 83.4324 82.4316 85.3484 82.4316C91.6873 82.4316 95.2186 88.2596 101.033 108.315C105.056 122.194 106.283 125.165 108.971 127.553C111.022 129.376 111.076 129.367 111.949 127.048C112.587 125.357 112.323 123.699 111.019 121.198C108.811 116.963 105.402 104.586 106.221 103.781C107.289 102.733 112.068 104.468 114.255 106.698C116.622 109.112 124.538 127.562 126.815 135.974C128.101 140.724 128.037 144.398 126.247 168.766C123.84 201.528 123.068 207.103 119.154 219.984C115.619 231.623 115.481 234.683 118.182 241.66C119.295 244.536 120.206 247.403 120.206 248.032C120.207 248.661 118.06 251.253 115.437 253.793C102.108 266.694 72.8527 275.326 57.4198 270.91C51.9979 269.358 51.843 269.21 49.5566 263.396C48.2743 260.134 45.4565 254.778 43.2946 251.495C34.393 237.972 15.1262 200.633 10.5068 187.952C8.27207 181.818 7.86417 179.038 7.88138 170.065C7.89251 164.224 8.32168 156.536 8.83584 152.984C10.6081 140.734 11.8833 111.933 10.9613 104.967C10.2174 99.3512 10.35 97.6967 11.7345 95.3288C13.105 92.9846 13.195 91.9264 12.2396 89.4391C9.70724 82.8539 17.4662 87.6485 21.0269 94.8687C23.1847 99.2449 23.2191 99.9286 22.4955 124.217C21.8427 146.153 21.536 149.359 19.8973 151.404C18.0958 153.653 18.0967 153.771 19.9095 155.382C21.6736 156.949 21.9196 156.879 24.2738 154.133C27.0136 150.934 27.1695 148.746 28.6714 92.3686C28.9842 80.6181 29.6664 66.0853 30.1866 60.0735C30.7068 54.0616 31.14 42.659 31.1481 34.7343C31.1602 21.868 32.5641 12.873 32.7442 12.873C32.9244 12.873 34.0306 14.0691 35.4881 15.5ZM9 88.5C9.96354 90.7626 9.69325 92.6774 9.09408 93.2656C8.49389 93.8549 7.71355 93.0092 7 91C4.76826 84.7139 6.49904 82.6213 9 88.5Z"
									fill="white"
								/>
							</svg>
						</div>
						{/*圆形图标 */}
						<div
							style={{
								/* Mask Group */

								position: 'absolute',
								width: '180.5px',
								height: '131px',
								left: '130px',
								top: '0px'
							}}
						>
							<svg
								width="181"
								height="131"
								viewBox="0 0 181 131"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<mask
									id="mask0_1290_1166"
									style={{ maskType: 'alpha' }}
									maskUnits="userSpaceOnUse"
									x="0"
									y="0"
									width="181"
									height="131"
								>
									<path
										d="M96.5 63C95.7 61.8 92.8333 60.5 91.5 60C83 60 82 68.5 81 70C80.2 71.2 79 117.833 78 131L0 124V0H180.5L173 122.5L104.5 124C102.667 109.333 97.3 64.2 96.5 63Z"
										fill="#C4C4C4"
									/>
								</mask>
								<g mask="url(#mask0_1290_1166)">
									<circle opacity="0.4" cx="90.5" cy="64.5" r="45" stroke="white" strokeWidth="5" />
									<circle
										opacity="0.5"
										cx="90.5"
										cy="64.5"
										r="20"
										fill="#D8D8D8"
										stroke="#F8F8F8"
										strokeWidth="5"
									/>
								</g>
							</svg>
						</div>
					</div>
					{/* 背景栅格 */}

					<div
						style={{
							position: 'absolute',
							width: '822px',
							height: '892px',
							left: '272px',
							top: '131px',
							zIndex: '9'
						}}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[4].bgColor}
						indexGroup={subMenuList[4].indexGroup}
						noScale="true"
					/>
				</div>

				<div
					id="comfortSection5Wrapper"
					ref={this.comfortSection5Wrapper}
					className="sectionWrapper"
					style={{
						background:
							'linear-gradient(175.17deg, rgba(236, 168, 158, 0.16) 12.52%, rgba(27, 22, 82, 0.16) 96.1%)'
					}}
					onTouchStart={(event) => {
						this.comfortSection5Start(event);
					}}
					onTouchMove={(event) => {
						this.comfortSection5Move(event);
					}}
					onTouchEnd={(event) => {
						this.comfortSection5End(event);
					}}
				>
					<div>
						<img src={comfortSection5BG1} className="imageCover" />
					</div>

					<div
						id="comfortSection5Title"
						ref={this.comfortSection5Title}
						style={{
							width: '709px',
							height: '239px',
							position: 'absolute',
							left: '466px',
							top: '369px'
						}}
					>
						<div
							style={{
								position: 'absolute',
								width: '709px',
								height: '239px'
							}}
						>
							<svg
								width="713"
								height="243"
								viewBox="0 0 713 243"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.2"
									d="M711 28.9296V2H2V132.44M711 106.352V241H2V210.704"
									stroke="white"
									strokeWidth="4"
								/>
							</svg>
						</div>

						<div
							className="dFordTitle"
							style={{
								position: 'absolute',
								width: '655px',
								height: '204px',
								textAlign: 'left',
								left: '30px',
								top: '40px'
							}}
						>
							fLEXIBLE DISPLAY SYSTEM
						</div>
					</div>
					{/* 背景栅格 */}
					<div
						style={{
							position: 'absolute',
							width: '822px',
							height: '892px',
							left: '272px',
							top: '131px',
							zIndex: '9'
						}}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>

					<div
						id="comfortSection5Tab06"
						ref={this.comfortSection3Tab06}
						onTouchEnd={(event) => {
							this.comfortSection5Tab06Click(event);
						}}
						style={{
							position: 'absolute',
							width: '97px',
							height: '97px',
							left: '640px',
							top: '199px',
							zIndex: '10'
						}}
					>
						<div>
							<svg
								width="97"
								height="97"
								viewBox="0 0 97 97"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g filter="url(#filter0_b_2720_1120)">
									<circle cx="48.5" cy="48.5" r="48.5" fill="white" fillOpacity="0.3" />
								</g>
								<circle opacity="0.9" cx="48.5" cy="48.5" r="18.5" fill="white" />
								<defs>
									<filter
										id="filter0_b_2720_1120"
										x="-2"
										y="-2"
										width="101"
										height="101"
										filterUnits="userSpaceOnUse"
										colorInterpolationFilters="sRGB"
									>
										<feFlood floodOpacity="0" result="BackgroundImageFix" />
										<feGaussianBlur in="BackgroundImage" stdDeviation="1" />
										<feComposite
											in2="SourceAlpha"
											operator="in"
											result="effect1_backgroundBlur_2720_1120"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_backgroundBlur_2720_1120"
											result="shape"
										/>
									</filter>
								</defs>
							</svg>
						</div>

						<div
							className="dFordNormalText"
							style={{
								position: 'absolute',
								width: '148px',
								height: '31px',
								left: '-22px',
								top: '120px'
							}}
						>
							Click to Explore
						</div>
					</div>
					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[5].bgColor}
						indexGroup={subMenuList[5].indexGroup}
						noScale="true"
					/>
				</div>

				{/*comfort section 6*/}
				<div
					id="comfortSection6Wrapper"
					ref={this.comfortSection6Wrapper}
					className="sectionWrapper"
					onTouchStart={(event) => {
						this.comfortSection6Start(event);
					}}
					onTouchMove={(event) => {
						this.comfortSection6Move(event);
					}}
					onTouchEnd={(event) => {
						this.comfortSection6End(event);
					}}
				>
					<div
						style={{
							/* Rectangle 139 */

							position: 'absolute',
							width: '100%',
							height: '752px',
							left: '0px',
							top: '0px',
							background:
								'linear-gradient(175.17deg, rgba(236, 168, 158, 0.16) 12.52%, rgba(27, 22, 82, 0.16) 96.1%)'
						}}
					>
						<img
							src={comfortSection6BG}
							className="imageCover"
							style={{ position: 'absolute', left: '0px', top: '0px' }}
						/>
						<div
							style={{
								position: 'absolute',
								width: '100%',
								height: '752px',
								left: '0px',
								top: '0px',

								background: ' linear-gradient(8.2deg, #000000 17.47%, rgba(4, 4, 4, 0) 31.74%)',
								mixBlendMode: 'multiply',
								opacity: '0.34'
							}}
						/>
					</div>

					<div
						id="comfortSection6Title"
						ref={this.comfortSectoin6Title}
						style={{
							/* Replacement for hard screens */

							position: 'absolute',
							width: '616px',
							height: '144px',
							left: '642px',
							top: '525px'
						}}
						className="dFordNormalTitle"
					>
						Replacement for hard screens
					</div>

					<div
						id="comfortSection6Text"
						ref={this.comfortSection6Text}
						style={{
							position: 'absolute',
							width: '100%',
							height: '272px',
							left: '0px',
							top: '752px',

							background: '#5F6871',
							backdropFilter: 'blur(10px)'
						}}
					>
						<div
							style={{
								/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. */

								position: 'absolute',
								width: '627px',
								height: '93px',
								left: '100px',
								top: '65px'
							}}
							className="dFordText"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
							interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.
						</div>
					</div>

					{/* 背景栅格 */}
					<div
						style={{
							position: 'absolute',
							width: '822px',
							height: '892px',
							left: '272px',
							top: '131px',
							zIndex: '9'
						}}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[5].bgColor}
						indexGroup={subMenuList[5].indexGroup}
						noScale="true"
					/>
				</div>

				{/*comfort section 7*/}
				<div
					id="comfortSection7Wrapper"
					ref={this.comfortSection7Wrapper}
					className="sectionWrapper"
					style={{ background: '#5F6871' }}
					onTouchStart={(event) => {
						this.comfortSection7Start(event);
					}}
					onTouchMove={(event) => {
						this.comfortSection7Move(event);
					}}
					onTouchEnd={(event) => {
						this.comfortSection7End(event);
					}}
				>
					{/* 背景图片*/}
					<div
						style={{
							/* 05 1 */

							position: 'absolute',
							left: '-150px',
							top: '0px',
							width: '100%',
							height: '100%'
						}}
						ref={this.comfortSection7BG}
					>
						<img src={comfortSection7BG} style={{ objectFit: 'contain' }} className="imageCover" />
					</div>
					{/* 背景图片全局细节*/}
					<div
						style={{
							position: 'absolute',
							width: '100%',
							left: '-140px',
							top: '0px'
						}}
					>
						<svg
							width="1089"
							height="1024"
							viewBox="0 0 1089 1024"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="1366" height="1024" fill="url(#paint0_linear_1205_1213)" fillOpacity="0.22" />
							<defs>
								<linearGradient
									id="paint0_linear_1205_1213"
									x1="599.049"
									y1="101.099"
									x2="1208.24"
									y2="657.215"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#F2D2C0" />
									<stop offset="1" stopColor="#1B1652" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					{/* 背景图片右侧细节*/}
					<div
						style={{
							position: 'absolute',
							width: '1106px',
							height: '1028px',
							left: '-10px',
							top: '0px'
						}}
					>
						<svg
							width="1089"
							height="1024"
							viewBox="0 0 1089 1024"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="-10"
								width="1106"
								height="1028"
								fill="url(#paint0_linear_703_2083)"
								style={{ mixBlendMode: 'multiply' }}
							/>
							<defs>
								<linearGradient
									id="paint0_linear_703_2083"
									x1="270.5"
									y1="514"
									x2="757.561"
									y2="719.041"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopOpacity="0" />
									<stop offset="1" stopColor="#131528" stopOpacity="0.4" />
								</linearGradient>
							</defs>
						</svg>
					</div>

					{/* 背景栅格 */}
					<div
						style={{
							position: 'absolute',
							width: '832px',
							height: '892px',
							left: '256px',
							top: '145px',
							zIndex: '9'
						}}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
					{/* <div
						ref={this.comfortSection7LeftBg}
						style={{
							background: '#5F6871',
							position: 'absolute',
							top: '0px',
							right: '0px',
							width: '288px',
							height: '100%'
						}}
					/> */}
					{/* 标题 */}
					<div
						className="dFordNormalTitle"
						style={{
							/* rAPID tRACKING Projection */

							position: 'absolute',
							width: '530px',
							height: '144px',
							left: '683px',
							top: '283px',
							textAlign: 'left'
						}}
					>
						rAPID tRACKING Projection
					</div>

					<div
						ref={this.comfortSection7Text}
						style={{
							position: 'absolute',
							width: '832px',
							height: '358px',
							left: '534px',
							top: '666px',
							background: 'rgba(95,104,113,0.6)',
							backdropFilter: 'blur(22px)'
							/* Note: backdrop-filter has minimal browser support */
						}}
					>
						{/* 右下角文本 */}
						<div
							style={{
								position: 'absolute',
								width: '627px',
								height: '93px',
								left: '120px',
								top: '88px',
								zIndex: '9'
							}}
							className="dFordText"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
							interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.
						</div>
					</div>
					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[5].bgColor}
						indexGroup={subMenuList[5].indexGroup}
						noScale="true"
					/>
				</div>

				{/*comfort section8*/}
				<div
					id="comfortSection8Wrapper"
					ref={this.comfortSection8Wrapper}
					className="sectionWrapper"
					style={{ zIndex: '1' }}
					onTouchStart={(event) => {
						this.comfortSection8Start(event);
					}}
					onTouchMove={(event) => {
						this.comfortSection8Move(event);
					}}
					onTouchEnd={(event) => {
						this.comfortSection8End(event);
					}}
				>
					<div id="comfortSection8BgWrapper">
						<div
							style={{
								position: 'absolute',
								width: '100%',
								height: '100%',
								left: '0px',
								top: '0px',
								background:
									'linear-gradient(124.38deg, rgba(242, 210, 192, 0.22) 30.05%, rgba(27, 22, 82, 0.22) 78.59%)'
							}}
						/>
						<div
							style={{
								position: 'absolute',
								width: '100%',
								height: '100%',
								left: '0px',
								top: '0px',
								background:
									'linear-gradient(204.7deg, rgba(0, 0, 0, 0) 57.76%, rgba(19, 21, 40, 0.4) 88.78%)',
								mixBlendMode: 'multiply'
							}}
						/>
						{/* <img
							id="comfortSection8Bg"
							src={comfortSection8Bg}
							className="imageCover"
							style={{ mixBlendMode: 'overlay' }}
							ref={this.comfortSection8Bg}
						/> */}
						<div
							id="comfortSection8BgPart1"
							ref={this.comfortSection8BgPart1}
							style={{
								position: 'absolute',
								width: '100%',
								height: '100%',
								left: '0px',
								top: '0px',
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								mixBlendMode: 'overlay',
								backgroundImage: `url(${comfortSection8Bg})`
							}}
						>
							<div
								id="comfortSection8Video"
								ref={this.comfortSection8Video}
								style={{
									position: 'absolute',
									width: '100%',
									height: '887px',
									left: '0px',
									top: '0px'
								}}
							>
								<CanvasImageSequence
									ref={this.comfortSection8CanvasRef}
									data={this.state.comfortSection8ImageSequence}
									loop={true}
									forward={true}
									fps={1}
									canvasWidth={this.state.canvasWidth}
									canvasHeight={this.state.canvasHeight}
									onChange={() => this.change}
								/>
							</div>
						</div>
						<img
							id="comfortSection8Bg2"
							src={comfortSection8Bg2}
							className="imageCover"
							style={{
								top: '0px',
								height: '574px',
								display: 'none'
							}}
							ref={this.comfortSection8Bg2}
						/>
					</div>

					{/* 背景栅格 */}
					<div
						style={{
							position: 'absolute',
							width: '832px',
							height: '892px',
							left: '256px',
							top: '145px',
							zIndex: '9'
						}}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>

					<div
						className="dFordNormalText"
						style={{
							position: 'absolute',
							width: '151px',
							height: '31px',
							left: '990px',
							padding: '10px',
							borderRadius: '40px',
							textAlign: 'center',
							top: '475px',
							fontSize: '22px',
							color: ' rgb(216, 216, 216)',
							background: '#817066',
							display: 'none'
						}}
						ref={this.comfortSection8ClickMagamizeMockButton}
						onTouchStart={(event) => {
							this.comfortSection8ClickMagamize(event);
						}}
					>
						Mock Button
					</div>
					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[5].bgColor}
						indexGroup={subMenuList[5].indexGroup}
						noScale="true"
					/>
				</div>

				{/*comfort sectoin 9*/}
				<div
					id="comfortSection9Wrapper"
					ref={this.comfortSection9Wrapper}
					className="sectionWrapper"
					onTouchStart={(event) => {
						this.comfortSection9Start(event);
					}}
					onTouchMove={(event) => {
						this.comfortSection9Move(event);
					}}
					onTouchEnd={(event) => {
						this.comfortSection9End(event);
					}}
				>
					<div
						id="comfortSection9Bg1"
						style={{
							position: 'absolute',
							width: '100%',
							height: '752px',
							left: '0px',
							top: '0px',
							display: 'none'
						}}
						ref={this.comfortSection9Bg1}
					>
						<div
							id="comfortSection9Mask1"
							ref={this.comfortSection9Mask1}
							style={{
								position: 'absolute',
								width: '100%',
								height: '100%',
								left: '0px',
								top: '0px',

								background: 'linear-gradient(8.2deg, #000000 17.47%, rgba(4, 4, 4, 0) 31.74%)',
								mixBlendMode: 'multiply',
								opacity: '0.34'
							}}
						/>
						<img src={comfortSection9Bg4} className="imageCover" style={{ mixBlendMode: 'multiply' }} />

						<div
							id="comfortSection9Mask2"
							ref={this.comfortSection9Mask2}
							style={{
								position: 'absolute',
								width: '100%',
								height: '100%',
								left: '0px',
								top: '0px',
								background:
									'linear-gradient(175.17deg, rgba(236, 168, 158, 0.16) 12.52%, rgba(27, 22, 82, 0.16) 96.1%)',
								backdropFilter: 'blur(40px)'
							}}
						/>
					</div>

					<div
						id="comfortSection9LeftBg"
						ref={this.comfortSection9LeftBg}
						style={{
							position: 'absolute',
							width: '545px',
							height: '756px',
							left: '0px',
							top: '268px',
							zIndex: '1',
							display: 'block'
						}}
					>
						<div
							style={{
								position: 'absolute',
								width: '100%',
								height: '752px',
								left: ' -686px',
								top: '272px',
								background:
									' linear-gradient(175.17deg, rgba(236, 168, 158, 0.16) 12.52%, rgba(27, 22, 82, 0.16) 96.1%)'
							}}
						/>
						<div
							style={{
								position: 'absolute',
								width: '100%',
								height: '752px',
								left: '-696px',
								top: '272px',
								background: 'linear-gradient(8.2deg, #000000 17.47%, rgba(4, 4, 4, 0) 31.74%)',
								mixBlendMode: 'multiply',
								opacity: ' 0.34'
							}}
						/>
						<img src={comfortSection9Bg2} className="imageCover" />
					</div>

					<div
						id="comfortSection9BgRight"
						ref={this.comfortSection9BgRight}
						style={{
							position: 'absolute',
							width: '680px',
							height: '752px',
							left: '686px',
							top: '0px',
							display: 'block'
						}}
					>
						<div
							style={{
								position: 'absolute',
								width: '100%',
								height: '752px',
								left: '0px',
								top: '0px',
								background:
									'linear-gradient(175.17deg, rgba(236, 168, 158, 0.16) 12.52%, rgba(27, 22, 82, 0.16) 96.1%)'
							}}
						/>
						<div
							style={{
								position: 'absolute',
								width: '100%',
								height: '752px',
								left: '0px',
								top: '0px',
								background: 'linear-gradient(8.2deg, #000000 17.47%, rgba(4, 4, 4, 0) 31.74%)',
								mixBlendMode: 'multiply',
								opacity: '0.34'
							}}
						/>
						<img src={comfortSection9Bg3} className="imageCover" />
					</div>

					<div
						style={{
							position: 'absolute',
							width: '100%',
							height: '272px',
							left: '0px',
							top: '752px',
							background: '#5F6871',
							backdropFilter: 'blur(10px)'
						}}
					/>

					<div id="comfortSection9Title">
						<div
							className="dFordNormalTitle"
							style={{
								position: 'absolute',
								width: '605px',
								height: '144px',
								left: '608px',
								top: '559px'
							}}
						>
							keep using personal devices
						</div>
					</div>

					<div
						id="comfortSection9Text"
						className="dFordText"
						style={{
							position: 'absolute',
							width: '564px',
							height: '93px',
							left: '686px',
							top: '804px'
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
						interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.
					</div>
					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[5].bgColor}
						indexGroup={subMenuList[5].indexGroup}
						noScale="true"
					/>
				</div>
				{/*comfort sectoin 10*/}
				<div
					id="comfortSection10EndWrapper"
					ref={this.comfortSection10EndWrapper}
					className="sectionWrapper"
					style={{
						// zIndex: '1'
					}}
					onTouchStart={(event) => {
						this.comfortSection10Start(event);
					}}
					onTouchMove={(event) => {
						this.comfortSection10Move(event);
					}}
					onTouchEnd={(event) => {
						this.comfortSection10End(event);
					}}
				>
					<div id="comfortSection9EngBg1">
						<div
							style={{
								position: 'absolute',
								width: '100%',
								height: '100%',
								left: '0px',
								top: '0px',

								background:
									' linear-gradient(175.17deg, rgba(236, 168, 158, 0.16) 12.52%, rgba(27, 22, 82, 0.16) 96.1%)'
							}}
						/>

						<div
							style={{
								position: 'absolute',
								width: '100%',
								height: '100%',
								left: '0px',
								top: '1024px',

								background:
									'linear-gradient(2.19deg, rgba(53, 63, 75, 0.71) 8.23%, rgba(66, 60, 81, 0) 67.07%)',
								mixBlendMode: 'multiply',
								transform: 'matrix(1, 0, 0, -1, 0, 0)'
							}}
						/>
						<div
							style={{
								position: 'absolute',
								width: '100%',
								height: '100%',
								left: '0px',
								top: '0px',
								background:
									' linear-gradient(180deg, rgba(177, 140, 140, 0.2914) 0%, rgba(255, 242, 230, 0.47) 100%)',
								mixBlendMode: 'multiply'
							}}
						/>
						<div
							style={{
								position: 'absolute',
								width: '100%',
								height: '100%',
								left: '-381px',
								top: '0px',
								background:
									'linear-gradient(175.17deg, rgba(236, 168, 158, 0.16) 12.52%, rgba(27, 22, 82, 0.16) 96.1%)'
							}}
						/>
						<div
							style={{
								position: 'absolute',
								width: '100%',
								height: '100%',
								left: '-394.62px',
								top: '0px',
								background: ' linear-gradient(8.2deg, #000000 17.47%, rgba(4, 4, 4, 0) 31.74%)',
								mixBlendMode: 'multiply',
								opacity: '0.34'
							}}
						/>
						<img src={comfortSection9Bg4} className="imageCover" />
					</div>

					<div
						id="comfortSectoin9EndReturnHome"
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							left: '0px',
							top: '0px',
							display: 'none'
						}}
						ref={this.comfortSectoin9EndReturnHome}
					>
						<div
							style={{
								position: 'absolute',
								width: '100%',
								height: '95px',
								left: '0px',
								top: ' 417px'
							}}
						>
							<svg
								width="1370"
								height="98"
								viewBox="0 0 1370 98"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M1369 1L686 96L0.5 1" stroke="#4F4F4F" strokeWidth="2" />
							</svg>
						</div>
						{/* 中部腰线 */}
						<div
							style={{
								position: 'absolute',
								width: '1366px',
								height: '612.5px',
								left: '0px',
								top: '412px'
							}}
						>
							<svg
								width="1366"
								height="612"
								viewBox="0 0 1366 612"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path opacity="0.75" d="M0 0L683 90.5L1366 0V612.5H0V0Z" fill="#1D1B1D" />
							</svg>
						</div>
						{/* 底部中线背景 */}
						<div
							style={{
								position: 'absolute',
								width: '118px',
								height: '0px',
								left: '685px',
								top: '906px'
							}}
						>
							<svg
								width="2"
								height="118"
								viewBox="0 0 2 118"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line x1="1" y1="-4.37114e-08" x2="1.00001" y2="118" stroke="white" strokeWidth="2" />
							</svg>
						</div>
						{/* 底部原型背景 */}
						<div
							style={{
								position: 'absolute',
								width: '139px',
								height: '139px',
								left: '615px',
								top: '835px'
							}}
						>
							<svg
								width="139"
								height="139"
								viewBox="0 0 139 139"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle opacity="0.28" cx="69.5" cy="69.5" r="68.5" stroke="white" strokeWidth="2" />
							</svg>
						</div>
					</div>

					{/* 中部文本 continue to */}
					<div
						id="comfortSectoin9EndReturnHomeTitle"
						ref={this.comfortSectoin9EndReturnHomeTitle}
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							left: '0px',
							top: '0px',
							display: 'none'
						}}
					>
						<div
							style={{
								position: 'absolute',
								width: '429px',
								height: '72px',
								left: '302px',
								top: '641px'
							}}
							className="dFordNormalTitle"
						>
							continue to
						</div>
						{/* 中部文本 Comfort */}
						<div
							style={{
								position: 'absolute',
								width: '309px',
								height: '72px',
								left: '745px',
								top: '641px',
								color: '#AFCDFA'
							}}
							className="dFordNormalTitle"
						>
							Comfort
						</div>
					</div>
					{/* 中部文本 + */}

					<div
						id="comfortSectoin9EndReturnHomeText"
						ref={this.comfortSectoin9EndReturnHomeText}
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							left: '0px',
							top: '0px',
							display: 'none'
						}}
					>
						<div
							style={{
								position: 'absolute',
								width: '43px',
								height: '102px',
								left: '1062px',
								top: '632px',
								color: '#AFCDFA'
							}}
						>
							<svg
								width="39"
								height="40"
								viewBox="0 0 39 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.8"
									d="M38.15 22.548V16.836H22.61V0.0359967H16.394V16.836H0.853969V22.548H16.394V39.936H22.61V22.548H38.15Z"
									fill="#AFCDFA"
								/>
							</svg>
						</div>
						<div
							className="dFordNormalText"
							onTouchStart={(event) => {
								this.onReturnToHome(event, this.comfortSection10EndWrapper, 1);
							}}
							style={{
								/* Return to Home */

								position: 'absolute',
								width: '151px',
								height: '31px',
								right: '20px',
								top: '965px',

								fontSize: '22px',

								color: '#D8D8D8'
							}}
						>
							Return to Home
						</div>
					</div>
				</div>

				<div
					id="leisureSection1Wrapper"
					ref={this.leisureSection1Wrapper}
					onTouchStart={(event) => {
						this.leisureSection1Start(event);
					}}
					onTouchMove={(event) => {
						this.leisureSection1Move(event);
					}}
					onTouchEnd={(event) => {
						this.leisureSection1End(event);
					}}
					className="sectionWrapper"
				>
					{/* 背景图片*/}
					<div
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							top: '0px',
							left: '0px'
						}}
					>
						<CanvasImageSequence
							ref={this.leisureSection1CanvasRef}
							data={this.state.leisureSection1ImageSequence}
							loop={true}
							forward={true}
							autoPlay={false}
							fps={60}
							canvasWidth={this.state.canvasWidth}
							canvasHeight={this.state.canvasHeight}
							onChange={() => this.change}
						/>
					</div>
					{/* 左下角数字*/}
					<div id="leisureHomeContent" ref={this.leisureHomeContent}>
						<div className="homePageIndex">
							<svg
								width="81"
								height="63"
								viewBox="0 0 81 63"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.24"
									d="M22.5165 46.128C19.1952 46.128 16.1872 45.5953 13.4925 44.53C10.7978 43.402 8.51051 41.8353 6.63051 39.83C4.75051 37.8247 3.27785 35.4433 2.21251 32.686C1.20985 29.866 0.708514 26.764 0.708514 23.38C0.708514 20.184 1.24118 17.176 2.30651 14.356C3.43451 11.536 4.96985 9.092 6.91251 7.024C8.85518 4.956 11.1425 3.32667 13.7745 2.136C16.4692 0.882665 19.3832 0.255999 22.5165 0.255999C25.6498 0.255999 28.5325 0.851332 31.1645 2.042C33.8592 3.17 36.1778 4.768 38.1205 6.836C40.0632 8.84133 41.5672 11.254 42.6325 14.074C43.7605 16.894 44.3245 19.996 44.3245 23.38C44.3245 26.576 43.7918 29.5527 42.7265 32.31C41.7238 35.0673 40.2825 37.48 38.4025 39.548C36.5225 41.616 34.2352 43.2453 31.5405 44.436C28.8458 45.564 25.8378 46.128 22.5165 46.128ZM10.0145 23.38C10.0145 26.5133 10.3278 29.2393 10.9545 31.558C11.6438 33.814 12.5525 35.7253 13.6805 37.292C14.8712 38.8587 16.2185 40.018 17.7225 40.77C19.2892 41.522 20.9498 41.898 22.7045 41.898C24.3338 41.898 25.8692 41.522 27.3105 40.77C28.8145 40.018 30.1305 38.89 31.2585 37.386C32.3865 35.882 33.2638 33.9707 33.8905 31.652C34.5798 29.3333 34.9245 26.576 34.9245 23.38C34.9245 20.184 34.5798 17.3953 33.8905 15.014C33.2638 12.6327 32.3865 10.69 31.2585 9.186C30.1305 7.61933 28.8145 6.46 27.3105 5.708C25.8065 4.89333 24.2085 4.486 22.5165 4.486C20.8245 4.486 19.2265 4.862 17.7225 5.614C16.2185 6.366 14.8712 7.52533 13.6805 9.092C12.5525 10.596 11.6438 12.5387 10.9545 14.92C10.3278 17.3013 10.0145 20.1213 10.0145 23.38ZM52.9894 28.268C56.3734 26.576 59.1307 25.1033 61.2614 23.85C63.3921 22.5967 65.0527 21.406 66.2434 20.278C67.4967 19.0873 68.3427 17.928 68.7814 16.8C69.2827 15.6093 69.5334 14.2933 69.5334 12.852C69.5334 10.972 69.0007 9.374 67.9354 8.058C66.9327 6.67933 65.0841 5.99 62.3894 5.99C60.5094 5.99 58.7547 6.366 57.1254 7.118C55.4961 7.80733 53.7101 8.87266 51.7674 10.314C51.6421 10.4393 51.4541 10.596 51.2034 10.784C51.0154 10.9093 50.7961 10.972 50.5454 10.972C49.7307 10.972 49.0414 10.5647 48.4774 9.75C51.4227 6.554 54.2741 4.17266 57.0314 2.606C59.7887 1.03933 62.7967 0.255999 66.0554 0.255999C69.7527 0.255999 72.6981 1.07067 74.8914 2.7C77.0847 4.32933 78.1814 6.836 78.1814 10.22C78.1814 11.8493 77.9307 13.2907 77.4294 14.544C76.9281 15.7973 76.2074 16.9567 75.2674 18.022C74.3274 19.0247 73.2307 19.996 71.9774 20.936C70.7241 21.8133 69.3454 22.722 67.8414 23.662V23.85C71.9774 24.79 75.1107 26.4507 77.2414 28.832C79.3721 31.2133 80.4374 34.0333 80.4374 37.292C80.4374 39.8613 79.7167 42.4307 78.2754 45C76.8967 47.632 74.8287 50.076 72.0714 52.332C69.3141 54.588 65.8987 56.5933 61.8254 58.348C57.8147 60.1027 53.1774 61.4187 47.9134 62.296C47.4121 61.6693 47.1614 61.0427 47.1614 60.416C47.1614 59.852 47.4434 59.476 48.0074 59.288C52.5194 57.784 56.2167 56.2173 59.0994 54.588C61.9821 53.0213 64.2381 51.392 65.8674 49.7C67.5594 48.0707 68.7187 46.3787 69.3454 44.624C69.9721 42.8067 70.2854 40.958 70.2854 39.078C70.2854 36.07 69.4707 33.72 67.8414 32.028C66.2747 30.2733 64.0501 29.396 61.1674 29.396C59.9767 29.396 58.6921 29.5527 57.3134 29.866C55.9347 30.1167 54.4934 30.5867 52.9894 31.276V28.268Z"
									fill="white"
								/>
							</svg>
						</div>
						{/* 标题*/}
						<div
							style={{
								position: 'absolute',
								width: '650px',
								height: '236px',
								left: '393px',
								top: '660px'
							}}
							className="dFordMainTitle"
						>
							Leisure
						</div>
						{/* 向下滚动箭头*/}
						<div
							style={{
								position: 'absolute',
								width: '211px',
								height: '57px',
								left: '572px',
								top: '916px'
							}}
						>
							<svg
								width="211"
								height="59"
								viewBox="0 0 211 59"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.01203 18.24C9.61203 18.24 11.172 16.34 11.172 14.12C11.172 9.14 3.41203 10.68 3.41203 8.2C3.41203 7.2 4.29203 6.54 5.67203 6.54C7.07203 6.54 8.49203 7.02 9.53203 8.06L10.872 6.32C9.63203 5.12 7.95203 4.46 5.87203 4.46C2.95203 4.46 1.01203 6.16 1.01203 8.36C1.01203 13.28 8.79203 11.54 8.79203 14.34C8.79203 15.22 8.03203 16.16 6.11203 16.16C4.25203 16.16 2.81203 15.3 1.89203 14.32L0.592028 16.12C1.77203 17.38 3.55203 18.24 6.01203 18.24ZM19.527 18.24C22.227 18.24 23.867 16.84 24.887 15.24L22.887 14.22C22.247 15.34 20.967 16.16 19.527 16.16C16.887 16.16 14.927 14.14 14.927 11.34C14.927 8.54 16.887 6.52 19.527 6.52C20.967 6.52 22.247 7.36 22.887 8.46L24.887 7.44C23.887 5.84 22.227 4.44 19.527 4.44C15.587 4.44 12.527 7.24 12.527 11.34C12.527 15.44 15.587 18.24 19.527 18.24ZM36.8798 18L33.6198 12.76C35.2198 12.5 36.7798 11.22 36.7798 8.84C36.7798 6.38 35.0598 4.66 32.4198 4.66H26.5598V18H28.8998V13.02H31.2198L34.1798 18H36.8798ZM32.0998 10.96H28.8998V6.72H32.0998C33.4198 6.72 34.3798 7.56 34.3798 8.84C34.3798 10.12 33.4198 10.96 32.0998 10.96ZM45.1384 18.24C49.1384 18.24 51.9584 15.32 51.9584 11.34C51.9584 7.36 49.1384 4.44 45.1384 4.44C41.1384 4.44 38.3184 7.36 38.3184 11.34C38.3184 15.32 41.1384 18.24 45.1384 18.24ZM45.1384 16.16C42.4384 16.16 40.7184 14.08 40.7184 11.34C40.7184 8.58 42.4384 6.52 45.1384 6.52C47.8184 6.52 49.5584 8.58 49.5584 11.34C49.5584 14.08 47.8184 16.16 45.1384 16.16ZM62.2314 18V15.94H56.3514V4.66H54.0114V18H62.2314ZM72.3634 18V15.94H66.4834V4.66H64.1434V18H72.3634ZM84.7322 18V6.72H88.7722V4.66H78.3522V6.72H82.3922V18H84.7322ZM96.2673 18.24C100.267 18.24 103.087 15.32 103.087 11.34C103.087 7.36 100.267 4.44 96.2673 4.44C92.2673 4.44 89.4473 7.36 89.4473 11.34C89.4473 15.32 92.2673 18.24 96.2673 18.24ZM96.2673 16.16C93.5673 16.16 91.8473 14.08 91.8473 11.34C91.8473 8.58 93.5673 6.52 96.2673 6.52C98.9473 6.52 100.687 8.58 100.687 11.34C100.687 14.08 98.9473 16.16 96.2673 16.16ZM115.037 18C119.197 18 122.017 15.26 122.017 11.34C122.017 7.42 119.197 4.66 115.037 4.66H110.077V18H115.037ZM115.037 15.94H112.417V6.72H115.037C118.017 6.72 119.617 8.76 119.617 11.34C119.617 13.86 117.937 15.94 115.037 15.94ZM133.216 18V15.94H126.416V12.24H133.076V10.18H126.416V6.72H133.216V4.66H124.076V18H133.216ZM139.979 18.24C143.579 18.24 145.139 16.34 145.139 14.12C145.139 9.14 137.379 10.68 137.379 8.2C137.379 7.2 138.259 6.54 139.639 6.54C141.039 6.54 142.459 7.02 143.499 8.06L144.839 6.32C143.599 5.12 141.919 4.46 139.839 4.46C136.919 4.46 134.979 6.16 134.979 8.36C134.979 13.28 142.759 11.54 142.759 14.34C142.759 15.22 141.999 16.16 140.079 16.16C138.219 16.16 136.779 15.3 135.859 14.32L134.559 16.12C135.739 17.38 137.519 18.24 139.979 18.24ZM153.494 18.24C156.194 18.24 157.834 16.84 158.854 15.24L156.854 14.22C156.214 15.34 154.934 16.16 153.494 16.16C150.854 16.16 148.894 14.14 148.894 11.34C148.894 8.54 150.854 6.52 153.494 6.52C154.934 6.52 156.214 7.36 156.854 8.46L158.854 7.44C157.854 5.84 156.194 4.44 153.494 4.44C149.554 4.44 146.494 7.24 146.494 11.34C146.494 15.44 149.554 18.24 153.494 18.24ZM166.747 18.24C170.747 18.24 173.567 15.32 173.567 11.34C173.567 7.36 170.747 4.44 166.747 4.44C162.747 4.44 159.927 7.36 159.927 11.34C159.927 15.32 162.747 18.24 166.747 18.24ZM166.747 16.16C164.047 16.16 162.327 14.08 162.327 11.34C162.327 8.58 164.047 6.52 166.747 6.52C169.427 6.52 171.167 8.58 171.167 11.34C171.167 14.08 169.427 16.16 166.747 16.16ZM181.989 18L187.229 4.66H184.569L180.529 15.46L176.489 4.66H173.829L179.069 18H181.989ZM197.626 18V15.94H190.826V12.24H197.486V10.18H190.826V6.72H197.626V4.66H188.486V18H197.626ZM210.149 18L206.889 12.76C208.489 12.5 210.049 11.22 210.049 8.84C210.049 6.38 208.329 4.66 205.689 4.66H199.829V18H202.169V13.02H204.489L207.449 18H210.149ZM205.369 10.96H202.169V6.72H205.369C206.689 6.72 207.649 7.56 207.649 8.84C207.649 10.12 206.689 10.96 205.369 10.96Z"
									fill="#DEDEDE"
								/>
								<path
									d="M98 49L109.275 57L120 49"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						</div>
					</div>

					<div id="leisureSection1Title" ref={this.leisureSection1Title} style={{ display: 'none' }}>
						<div
							className="dFordTitle"
							style={{
								position: 'absolute',
								width: '342px',
								height: '94px',
								left: '894px',
								top: '338px',
								opacity: '0.9'
							}}
						>
							leisure
						</div>
						<div
							style={{
								/* + */

								position: 'absolute',
								width: '45px',
								height: '110px',
								left: '1238px',
								top: '302px',

								opacity: ' 0.8'
							}}
						>
							<svg
								width="41"
								height="44"
								viewBox="0 0 41 44"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.8"
									d="M40.2058 23.56V19.78H22.5658V0.789999H18.5158V19.78H0.785781V23.56H18.5158V43.09H22.5658V23.56H40.2058Z"
									fill="white"
								/>
							</svg>
						</div>

						<div
							style={{
								position: 'absolute',
								width: '820px',
								height: '296px',
								left: '546px',
								top: '731px',
								background: 'rgba(99, 102, 113, 0.38)',
								backdropFilter: 'blur(48px)'
							}}
						>
							<div
								className="dFordText"
								style={{
									position: 'absolute',
									width: '702px',
									height: '211px',
									left: '60px',
									top: '60px'
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum,
								eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin
								dignissim sem velit, eu blandit purus porta non. Fusce tristique, risus eget finibus
								euismod, diam arcu pellentesque lectus, ac consequat nulla purus at tellus. (Topic
								Introduction)
							</div>
						</div>
					</div>

					{/* 背景栅格 */}
					<div
						style={{
							position: 'absolute',
							width: '822px',
							height: '892px',
							left: '272px',
							top: '131px'
						}}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
					{/* leisure section1 点击按钮*/}
					<div
						id="leisureSection1ClickTab"
						ref={this.leisureSection1ClickTab}
						style={{
							position: 'absolute',
							width: '148px',
							height: '133px',
							left: '460px',
							top: '335px',
							display: 'none'
						}}
						onTouchStart={(e) => {
							this.onLeisureSection1ClickTab(e);
						}}
					>
						<svg
							width="148"
							height="133"
							viewBox="0 0 148 133"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g filter="url(#filter0_b_2794_1143)">
								<circle cx="73.5" cy="48.5" r="48.5" fill="white" fillOpacity="0.15" />
							</g>
							<circle opacity="0.9" cx="73.5" cy="48.5" r="18.5" fill="white" />
							<path
								d="M9.14417 124.264C11.7402 124.264 13.5002 123.032 14.7322 121.36L13.1702 120.502C12.3342 121.756 10.8162 122.636 9.14417 122.636C5.93217 122.636 3.49017 120.15 3.49017 116.674C3.49017 113.176 5.93217 110.712 9.14417 110.712C10.8162 110.712 12.3342 111.614 13.1702 112.846L14.7102 111.988C13.5442 110.338 11.7402 109.084 9.14417 109.084C4.92017 109.084 1.59817 112.164 1.59817 116.674C1.59817 121.184 4.92017 124.264 9.14417 124.264ZM18.4234 124V109.326H16.7734V124H18.4234ZM22.3088 111.856C22.9248 111.856 23.4308 111.372 23.4308 110.756C23.4308 110.14 22.9248 109.634 22.3088 109.634C21.7148 109.634 21.2088 110.14 21.2088 110.756C21.2088 111.372 21.7148 111.856 22.3088 111.856ZM23.1448 124V113.374H21.4948V124H23.1448ZM30.9022 124.264C32.8382 124.264 33.9822 123.472 34.7962 122.416L33.6962 121.404C32.9922 122.35 32.0902 122.79 30.9902 122.79C28.7242 122.79 27.3162 121.03 27.3162 118.676C27.3162 116.322 28.7242 114.584 30.9902 114.584C32.0902 114.584 32.9922 115.002 33.6962 115.97L34.7962 114.958C33.9822 113.902 32.8382 113.11 30.9022 113.11C27.7342 113.11 25.6002 115.53 25.6002 118.676C25.6002 121.844 27.7342 124.264 30.9022 124.264ZM46.2388 124L41.5088 118.192L46.2168 113.374H44.1268L38.5388 119.028V109.326H36.8888V124H38.5388V120.964L40.2988 119.226L44.1268 124H46.2388ZM56.1054 124.264C57.0734 124.264 57.6674 123.978 58.0854 123.582L57.6014 122.35C57.3814 122.592 56.9414 122.79 56.4794 122.79C55.7534 122.79 55.4014 122.218 55.4014 121.426V114.826H57.5574V113.374H55.4014V110.47H53.7514V113.374H51.9914V114.826H53.7514V121.778C53.7514 123.362 54.5434 124.264 56.1054 124.264ZM64.3102 124.264C67.5442 124.264 69.5682 121.756 69.5682 118.676C69.5682 115.596 67.5442 113.11 64.3102 113.11C61.0762 113.11 59.0522 115.596 59.0522 118.676C59.0522 121.756 61.0762 124.264 64.3102 124.264ZM64.3102 122.79C62.0442 122.79 60.7682 120.854 60.7682 118.676C60.7682 116.52 62.0442 114.584 64.3102 114.584C66.5762 114.584 67.8302 116.52 67.8302 118.676C67.8302 120.854 66.5762 122.79 64.3102 122.79ZM87.1699 124V122.372H79.3819V117.312H87.0159V115.684H79.3819V110.954H87.1699V109.326H77.5559V124H87.1699ZM98.5953 124L94.5033 118.544L98.3533 113.374H96.4393L93.4913 117.422L90.5433 113.374H88.6293L92.4793 118.544L88.4093 124H90.3013L93.4913 119.644L96.6813 124H98.5953ZM105.511 124.264C108.305 124.264 110.241 122.108 110.241 118.676C110.241 115.222 108.305 113.11 105.511 113.11C104.015 113.11 102.695 113.88 101.925 114.958V113.374H100.275V128.048H101.925V122.394C102.783 123.582 104.059 124.264 105.511 124.264ZM105.093 122.79C103.795 122.79 102.497 121.998 101.925 121.074V116.278C102.497 115.354 103.795 114.584 105.093 114.584C107.227 114.584 108.503 116.322 108.503 118.676C108.503 121.03 107.227 122.79 105.093 122.79ZM114.294 124V109.326H112.644V124H114.294ZM122.008 124.264C125.242 124.264 127.266 121.756 127.266 118.676C127.266 115.596 125.242 113.11 122.008 113.11C118.774 113.11 116.75 115.596 116.75 118.676C116.75 121.756 118.774 124.264 122.008 124.264ZM122.008 122.79C119.742 122.79 118.466 120.854 118.466 118.676C118.466 116.52 119.742 114.584 122.008 114.584C124.274 114.584 125.528 116.52 125.528 118.676C125.528 120.854 124.274 122.79 122.008 122.79ZM131.386 124V116.476C131.87 115.618 133.256 114.782 134.268 114.782C134.532 114.782 134.73 114.804 134.928 114.848V113.154C133.476 113.154 132.244 113.968 131.386 115.09V113.374H129.736V124H131.386ZM141.573 124.264C143.311 124.264 144.741 123.692 145.797 122.636L145.005 121.558C144.169 122.416 142.937 122.9 141.727 122.9C139.439 122.9 138.031 121.228 137.899 119.226H146.501V118.808C146.501 115.618 144.609 113.11 141.397 113.11C138.361 113.11 136.161 115.596 136.161 118.676C136.161 121.998 138.427 124.264 141.573 124.264ZM144.873 118.016H137.899C137.987 116.388 139.109 114.474 141.375 114.474C143.795 114.474 144.851 116.432 144.873 118.016Z"
								fill="white"
							/>
							<defs>
								<filter
									id="filter0_b_2794_1143"
									x="23"
									y="-2"
									width="101"
									height="101"
									filterUnits="userSpaceOnUse"
									colorInterpolationFilters="sRGB"
								>
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feGaussianBlur in="BackgroundImage" stdDeviation="1" />
									<feComposite
										in2="SourceAlpha"
										operator="in"
										result="effect1_backgroundBlur_2794_1143"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_backgroundBlur_2794_1143"
										result="shape"
									/>
								</filter>
							</defs>
						</svg>
					</div>
				</div>
				<div
					id="leisureSection2Wrapper"
					onTouchStart={(event) => {
						this.leisureSection2TouchStart(event);
					}}
					onTouchMove={(event) => {
						this.leisureSection2TouchMove(event);
					}}
					onTouchEnd={(event) => {
						this.leisureSection2TouchEnd(event);
					}}
					className="sectionWrapper"
					style={{
						zIndex: '10',
						backgroundImage: 'linear-gradient(to right, #5B5058 0%, #5B5058 40%, #5C5C6F 40%, #5C5C6F 100%)'
					}}
					ref={this.leisureSection2Wrapper}
				>
					<div
						ref={this.leisureSection2CanvasRefWrapper}
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							top: '0px',
							left: '0px',
							zIndex: '2',
							overflow: 'hidden'
						}}
					>
						<CanvasImageSequence
							ref={this.leisureSection2CanvasRef}
							data={this.state.leisureSection2ImageSequence}
							loop={true}
							autoPlay={false}
							forward={true}
							fps={1}
							canvasWidth={this.state.canvasWidth}
							canvasHeight={this.state.canvasHeight}
							onChange={() => this.change}
						/>
					</div>
					<div
						ref={this.leisureSection2Title}
						id="leisureSection2Title"
						style={{
							/* Group 79 */

							position: 'absolute',
							width: '538px',
							height: '142px',
							left: '92px',
							top: '753px',
							zIndex: '3'
						}}
					>
						<div
							style={{
								position: 'absolute',
								width: '538px',
								height: '142px',
								left: '0px',
								top: '-34px'
							}}
						>
							<svg
								width="542"
								height="146"
								viewBox="0 0 542 146"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.2"
									d="M540 18V2H2V79.5M540 64V144H2V126"
									stroke="white"
									strokeWidth="4"
								/>
							</svg>
						</div>
						<div className="dFordTitle">fRunk bar</div>
					</div>
					{/* 背景栅格 */}
					<div
						style={{
							position: 'absolute',
							width: '822px',
							height: '892px',
							left: '272px',
							top: '131px',
							zIndex: '9'
						}}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
					<div
						id="leisureSection2Box2"
						ref={this.leisureSection2Box2}
						style={{
							position: 'absolute',
							width: '545px',
							height: '100%',
							left: '0px',
							top: '0px',
							background: '#5B5058',
							zIndex: '1',
							display: 'none'
						}}
					/>
					<div
						id="leisureSection2Box3"
						ref={this.leisureSection2Box3}
						style={{
							position: 'absolute',
							width: '1366px',
							height: '100%',
							left: '0px',
							top: '0px',
							background: '#5C5C6F',
							display: 'none'
						}}
					/>
					{/* <div
						id="leisureSection2Bg2"
						ref={this.leisureSection2Bg2}
						style={{
							position: 'absolute',
							width: '1122px',
							height: '841px',
							left: ' -26px',
							top: '0px',
							display: 'none',
							background:
								'linear-gradient(178.54deg, rgba(26, 29, 103, 0.8) 1.31%, rgba(193, 176, 180, 0) 98.83%)',
							opacity: ' 0.69',
							zIndex: '1'
						}}
					>
						<img src={leisureSection2Bg} className="imageCover" />
					</div> */}

					<div
						id="leisureSection2Text2"
						ref={this.leisureSection2Text2}
						style={{
							position: 'absolute',
							width: '544px',
							height: '651px',
							left: '822px',
							top: '375px',
							display: 'none',
							zIndex: '2',
							background: 'rgba(99, 102, 113, 0.38)',
							backdropFilter: ' blur(48px)'
						}}
					>
						<div
							className="dFordNormalTitle"
							style={{
								/* fRunk bar */

								position: 'absolute',
								width: '357px',
								height: '72px',
								left: '60px',
								top: '60px',

								opacity: '0.9'
							}}
						>
							fRunk bar
						</div>

						<div
							style={{
								position: 'absolute',
								width: '357px',
								height: '155px',
								left: '60px',
								top: ' 220px'
							}}
							className="dFordText"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
							interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.
						</div>
					</div>
					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[6].bgColor}
						indexGroup={subMenuList[6].indexGroup}
						noScale="true"
					/>
				</div>

				<div
					id="leisureSection3Wrapper"
					ref={this.leisureSection3Wrapper}
					onTouchStart={(event) => {
						this.leisureSection3TouchStart(event);
					}}
					onTouchMove={(event) => {
						this.leisureSection3TouchMove(event);
					}}
					onTouchEnd={(event) => {
						this.leisureSection3TouchEnd(event);
					}}
					className="sectionWrapper"
					style={{
						background: '#5C5C6F'
					}}
				>
					<div
						id="leisureSection3Text"
						ref={this.leisureSection3Text}
						style={{
							position: 'absolute',
							width: '544px',
							height: '464px',
							left: '822px',
							top: '562px',
							background: 'rgba(113, 112, 129, 0.38)',
							backdropFilter: 'blur(48px)',
							zIndex: '1',
							display: 'none'
						}}
					>
						<div
							className="dFordText"
							style={{
								position: 'absolute',
								width: '440px',
								height: '246px',
								left: '60px',
								top: '160px'
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
							interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.
						</div>
					</div>
					<div
						style={{
							position: 'absolute',
							left: '0px',
							top: '0px',
							width: '100%',
							height: '876px',
							overflow: 'hidden'
						}}
					>
						<div
							ref={this.leisureSection3Bg1}
							style={{
								opacity: 1,
								position: 'absolute',
								left: '0px',
								top: '0px',
								width: '100%',
								height: '100%',
								display: 'none'
							}}
						>
							<img src={leisureSection3Bg1} className="imageCover" />
						</div>
						<div
							ref={this.leisureSection3Bg2}
							style={{
								position: 'absolute',
								left: '0px',
								top: '0px',
								width: '100%',
								height: '100%',
								display: 'none'
							}}
						>
							<img src={leisureSection3Bg2} className="imageCover" />
						</div>
					</div>
					<div
						id="leisureSection3Title"
						ref={this.leisureSection3Title}
						className="dFordNormalTitle"
						style={{
							position: 'absolute',
							width: '540px',
							height: '144px',
							left: '137px',
							top: '807px',
							opacity: '0.9',
							display: 'none',
							zIndex: '2'
						}}
					>
						Entertainment studio
					</div>

					{/* 背景栅格 */}
					<div
						style={{
							position: 'absolute',
							width: '822px',
							height: '892px',
							left: '272px',
							top: '131px',
							zIndex: '9'
						}}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[7].bgColor}
						indexGroup={subMenuList[7].indexGroup}
						noScale="true"
					/>
				</div>

				{/* leisure section4*/}
				<div
					id="leisureSection4Wrapper"
					ref={this.leisureSection4Wrapper}
					onTouchStart={(event) => {
						this.leisureSection4TouchStart(event);
					}}
					onTouchMove={(event) => {
						this.leisureSection4TouchMove(event);
					}}
					onTouchEnd={(event) => {
						this.leisureSection4TouchEnd(event);
					}}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						left: '0px',
						top: '0px',
						display: 'none',
						overflow: 'hidden'
					}}
				>
					<div id="leisureSection4Bg">
						<div
							style={{
								/* Rectangle 112 */

								position: 'absolute',
								width: '1368px',
								height: '369px',
								left: '-2px',
								top: '0px',

								background: 'linear-gradient(180deg, #331C36 -9.89%, rgba(43, 46, 55, 0) 100%)',
								mixBlendMode: 'soft-light'
							}}
						/>
					</div>
					<div
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							left: '0px',
							top: '0px',
							background: 'linear-gradient(180deg, rgba(17, 17, 17, 0.3) 0%, rgba(17, 17, 17, 0) 100%)',
							opacity: '0.66',
							backdropFilter: 'blur(25px)'
						}}
					/>

					<div
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							left: '0px',
							top: '1024px',
							background: ' linear-gradient(207.15deg, #3D2B37 19.73%, rgba(123, 175, 253, 0.31) 73.87%)',
							mixBlendMode: 'multiply',
							transform: 'matrix(1, 0, 0, -1, 0, 0)'
						}}
					/>
					{/*背景图片*/}
					<div className="imageWrapper">
						<img src={leisureSection4Bg3} />
					</div>

					<div
						className="floating-balloon-1 imageWrapper"
						style={{
							background:
								'linear-gradient(180deg, rgba(45, 107, 126, 0.2) 12.3%, rgba(186, 98, 217, 0.154) 88.58%), url(image.png)',
							mixBlendMode: 'unset'
						}}
					>
						<img src={leisureSection4Bg4} />
					</div>
					<div
						className="dFordNormalText floating-balloon-1 "
						style={{
							position: 'absolute',
							width: '177px',
							height: '52px',
							left: '48px',
							top: '436px',
							fontSize: '38px'
						}}
					>
						Yiqian B
					</div>

					<div
						className="dFordNormalText floating-balloon-1 "
						style={{
							position: 'absolute',
							width: '131px',
							height: '48px',
							left: '500px',
							top: '453px',
							fontSize: '38px'
						}}
					>
						Lucy S
					</div>

					{/* <div
						className="dFordNormalText floating-balloon-1 "
						style={{
							position: 'absolute',
							width: '100px',
							height: '39px',
							left: '852px',
							top: '629px',
							fontSize: '38px'
						}}
					>
						Tim Q
					</div> */}

					<div
						className="dFordNormalText floating-balloon-1 "
						style={{
							position: 'absolute',
							width: '131px',
							height: '55px',
							left: '925px',
							top: '422px',
							fontSize: '38px'
						}}
						onTouchStart={(event) => {
							this.leisureSection4Tab(event);
						}}
					>
						Qian Z
					</div>

					<div
						className="dFordNormalText floating-balloon-1 "
						style={{
							position: 'absolute',
							width: '127px',
							height: '33px',
							left: '1155px',
							top: '471px',
							fontSize: '38px'
						}}
					>
						Jane L
					</div>
					{/* 标题*/}
					<div
						style={{
							/* music studio */

							position: 'absolute',
							left: '82px',
							top: '728px',
							width: '528px',
							height: '72px',
							opacity: '0.9'
						}}
						className="dFordNormalTitle"
					>
						Shared Session
					</div>

					{/*文本图标*/}
					<div
						style={{
							/* Line 39 */

							position: 'absolute',
							width: '68px',
							height: '0px',
							left: '82px',
							top: '838px',
							transform: ' rotate(180deg)'
						}}
					>
						<svg width="68" height="8" viewBox="0 0 68 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line x1="68" y1="4" y2="4" stroke="#BCB4E8" strokeWidth="8" />
						</svg>
					</div>

					{/*文本*/}
					<div
						style={{
							/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. */

							position: 'absolute',
							width: '626px',
							height: '93px',
							left: '82px',
							top: '858px'
						}}
						className="dFordNormalText"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
						interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.
					</div>
					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[7].bgColor}
						indexGroup={subMenuList[7].indexGroup}
						noScale="true"
					/>
				</div>

				{/* leisure section5*/}
				<div
					id="leisureSection5Wrapper"
					ref={this.leisureSection5Wrapper}
					onTouchStart={(event) => {
						this.leisureSection5TouchStart(event);
					}}
					onTouchMove={(event) => {
						this.leisureSection5TouchMove(event);
					}}
					onTouchEnd={(event) => {
						this.leisureSection5TouchEnd(event);
					}}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						left: '0px',
						top: '0px',
						display: 'none'
					}}
				>
					<div
						style={{
							/* Rectangle 59 */

							position: 'absolute',
							width: '683px',
							height: '100%',
							left: '683px',
							bottom: '0px',

							background: 'linear-gradient(275.35deg, #1A1B2F 10.8%, rgba(196, 196, 196, 0) 42.29%)',
							mixBlendMode: 'multiply',
							opacity: '0.69',
							transform: 'matrix(1, 0, 0, -1, 0, 0)'
						}}
					/>
					<div
						className="imageWrapper"
						style={{
							background:
								'linear-gradient(180deg, rgba(45, 107, 126, 0.2) 12.3%, rgba(186, 98, 217, 0.154) 88.58%), url(image.png)',
							mixBlendMode: 'unset'
						}}
					>
						<img src={leisureSection5Bg1} />
					</div>

					{/* 标题*/}
					<div
						style={{
							/* music studio */

							position: 'absolute',
							left: '82px',
							top: '728px',
							width: '528px',
							height: '72px',
							opacity: '0.9'
						}}
						className="dFordNormalTitle"
					>
						Shared Session
					</div>

					{/*文本图标*/}
					<div
						style={{
							/* Line 39 */

							position: 'absolute',
							width: '68px',
							height: '0px',
							left: '82px',
							top: '838px',
							transform: ' rotate(180deg)'
						}}
					>
						<svg width="68" height="8" viewBox="0 0 68 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line x1="68" y1="4" y2="4" stroke="#BCB4E8" strokeWidth="8" />
						</svg>
					</div>

					{/*文本*/}
					<div
						style={{
							/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. */

							position: 'absolute',
							width: '626px',
							height: '93px',
							left: '82px',
							top: '858px'
						}}
						className="dFordNormalText"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
						interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.
					</div>
					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[7].bgColor}
						indexGroup={subMenuList[7].indexGroup}
						noScale="true"
					/>
				</div>

				{/* leisure section6*/}
				<div
					id="leisureSection6Wrapper"
					ref={this.leisureSection6Wrapper}
					onTouchStart={(event) => {
						this.leisureSection6TouchStart(event);
					}}
					onTouchMove={(event) => {
						this.leisureSection6TouchMove(event);
					}}
					onTouchEnd={(event) => {
						this.leisureSection6TouchEnd(event);
					}}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						left: '0px',
						top: '0px',
						display: 'none'
					}}
				>
					<div
						style={{
							position: 'absolute',
							width: '499px',
							height: '142px',
							left: '159px',
							top: '203px',
							zIndex: '1'
						}}
					>
						<svg
							width="503"
							height="146"
							viewBox="0 0 503 146"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								opacity="0.9"
								d="M302.358 107.17C314.214 107.17 320.454 99.76 323.652 92.506L322.794 92.038C319.752 98.824 314.136 104.284 304.62 104.284C292.92 104.284 285.9 93.52 285.9 79.402C285.9 61.696 292.452 52.804 302.046 52.804C312.108 52.804 318.114 62.164 320.922 71.212H321.624L321.312 51.946H320.61L317.646 56.158C315.306 53.974 310.626 51.712 303.996 51.712C288.318 51.712 276.54 63.958 276.54 80.026C276.54 96.562 286.992 107.17 302.358 107.17ZM321.199 106H341.089V105.454C338.359 105.298 331.573 104.83 331.573 102.022C331.573 100.93 332.119 99.058 332.665 97.342C333.367 95.002 335.083 89.932 336.565 86.344H355.909L361.447 100.618C361.681 101.242 361.915 102.1 361.759 102.802C361.369 104.674 356.221 105.298 353.491 105.454V106H378.061V105.454C376.579 105.376 374.707 105.142 373.303 104.362C371.431 103.27 370.729 101.788 370.105 100.228C367.219 92.974 358.405 71.992 350.449 51.868H349.045C343.117 66.766 336.097 84.472 330.559 97.888C329.389 100.618 327.985 103.036 326.113 104.128C324.709 104.908 322.681 105.376 321.199 105.454V106ZM336.955 85.252L346.159 61.774L355.441 85.252H336.955ZM376.71 106H398.316V105.454C396.912 105.376 391.608 104.83 390.282 103.738C388.566 102.334 387.63 99.604 387.63 93.676V57.484L404.868 94.3C406.35 97.654 408.066 102.1 409.002 105.142H409.86L430.374 56.626V100.462C430.374 102.256 429.828 103.738 427.878 104.596C426.786 105.064 423.276 105.376 421.872 105.454V106H446.442V105.454C445.038 105.376 441.918 104.986 440.982 104.518C439.188 103.66 438.564 102.178 438.564 100.462V58.108C438.564 56.392 439.032 54.91 440.982 54.286C442.386 53.818 445.038 53.35 446.442 53.272V52.726H429.75C429.672 53.584 429.204 56.47 427.956 59.356L413.526 93.598L394.182 52.726H377.1V53.272C379.206 53.35 382.248 53.74 384.12 55.222C385.68 56.47 386.538 58.654 386.538 61.852V93.676C386.538 99.682 385.836 102.49 383.964 103.816C382.092 105.142 378.036 105.298 376.71 105.454V106Z"
								fill="white"
							/>
							<path
								opacity="0.9"
								d="M74.152 76.032C74.6533 75.7813 75.1547 75.5307 75.656 75.28C76.1573 75.0293 76.7213 74.7787 77.348 74.528C78.0373 74.2773 78.8207 74.0267 79.698 73.776C80.638 73.4627 81.7347 73.1493 82.988 72.836C85.7453 72.084 88.0327 71.144 89.85 70.016C91.6673 68.888 93.0773 67.572 94.08 66.068C95.1453 64.564 95.866 62.9033 96.242 61.086C96.6807 59.2687 96.9 57.2947 96.9 55.164C96.9 53.66 96.7433 52.25 96.43 50.934C96.1167 49.5553 95.584 48.3647 94.832 47.362C94.08 46.2967 93.0773 45.482 91.824 44.918C90.6333 44.2913 89.098 43.978 87.218 43.978C85.15 43.978 83.458 44.26 82.142 44.824C80.826 45.3253 79.792 45.952 79.04 46.704C78.3507 47.3933 77.8807 48.114 77.63 48.866C77.3793 49.5553 77.254 50.1193 77.254 50.558C77.254 52.25 77.5047 53.5347 78.006 54.412C78.57 55.2893 78.852 56.0727 78.852 56.762C78.852 57.89 78.4447 58.6733 77.63 59.112C76.878 59.5507 75.9693 59.77 74.904 59.77C72.1467 59.77 70.768 58.4227 70.768 55.728C70.768 54.9133 71.0187 53.7853 71.52 52.344C72.084 50.84 73.024 49.3673 74.34 47.926C75.656 46.4847 77.4107 45.2627 79.604 44.26C81.86 43.1947 84.6487 42.662 87.97 42.662C90.978 42.662 93.5787 43.132 95.772 44.072C98.028 45.012 99.8767 46.2027 101.318 47.644C102.759 49.0227 103.825 50.558 104.514 52.25C105.203 53.8793 105.548 55.446 105.548 56.95C105.548 59.582 104.765 61.838 103.198 63.718C101.694 65.598 99.908 67.1647 97.84 68.418C95.8347 69.6713 93.798 70.6427 91.73 71.332C89.662 72.0213 88.0953 72.46 87.03 72.648V72.836C89.7247 72.9613 92.3253 73.494 94.832 74.434C97.3387 75.374 99.5633 76.69 101.506 78.382C103.449 80.0113 104.984 81.954 106.112 84.21C107.24 86.466 107.804 89.004 107.804 91.824C107.804 94.3307 107.24 96.806 106.112 99.25C105.047 101.694 103.511 103.887 101.506 105.83C99.5633 107.773 97.182 109.339 94.362 110.53C91.6047 111.721 88.534 112.316 85.15 112.316C82.0167 112.316 79.3533 111.877 77.16 111C74.9667 110.185 73.1493 109.089 71.708 107.71C70.2667 106.269 69.1387 104.702 68.324 103.01C67.5093 101.255 66.9453 99.4693 66.632 97.652L67.948 97.37C68.0733 98.2473 68.3867 99.438 68.888 100.942C69.3893 102.446 70.2353 103.95 71.426 105.454C72.6793 106.958 74.3713 108.274 76.502 109.402C78.6953 110.467 81.5153 111 84.962 111C86.9047 111 88.722 110.718 90.414 110.154C92.106 109.59 93.5473 108.556 94.738 107.052C95.9913 105.548 96.9627 103.511 97.652 100.942C98.3413 98.31 98.686 94.9573 98.686 90.884C98.686 88.816 98.5293 86.7793 98.216 84.774C97.9027 82.706 97.276 80.8887 96.336 79.322C95.396 77.6927 94.1113 76.3767 92.482 75.374C90.8527 74.3713 88.722 73.87 86.09 73.87C83.8967 73.87 81.8913 74.2147 80.074 74.904C78.2567 75.5307 76.5647 76.408 74.998 77.536L74.152 76.032ZM154.008 90.132C154.008 86.184 153.695 82.9567 153.068 80.45C152.504 77.9433 151.815 76.0633 151 74.81C150.185 73.5567 149.057 72.554 147.616 71.802C146.237 70.9873 144.545 70.58 142.54 70.58C139.407 70.58 136.869 71.2693 134.926 72.648C133.046 73.964 131.667 75.4053 130.79 76.972C130.226 78.0373 129.85 79.1967 129.662 80.45C129.474 81.7033 129.38 83.1133 129.38 84.68C129.38 89.5053 129.537 93.5473 129.85 96.806C130.226 100.002 131.041 102.947 132.294 105.642C132.983 107.209 134.08 108.493 135.584 109.496C137.151 110.499 139.375 111 142.258 111C144.702 111 146.676 110.53 148.18 109.59C149.684 108.587 150.843 107.24 151.658 105.548C152.535 103.731 153.131 101.663 153.444 99.344C153.82 96.9627 154.008 93.892 154.008 90.132ZM163.408 90.414C163.408 93.234 162.844 95.96 161.716 98.592C160.588 101.224 159.053 103.574 157.11 105.642C155.23 107.647 153.005 109.277 150.436 110.53C147.867 111.721 145.141 112.316 142.258 112.316C139.438 112.316 136.712 111.783 134.08 110.718C131.511 109.653 129.223 107.961 127.218 105.642C125.213 103.261 123.583 100.19 122.33 96.43C121.139 92.67 120.544 88.0953 120.544 82.706C120.544 77.1287 121.233 71.9273 122.612 67.102C124.053 62.214 126.027 57.9527 128.534 54.318C131.041 50.6833 133.955 47.832 137.276 45.764C140.66 43.696 144.326 42.662 148.274 42.662C150.655 42.662 152.629 43.038 154.196 43.79C155.825 44.4793 157.11 45.388 158.05 46.516C159.053 47.5813 159.742 48.772 160.118 50.088C160.557 51.3413 160.776 52.532 160.776 53.66C160.776 55.0387 160.306 56.198 159.366 57.138C158.489 58.078 157.267 58.548 155.7 58.548C152.817 58.548 151.376 57.4827 151.376 55.352C151.376 54.788 151.47 54.2867 151.658 53.848C151.909 53.4093 152.159 52.9393 152.41 52.438C152.723 51.9367 153.005 51.3727 153.256 50.746C153.507 50.1193 153.632 49.336 153.632 48.396C153.632 46.7667 153.099 45.6387 152.034 45.012C150.969 44.3227 149.527 43.978 147.71 43.978C145.329 43.978 143.229 44.542 141.412 45.67C139.595 46.798 138.028 48.302 136.712 50.182C135.396 51.9993 134.299 54.0987 133.422 56.48C132.545 58.7987 131.824 61.18 131.26 63.624C130.696 66.0053 130.226 68.324 129.85 70.58C129.537 72.836 129.255 74.81 129.004 76.502L129.192 76.69C130.445 74.434 132.263 72.648 134.644 71.332C137.088 69.9533 139.783 69.264 142.728 69.264C146.112 69.264 149.089 69.922 151.658 71.238C154.227 72.4913 156.358 74.152 158.05 76.22C159.805 78.2253 161.121 80.4813 161.998 82.988C162.938 85.4947 163.408 87.97 163.408 90.414ZM182.916 77.442C182.916 83.27 183.073 88.3147 183.386 92.576C183.762 96.7747 184.389 100.253 185.266 103.01C186.206 105.705 187.491 107.71 189.12 109.026C190.749 110.342 192.88 111 195.512 111C198.144 111 200.275 110.342 201.904 109.026C203.533 107.71 204.787 105.705 205.664 103.01C206.604 100.253 207.231 96.7747 207.544 92.576C207.92 88.3147 208.108 83.27 208.108 77.442C208.108 71.614 207.92 66.6007 207.544 62.402C207.231 58.2033 206.604 54.7567 205.664 52.062C204.787 49.3047 203.533 47.268 201.904 45.952C200.275 44.636 198.144 43.978 195.512 43.978C192.88 43.978 190.749 44.636 189.12 45.952C187.491 47.268 186.206 49.3047 185.266 52.062C184.389 54.7567 183.762 58.2033 183.386 62.402C183.073 66.6007 182.916 71.614 182.916 77.442ZM173.516 77.442C173.516 73.682 173.798 69.7653 174.362 65.692C174.989 61.556 176.117 57.796 177.746 54.412C179.375 50.9653 181.6 48.1453 184.42 45.952C187.303 43.7587 191 42.662 195.512 42.662C200.024 42.662 203.69 43.7587 206.51 45.952C209.393 48.1453 211.649 50.9653 213.278 54.412C214.907 57.796 216.004 61.556 216.568 65.692C217.195 69.7653 217.508 73.682 217.508 77.442C217.508 81.2647 217.195 85.244 216.568 89.38C216.004 93.4533 214.907 97.2133 213.278 100.66C211.649 104.044 209.393 106.833 206.51 109.026C203.69 111.219 200.024 112.316 195.512 112.316C191 112.316 187.303 111.219 184.42 109.026C181.6 106.833 179.375 104.044 177.746 100.66C176.117 97.2133 174.989 93.4533 174.362 89.38C173.798 85.244 173.516 81.2647 173.516 77.442Z"
								fill="white"
							/>
							<path opacity="0.2" d="M501 18V2H2V79.5M501 64V144H2V126" stroke="white" strokeWidth="4" />
							<circle cx="234.5" cy="48.5" r="8" stroke="white" strokeWidth="3" />
						</svg>
					</div>

					<div
						className="dFordText"
						style={{
							position: 'absolute',
							width: '530px',
							height: '124px',
							left: '159px',
							top: '820px',
							zIndex: '1'
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
						interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.
					</div>
					<div id="leisureSection6Grally">
						<div className="maxImage">
							<img src={this.state.leisureSetion6GrallyMaxImage} className="imageCover" />
						</div>
						<div
							style={{
								position: 'absolute',
								width: '273px',
								height: '100%',
								right: '0px',
								top: '0px',
								background: 'rgba(45, 42, 64, 0.28)',
								backdropFilter: ' blur(73px)'
							}}
						/>

						<div
							className="smallImges"
							style={{
								position: 'absolute',
								right: '0px',
								width: '341px',
								height: '100%'
							}}
							ref={this.leisureSection6Grally}
						>
							<div
								onClick={(event) => {
									event.stopPropagation();
									event.nativeEvent.stopImmediatePropagation();
									this.leisureSetion6GrallySmallImage(0);
								}}
								className="activeGrally0"
								style={{
									padding: '15px',
									boxSizing: 'border-box',
									width: '300px',
									height: '200px',
									position: 'absolute',
									top: '203px'
								}}
							>
								<img
									src={leisureSection6Bg1}
									className="imageCover"
									style={{ width: '270px', height: '170px' }}
								/>
							</div>
							<div
								onClick={(event) => {
									event.stopPropagation();
									event.nativeEvent.stopImmediatePropagation();
									this.leisureSetion6GrallySmallImage(1);
								}}
								className="normalGrally"
								style={{
									width: '300px',
									height: '200px',
									position: 'absolute',
									top: '433px',
									padding: '15px',
									boxSizing: 'border-box'
								}}
							>
								<img
									src={leisureSection6Bg2}
									className="imageCover"
									style={{ width: '270px', height: '170px' }}
								/>
							</div>
							<div
								onClick={(event) => {
									event.stopPropagation();
									event.nativeEvent.stopImmediatePropagation();
									this.leisureSetion6GrallySmallImage(2);
								}}
								className="normalGrally"
								style={{
									width: '300px',
									height: '200px',
									position: 'absolute',
									top: '663px',
									padding: '15px',
									boxSizing: 'border-box'
								}}
							>
								<img
									src={leisureSection6Bg3}
									className="imageCover"
									style={{ width: '270px', height: '170px' }}
								/>
							</div>
						</div>
					</div>
					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[8].bgColor}
						indexGroup={subMenuList[8].indexGroup}
						noScale="true"
					/>
				</div>

				{/* leisure section7*/}
				<div
					id="leisureSection7Wrapper"
					ref={this.leisureSection7Wrapper}
					onTouchStart={(event) => {
						this.leisureSection7TouchStart(event);
					}}
					onTouchMove={(event) => {
						this.leisureSection7TouchMove(event);
					}}
					onTouchEnd={(event) => {
						this.leisureSection7TouchEnd(event);
					}}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						left: '0px',
						top: '0px',
						display: 'none',
						overflow: 'hidden'
					}}
				>
					<div style={{ position: 'absolute', left: '0px', top: '0px', width: '100%', height: '100%' }}>
						<img
							ref={this.leisureSetion6GrallyMaxImage}
							src={this.state.leisureSetion6GrallyMaxImage}
							className="imageCover"
						/>
					</div>

					<div
						id="leisureSection7ReturnHome"
						ref={this.leisureSection7ReturnHome}
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							left: '0px',
							top: '0px',
							display: 'block'
						}}
					>
						<div style={{ position: 'absolute', width: '100%', height: '95px', left: '0px', top: '417px' }}>
							<svg
								width="1370"
								height="98"
								viewBox="0 0 1370 98"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M1369 1L686 96L0.5 1" stroke="#4F4F4F" strokeWidth="2" />
							</svg>
						</div>
						<div
							style={{
								position: 'absolute',
								width: '1366px',
								height: '612.5px',
								left: '0px',
								top: '412px'
							}}
						>
							<svg
								width="1366"
								height="612"
								viewBox="0 0 1366 612"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path opacity="0.75" d="M0 0L683 90.5L1366 0V612.5H0V0Z" fill="#1D1B1D" />
							</svg>
						</div>
						<div
							style={{ position: 'absolute', width: '118px', height: '0px', left: '685px', top: '906px' }}
						>
							<svg
								width="2"
								height="118"
								viewBox="0 0 2 118"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line x1="1" y1="-4.37114e-08" x2="1.00001" y2="118" stroke="white" strokeWidth="2" />
							</svg>
						</div>
						<div
							style={{
								position: 'absolute',
								width: '139px',
								height: '139px',
								left: '615px',
								top: '835px'
							}}
						>
							<svg
								width="139"
								height="139"
								viewBox="0 0 139 139"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle opacity="0.28" cx="69.5" cy="69.5" r="68.5" stroke="white" strokeWidth="2" />
							</svg>
						</div>
					</div>
					<div
						id="leisureSection7ReturnHomeTitle"
						ref={this.leisureSection7ReturnHomeTitle}
						style={{ position: 'absolute', width: '100%', height: ' 100%', left: '0px', top: ' 0px' }}
					>
						<div
							className="dFordNormalTitle"
							style={{
								position: 'absolute',
								width: '429px',
								height: '72px',
								left: '302px',
								top: '641px'
							}}
						>
							continue to
						</div>
						<div
							className="dFordNormalTitle"
							style={{
								position: 'absolute',
								width: '309px',
								height: '72px',
								left: '745px',
								top: '641px',
								color: ' rgb(175, 205, 250)'
							}}
						>
							Unique
						</div>
						<div
							className="dFordNormalText"
							onTouchStart={(event) => {
								this.onReturnToHome(event, this.leisureSection7Wrapper, 2);
							}}
							style={{
								position: 'absolute',
								width: '151px',
								height: '31px',
								right: '20px',
								top: '965px',
								fontSize: '22px',
								color: '#D8D8D8'
							}}
						>
							Return to Home
						</div>
					</div>
				</div>

				{/* Unique Section1 */}
				<div
					id="uniqueSection1Wrapper"
					className="sectionWrapper"
					onTouchStart={(event) => {
						this.uniqueSection1TouchStart(event);
					}}
					onTouchMove={(event) => {
						this.uniqueSection1TouchMove(event);
					}}
					onTouchEnd={(event) => {
						this.uniqueSection1TouchEnd(event);
					}}
					ref={this.uniqueSection1Wrapper}
				>
					{/* 背景图片 */}
					<div
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							top: '0px',
							left: '0px'
						}}
					>
						<CanvasImageSequence
							ref={this.uniqueSection1CanvasRef}
							data={this.state.uniqueSection1ImageSequence}
							loop={true}
							forward={true}
							autoPlay={false}
							fps={1}
							canvasWidth={this.state.canvasWidth}
							canvasHeight={this.state.canvasHeight}
							onChange={() => this.change}
						/>
					</div>
					{/* unqiue 首页首屏文本 START */}
					<div id="uniqueHomeContent" ref={this.uniqueHomeContent}>
						<div id="uniqueSection1Text" ref={this.uniqueSection1Text} style={{ display: 'block' }}>
							{/* 左下角编号 */}
							<div className="homePageIndex">
								<svg
									width="89"
									height="61"
									viewBox="0 0 89 61"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										opacity="0.24"
										d="M22.3036 46.128C18.9823 46.128 15.9743 45.5953 13.2796 44.53C10.585 43.402 8.29762 41.8353 6.41762 39.83C4.53762 37.8247 3.06496 35.4433 1.99962 32.686C0.996957 29.866 0.495624 26.764 0.495624 23.38C0.495624 20.184 1.02829 17.176 2.09362 14.356C3.22162 11.536 4.75696 9.092 6.69962 7.024C8.64229 4.956 10.9296 3.32667 13.5616 2.136C16.2563 0.882665 19.1703 0.255999 22.3036 0.255999C25.437 0.255999 28.3196 0.851332 30.9516 2.042C33.6463 3.17 35.965 4.768 37.9076 6.836C39.8503 8.84133 41.3543 11.254 42.4196 14.074C43.5476 16.894 44.1116 19.996 44.1116 23.38C44.1116 26.576 43.579 29.5527 42.5136 32.31C41.511 35.0673 40.0696 37.48 38.1896 39.548C36.3096 41.616 34.0223 43.2453 31.3276 44.436C28.633 45.564 25.625 46.128 22.3036 46.128ZM9.80162 23.38C9.80162 26.5133 10.115 29.2393 10.7416 31.558C11.431 33.814 12.3396 35.7253 13.4676 37.292C14.6583 38.8587 16.0056 40.018 17.5096 40.77C19.0763 41.522 20.737 41.898 22.4916 41.898C24.121 41.898 25.6563 41.522 27.0976 40.77C28.6016 40.018 29.9176 38.89 31.0456 37.386C32.1736 35.882 33.051 33.9707 33.6776 31.652C34.367 29.3333 34.7116 26.576 34.7116 23.38C34.7116 20.184 34.367 17.3953 33.6776 15.014C33.051 12.6327 32.1736 10.69 31.0456 9.186C29.9176 7.61933 28.6016 6.46 27.0976 5.708C25.5936 4.89333 23.9956 4.486 22.3036 4.486C20.6116 4.486 19.0136 4.862 17.5096 5.614C16.0056 6.366 14.6583 7.52533 13.4676 9.092C12.3396 10.596 11.431 12.5387 10.7416 14.92C10.115 17.3013 9.80162 20.1213 9.80162 23.38ZM88.4025 38.89V45H80.6005V60.98H72.1405V45H46.1965C46.0712 44.3733 46.0085 43.872 46.0085 43.496C46.0085 43.12 46.2592 42.6187 46.7605 41.992L77.4985 1.384C77.8118 0.945332 78.2505 0.725999 78.8145 0.725999H80.6005V38.89H88.4025ZM72.1405 14.638L53.7165 38.89H72.1405V14.638Z"
										fill="white"
									/>
								</svg>
							</div>
							{/* 标题  Comfort */}
							<div
								style={{
									position: 'absolute',
									width: '659px',
									height: '155px',
									left: '340px',
									top: '741px'
								}}
								className="dFordMainTitle"
							>
								Unique
							</div>
							{/* 标题  + */}
							<div
								style={{
									position: 'absolute',
									width: '72px',
									height: '173px',
									left: '1009px',
									top: '734px'
								}}
							>
								<svg
									width="64"
									height="69"
									viewBox="0 0 64 69"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										opacity="0.8"
										d="M63.5273 38.974V29.318H37.2573V0.917994H26.7493V29.318H0.479328V38.974H26.7493V68.368H37.2573V38.974H63.5273Z"
										fill="white"
									/>
								</svg>
							</div>
							{/* 向下滚动图标*/}
							<div
								style={{
									position: 'absolute',
									width: '22px',
									height: '8px',
									left: '670px',
									top: '965px'
								}}
							>
								<svg
									width="24"
									height="11"
									viewBox="0 0 24 11"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M1 1L12.275 9L23 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
								</svg>
							</div>
							{/* 向下滚动文本 scroll to descover*/}
							<div
								style={{
									position: 'absolute',
									width: '211px',
									height: '24px',
									left: '572px',
									top: '916px'
								}}
							>
								<svg
									width="211"
									height="15"
									viewBox="0 0 211 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6.01203 14.24C9.61203 14.24 11.172 12.34 11.172 10.12C11.172 5.14 3.41203 6.68 3.41203 4.2C3.41203 3.2 4.29203 2.54 5.67203 2.54C7.07203 2.54 8.49203 3.02 9.53203 4.06L10.872 2.32C9.63203 1.12 7.95203 0.459999 5.87203 0.459999C2.95203 0.459999 1.01203 2.16 1.01203 4.36C1.01203 9.28 8.79203 7.54 8.79203 10.34C8.79203 11.22 8.03203 12.16 6.11203 12.16C4.25203 12.16 2.81203 11.3 1.89203 10.32L0.592028 12.12C1.77203 13.38 3.55203 14.24 6.01203 14.24ZM19.527 14.24C22.227 14.24 23.867 12.84 24.887 11.24L22.887 10.22C22.247 11.34 20.967 12.16 19.527 12.16C16.887 12.16 14.927 10.14 14.927 7.34C14.927 4.54 16.887 2.52 19.527 2.52C20.967 2.52 22.247 3.36 22.887 4.46L24.887 3.44C23.887 1.84 22.227 0.439999 19.527 0.439999C15.587 0.439999 12.527 3.24 12.527 7.34C12.527 11.44 15.587 14.24 19.527 14.24ZM36.8798 14L33.6198 8.76C35.2198 8.5 36.7798 7.22 36.7798 4.84C36.7798 2.38 35.0598 0.659999 32.4198 0.659999H26.5598V14H28.8998V9.02H31.2198L34.1798 14H36.8798ZM32.0998 6.96H28.8998V2.72H32.0998C33.4198 2.72 34.3798 3.56 34.3798 4.84C34.3798 6.12 33.4198 6.96 32.0998 6.96ZM45.1384 14.24C49.1384 14.24 51.9584 11.32 51.9584 7.34C51.9584 3.36 49.1384 0.439999 45.1384 0.439999C41.1384 0.439999 38.3184 3.36 38.3184 7.34C38.3184 11.32 41.1384 14.24 45.1384 14.24ZM45.1384 12.16C42.4384 12.16 40.7184 10.08 40.7184 7.34C40.7184 4.58 42.4384 2.52 45.1384 2.52C47.8184 2.52 49.5584 4.58 49.5584 7.34C49.5584 10.08 47.8184 12.16 45.1384 12.16ZM62.2314 14V11.94H56.3514V0.659999H54.0114V14H62.2314ZM72.3634 14V11.94H66.4834V0.659999H64.1434V14H72.3634ZM84.7322 14V2.72H88.7722V0.659999H78.3522V2.72H82.3922V14H84.7322ZM96.2673 14.24C100.267 14.24 103.087 11.32 103.087 7.34C103.087 3.36 100.267 0.439999 96.2673 0.439999C92.2673 0.439999 89.4473 3.36 89.4473 7.34C89.4473 11.32 92.2673 14.24 96.2673 14.24ZM96.2673 12.16C93.5673 12.16 91.8473 10.08 91.8473 7.34C91.8473 4.58 93.5673 2.52 96.2673 2.52C98.9473 2.52 100.687 4.58 100.687 7.34C100.687 10.08 98.9473 12.16 96.2673 12.16ZM115.037 14C119.197 14 122.017 11.26 122.017 7.34C122.017 3.42 119.197 0.659999 115.037 0.659999H110.077V14H115.037ZM115.037 11.94H112.417V2.72H115.037C118.017 2.72 119.617 4.76 119.617 7.34C119.617 9.86 117.937 11.94 115.037 11.94ZM133.216 14V11.94H126.416V8.24H133.076V6.18H126.416V2.72H133.216V0.659999H124.076V14H133.216ZM139.979 14.24C143.579 14.24 145.139 12.34 145.139 10.12C145.139 5.14 137.379 6.68 137.379 4.2C137.379 3.2 138.259 2.54 139.639 2.54C141.039 2.54 142.459 3.02 143.499 4.06L144.839 2.32C143.599 1.12 141.919 0.459999 139.839 0.459999C136.919 0.459999 134.979 2.16 134.979 4.36C134.979 9.28 142.759 7.54 142.759 10.34C142.759 11.22 141.999 12.16 140.079 12.16C138.219 12.16 136.779 11.3 135.859 10.32L134.559 12.12C135.739 13.38 137.519 14.24 139.979 14.24ZM153.494 14.24C156.194 14.24 157.834 12.84 158.854 11.24L156.854 10.22C156.214 11.34 154.934 12.16 153.494 12.16C150.854 12.16 148.894 10.14 148.894 7.34C148.894 4.54 150.854 2.52 153.494 2.52C154.934 2.52 156.214 3.36 156.854 4.46L158.854 3.44C157.854 1.84 156.194 0.439999 153.494 0.439999C149.554 0.439999 146.494 3.24 146.494 7.34C146.494 11.44 149.554 14.24 153.494 14.24ZM166.747 14.24C170.747 14.24 173.567 11.32 173.567 7.34C173.567 3.36 170.747 0.439999 166.747 0.439999C162.747 0.439999 159.927 3.36 159.927 7.34C159.927 11.32 162.747 14.24 166.747 14.24ZM166.747 12.16C164.047 12.16 162.327 10.08 162.327 7.34C162.327 4.58 164.047 2.52 166.747 2.52C169.427 2.52 171.167 4.58 171.167 7.34C171.167 10.08 169.427 12.16 166.747 12.16ZM181.989 14L187.229 0.659999H184.569L180.529 11.46L176.489 0.659999H173.829L179.069 14H181.989ZM197.626 14V11.94H190.826V8.24H197.486V6.18H190.826V2.72H197.626V0.659999H188.486V14H197.626ZM210.149 14L206.889 8.76C208.489 8.5 210.049 7.22 210.049 4.84C210.049 2.38 208.329 0.659999 205.689 0.659999H199.829V14H202.169V9.02H204.489L207.449 14H210.149ZM205.369 6.96H202.169V2.72H205.369C206.689 2.72 207.649 3.56 207.649 4.84C207.649 6.12 206.689 6.96 205.369 6.96Z"
										fill="#DEDEDE"
									/>
								</svg>
							</div>
						</div>
					</div>
					{/* unqiue 首页首屏文本 END */}

					{/* unqiue 首页次屏文本 START */}
					<div
						id="uniqueSection1Text2"
						style={{
							position: 'absolute',
							width: '820px',
							height: '329px',
							left: '546px',
							top: '694px',
							background: ' rgba(39, 42, 51, 0.32)',
							backdropFilter: 'blur(48px)',
							display: 'none'
						}}
						ref={this.uniqueSection1Text2}
					>
						<div
							className="dFordText"
							style={{
								/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim sem velit, eu blandit purus porta non. */

								position: 'absolute',
								width: '631px',
								height: '192px',
								left: '118px',
								top: '64px'
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
							interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim
							sem velit, eu blandit purus porta non.
						</div>
					</div>

					<div
						id="uniqueSection1Title"
						ref={this.uniqueSection1Title}
						style={{
							display: 'none',
							position: 'absolute',
							width: '369px',
							height: '123px',
							left: '233px',
							top: '454px'
						}}
					>
						{/*标题*/}
						<div
							className="dFordTitle"
							style={{
								position: 'absolute',
								width: '369px',
								height: '123px',
								left: '-20px'
							}}
						>
							Unique
						</div>

						<div
							style={{
								position: 'absolute',
								width: '45px',
								height: '97px',
								left: '340px'
							}}
						>
							<svg
								width="41"
								height="44"
								viewBox="0 0 41 44"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.8"
									d="M40.2058 23.56V19.78H22.5658V0.789999H18.5158V19.78H0.785781V23.56H18.5158V43.09H22.5658V23.56H40.2058Z"
									fill="white"
								/>
							</svg>
						</div>
					</div>

					{/* 背景栅格 */}
					<div
						style={{
							position: 'absolute',
							width: '822px',
							height: '892px',
							left: '272px',
							top: '131px',
							zIndex: '9',
							display: 'none'
						}}
						ref={this.bgLine}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
					{/* unqiue 首页次屏文本 END */}
				</div>

				{/* Unique Section2 */}
				<div
					id="uniqueSection2Wrapper"
					className="sectionWrapper"
					onTouchStart={(event) => {
						this.uniqueSection2TouchStart(event);
					}}
					onTouchMove={(event) => {
						this.uniqueSection2TouchMove(event);
					}}
					onTouchEnd={(event) => {
						this.uniqueSection2TouchEnd(event);
					}}
					ref={this.uniqueSection2Wrapper}
				>
					<div
						id="uniqueSection2Title"
						className="dFordNormalTitle"
						style={{
							position: 'absolute',
							width: '534px',
							height: '72px',
							left: '137px',
							top: '670px',
							opacity: '0.9'
						}}
					>
						Generative art
					</div>
					<div id="uniqueSection2MaxImageBg">
						<img src={unqiueSection2Bg1} className="imageCover" ref={this.uniqueSection2MaxImageBg} />
					</div>
					<div
						style={{
							position: 'absolute',
							width: '531px',
							height: '226px',
							left: '147px',
							top: '169px',
							overflow: 'hidden',
							fontSize: '40px'
						}}
					>
						{this.state.uniqueSection2Total}
					</div>
					<div
						id="uniqueSection2DynamicBg"
						style={{
							position: 'absolute',
							width: '531px',
							height: '226px',
							left: '147px',
							top: '169px',
							overflow: 'hidden'
						}}
						ref={this.uniqueSection2DynamicBg}
					>
						<EffectComponent ref={this.effectComponent} />
						{/* <div className="infoItemBg1" style={{ display: 'block' }} />
						<div
							id="effectComponent"
							style={{ position: 'absolute', left: '0px', right: '0px', width: '100%', height: '100%' }}
						>
						
						</div>
						<div className="lines" style={{ display: 'block' }}>
							<div className="line" />
							<div className="line" />
							<div className="line" />
						</div>

						<div style={{ display: 'block' }}>
							<div className="bg" />
							<div className="bg bg2" />
							<div className="bg bg3" />
						</div>

						<div className="lightWrapper" style={{ display: 'block' }}>
							<div className="light x1" />
							<div className="light x2" />
							<div className="light x3" />
							<div className="light x4" />
							<div className="light x5" />
							<div className="light x6" />
							<div className="light x7" />
							<div className="light x8" />
							<div className="light x9" />
						</div> */}
					</div>
					{/* 背景栅格 */}
					<div
						ref={this.uniqueSection2BgLine}
						style={{
							position: 'absolute',
							width: '822px',
							height: '892px',
							left: '272px',
							top: '131px',
							zIndex: '0'
						}}
					>
						<svg
							width="823"
							height="892"
							viewBox="0 0 823 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="273.5" y1="-2.18557e-08" x2="273.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="549.5" y1="-2.18557e-08" x2="549.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="822.5" y1="-2.18557e-08" x2="822.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
					<div
						id="uniqueSection2RightBox"
						style={{
							position: 'absolute',
							top: '0px',
							width: '100%',
							height: '100%'
						}}
						ref={this.uniqueSection2RightBox}
						onClick={(e) => e.nativeEvent.stopPropagation()}
					>
						<Info
							// inAnimate={this.state.infoInAnimate}
							// outAnimate={this.state.infoOutAnimate}
							onInfoItemChange={(data, total) => {
								this.onInfoItemChange(data, total);
							}}
							isInfoExpanded={true}
							// onCloseInfoPanel={() => this.onCloseInfoPanel()}
						/>
					</div>
					<SubMenu
						right="0px"
						bottom="0px"
						bgColor={subMenuList[9].bgColor}
						indexGroup={subMenuList[9].indexGroup}
						noScale="true"
					/>
				</div>

				{/*unquie section3*/}
				<div
					id="uniqueSection3Wrapper"
					className="sectionWrapper"
					onTouchStart={(event) => {
						this.uniqueSection3TouchStart(event);
					}}
					onTouchMove={(event) => {
						this.uniqueSection3TouchMove(event);
					}}
					onTouchEnd={(event) => {
						this.uniqueSection3TouchEnd(event);
					}}
					ref={this.uniqueSection3Wrapper}
				>
					<img src={unqiueSection2Bg1} ref={this.unqiueSection2Bg1} className="imageCover" />
					<div
						id="uniqueSection3ReturnHome"
						ref={this.uniqueSection3ReturnHome}
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							left: '0px',
							top: '0px',
							display: 'none'
						}}
					>
						<div style={{ position: 'absolute', width: '100%', height: '95px', left: '0px', top: '417px' }}>
							<svg
								width="1370"
								height="98"
								viewBox="0 0 1370 98"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M1369 1L686 96L0.5 1" stroke="#4F4F4F" strokeWidth="2" />
							</svg>
						</div>
						<div
							style={{
								position: 'absolute',
								width: '1366px',
								height: '612.5px',
								left: '0px',
								top: '412px'
							}}
						>
							<svg
								width="1366"
								height="612"
								viewBox="0 0 1366 612"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path opacity="0.75" d="M0 0L683 90.5L1366 0V612.5H0V0Z" fill="#1D1B1D" />
							</svg>
						</div>
						<div
							style={{ position: 'absolute', width: '118px', height: '0px', left: '685px', top: '906px' }}
						>
							<svg
								width="2"
								height="118"
								viewBox="0 0 2 118"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line x1="1" y1="-4.37114e-08" x2="1.00001" y2="118" stroke="white" strokeWidth="2" />
							</svg>
						</div>
						<div
							style={{
								position: 'absolute',
								width: '139px',
								height: '139px',
								left: '615px',
								top: '835px'
							}}
						>
							<svg
								width="139"
								height="139"
								viewBox="0 0 139 139"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle opacity="0.28" cx="69.5" cy="69.5" r="68.5" stroke="white" strokeWidth="2" />
							</svg>
						</div>
					</div>
					<div
						id="uniqueSection3ReturnHomeTitle"
						ref={this.uniqueSection3ReturnHomeTitle}
						style={{
							position: 'absolute',
							width: '100%',
							height: ' 100%',
							left: '0px',
							top: ' 0px',
							display: 'none'
						}}
					>
						<div
							className="dFordNormalTitle"
							style={{
								/* Returen to Home */

								position: 'absolute',
								width: '610px',
								height: '72px',
								left: '378px',
								top: '641px',
								opacity: '0.8'
							}}
						>
							Returen to Home
						</div>
					</div>
				</div>
			</div>
		);
	}
}
6;
