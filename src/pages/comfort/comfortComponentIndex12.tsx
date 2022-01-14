import React from 'react';
import comfortBg_12 from './comfortBg_12.png';
export class ComfortComponentIndex12 extends React.Component {
	render() {
		return (
			<div>
				{/* 背景图片*/}
				<div>
					<img src={comfortBg_12} />
				</div>
				{/* 背景图片全局遮罩*/}
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
						<rect width="1366" height="1024" fill="url(#paint0_linear_1254_1401)" fillOpacity="0.16" />
						<defs>
							<linearGradient
								id="paint0_linear_1254_1401"
								x1="599.049"
								y1="101.099"
								x2="657.633"
								y2="1025.61"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#ECA89E" />
								<stop offset="1" stopColor="#1B1652" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				{/* 背景图片局部遮罩*/}
				<div
					style={{
						/* Rectangle 83 */

						position: 'absolute',
						width: '1396px',
						height: '1024px',
						left: '-10px',
						top: '1024px',
						transform: 'matrix(1, 0, 0, -1, 0, 0)'
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
							width="1396"
							height="1024"
							transform="matrix(1 0 0 -1 -10 1024)"
							fill="url(#paint0_linear_1254_1400)"
							style={{mixBlendMode:'multiply'}}
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1254_1400"
								x1="607.5"
								y1="953.5"
								x2="625.003"
								y2="328.49"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#353F4B" stopOpacity="0.71" />
								<stop offset="1" stopColor="#423C51" stopOpacity="0" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				{/* 下半部分背景*/}
				<div
					style={{
						position: 'absolute',
						width: '1366px',
						height: ' 612.5px',
						left: '0px',
						top: '411.5px',
						opacity: ' 0.75'
					}}
				>
					<svg
						width="1366"
						height="613"
						viewBox="0 0 1366 613"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path opacity="0.75" d="M0 0.5L683 91L1366 0.5V613H0V0.5Z" fill="#1D1B1D" />
					</svg>
				</div>
				{/* 下半部分腰线*/}
				<div
					style={{
						position: 'absolute',
						width: '1368.5px',
						height: '95px',
						left: '-2.5px',
						top: '417px'
					}}
				>
					<svg width="1370" height="98" viewBox="0 0 1370 98" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1369 1L686 96L0.5 1" stroke="#4F4F4F" strokeWidth="2" />
					</svg>
				</div>
				{/* 底部中线*/}
				<div
					style={{
						position: 'absolute',
						width: '118px',
						height: '0px',
						left: '626px',
						top: '906px',
					}}
				>
					<svg width="2" height="118" viewBox="0 0 2 118" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="1" y1="-4.37114e-08" x2="1.00001" y2="118" stroke="white" strokeWidth="2" />
					</svg>
				</div>
				{/* 底部按钮*/}
				<div
					style={{
						position: 'absolute',
						width: '139px',
						height: '139px',
						left: '615px',
						top: '835px'
					}}
				>
					<svg width="139" height="139" viewBox="0 0 139 139" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle opacity="0.28" cx="69.5" cy="69.5" r="68.5" stroke="white" strokeWidth="2" />
					</svg>
				</div>
				{/* 栅格背景*/}
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
				{/* 文本 continue to */}
				<div
					style={{
						position: 'absolute',
						width: '429px',
						height: '72px',
						left: '302px',
						top: '641px'
					}}
					className = 'dFordNormalTitle'
				>
					continue to 
				</div>
				{/* 文本 continue to */}
				<div
					style={{
						position: 'absolute',
						width: '267px',
						height: '72px',
						left: '745px',
						top: '641px',
						color:'#C2BDFF'
					}}
					className = 'dFordNormalTitle'
				>
					leisure 
				</div>

				<div
					style={{
						/* + */

						position: 'absolute',
						width: '43px',
						height: '102px',
						left: '1020px',
						top: '633px'
					}}
				>
					<svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							opacity="0.8"
							d="M38.15 22.548V16.836H22.61V0.0359967H16.394V16.836H0.853969V22.548H16.394V39.936H22.61V22.548H38.15Z"
							fill="#C2BDFF"
						/>
					</svg>
				</div>
			</div>
		);
	}
}
