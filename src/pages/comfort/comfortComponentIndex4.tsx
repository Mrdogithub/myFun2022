import React from 'react';
import comfortBg_4_new from './comfortBg_4_new.png';
import { SubMenu } from '../../components/subMenu/subMenuComponent';
import { subMenuList } from '../../config/subMenuList';
export class ComfortComponentIndex4 extends React.Component<any, any> {
	render() {
		return (
			<div id="ComfortComponentIndex4">
				<div
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						top: '0px',
						background:
							'linear-gradient(175.17deg, rgba(236, 168, 158, 0.16) 12.52%, rgba(27, 22, 82, 0.16) 96.1%)'
					}}
				/>

				<div>
					<img src={comfortBg_4_new} />
				</div>

				<div
					style={{
						position: 'absolute',
						width: '768.73px',
						height: '239px',
						left: '434px',
						top: '151px'
					}}
				>
					<svg width="773" height="243" viewBox="0 0 773 243" fill="none" xmlns="http://www.w3.org/2000/svg">
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
						left: ' 462.19px',
						top: '177px'
					}}
				>
					voice-initiated control system
				</div>

				<div
					style={{
						/* Rectangle 81 */

						position: 'absolute',
						width: '554px',
						height: '288px',
						left: '812px',
						top: '736px',

						background: 'rgba(30, 33, 41, 0.26)',
						backdropFilter: 'blur(48px)'
						/* Note: backdrop-filter has minimal browser support */
					}}
				/>

				<div
					className="dFordText"
					style={{
						/* providing natural and relaxing viewing by conforming to user’s learned behaviors */

						position: 'absolute',
						width: '441px',
						height: '62px',
						left: '890px',
						top: '816px'
					}}
				>
					providing natural and relaxing viewing by conforming to user’s learned behaviors
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
					<svg width="833" height="892" viewBox="0 0 833 892" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
						<line opacity="0.3" x1="277.5" y1="-2.18557e-08" x2="277.5" y2="892" stroke="#E8E8E8" />
						<line opacity="0.3" x1="555.5" y1="-2.18557e-08" x2="555.5" y2="892" stroke="#E8E8E8" />
						<line opacity="0.3" x1="832.5" y1="-2.18557e-08" x2="832.5" y2="892" stroke="#E8E8E8" />
					</svg>
				</div>

				<div
					style={{
						/* Group 113 */

						position: 'absolute',
						width: '97px',
						height: '97px',
						left: '534px',
						top: '559px'
					}}
				>
					<svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
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
				<SubMenu
					right="0px"
					bottom="0px"
					bgColor={subMenuList[4].bgColor}
					indexGroup={subMenuList[4].indexGroup}
					onSwiperTo={(index: number) => {
						console.log(index);
					}}
					noScale="true"
					className={this.props.inAnimate.footer}
				/>
			</div>
		);
	}
}
