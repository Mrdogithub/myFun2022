import React from 'react';
// import homePrivacy_1 from './homePrivacy_1.png';
import homeConfort_2 from './homeConfort_2.png';
import homeLeisure_3 from './homeLeisure_3.png';
import homeUnique_4 from './homeUnique_4.png';

import homePrivacy_1_small from './homePrivacy_1_small.png';
import homeConfort_2_small from './homeConfort_2_small.png';
import homeLeisure_3_small from './homeLeisure_3_small.png';
import homeUnique_4_small from './homeUnique_4_small.png';

import privacySmallTitle from './privacySmallTitle.svg';
import privacySmallIndex from './privacySmallIndex.svg';

import comfortSmallTitle from './comfortSmallTitle.svg';
import comfortSmallIndex from './comfortSmallIndex.svg';

import leisureSmallTitle from './leisureSmallTitle.svg';
import leisureSmallIndex from './leisureSmallIndex.svg';

import uniqueSmallTitle from './uniqueSmallTitle.svg';
import uniqueSmallIndex from './uniqueSmallIndex.svg';
import videoPRemoteVhauffeur from '../../assets/VideoP_RemoteVhauffeur.mp4';
import homePrivacy_1 from '../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy00.jpg';
import section2IndeImage from '../../assets/Video01_AdvancedDimmableWindow/Video01_AdvancedDimmableWindow0.jpg';
import sectoin_4_phoneVideo from '../../assets/VideoP_RemoteVhauffeur/VideoP_RemoteVhauffeur0.jpg';

import section_5_ImageSrc from '../../assets/Video02_DigitalSealInsert/Video02_DigitalSealInsert0.jpg';
import privacy_section_3_bg from './privacy_section_3_bg.png';
import privacy_section_7_bg from './privacy_section_7_bg.png';
import privacy_section_8_bg from './privacy_section_8_bg.png';
import section_6_ImageSrc from '../../assets/Video02b_DigitalSealRotate/Video02b_DigitalSealRotate0.jpg';
import CanvasImageSequence from 'react-canvas-image-sequence';

import Video01_AdvancedDimmableWindow from '../../assets/Video01_AdvancedDimmableWindow.mp4';
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
import 'video-react/dist/video-react.css';
import { ifStatement } from '@babel/types';

const MAX_IMAGES = [
	homePrivacy_1,
	homeConfort_2,
	homeLeisure_3,
	homeUnique_4
];

const maths = {
	fixedView1: '',
	fixedView2: '',
	fixedView3: ''
};

