import { setUncaughtExceptionCaptureCallback } from 'process';
import React from 'react';
import { SubMenu } from '../subMenu/subMenuComponent';
import { Info } from '../info/infoComponent';
import { subMenuList } from '../../config/subMenuList';
export class Menu extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			isMenuExpanded: false,
			isInfoExpanded: false,
			infoInAnimate: '',
			infoOutAnimate: '',
			menuInAnimate: '',
			menuOutAnimate: ''
		};
	}
	closeMenu(e) {
		setTimeout(() => {
			this.setState({ isMenuExpanded: false });
		}, 500);
		this.setState({ menuInAnimate: '', menuOutAnimate: '' });
		setTimeout(() => {
			this.setState({ menuOutAnimate: 'animate__animated animate__fadeOut' });
		});
	}
	openMenu(e) {
		e.stopPropagation();
		setTimeout(() => {
			this.setState({ isMenuExpanded: true });
		}, 100);
		this.setState({ menuInAnimate: '', menuOutAnimate: '' });
		setTimeout(() => {
			this.setState({ menuInAnimate: 'animate__animated animate__fadeIn' });
		});
	}
	onShowInfoPanel(e) {
		e.stopPropagation();
		setTimeout(() => {
			this.setState({ isInfoExpanded: true });
		}, 100);
		this.setState({ infoInAnimate: '', infoOutAnimate: '' });
		setTimeout(() => {
			this.setState({ infoInAnimate: 'animate__animated animate__slideInRight' });
		});
	}
	onCloseInfoPanel() {
		if (this.state.isInfoExpanded) {
			this.setState({ infoInAnimate: '', infoOutAnimate: '' });
			setTimeout(() => {
				this.setState({ infoOutAnimate: 'animate__animated animate__slideOutRight' });
			});
		}
	}
	swiperTo(event,index: number) {
		this.props.onSwiperTo(event,index);
		this.setState({ isMenuExpanded: false });
	}
	render() {
		//定义导航卡片

		return (
			<div style={{ display: this.props.displayStatus,
				zIndex: '999', }}>
				{/*展开菜单*/}
				<div
					style={{
						width: '100%',
						height: '100%',
						background: '#323232',
						position: 'absolute',
						top: '0px',
						left: '0px',
						display: this.state.isMenuExpanded ? 'block' : 'none',
						zIndex:'2'
					}}
					className={this.state.menuInAnimate + ' ' + this.state.menuOutAnimate}
				>
					<div>
						{subMenuList.map((item, index) => {
							return (
								<SubMenu
									key={'subMenu' + index}
									left={item.left}
									top={item.top}
									isActiveOnly = {true}
									bgColor={item.bgColor}
									indexGroup={item.indexGroup}
									onSwiperTo={(event,index: number) => this.swiperTo(event,index)}
								/>
							);
						})}
					</div>
					{/*关闭按钮*/}
					<div
						style={{
							position: 'absolute',
							width: '59px',
							height: '59px',
							left: '60px',
							top: '911px',
						}}
						onTouchStart={(e: any) => this.closeMenu(e)}
					>
						<svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="29.5" cy="29.5" r="28.5" stroke="white" strokeWidth="2" />
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M27.5519 29.9203L17.2767 40.1955L19.398 42.3168L29.6732 32.0416L39.197 41.5655L41.3183 39.4442L31.7945 29.9203L41.3183 20.3965L39.197 18.2751L29.6732 27.799L19.398 17.5238L17.2767 19.6452L27.5519 29.9203Z"
								fill="white"
							/>
						</svg>
					</div>
				</div>

				{/* 收起状态背景*/}
				<div
					style={{
						position: 'absolute',
						width: '100%',
						height: '130px',
						left: '0px',
						top: '0px',
						background:
							'linear-gradient(90deg, rgba(177, 143, 132, 0.3) -8.64%, rgba(14, 15, 31, 0.234) 112.68%)',
						backdropFilter: 'blur(60px)',
						pointerEvents: 'none',
						zIndex: '2',
					}}
				/>

				<div
					style={{
						border: '1px solid #FFFFFF',
						position: 'absolute',
						left: '0px',
						top: '130px',
						width: '100%',
						zIndex: '3',
						opacity: '0.4'
					}}
				/>

				{/*menu 图标*/}
				<div
					style={{
						position: 'absolute',
						left: '60px',
						top: '36px',
						zIndex: '3',
					}}
					onClick={(e) => this.openMenu(e)}
				>
					<svg width="132" height="59" viewBox="0 0 132 59" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="29.5" cy="29.5" r="28.5" stroke="white" strokeWidth="2" />
						<line x1="14" y1="24.5" x2="46" y2="24.5" stroke="white" strokeWidth="3" />
						<line x1="14" y1="35.5" x2="46" y2="35.5" stroke="white" strokeWidth="3" />
						<path
							d="M93.752 35V22.994H90.782L87.506 30.896L84.248 22.994H81.278V35H83.384V26.09L87.056 35H87.956L91.646 26.09V35H93.752ZM104.533 35V33.146H98.4133V29.816H104.407V27.962H98.4133V24.848H104.533V22.994H96.3073V35H104.533ZM117.1 35V22.994H114.994V31.328L108.856 22.994H106.696V35H108.802V26.432L115.066 35H117.1ZM124.853 35.216C128.327 35.216 130.037 33.236 130.037 30.248V22.994H127.913V30.194C127.913 32.102 126.851 33.344 124.853 33.344C122.837 33.344 121.775 32.102 121.775 30.194V22.994H119.651V30.266C119.651 33.218 121.361 35.216 124.853 35.216Z"
							fill="white"
						/>
					</svg>
				</div>

				{/*个人数据图标*/}
				<div
					style={{
						position: 'absolute',
						left: '1227px',
						top: '35px',
						zIndex: '3',
					}}
					onClick={(e) => this.onShowInfoPanel(e)}
				>
					<svg width="55" height="68" viewBox="0 0 55 68" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_2251_1088)">
							<path
								d="M27.2026 27.5673C24.9807 27.5673 22.8088 26.9084 20.9614 25.674C19.114 24.4396 17.6741 22.6852 16.8239 20.6324C15.9736 18.5797 15.7512 16.321 16.1846 14.1418C16.6181 11.9627 17.688 9.961 19.2591 8.38993C20.8301 6.81885 22.8318 5.74893 25.011 5.31547C27.1901 4.88201 29.4489 5.10448 31.5016 5.95474C33.5543 6.805 35.3088 8.24487 36.5432 10.0923C37.7776 11.9397 38.4364 14.1116 38.4364 16.3334C38.4332 19.3118 37.2486 22.1673 35.1425 24.2734C33.0365 26.3794 30.181 27.564 27.2026 27.5673V27.5673ZM27.2026 8.49984C25.6532 8.49984 24.1386 8.95929 22.8503 9.82008C21.5621 10.6809 20.558 11.9043 19.9651 13.3358C19.3721 14.7672 19.217 16.3424 19.5193 17.862C19.8216 19.3816 20.5677 20.7774 21.6632 21.873C22.7588 22.9686 24.1547 23.7147 25.6743 24.017C27.1939 24.3192 28.769 24.1641 30.2005 23.5712C31.6319 22.9783 32.8554 21.9742 33.7162 20.6859C34.577 19.3976 35.0364 17.8831 35.0364 16.3337C35.0341 14.2567 34.208 12.2655 32.7394 10.7969C31.2707 9.32828 29.2795 8.50218 27.2026 8.49984V8.49984Z"
								fill="white"
							/>
							<path
								d="M47.6016 51.9063C47.1507 51.9063 46.7183 51.7272 46.3995 51.4084C46.0807 51.0895 45.9016 50.6571 45.9016 50.2063C45.9016 42.3636 40.5636 35.982 34.0016 35.982H20.4016C13.8396 35.982 8.50156 42.3636 8.50156 50.2063C8.50156 50.6571 8.32246 51.0895 8.00364 51.4084C7.68483 51.7272 7.25243 51.9063 6.80156 51.9063C6.35069 51.9063 5.91829 51.7272 5.59948 51.4084C5.28067 51.0895 5.10156 50.6571 5.10156 50.2063C5.10156 40.4888 11.9646 32.582 20.4016 32.582H34.0016C42.4385 32.582 49.3016 40.4888 49.3016 50.2063C49.3016 50.6571 49.1225 51.0895 48.8036 51.4084C48.4848 51.7272 48.0524 51.9063 47.6016 51.9063Z"
								fill="white"
							/>
						</g>
						<defs>
							<clipPath id="clip0_2251_1088">
								<rect width="54.4" height="68" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>

				{/*个人数据面板*/}
				<Info
					inAnimate={this.state.infoInAnimate}
					outAnimate={this.state.infoOutAnimate}
					isInfoExpanded={this.state.isInfoExpanded}
					onCloseInfoPanel={() => this.onCloseInfoPanel()}
				/>
				{/*用户名称*/}
				<div
					style={{
						position: 'absolute',
						right: '160px',
						top: '54px',
						zIndex: '3',
						fontSize: '18px',
						display: this.props.userName === '' ? 'none' : 'block',
						fontFamily: 'Lincoln-ProximaNova-LightIt'
					}}
					className="dFordSmallTitle"
				>
					Hi,{this.props.userName}!
				</div>
			</div>
		);
	}
}
