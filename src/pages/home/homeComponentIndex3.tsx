import React from 'react';
import homePrivacy_1 from './homePrivacy_1.png';
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
import privacyVideo_1 from '../../assets/Video00_TransitionPrivacy.mp4';
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
const ticks = new Array(100).map((item, index) => {
	console.log(index);
	if (index < 10) {
		require(`../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy00${index}.jpg`);
	}
	if (index > 9 && index < 100) {
		require('../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy0' + index + '.jpg');
	}
	if (index == 100) {
		require('../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy' + index + '.jpg');
	}
});
export class HomeComponentIndex3 extends React.Component<any, any> {
	constructor(props: any) {
		super(props);

		this.box = React.createRef();
		this.video = React.createRef();
		this.leftContent = React.createRef();
		this.bgLine = React.createRef();
		this.belowContent = React.createRef();
		this.state = {
			x: 0,
			y: 0,
			firstX: 0,
			firstY: 0,
			completedLoadImage: false,
			seconds: 0,
			imgSrc: `/static/media/Video00_TransitionPrivacy000.png`,
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
	belowContent: any;
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
		console.log(this.state.x);
	}

	videoTouchStart(event) {
		this.setState({
			firstX: event.targetTouches[0].clientX,
			firstY: event.targetTouches[0].clientY
		});
	}
	videoTouchMove(event) {
		this.setState({
			endX: event.touches[0].clientX,
			endY: event.touches[0].clientY
		});
		const move = this.state.endY - this.state.firstY;
		console.log(move);
		const seconds = Math.ceil(Math.abs(move) / 10);
		if (seconds > 100) return;
		if (seconds === 40) {
			setTimeout(() => {
				this.belowContent.current.style.zIndex = '1';
				this.leftContent.current.style.zIndex = '1';
				this.bgLine.current.style.zIndex = '1';
			}, 500);
			setTimeout(() => {
				this.leftContent.current.className = 'animate__animated animate__slideInLeft';
				this.bgLine.current.className = 'animate__animated animate__fadeIn';
			}, 1000);
		}
	}
	handleTouchStart(event, item, index) {
		this.onChange(item, index);
		this.setState({
			firstX: event.targetTouches[0].clientX,
			firstY: event.targetTouches[0].clientY
		});
	}
	handleTouchMove(event, item, index) {
		this.endX = event.touches[0].clientX;

		this.setState({
			endX: event.touches[0].clientX,
			endY: event.touches[0].clientY
		});
		const direction = this.letMeKonwDirection();

		if (direction === 'toLeft') {
			this.box.current.childNodes[item.index].style.flex = `1 1 80%`;
		}
		if (direction === 'toTop') {
			this.box.current.childNodes[item.index].style.flex = `1 1 100%`;
			// setTimeout(() => {

			// }, 1000);

			const move = this.state.endY - this.state.firstY;
			console.log(move + ':' + Math.abs(move / 100).toFixed(2).split('.')[1] + ':');
			const seconds = Math.abs(move / 100).toFixed(2).split('.')[1];
			// if (this.state.completedLoadImage) return;
			console.log(seconds);
			let image = '';
			// if (seconds < 10) {
			// 	console.log('seconds < 10')
			image = require(`../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy${seconds}.jpg`);
			this.setState({ imgSrc: image });
			// if (Number(seconds) === 98 && !this.state.completedLoadImage) {
			// 	image = require(`../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy${100}.jpg`);
			// 	this.setState({ completedLoadImage: true });
			// }
			// }
			// if (seconds > 9 && seconds < 100) {
			// 	console.log('seconds < 110')
			// 	image = require('../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy0' + seconds + '.jpg');
			// 	this.setState({ imgSrc: image });
			// }
			// if (seconds == 100) {
			// 	console.log('seconds < 130')
			// 	image = require('../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy' + seconds + '.jpg');
			// 	this.setState({ imgSrc: image });
			// }

			this.leftContent.current.className = 'animate__animated animate__slideInLeft';
			this.bgLine.current.className = 'animate__animated animate__fadeIn';
			this.leftContent.current.style.zIndex = '1';
			this.bgLine.current.style.zIndex = '1';
			this.belowContent.current.style.zIndex = '1';
			this.video.current.style.zIndex = '1';

			// if (seconds < 40) {
			// 	this.leftContent.current.style.left = `-${3 * seconds*10}px`;
			// }
		}
	}

	letMeKonwDirection() {
		const moveX = this.state.endX - this.state.firstX;
		const moveY = this.state.endY - this.state.firstY;
		if (Math.abs(moveX) > 100 || Math.abs(moveY) > 100) {
			if (Math.abs(moveX) > Math.abs(moveY)) {
				return moveX > 0 ? 'toRight' : 'toLeft';
			} else {
				return moveY > 0 ? 'toBottom' : 'toTop';
			}
		}
	}

	handleTouchEnd(event, item, index) {
		console.log('any');
	}

	handleStateChange(state, prevState) {
		if (state.currentTime > 2 && !this.state.isUpdateAnimate) {
			this.setState({ isUpdateAnimate: true });
			// this.props.changeAnimateByTime();
		}
	}
	// componentDidMount() {
	// 	this.player.subscribeToStateChange(this.handleStateChange.bind(this));
	// }
	componentDidUpdate() {
		// if (this.props.videoConfig.autoPlay) {
		// 	this.player.play();
		// 	// setTimeout(()=>{
		// 	// 	this.props.changeAnimateByTime();
		// 	// },2300)
		// }
	}
	changeCurrentTime(seconds) {
		// return () => {
		// 	const { player } = this.player.getState();
		// 	this.player.seek(player.currentTime + seconds);
		// };
	}
	render() {
		return (
			<div
				style={{
					position: 'relative',
					top: '0px',
					left: '0px',
					zIndex: '1'
				}}
			>
				{/*className="swiper-no-swiping" */}
				<div className="container" ref={this.box}>
					{this.state.slides.map((item: any, index: any) => {
						return (
							<div
								className="box"
								key={index}
								style={{ position: 'relative' }}
								onTouchStart={(event) => this.handleTouchStart(event, item, index)}
								onTouchMove={(event) => this.handleTouchMove(event, item, index)}
								onTouchEnd={(event) => this.handleTouchEnd(event, item, index)}
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
						zIndex: '-1'
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
						onTouchStart={(e) => {
							this.videoTouchStart(e);
						}}
						onTouchMove={(e) => {
							this.videoTouchMove(e);
						}}
					>
						<img
							src={this.state.imgSrc}
							style={{
								position: 'absolute',
								width: '100%',
								height: ' 100%'
							}}
						/>
						{/* <Player
							style={{ objectFit: 'cover' }}
							fluid={false}
							width={1366}
							height={1024}
							ref={(player: any) => {
								// this.setState({player:player})
								this.player = player;
							}}
							autoPlay={false}
						>
							<source src={privacyVideo_1} />
							<ControlBar autoHide={true} />
						</Player> */}
					</div>

					{/* 视屏播放2.5s 后，需要显示的内容*/}

					{/* 侧边栏背景 */}
					<div
						ref={this.leftContent}
						style={{
							position: 'absolute',
							width: '533px',
							height: '1024px',
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
			</div>
		);
	}
}
