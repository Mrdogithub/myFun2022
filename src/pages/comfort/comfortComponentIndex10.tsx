import React from 'react';
import comfortBg_10 from './comfortBg_10.png';
import { SubMenu } from '../../components/subMenu/subMenuComponent';
import { subMenuList } from '../../config/subMenuList';
export class ComfortComponentIndex10 extends React.Component<any, any> {
	render() {
		return (
			<div id='ProjectMagazine'>
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
					<img src={comfortBg_10} style={{ objectFit: 'cover' }} />
				</div>
				{/* 背景图片全遮罩 */}
				<div
					style={{
						/* Rectangle 139 */

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
						<rect width="1366" height="1024" fill="url(#paint0_linear_1205_1331)" fillOpacity="0.22" />
						<defs>
							<linearGradient
								id="paint0_linear_1205_1331"
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
				{/* 背景图片左下角遮罩 */}
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
							fill="url(#paint0_linear_1205_1330)"
							style={{ mixBlendMode: 'multiply' }}
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1205_1330"
								x1="346.44"
								y1="512"
								x2="203.503"
								y2="926.501"
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
					<svg width="833" height="892" viewBox="0 0 833 892" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
						<line opacity="0.3" x1="277.5" y1="-2.18557e-08" x2="277.5" y2="892" stroke="#E8E8E8" />
						<line opacity="0.3" x1="555.5" y1="-2.18557e-08" x2="555.5" y2="892" stroke="#E8E8E8" />
						<line opacity="0.3" x1="832.5" y1="-2.18557e-08" x2="832.5" y2="892" stroke="#E8E8E8" />
					</svg>
				</div>
				<div
					style={{
						position: 'absolute',
						left: '114px',
						top: '907px'
					}}
					className = 'dFordNormalTitle'
				>
					Projectio tech
				</div>
				<SubMenu
					right="0px"
					bottom="0px"
					bgColor={subMenuList[5].bgColor}
					indexGroup={subMenuList[5].indexGroup}
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
