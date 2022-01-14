import React from 'react';
import leisureBg_3 from './leisureBg_3.png';
export class LeisureComponentIndex3 extends React.Component {
	render() {
		return (
			<div id="LeisureComponentIndex3">
				{/*背景图片*/}
				<div>
					<img src={leisureBg_3} />
				</div>
				{/*背景图片底部遮罩*/}
				<div
					style={{
						position: 'absolute',
						width: '1366px',
						height: '689px',
						left: '0px',
						bottom: '0px',
						opacity: '0.5'
					}}
				>
					<svg
						width="1366"
						height="689"
						viewBox="0 0 1366 689"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g opacity="0.69">
							<rect
								width="1366"
								height="689"
								transform="matrix(1 0 0 -1 0 689)"
								fill="url(#paint0_linear_729_1053)"
								style={{ mixBlendMode: 'multiply' }}
							/>
						</g>
						<defs>
							<linearGradient
								id="paint0_linear_729_1053"
								x1="718.5"
								y1="4.13194e-07"
								x2="727.357"
								y2="688.938"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#1A1D67" />
								<stop offset="1" stopColor="#C1B0B4" />
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

				{/*标题*/}
				<div
					className="dFordTitle"
					style={{
						position: 'absolute',
						width: '402px',
						height: '102px',
						left: '132px',
						top: '782px'
					}}
				>
					funk bar
				</div>

				<div
					style={{
						position: 'absolute',
						width: '499px',
						height: '142px',
						left: '92px',
						top: '753px'
					}}
				>
					<svg width="503" height="146" viewBox="0 0 503 146" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path opacity="0.2" d="M501 18V2H2V79.5M501 64V144H2V126" stroke="white" strokeWidth="4" />
					</svg>
				</div>
			</div>
		);
	}
}