export class HomeComponentIndex3 extends React.Component<any, any> {
	constructor(props: any) {
		super(props);

		this.box = React.createRef();
		this.video = React.createRef();
		this.leftContent = React.createRef();
		this.bgLine = React.createRef();
		this.belowContent = React.createRef();
		this.section_2 = React.createRef();
		this.section_2_colorBg = React.createRef();
		this.section_2_image = React.createRef();
		this.section_2_bgLine = React.createRef();
		this.section_2_leftContent = React.createRef();
		this.section_3_container = React.createRef();
		this.section_3_image = React.createRef();
		this.section_3_leftContent = React.createRef();
		this.section_3_bgline = React.createRef();
		this.section_3_colorBg = React.createRef();

		this.section_4_container = React.createRef();
		this.section_4_image = React.createRef();
		this.section_4_leftContent = React.createRef();
		this.section_4_bgline = React.createRef();
		this.section_4_colorBg = React.createRef();
		this.sectoin_4_phoneVideo = React.createRef();

		this.section_5_container = React.createRef();
		this.section_5_title = React.createRef();
		this.section_5_titleBg = React.createRef();
		this.section_5_bgline = React.createRef();

		this.section_6_container = React.createRef();
		this.section_6_bgline = React.createRef();
		this.section_6_canvasRef = React.createRef();

		this.section_7_container = React.createRef();
		this.section_8_container = React.createRef();

		this.state = {
			x: 0,
			y: 0,
			firstX: 0,
			firstY: 0,
			completedLoadImage: false,
			seconds: 0,
			imgSrc: `/static/media/Video00_TransitionPrivacy000.png`,
			section_2_ImageSrc: section2IndeImage,
			sectoin_4_phoneVideo: sectoin_4_phoneVideo,
			section_5_ImageSrc: section_5_ImageSrc,
			canvasWidth:0,
			canvasHeight:0,
			section_6_ImageSrc: [
				section_6_ImageSrc
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
	startX: any = '0';
	endX: any = '0';
	box: any;
	player: any;
	video: any;
	leftContent: any;
	bgLine: any;
	section_2: any;
	belowContent: any;
	section_2_colorBg: any;
	section_2_image: any;
	section_2_bgLine: any;
	section_2_leftContent: any;
	section_3_container: any;
	section_3_image: any;
	section_3_leftContent: any;
	section_3_bgline: any;
	section_3_colorBg: any;
	section_4_container: any;
	section_4_image: any;
	section_4_leftContent: any;
	section_4_bgline: any;
	section_4_colorBg: any;
	sectoin_4_phoneVideo: any;

	section_5_container: any;
	section_5_leftContent: any;
	section_5_bgline: any;
	section_5_title: any;
	section_5_titleBg: any;

	section_6_container: any;
	section_6_bgline: any;
	section_6_canvasRef: any;

	section_7_container: any;
	section_8_container: any;
	componentDidMount() {
		const imges: any[] = [];
		for (let i = 0; i <= 100; i++) {
			imges.push(require(`../../assets/Video02b_DigitalSealRotate/Video02b_DigitalSealRotate${i}.jpg`));
			this.setState({ section_6_ImageSrc: imges });
		}

		this.setState({canvasWidth:screen.availWidth})
		this.setState({canvasHeight:screen.availHeight})
	}
	onChange(currentSlide: any, index: any) {
		this.state.slides.map((item: any) => {
			if (item.index === currentSlide.index) {
				currentSlide.defaultImage = MAX_IMAGES[index];
				currentSlide.isActive = true;
				currentSlide.isFilter = false;
				this.setState({ item: currentSlide });
				this.box.current.childNodes[item.index].style.flex = '1 1 80%';
				return;
			} else {
				item.isActive = false;
				item.isFilter = true;
				this.setState({ item: item });
				this.box.current.childNodes.forEach((node, index) => {
					if (index !== currentSlide.index) {
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

	section2TouchStart(event) {
		this.updateStartMosePosition(event);
	}

	section2TouchMove(event) {
		this.setState({
			firstX: event.targetTouches[0].clientX,
			firstY: event.targetTouches[0].clientY
		});

		const move = this.state.endY - this.state.firstY;
		const seconds = Number(Math.abs(move / 100).toFixed(2).split('.')[1]);
		const direction = this.letMeKonwDirection();
		console.log(direction);
		this.section_2.current.style.display = 'none';
		setTimeout(() => {
			this.section_2_leftContent.current.className = 'animate__animated animate__slideOutLeft';
			this.section_2_colorBg.current.className = 'animate__animated animate__slideOutLeft';
			this.section_2.current.style.zIndex = '-1';
		}, 1000);
		this.section_3_container.current.style.display = 'block';
		if (direction === 'toTop' || direction === 'toLeft') {
			setTimeout(() => {
				this.section_3_container.current.style.zIndex = '1';
				this.section_3_leftContent.current.style.zIndex = '1';
				this.section_3_bgline.current.style.zIndex = '1';
				this.section_3_colorBg.current.style.zIndex = '1';
				this.section_3_image.current.style.zIndex = '1';
				this.section_3_image.current.style.width = '80%';
				this.section_3_image.current.style.transform = 'scale(2.5)';
				this.section_3_image.current.style.left = '-300px';
				this.section_3_colorBg.current.className = 'animate__animated animate__slideInLeft';
			}, 1500);
		}
	}

	section3TouchStart(event) {
		this.updateStartMosePosition(event);
	}

	section3TouchMove(event) {
		this.setState({
			firstX: event.targetTouches[0].clientX,
			firstY: event.targetTouches[0].clientY
		});

		const move = this.state.endY - this.state.firstY;
		const direction = this.letMeKonwDirection();

		if (direction === 'toTop' || direction === 'toLeft') {
			setTimeout(() => {
				this.section_4_container.current.style.zIndex = '1';
				this.section_4_container.current.style.display = 'block';
				this.section_4_leftContent.current.style.zIndex = '1';
				this.section_4_bgline.current.style.zIndex = '1';
				this.section_4_colorBg.current.style.zIndex = '1';
				this.section_4_image.current.style.zIndex = '1';
				this.section_4_leftContent.current.style.width = '100%';
				this.section_4_colorBg.current.style.backgroundColor = '#2B393A';
				// this.section_4_colorBg.current.className = 'animate__animated animate__slideInLeft';
			}, 1500);
			setTimeout(() => {
				this.sectoin_4_phoneVideo.current.style.zIndex = '1';
				this.sectoin_4_phoneVideo.current.className = 'animate__animated animate__slideInUp';
			}, 2000);
		}
	}
	updateStartMosePosition(event) {
		this.setState({
			firstX: event.targetTouches[0].clientX,
			firstY: event.targetTouches[0].clientY
		});
	}

	updateMoveMousePositon(event) {
		this.setState({
			endX: event.targetTouches[0].clientX,
			endY: event.targetTouches[0].clientY
		});
	}
	section6TouchStart(event) {
		this.updateStartMosePosition(event);
		this.setState({ seconds: 0 });
	}

	section6TouchMove(event) {
		this.updateMoveMousePositon(event);
		const direction = this.letMeKonwDirection();
		console.log(direction);
		const move = this.state.endY - this.state.firstY;

		const seconds = Number(Math.abs(move / 100).toFixed(2).split('.')[1]);
		// console.log('section6TouchMove:'+seconds)

		// this.setState({seconds:this.state.seconds + 1})

		if (direction === 'toTop') {
			if (this.state.seconds > 100) {
				this.setState({ seconds: 100 });
				return;
			}
			setTimeout(() => {
				this.setState({ seconds: this.state.seconds + 1 });
			}, 500);
			setTimeout(() => {
				console.log(this.state.seconds);
				this.section_6_canvasRef.current.setCurrent(this.state.seconds);
			}, 600);
		}
		console.log(seconds);
		if (direction === 'toBottom') {
			// this.setState({seconds:this.state.seconds + 1})
			if (this.state.seconds < 0) {
				this.setState({ seconds: 100 });
			}
			setTimeout(() => {
				this.setState({ seconds: this.state.seconds - 1 });
			}, 500);
			setTimeout(() => {
				console.log(this.state.seconds);
				this.section_6_canvasRef.current.setCurrent(this.state.seconds);
			}, 600);
		}
	}
	change(index, paused?) {
		if (this.section_6_canvasRef) {
			this.section_6_canvasRef.current.setCurrent(index);
			console.log('onChange index:', index, 'paused: ', paused);
		}
	}
	section7TouchStart(event) {
		this.updateStartMosePosition(event);
	}

	section7TouchMove(event) {
		this.setState({
			endX: event.targetTouches[0].clientX,
			endY: event.targetTouches[0].clientY
		});

		const direction = this.letMeKonwDirection();
		if (direction === 'toTop' || direction === 'toLeft' || direction === 'toRight') {
			this.section_7_container.current.style.zIndex = '-6';
			this.section_7_container.current.style.display = 'none';

			setTimeout(() => {
				this.section_8_container.current.style.display = 'block';
			});
		}
	}
	section8TouchStart(event) {
		this.updateStartMosePosition(event);
	}

	section8TouchMove(event) {
		this.updateMoveMousePositon(event);
	}
	section5TouchStart(event) {
		this.updateStartMosePosition(event);
	}

	section5TouchMove(event) {
		this.updateMoveMousePositon(event);

		this.section_5_container.current.style.zIndex = '-5';
		this.section_5_container.current.style.display = 'none';
		this.section_5_bgline.current.style.zIndex = '-5';
		const direction = this.letMeKonwDirection();
		if (direction === 'toTop' || direction === 'toLeft' || direction === 'toRight') {
			this.section_6_container.current.style.display = 'block';
			this.section_6_container.current.style.zIndex = '6';
		}
	}
	section4TouchStart(event) {
		this.updateStartMosePosition(event);
	}

	section4TouchMove(event) {
		this.updateMoveMousePositon(event);

		const move = this.state.endY - this.state.firstY;
		const seconds = Number(Math.abs(move / 100).toFixed(2).split('.')[1]);
		const direction = this.letMeKonwDirection();
		this.section_4_container.current.style.zIndex = '-5';
		this.section_4_container.current.style.display = 'none';
		this.section_4_leftContent.current.style.zIndex = '-5';
		this.section_4_bgline.current.style.zIndex = '-5';
		this.section_4_colorBg.current.style.zIndex = '-5';
		this.section_4_image.current.style.zIndex = '-5';

		this.section_3_container.current.style.zIndex = '-5';
		this.section_3_container.current.style.display = 'none';
		this.section_3_leftContent.current.style.zIndex = '-5';
		this.section_3_bgline.current.style.zIndex = '-5';
		this.section_3_colorBg.current.style.zIndex = '-5';
		this.section_3_image.current.style.zIndex = '-5';
		this.section_4_leftContent.current.style.width = '100%';
		this.section_4_colorBg.current.style.backgroundColor = '#2B393A';

		if (direction === 'toTop' || direction === 'toLeft' || direction === 'toRight') {
			let count = 0;
			setTimeout(() => {
				this.section_5_container.current.style.zIndex = '5';
				this.section_5_container.current.style.display = 'block';
				this.section_5_bgline.current.style.zIndex = '5';
				const renderImage = setInterval(() => {
					if (count > 40) {
						clearInterval(renderImage);

						setTimeout(() => {
							this.section_5_title.current.style.zIndex = '5';
							this.section_5_titleBg.current.style.zIndex = '5';
						}, 1100);
						setTimeout(() => {
							this.section_5_title.current.className =
								'dFordTitle animate__animated animate__slideInDown';
							this.section_5_titleBg.current.className = 'animate__animated animate__slideInDown';
						}, 1000);
						return;
					}
					const image = require(`../../assets/Video02_DigitalSealInsert/Video02_DigitalSealInsert${count}.jpg`);

					this.setState({ section_5_ImageSrc: image });

					count++;
				}, 100);
			}, 1500);
		}
	}
	section1TouchStart(event) {
		this.updateStartMosePosition(event);
	}
	section1TouchMove(event) {
		this.updateMoveMousePositon(event);
		const move = this.state.endY - this.state.firstY;
		const seconds = Number(Math.abs(move / 100).toFixed(2).split('.')[1]);
		const direction = this.letMeKonwDirection();

		setTimeout(() => {
			this.leftContent.current.className = 'animate__animated animate__slideOutLeft';
		}, 1000);

		if (direction === 'toTop' || direction === 'toLeft') {
			setTimeout(() => {
				this.box.current.style.display = 'none';
				this.belowContent.current.style.zIndex = '-1';
				this.belowContent.current.style.display = 'none';
			}, 1500);
			setTimeout(() => {
				this.section_2.current.style.zIndex = '1';
				this.section_2.current.style.display = 'block';
				this.section_2.current.className = 'animate__animated animate__fadeIn';
				let count = 0;

				setTimeout(() => {
					setTimeout(() => {
						this.section_2_colorBg.current.style.zIndex = '1';
						this.section_2_image.current.style.zIndex = '1';
					}, 100);

					setTimeout(() => {
						this.section_2_colorBg.current.className = 'animate__animated animate__slideInLeft';
						this.section_2_image.current.style.width = '81%';
						this.moveAnimate(this.section_2_image.current, 257);
					}, 500);

					setTimeout(() => {
						this.section_2_leftContent.current.style.zIndex = '1';

						this.section_2_bgLine.current.style.zIndex = '1';
					}, 550);
					setTimeout(() => {
						this.section_2_leftContent.current.className = 'animate__animated animate__slideInLeft';

						this.section_2_bgLine.current.className = 'animate__animated animate__fadeIn';
					}, 20);
				}, 1500);

				const renderImage = setInterval(() => {
					if (count > 269) {
						count = 0;
					}

					// console.log('section1TouchMove:' + count);
					const image = require(`../../assets/Video01_AdvancedDimmableWindow/Video01_AdvancedDimmableWindow${count}.jpg`);
					this.setState({ section_2_ImageSrc: image });
					count++;
				}, 150);
			}, 1500);
		}

		if (direction === 'toTop' || direction === 'toLeft') {
			// 显示下一个slide
		}
	}

	handleTouchStart(event, item, index) {
		this.onChange(item, index);
		this.updateStartMosePosition(event);
	}
	handleTouchMove(event, item, index) {
		this.endX = event.touches[0].clientX;

		this.updateMoveMousePositon(event);
		const direction = this.letMeKonwDirection();

		if (direction === 'toLeft') {
			this.box.current.childNodes[item.index].style.flex = `1 1 80%`;
		}

		if (direction === 'toTop' || direction === 'toLeft') {
			this.box.current.childNodes[item.index].style.flex = `1 1 100%`;
			const move = this.state.endY - this.state.firstY;
			const seconds = Math.abs(move / 100).toFixed(2).split('.')[1];

			let image = '';
			this.leftContent.current.className = 'animate__animated animate__slideInLeft';
			this.bgLine.current.className = 'animate__animated animate__fadeIn';
			this.bgLine.current.style.zIndex = '1';
			this.leftContent.current.style.zIndex = '1';

			this.belowContent.current.style.zIndex = '1';
			this.belowContent.current.style.display = 'block';
			this.video.current.style.zIndex = '1';
			image = require(`../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy${seconds}.jpg`);
			this.setState({ imgSrc: image });
		}
	}

	letMeKonwDirection() {
		const moveX = this.state.endX - this.state.firstX;
		const moveY = this.state.endY - this.state.firstY;
		if (Math.abs(moveX) > 150 || Math.abs(moveY) > 150) {
			if (Math.abs(moveX) > Math.abs(moveY)) {
				return moveX > 0 ? 'toRight' : 'toLeft';
			} else {
				return moveY > 0 ? 'toBottom' : 'toTop';
			}
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
				{/* section 1  start*/}
				<div className="container" ref={this.box}>
					{this.state.slides.map((item: any, index: any) => {
						return (
							<div
								className="box"
								key={index}
								style={{ position: 'relative' }}
								onTouchStart={(event) => this.handleTouchStart(event, item, index)}
								onTouchMove={(event) => this.handleTouchMove(event, item, index)}
							>
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
								<img src={this.state.slides[index].defaultImage} />

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
				<div
					ref={this.belowContent}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						top: '0px',
						left: '0px',
						zIndex: '-1',
						display: 'none'
					}}
					onTouchStart={(e) => {
						this.section1TouchStart(e);
					}}
					onTouchMove={(e) => {
						this.section1TouchMove(e);
					}}
				>
					<div
						ref={this.video}
						style={{
							position: 'absolute',
							left: '0px',
							right: '0px',
							top: '0px',
							width: '100%',
							height: '100%'
						}}
					>
						<img
							src={this.state.imgSrc}
							style={{
								position: 'absolute',
								width: '100%',
								height: ' 100%',
								objectFit: 'cover'
							}}
						/>
					</div>

					{/* 视屏播放2.5s 后，需要显示的内容*/}

					{/* 侧边栏背景 */}
					<div
						ref={this.leftContent}
						style={{
							position: 'absolute',
							width: '533px',
							height: '100%',
							left: '1px',
							top: '0px',
							background: 'rgba(26, 32, 50, 0.16)',
							backdropFilter: 'blur(15px)',
							zIndex: '-1'
						}}
					>
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
							width: '832px',
							height: '892px',
							left: '257px',
							top: '132px',
							pointerEvents: 'none'
						}}
					>
						<svg
							width="833"
							height="892"
							viewBox="0 0 833 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="277.5" y1="-2.18557e-08" x2="277.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="555.5" y1="-2.18557e-08" x2="555.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="832.5" y1="-2.18557e-08" x2="832.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
				</div>
				{/* section 1  end*/}
				{/*secion 2*/}
				<div
					id="section_2"
					ref={this.section_2}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						top: '0px',
						left: '0px',
						zIndex: '-1',
						display: 'none'
					}}
					onTouchStart={(e) => {
						this.section2TouchStart(e);
					}}
					onTouchMove={(e) => {
						this.section2TouchMove(e);
					}}
				>
					<div
						ref={this.section_2_colorBg}
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							top: '0px',
							left: '0px',
							zIndex: '-1',
							background: '#3F3E44'
						}}
					/>
					<img
						src={this.state.section_2_ImageSrc}
						ref={this.section_2_image}
						style={{
							position: 'absolute',
							width: '100%',
							height: ' 100%',
							objectFit: 'cover'
						}}
					/>
					{/* <div ref={this.section_2_image}>
						<Player src={Video01_AdvancedDimmableWindow} />
					</div> */}
					{/* 左下角背景 */}
					<div
						ref={this.section_2_leftContent}
						style={{
							position: 'absolute',
							width: '537px',
							height: '430px',
							left: '0px',
							top: '594px',
							background: 'rgba(139, 146, 156, 0.2)',
							backdropFilter: ' blur(46px)',
							zIndex: '-1'
						}}
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
							width: '832px',
							height: '892px',
							left: '257px',
							top: '132px',
							pointerEvents: 'none',
							zIndex: '-1'
						}}
					>
						<svg
							width="833"
							height="892"
							viewBox="0 0 833 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="277.5" y1="-2.18557e-08" x2="277.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="555.5" y1="-2.18557e-08" x2="555.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="832.5" y1="-2.18557e-08" x2="832.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
				</div>
				{/*secion 3*/}
				<div
					id="section_3_container"
					ref={this.section_3_container}
					onTouchStart={(e) => {
						this.section3TouchStart(e);
					}}
					onTouchMove={(e) => {
						this.section3TouchMove(e);
					}}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						top: '0px',
						left: '0px',
						zIndex: '-3',
						overflow: 'hidden',
						display: 'none'
					}}
				>
					<img
						src={privacy_section_3_bg}
						ref={this.section_3_image}
						style={{
							position: 'absolute',
							width: '100%',
							height: ' 100%',
							objectFit: 'cover',
							zIndex: '-3'
						}}
					/>

					{/* 背景栅格 */}
					<div
						ref={this.section_3_bgline}
						style={{
							position: 'absolute',
							width: '832px',
							height: '892px',
							left: '257px',
							top: '145px',
							zIndex: '-3'
						}}
					>
						<svg
							width="833"
							height="892"
							viewBox="0 0 833 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="277.5" y1="-2.18557e-08" x2="277.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="555.5" y1="-2.18557e-08" x2="555.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="832.5" y1="-2.18557e-08" x2="832.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
					<div
						ref={this.section_3_colorBg}
						style={{
							position: 'absolute',
							width: '257px',
							height: '100%',
							top: '0px',
							left: '0px',
							zIndex: '-3',
							background: '#48423D'
						}}
					/>
					{/* 左侧模糊背景 */}
					<div
						ref={this.section_3_leftContent}
						style={{
							position: 'absolute',
							width: '536px',
							height: '100%',
							left: '0px',
							top: '0px',
							background: 'rgba(13, 19, 20, 0.38)',
							backdropFilter: ' blur(5px)',
							zIndex: '-3'
						}}
						className={'dFordText '}
					>
						{/* 文本 */}
						<div
							style={{
								/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim sem velit, eu blandit purus porta non. */

								position: 'absolute',
								width: '370px',
								height: '248px',
								left: '113px',
								top: '322px'
							}}
							className={'dFordText '}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
							interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim
							sem velit, eu blandit purus porta non.
						</div>
						{/* 标题 背景*/}
						<div
							style={{
								position: 'absolute',
								width: '913px',
								height: '142px',
								left: '113px',
								top: '731px'
							}}
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
						</div>
						{/* 标题 */}
						<div
							className="dFordTitle"
							style={{
								/* remote chauffeur */

								position: 'absolute',
								width: '851px',
								height: '102px',
								left: '136px',
								top: '760px'
							}}
						>
							remote chauffeur
						</div>
					</div>
				</div>
				<div
					id="section_4_container"
					onTouchStart={(e) => {
						this.section4TouchStart(e);
					}}
					onTouchMove={(e) => {
						this.section4TouchMove(e);
					}}
					ref={this.section_4_container}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						top: '0px',
						left: '0px',
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
							width="833"
							height="892"
							viewBox="0 0 833 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="277.5" y1="-2.18557e-08" x2="277.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="555.5" y1="-2.18557e-08" x2="555.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="832.5" y1="-2.18557e-08" x2="832.5" y2="892" stroke="#E8E8E8" />
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
					{/* 左侧模糊背景 */}
					<div
						ref={this.section_4_leftContent}
						style={{
							position: 'absolute',
							width: '536px',
							height: '100%',
							left: '0px',
							top: '0px',
							background: 'rgba(13, 19, 20, 0.38)',
							backdropFilter: ' blur(5px)',
							zIndex: '-4'
						}}
						className={'dFordText '}
					>
						{/* 文本 */}
						<div
							style={{
								/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim sem velit, eu blandit purus porta non. */

								position: 'absolute',
								width: '370px',
								height: '248px',
								left: '113px',
								top: '322px'
							}}
							className={'dFordText '}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
							interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim
							sem velit, eu blandit purus porta non.
						</div>
						{/* 标题 背景*/}
						<div
							style={{
								position: 'absolute',
								width: '913px',
								height: '142px',
								left: '113px',
								top: '731px'
							}}
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
						</div>
						{/* 标题 */}
						<div
							className="dFordTitle"
							style={{
								/* remote chauffeur */

								position: 'absolute',
								width: '851px',
								height: '102px',
								left: '136px',
								top: '760px'
							}}
						>
							remote chauffeur
						</div>
					</div>

					<div
						ref={this.sectoin_4_phoneVideo}
						style={{
							position: 'absolute',
							width: '750px',
							height: '750px',
							left: '573px',
							top: '120px',
							backgroundSize: 'contain',
							zIndex: '-4'
						}}
					>
						<Player
							ref={(player) => {
								this.player = player;
							}}
							autoPlay={true}
						>
							<source src={videoPRemoteVhauffeur} />
						</Player>
					</div>
				</div>
				<div
					id="section_5_container"
					ref={this.section_5_container}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						top: '0px',
						left: '0px',
						zIndex: '-5',
						display: 'none'
					}}
					onTouchStart={(e) => {
						this.section5TouchStart(e);
					}}
					onTouchMove={(e) => {
						this.section5TouchMove(e);
					}}
				>
					<img
						src={this.state.section_5_ImageSrc}
						style={{
							position: 'absolute',
							left: '0px',
							top: '0px',
							width: '100%',
							height: '100%',
							objectFit: 'cover'
						}}
					/>
					{/* 栅格背景 */}
					<div
						ref={this.section_5_bgline}
						style={{
							position: 'absolute',
							width: '832px',
							height: '892px',
							left: '257px',
							top: '145px',
							zIndex: '-5'
						}}
					>
						<svg
							width="833"
							height="892"
							viewBox="0 0 833 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="277.5" y1="-2.18557e-08" x2="277.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="555.5" y1="-2.18557e-08" x2="555.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="832.5" y1="-2.18557e-08" x2="832.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
					{/* 右侧标题背景 */}
					<div
						ref={this.section_5_titleBg}
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
						ref={this.section_5_title}
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
				</div>
				<div
					id="section_6_container"
					onTouchStart={(e) => {
						this.section6TouchStart(e);
					}}
					onTouchMove={(e) => {
						this.section6TouchMove(e);
					}}
					ref={this.section_6_container}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						top: '0px',
						left: '0px',
						zIndex: '-6',
						display: 'none'
					}}
				>
					{/* <img
						src={this.state.section_6_ImageSrc}
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							objectFit: 'cover'
						}}
					/> */}
					<CanvasImageSequence
						ref={this.section_6_canvasRef}
						data={this.state.section_6_ImageSrc}
						loop={true}
						forward={true}
						fps={10}
						canvasWidth = {this.state.canvasWidth}
						canvasHeight = {this.state.canvasHeight}
						onChange={() => this.change}
					/>
					{/* <Player
						ref={(player) => {
							this.player = player;
						}}
						autoPlay={true}
					>
						<source src={videoPRemoteVhauffeur} />
					</Player> */}
					<div id="section_6_text_1">
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
							Imaging sensors
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

