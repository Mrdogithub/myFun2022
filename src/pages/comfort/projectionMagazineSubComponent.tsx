import React from 'react';
import { Z_BINARY } from 'zlib';
import comfortBg_11_1 from './comfortBg_11_1.png';
import comfortBg_11_2 from './comfortBg_11_2.png';
export class ProjectionMagaineSub extends React.Component {
	render() {
		return (
			<div>
				{/* 上半部分背景 */}
				<div
					style={{
						position: 'absolute',
						left: '0px',
						top: '0px',
						zIndex: '9'
					}}
				>
					<img src={comfortBg_11_1} />
				</div>
				{/* 上半部分背景全部遮罩 */}
				<div
					style={{
						position: 'absolute',
						width: '1385px',
						height: '1024px',
						left: '0px',
						top: '0px',
						zIndex: '9'
					}}
				>
					<svg
						width="1366"
						height="574"
						viewBox="0 0 1366 574"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="-19"
							width="1385"
							height="1024"
							fill="url(#paint0_linear_1254_1382)"
							fillOpacity="0.16"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1254_1382"
								x1="588.382"
								y1="101.099"
								x2="646.168"
								y2="1025.71"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#ECA89E" />
								<stop offset="1" stopColor="#1B1652" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				{/* 上半部分背景下半部分遮罩 */}
				<div
					style={{
						position: 'absolute',
						width: '1396px',
						height: '447px',
						left: ' 0px',
						top: '130px',
						zIndex: '9'
					}}
				>
					<svg
						width="1366"
						height="444"
						viewBox="0 0 1366 444"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="-10"
							width="1396"
							height="447"
							fill="url(#paint0_linear_1254_1381)"
							style={{ mixBlendMode: 'multiply' }}
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1254_1381"
								x1="594"
								y1="255"
								x2="589"
								y2="586"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopOpacity="0" />
								<stop offset="1" stopColor="#423C51" stopOpacity="0.42" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				{/* 下半部分背景 */}
				<div
					style={{
						position: 'absolute',
						left: '0px',
						bottom: '0px'
					}}
				>
					<img src={comfortBg_11_2} />
				</div>
				{/* 下半部分背景全部遮罩 */}
				<div
					style={{
						position: 'absolute',
						width: '1366px',
						height: '1024px',
						left: '0px',
						top: '373px'
					}}
				>
					<svg
						width="1366"
						height="651"
						viewBox="0 0 1366 651"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="1366" height="1024" fill="url(#paint0_linear_1254_1359)" fillOpacity="0.22" />
						<defs>
							<linearGradient
								id="paint0_linear_1254_1359"
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
					Î
				</div>
				{/* 下半部分背景下半部分遮罩 */}
				<div
					style={{
						position: 'absolute',
						width: '1376px',
						height: '1028px',
						left: '-10px',
						top: '373px'
					}}
				>
					<svg
						width="1366"
						height="651"
						viewBox="0 0 1366 651"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="-10"
							width="1376"
							height="1028"
							fill="url(#paint0_linear_1254_1358)"
							style={{ mixBlendMode: 'multiply' }}
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1254_1358"
								x1="338.976"
								y1="514"
								x2="450.723"
								y2="986.572"
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
			</div>
		);
	}
}
