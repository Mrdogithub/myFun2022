import React from 'react';
import PrivacyBg from './privacyBg_1.png';
import privacyVideo_1 from '../../assets/Video00_TransitionPrivacy.mp4';

import video00 from '../../assets/Video00(ImageSequence)/Video00_TransitionPrivacy000.jpg';
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
import { stat } from 'fs';

const inAnimate = 'animate__animated animate__slideInLeft';
const outAnimate = 'animate__animated animate__slideOutLeft';
export class PrivacyComponentIndex1 extends React.Component<any, any> {
	// privacy slide 1
	player: any;
	constructor(props: any) {
		super(props);
		this.state = {
			isUpdateAnimate: false,
			titleAnimate: '',
			textAnimate: ''
		};
	}
	handleStateChange(state, prevState) {
		if (state.currentTime > 2 && !this.state.isUpdateAnimate) {
			this.setState({ isUpdateAnimate: true });
			this.props.changeAnimateByTime();
		}
	}
	componentDidMount() {
		this.player.subscribeToStateChange(this.handleStateChange.bind(this));
	}
	componentDidUpdate() {
		if (this.props.videoConfig.autoPlay) {
			this.player.play();
			// setTimeout(()=>{
			// 	this.props.changeAnimateByTime();
			// },2300)
		}
	}
	changeCurrentTime(seconds) {
		return () => {
			const { player } = this.player.getState();
			this.player.seek(player.currentTime + seconds);
		};
	}
	render() {
		return (
			<div>
				<div>
					{/* <img src={PrivacyBg} /> */}
					<div
						style={{
							position: 'absolute',
							left: '0px',
							right: '0px',
							top: '0px',
							width: '100%',
							height: '100%'
						}}
					>
						<Player
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
						</Player>
					</div>
				</div>

				{/* 标题*/}
				<div
					className={this.props.inAnimate.titleAnimate}
					style={{ position: 'absolute', top: '0px', left: '0px' }}
				>
					<div
						style={{
							position: 'absolute',
							width: '579px',
							height: '155px',
							left: '380px',
							top: '741px',
							opacity: 0.9
						}}
						className={
							'dFordMainTitle ' +
							this.props.inAnimate.titleAnimate +
							' ' +
							this.props.outAnimate.titleAnimate
						}
					>
						Privacy
					</div>

					<div
						style={{
							position: 'absolute',
							width: '72px',
							height: '173px',
							left: '974px',
							top: '695px'
						}}
						className={this.props.inAnimate.titleAnimate + ' ' + this.props.outAnimate.titleAnimate}
					>
						<svg width="64" height="69" viewBox="0 0 64 69" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								opacity="0.8"
								d="M63.5273 38.974V29.318H37.2573V0.917994H26.7493V29.318H0.479328V38.974H26.7493V68.368H37.2573V38.974H63.5273Z"
								fill="white"
							/>
						</svg>
					</div>

					<div
						style={{
							position: 'absolute',
							width: '81px',
							height: '105px',
							left: '43px',
							top: '891px'
						}}
						className={this.props.inAnimate.titleAnimate + ' ' + this.props.outAnimate.titleAnimate}
					>
						<svg width="74" height="47" viewBox="0 0 74 47" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								opacity="0.24"
								d="M22.2992 46.128C18.9778 46.128 15.9698 45.5953 13.2752 44.53C10.5805 43.402 8.29317 41.8353 6.41317 39.83C4.53317 37.8247 3.06051 35.4433 1.99517 32.686C0.992505 29.866 0.491172 26.764 0.491172 23.38C0.491172 20.184 1.02384 17.176 2.08917 14.356C3.21717 11.536 4.75251 9.092 6.69517 7.024C8.63784 4.956 10.9252 3.32667 13.5572 2.136C16.2518 0.882665 19.1658 0.255999 22.2992 0.255999C25.4325 0.255999 28.3152 0.851332 30.9472 2.042C33.6418 3.17 35.9605 4.768 37.9032 6.836C39.8458 8.84133 41.3498 11.254 42.4152 14.074C43.5432 16.894 44.1072 19.996 44.1072 23.38C44.1072 26.576 43.5745 29.5527 42.5092 32.31C41.5065 35.0673 40.0652 37.48 38.1852 39.548C36.3052 41.616 34.0178 43.2453 31.3232 44.436C28.6285 45.564 25.6205 46.128 22.2992 46.128ZM9.79717 23.38C9.79717 26.5133 10.1105 29.2393 10.7372 31.558C11.4265 33.814 12.3352 35.7253 13.4632 37.292C14.6538 38.8587 16.0012 40.018 17.5052 40.77C19.0718 41.522 20.7325 41.898 22.4872 41.898C24.1165 41.898 25.6518 41.522 27.0932 40.77C28.5972 40.018 29.9132 38.89 31.0412 37.386C32.1692 35.882 33.0465 33.9707 33.6732 31.652C34.3625 29.3333 34.7072 26.576 34.7072 23.38C34.7072 20.184 34.3625 17.3953 33.6732 15.014C33.0465 12.6327 32.1692 10.69 31.0412 9.186C29.9132 7.61933 28.5972 6.46 27.0932 5.708C25.5892 4.89333 23.9912 4.486 22.2992 4.486C20.6072 4.486 19.0092 4.862 17.5052 5.614C16.0012 6.366 14.6538 7.52533 13.4632 9.092C12.3352 10.596 11.4265 12.5387 10.7372 14.92C10.1105 17.3013 9.79717 20.1213 9.79717 23.38ZM52.2081 1.102C52.3961 1.102 52.8034 1.13333 53.4301 1.196C54.1194 1.25866 54.9341 1.32133 55.8741 1.384C56.8767 1.44666 57.9421 1.50933 59.0701 1.572C60.1981 1.572 61.3261 1.572 62.4541 1.572C63.5821 1.572 64.7101 1.572 65.8381 1.572C66.9661 1.50933 68.0001 1.44666 68.9401 1.384C69.9427 1.32133 70.7887 1.25866 71.4781 1.196C72.1674 1.13333 72.6061 1.102 72.7941 1.102C72.8567 1.22733 72.8881 1.44666 72.8881 1.76C72.9507 2.07333 72.9821 2.324 72.9821 2.512C72.9821 3.264 72.6687 3.70266 72.0421 3.828C70.4754 4.07866 69.1907 4.486 68.1881 5.05C67.1854 5.55133 66.6841 6.39733 66.6841 7.588V38.796C66.6841 39.9867 67.2794 40.8953 68.4701 41.522C69.6607 42.086 71.0707 42.4933 72.7001 42.744C73.3267 42.8693 73.6401 43.308 73.6401 44.06C73.6401 44.248 73.6087 44.53 73.5461 44.906C73.4834 45.2193 73.4521 45.4073 73.4521 45.47C73.2641 45.47 72.7941 45.4387 72.0421 45.376C71.2901 45.3133 70.3814 45.2507 69.3161 45.188C68.3134 45.1253 67.1854 45.0627 65.9321 45C64.7414 45 63.5821 45 62.4541 45C61.3261 45 60.1667 45 58.9761 45C57.8481 45.0627 56.7827 45.1253 55.7801 45.188C54.7774 45.2507 53.9001 45.3133 53.1481 45.376C52.3961 45.4387 51.9261 45.47 51.7381 45.47C51.7381 45.4073 51.7067 45.2193 51.6441 44.906C51.5814 44.53 51.5501 44.248 51.5501 44.06C51.5501 43.308 51.8634 42.8693 52.4901 42.744C54.1194 42.4307 55.4981 42.0233 56.6261 41.522C57.7541 40.958 58.3181 40.0807 58.3181 38.89V7.588C58.3181 6.39733 57.7854 5.55133 56.7201 5.05C55.7174 4.486 54.4641 4.07866 52.9601 3.828C52.3334 3.70266 52.0201 3.264 52.0201 2.512C52.0201 2.324 52.0201 2.07333 52.0201 1.76C52.0827 1.44666 52.1454 1.22733 52.2081 1.102Z"
								fill="white"
							/>
						</svg>
					</div>

					<div
						style={{
							position: 'absolute',
							width: '211px',
							height: '24px',
							left: '572px',
							top: '916px'
						}}
						className={this.props.inAnimate.titleAnimate + ' ' + this.props.outAnimate.titleAnimate}
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

					<div
						style={{
							position: 'absolute',
							width: '22px',
							height: '8px',
							left: '670px',
							top: '965px'
						}}
						className={this.props.inAnimate.titleAnimate + ' ' + this.props.outAnimate.titleAnimate}
					>
						<svg width="24" height="11" viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 1L12.275 9L23 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
						</svg>
					</div>
				</div>

				{/* 视屏播放2.5s 后，需要显示的内容*/}

				{/* 侧边栏背景 */}
				<div
					style={{
						position: 'absolute',
						width: '533px',
						height: '1024px',
						left: '1px',
						top: '0px',
						background: 'rgba(26, 32, 50, 0.16)',
						backdropFilter: 'blur(15px)',
						display: this.props.inAnimate.textAnimate ? 'block' : 'none'
					}}
					className={this.props.inAnimate.textAnimate + ' ' + this.props.outAnimate.textAnimate}
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
						className={
							'dFordText ' + this.props.inAnimate.textAnimate + ' ' + this.props.outAnimate.textAnimate
						}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget
						interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim sem
						velit, eu blandit purus porta non. Fusce tristique, risus eget finibus euismod, diam arcu
						pellentesque lectus, ac consequat nulla purus at tellus.
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
						className={
							'dFordTitle ' + this.props.inAnimate.textAnimate + ' ' + this.props.outAnimate.textAnimate
						}
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
						<svg width="41" height="44" viewBox="0 0 41 44" fill="none" xmlns="http://www.w3.org/2000/svg">
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
					style={{
						position: 'absolute',
						width: '832px',
						height: '892px',
						left: '257px',
						top: '132px'
					}}
					className={this.props.inAnimate.textAnimate + ' ' + this.props.outAnimate.textAnimate}
				>
					<svg width="833" height="892" viewBox="0 0 833 892" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
						<line opacity="0.3" x1="277.5" y1="-2.18557e-08" x2="277.5" y2="892" stroke="#E8E8E8" />
						<line opacity="0.3" x1="555.5" y1="-2.18557e-08" x2="555.5" y2="892" stroke="#E8E8E8" />
						<line opacity="0.3" x1="832.5" y1="-2.18557e-08" x2="832.5" y2="892" stroke="#E8E8E8" />
					</svg>
				</div>
			</div>
		);
	}
}
