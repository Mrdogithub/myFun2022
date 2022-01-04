import { setUncaughtExceptionCaptureCallback } from 'process';
import React from 'react';
import { SubMenu } from '../subMenu/subMenuComponent';
import { Info } from '../info/infoComponent';
// import firstActiveIndex from './1Active.svg';
// import secondActiveIndex from './2Active.svg';
// import thirdActiveIndex from './3Active.svg';
// import firstNormalIndex from './1Normal.svg';
// import secondNormalIndex from './2Normal.svg';
// import thirdNormalIndex from './3Normal.svg';
// import groupOne1ActiveSubText from './1_1ActiveSubText.svg';
// import groupOne2ActiveSubText from './1_2ActiveSubText.svg';
// import groupOne3ActiveSubText from './1_3ActiveSubText.svg';
// import groupTwo1ActiveSubText from './2_1ActiveSubText.svg';
// import groupTwo2ActiveSubText from './2_2ActiveSubText.svg';
// import groupTwo3ActiveSubText from './2_3ActiveSubText.svg';
// import groupThird1ActiveSubText from './3_1ActiveSubText.svg';
// import groupThird2ActiveSubText from './3_2ActiveSubText.svg';
// import groupThird3ActiveSubText from './3_3ActiveSubText.svg';
import { subMenuList } from '../../config/subMenuList';
export class Menu extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			isMenuExpanded: false,
			isInfoExpanded: false
		};
		console.log(subMenuList)
	}
	closeMenu() {
		this.setState({ isMenuExpanded: false });
	}
	openMenu() {
		this.setState({ isMenuExpanded: true });
	}
	onShowInfoPanel() {
		this.setState({ isInfoExpanded: true });
	}
	onCloseInfoPanel() {
		if (this.state.isInfoExpanded) {
			this.setState({ isInfoExpanded: false });
		}
	}
	swiperTo(index: number) {
		this.props.onSwiperTo(index);
		this.setState({ isMenuExpanded: false });
	}
	render() {
		//定义导航卡片
		
		return (
			<div>
				{/*展开菜单*/}
				<div
					style={{
						width: '100%',
						height: '100%',
						background: '#323232',
						position: 'absolute',
						top: '0px',
						left: '0px',
						zIndex: this.state.isMenuExpanded ? '3' : '1'
					}}
				>
					{subMenuList.map((item, index) => {
						return (
							<SubMenu
								key={'subMenu' + index}
								left={item.left}
								top={item.top}
								bgColor={item.bgColor}
								indexGroup={item.indexGroup}
								onSwiperTo={(index: number) => this.swiperTo(index)}
							/>
						);
					})}
					{/*关闭按钮*/}
					<div
						style={{
							position: 'absolute',
							width: '59px',
							height: '59px',
							left: '60px',
							top: '911px'
						}}
						onClick={() => this.closeMenu()}
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
						zIndex: '2'
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
						zIndex: '3'
					}}
					onClick={() => this.openMenu()}
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
						zIndex: '3'
					}}
					onClick={() => this.onShowInfoPanel()}
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
				<Info isInfoExpanded={this.state.isInfoExpanded} onCloseInfoPanel={() => this.onCloseInfoPanel()} />
				{/*用户名称*/}
				<div
					style={{
						/* Hi, Christ! */
						position: 'absolute',
						left: '1083px',
						top: '54px',
						zIndex: '3'
					}}
				>
					<svg width="94" height="16" viewBox="0 0 94 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10.764 13L13.41 0.993999H11.304L10.224 5.908H3.978L5.058 0.993999H2.952L0.306 13H2.412L3.564 7.762H9.81L8.658 13H10.764ZM15.4198 13L18.0658 0.993999H15.9598L13.3138 13H15.4198ZM20.438 11.974C20.438 11.128 19.88 10.678 19.232 10.678C18.53 10.678 17.864 11.29 17.864 12.028C17.864 12.676 18.314 13.036 18.818 13.036H18.998C18.746 13.648 17.99 14.242 17.342 14.548L18.044 15.286C19.376 14.62 20.438 13.234 20.438 11.974ZM33.3612 13.216C34.8912 13.216 36.7452 12.676 38.0772 11.092L36.4752 9.976C35.6832 10.84 34.5492 11.344 33.4872 11.344C31.2372 11.344 29.8152 9.85 29.8152 7.762C29.8152 4.774 31.9932 2.668 34.3872 2.668C35.8272 2.668 37.0512 3.334 37.6272 4.666L39.6432 3.946C38.8872 2.182 37.1952 0.795999 34.4952 0.795999C30.8772 0.795999 27.6192 3.604 27.6192 7.888C27.6192 11.128 30.1032 13.216 33.3612 13.216ZM49.7347 13L52.3807 0.993999H50.2747L49.1947 5.908H42.9487L44.0287 0.993999H41.9227L39.2767 13H41.3827L42.5347 7.762H48.7807L47.6287 13H49.7347ZM61.5725 13L59.7005 8.392C61.8065 8.104 63.3365 6.466 63.3365 4.27C63.3365 2.236 61.6085 0.993999 59.7545 0.993999H54.9305L52.2845 13H54.3905L55.3625 8.518H57.5765L59.2505 13H61.5725ZM58.6385 6.664H55.7765L56.6225 2.848H59.3765C60.2765 2.848 61.1225 3.514 61.1225 4.468C61.1225 5.71 60.2225 6.664 58.6745 6.664H58.6385ZM65.6933 13L68.3393 0.993999H66.2333L63.5873 13H65.6933ZM73.2315 13.216C76.1475 13.216 77.8215 11.308 77.8215 9.238C77.8215 5.764 71.9175 6.016 71.9175 4.198C71.9175 3.388 72.7635 2.668 73.8975 2.668C75.1575 2.668 76.5795 3.172 77.4255 4.234L78.7755 2.74C77.8035 1.534 76.0755 0.813999 74.1855 0.813999C71.4315 0.813999 69.6855 2.614 69.6855 4.54C69.6855 8.014 75.5715 7.654 75.5715 9.616C75.5715 10.408 74.9415 11.344 73.4115 11.344C71.7375 11.344 70.2255 10.606 69.3975 9.472L68.0475 11.02C68.9835 12.298 70.9635 13.216 73.2315 13.216ZM83.5494 13L85.7814 2.848H89.4174L89.8314 0.993999H80.4534L80.0394 2.848H83.6754L81.4434 13H83.5494ZM91.5081 9.328L93.6861 0.993999H91.3821L89.8701 9.328H91.5081ZM90.0141 13.198C90.7521 13.198 91.3821 12.586 91.3821 11.848C91.3821 11.2 90.8781 10.678 90.2481 10.678C89.4921 10.678 88.8621 11.29 88.8621 12.046C88.8621 12.676 89.3661 13.198 90.0141 13.198Z"
							fill="#DEDEDE"
						/>
					</svg>
				</div>
			</div>
		);
	}
}
