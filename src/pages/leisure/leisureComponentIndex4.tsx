import React from 'react';
import leisureBg_4 from './leisureBg_4.png';
export class LeisureComponentIndex4 extends React.Component {
	render() {
		return (
			<div id="LeisureComponentIndex4">
				{/*背景图片*/}
				<div
					style={{
						position: 'absolute',
						left: '0px',
						top: '0px',
						zIndex: '1'
					}}
				>
					<img src={leisureBg_4} />
				</div>
				{/*背景图片左侧细节*/}
				<div
					style={{
						position: 'absolute',
						width: '1366px',
						height: '1024px',
						left: '0px',
						bottom: '0px',
						opacity: '0.69',
						transform: 'matrix(1, 0, 0, -1, 0, 0)'
					}}
				>
					<svg
						width="1089"
						height="841"
						viewBox="0 0 1089 841"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g opacity="0.69">
							<rect
								width="1366"
								height="1024"
								transform="matrix(1 0 0 -1 0 1024)"
								fill="url(#paint0_linear_847_1205)"
								style={{ mixBlendMode: 'multiply' }}
							/>
						</g>
						<defs>
							<linearGradient
								id="paint0_linear_847_1205"
								x1="-46"
								y1="542.148"
								x2="571.961"
								y2="547.048"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#1A1B2F" />
								<stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				{/*左半部分纯色背景*/}
				<div
					style={{
						position: 'absolute',
						width: '534px',
						height: '183px',
						left: '0px',
						top: '841px',
						background: '#5B5058',
						zIndex: '1'
					}}
				/>
				{/*右半部分纯色背景*/}
				<div
					style={{
						position: 'absolute',
						width: '1366px',
						height: '1024px',
						left: '0px',
						top: '0px',
						background: '#5C5C6F',
						zIndex: '0'
					}}
				/>
				{/* 右側文本背景*/}
				<div
					style={{
						position: 'absolute',
						width: '554px',
						height: '712px',
						left: '812px',
						top: '314px',
						background: 'rgba(99, 102, 113, 0.38)',
						backdropFilter: ' blur(48px)',
						zIndex: '1'
					}}
				/>
				{/* 右側文本*/}
				<div
					className="dFordNormalText"
					style={{
						position: 'absolute',
						left: '923px',
						top: '584px',
						zIndex: '1',
						width: '331px',
						height: '186px'
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum
					libero tincidunt efficitur. Maecenas dapibus condimentum commodo.
				</div>
				{/* 右側文本圖標*/}
				<div
					style={{
						position: 'absolute',
						width: '68px',
						height: '0px',
						left: '923px',
						top: '569px',
						transform: 'rotate(180deg)',
						zIndex: '1'
					}}
				>
					<svg width="68" height="8" viewBox="0 0 68 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="68" y1="4" y2="4" stroke="#BCB4E8" strokeWidth="8" />
					</svg>
				</div>
				{/* 右側文本標題*/}
				<div
					style={{
						position: 'absolute',
						left: '923px',
						top: '447px',
						zIndex: '1'
					}}
					className="dFordNormalTitle"
				>
					funk bar
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
			</div>
		);
	}
}
