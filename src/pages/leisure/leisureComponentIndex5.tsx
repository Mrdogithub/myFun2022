import React from 'react';
import leisureBg_5 from './leisureBg_5.png';
export class LeisureComponentIndex5 extends React.Component {
	render() {
		return (
			<div
				id="LeisureComponentIndex5"
				style={{
					background: '#5C5C6F',
					width: '100%',
					height: ' 100%'
				}}
			>
				{/* 背景图片*/}
				<div>
					<img src={leisureBg_5} />
				</div>
				{/* 背景图片右侧遮罩*/}
				<div
					style={{
						position: 'absolute',
						width: '683px',
						height: '896px',
						left: '683px',
						top: '1024px',
						backgroundBlendMode: 'multiply',
						opacity: '0.69',
						transform: 'matrix(1, 0, 0, -1, 0, 0)'
					}}
				>
					<svg width="683" height="748" viewBox="0 0 683 748" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g opacity="0.69">
							<rect
								width="683"
								height="896"
								transform="matrix(1 0 0 -1 0 896)"
								fill="url(#paint0_linear_729_1121)"
								style={{
									mixBlendMode: 'multiply'
								}}
							/>
						</g>
						<defs>
							<linearGradient
								id="paint0_linear_729_1121"
								x1="642"
								y1="340.956"
								x2="407.905"
								y2="324.237"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#1A1B2F" />
								<stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				{/* 右下角文本背景*/}
				<div
					style={{
						position: 'absolute',
						width: '832px',
						height: '370px',
						left: '534px',
						top: '656px',
						background: '#717081'
					}}
				/>
				{/* 标题*/}
				<div
					style={{
						/* music studio */
						position: 'absolute',
						left: '110px',
						top: '825px'
					}}
					className="dFordNormalTitle"
				>
					music studio
				</div>

				{/* 文本*/}
				<div
					style={{
						/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. */

						position: 'absolute',
						left: '661px',
						top: '784px',
						width: '578px',
						height: '93px'
					}}
					className="dFordNormalText"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum
					libero tincidunt efficitur. Maecenas dapibus condimentum commodo.
				</div>
				{/* 文本图标*/}
				<div
					style={{
						position: 'absolute',
						width: '68px',
						height: '0px',
						left: '661px',
						top: '764px',
						transform: 'rotate(180deg)'
					}}
				>
					<svg width="68" height="8" viewBox="0 0 68 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="68" y1="4" y2="4" stroke="#BCB4E8" strokeWidth="8" />
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
			</div>
		);
	}
}
