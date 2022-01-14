import React from 'react';
import comfortBg_3 from './comfortBg_3.png';
export class VoiceInitiated extends React.Component {
	render() {
		return (
			<div style = {{background:'#5F6871', width:'100%', height:'100%'}} id='VoiceInitiated'>
				{/* 背景图片 */}
				<div
					style={{
						position: 'absolute',
						left: '0px',
					}}
				>
					<img src={comfortBg_3}  style={{    objectFit: 'contain'}}/>
				</div>

				{/* 背景遮罩 覆盖整张图片*/}
				<div
					style={{
						position: 'absolute',
						width: '1139px',
						height: '1024px',
						left: '-24px',
						top: '0px'
					}}
				>
					<svg
						width="1089"
						height="845"
						viewBox="0 0 1089 845"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="-30"
							width="1139"
							height="1024"
							fill="url(#paint0_linear_1175_1185)"
							fillOpacity="0.16"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1175_1185"
								x1="469.5"
								y1="101.099"
								x2="539.636"
								y2="1023.99"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#ECA89E" />
								<stop offset="1" stopColor="#1B1652" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				{/* 背景遮罩2*/}
				<div
					style={{
						position: 'absolute',
						width: '1111px',
						height: '394px',
						left: '-10px',
						top: '466px'
					}}
				>
					<svg
						width="1089"
						height="379"
						viewBox="0 0 1089 379"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g opacity="0.34">
							<rect
								width="1111"
								height="394"
								fill="url(#paint0_linear_543_761)"
								style={{ mixBlendMode: 'multiply' }}
							/>
						</g>
						<defs>
							<linearGradient
								id="paint0_linear_543_761"
								x1="87.7105"
								y1="367.017"
								x2="78.0059"
								y2="209.598"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#0B0B0B" />
								<stop offset="1" stopColor="#040404" stopOpacity="0" />
							</linearGradient>
						</defs>
					</svg>
				</div>
			
						{/* 底部标题*/}
				<div
					style={{
						position: 'absolute',
						width: '819px',
						height: '142px',
						left: '101px',
						top: '792px'
					}}
				>
				
				</div>

			{/* 右侧文本*/}
				<div
					style={{
						position: 'absolute',
						width: '478px',
						height: '58px',
						left: '782px',
						top: '734px'
					}}
				>
					
				</div>
				{/* 右侧文本图标*/}
				<div
					style={{
						position: 'absolute',
						width: '68px',
						height: '0px',
						left: '825px',
						top: '711px',
						transform: ' rotate(180deg)'
					}}
				>
					<svg width="68" height="8" viewBox="0 0 68 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="68" y1="4" y2="4" stroke="#AA9281" strokeWidth="8" />
					</svg>
				</div>
				{/* 背景栅格 */}
				<div
					style={{
						position: 'absolute',
						width: '832px',
						height: '892px',
						left: '257px',
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