					<div id="section_6_text_2">
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

					<div id="section_6_text_3">
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

					<div id="section_6_text_4">
						<Info
							// inAnimate={this.state.infoInAnimate}
							// outAnimate={this.state.infoOutAnimate}
							isInfoExpanded={true}
							// onCloseInfoPanel={() => this.onCloseInfoPanel()}
						/>
					</div>
					{/* 背景栅格 */}
					<div
						ref={this.section_6_bgline}
						style={{
							position: 'absolute',
							width: '832px',
							height: '892px',
							left: '257px',
							top: '145px'
						}}
					>
						<svg
							width="833"
							height="892"
							viewBox="0 0 833 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="277.5" y1="-2.18557e-08" x2="277.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="555.5" y1="-2.18557e-08" x2="555.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="832.5" y1="-2.18557e-08" x2="832.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
				</div>
				<div
					id="section_7_container"
					ref={this.section_7_container}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						top: '0px',
						left: '0px',
						display: 'none'
					}}
					onTouchStart={(e) => {
						this.section7TouchStart(e);
					}}
					onTouchMove={(e) => {
						this.section7TouchMove(e);
					}}
				>
					{/*section_7_container*/}
					<img
						src={privacy_section_7_bg}
						style={{
							position: 'absolute',
							left: '0px',
							top: '0px',
							width: '100%',
							height: '100%',
							objectFit: 'cover'
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
					>
						<svg
							width="833"
							height="892"
							viewBox="0 0 833 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="277.5" y1="-2.18557e-08" x2="277.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="555.5" y1="-2.18557e-08" x2="555.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="832.5" y1="-2.18557e-08" x2="832.5" y2="892" stroke="#E8E8E8" />
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
						className="dFordText"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
						interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.
					</div>
				</div>
				<div
					id="section_8_container"
					ref={this.section_8_container}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						top: '0px',
						left: '0px',
						display: 'none'
					}}
					onTouchStart={(e) => {
						this.section8TouchStart(e);
					}}
					onTouchMove={(e) => {
						this.section8TouchMove(e);
					}}
				>
					{/*section_8_container*/}
					<img src={privacy_section_8_bg} />
					{/* 背景上部遮罩 */}
					<div
						style={{
							position: 'absolute',
							width: '1366px',
							height: '1024px',
							left: '0px',
							top: '0px'
						}}
					>
						<svg
							width="1366"
							height="1024"
							viewBox="0 0 1366 1024"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								width="1366"
								height="1024"
								fill="url(#paint0_linear_1254_1463)"
								fillOpacity="0.47"
								style={{ mixBlendMode: 'multiply' }}
							/>
							<defs>
								<linearGradient
									id="paint0_linear_1254_1463"
									x1="683"
									y1="0"
									x2="683"
									y2="1024"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#B18C8C" stopOpacity="0.62" />
									<stop offset="1" stopColor="#FFF2E6" />
								</linearGradient>
							</defs>
						</svg>
					</div>
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
							left: '630px',
							top: '906px'
						}}
					>
						<svg width="2" height="118" viewBox="0 0 2 118" fill="none" xmlns="http://www.w3.org/2000/svg">
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
					{/* 背景栅格 */}
					<div
						style={{
							position: 'absolute',
							width: '832px',
							height: '892px',
							left: '257px',
							top: '145px'
						}}
					>
						<svg
							width="833"
							height="892"
							viewBox="0 0 833 892"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="277.5" y1="-2.18557e-08" x2="277.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="555.5" y1="-2.18557e-08" x2="555.5" y2="892" stroke="#E8E8E8" />
							<line opacity="0.3" x1="832.5" y1="-2.18557e-08" x2="832.5" y2="892" stroke="#E8E8E8" />
						</svg>
					</div>
					{/* 中部文本 continue to */}
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
					{/* 中部文本 + */}
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
						<svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								opacity="0.8"
								d="M38.15 22.548V16.836H22.61V0.0359967H16.394V16.836H0.853969V22.548H16.394V39.936H22.61V22.548H38.15Z"
								fill="#AFCDFA"
							/>
						</svg>
					</div>
					<div
						className="dFordNormalText"
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
		);
	}
}
