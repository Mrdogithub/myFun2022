import React from 'react';
import uniqueBg_2 from './uniqueBg_2.png';
export class UniqueComponentIndex2 extends React.Component {
	render() {
		return (
			<div>
				{/*背景图片*/}
				<div>
					<img src={uniqueBg_2} />
				</div>
				{/* 背景图片右侧遮罩*/}
				<div
					style={{
						position: 'absolute',
						width: '1366px',
						height: '1024px',
						left: '0px',
						bottom: '0px',
						opacity: '0.65'
					}}
				>
					<svg
						width="1366"
						height="1024"
						viewBox="0 0 1366 1024"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g opacity="0.65">
							<rect
								width="1366"
								height="1024"
								transform="matrix(1 0 0 -1 0 1024)"
								fill="url(#paint0_linear_1026_1489)"
								style={{ mixBlendMode: 'multiply' }}
							/>
						</g>
						<defs>
							<linearGradient
								id="paint0_linear_1026_1489"
								x1="1366"
								y1="292"
								x2="0.0793241"
								y2="276.164"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#6D603F" stopOpacity="0.7" />
								<stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
							</linearGradient>
						</defs>
					</svg>
				</div>

				{/*右侧虚化背景*/}
				<div
					style={{
						position: 'absolute',
						width: '554px',
						height: '1027px',
						left: '812px',
						top: '0px',
						backdropFilter: 'blur(18px)'
					}}
				>
					<svg
						width="554"
						height="1024"
						viewBox="0 0 554 1024"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g filter="url(#filter0_b_1026_1498)">
							<rect width="554" height="1027" fill="#636671" fillOpacity="0.38" />
						</g>
						<defs>
							<filter
								id="filter0_b_1026_1498"
								x="-48"
								y="-48"
								width="650"
								height="1123"
								filterUnits="userSpaceOnUse"
								colorInterpolationFilters="sRGB"
							>
								<feFlood floodOpacity="0" result="BackgroundImageFix" />
								<feGaussianBlur in="BackgroundImage" stdDeviation="24" />
								<feComposite
									in2="SourceAlpha"
									operator="in"
									result="effect1_backgroundBlur_1026_1498"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="effect1_backgroundBlur_1026_1498"
									result="shape"
								/>
							</filter>
						</defs>
					</svg>
				</div>

				{/*标题*/}
				<div
					style={{
						/* unique */
						position: 'absolute',
						left: '894px',
						top: '295px'
					}}
					className="dFordTitle"
				>
					unique
				</div>
				{/*图标 + */}
				<div
					style={{
						/* + */
						position: 'absolute',
						left: '1222px',
						top: '275px'
					}}
				>
					<svg width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							opacity="0.8"
							d="M36.2619 21.76V16.32H21.4619V0.319997H15.5419V16.32H0.741875V21.76H15.5419V38.32H21.4619V21.76H36.2619Z"
							fill="white"
						/>
					</svg>
				</div>

				{/* 图标 横线*/}
				<div
					style={{
						position: 'absolute',
						width: '68px',
						height: '0px',
						left: '895px',
						top: '429px',
						transform: 'rotate(180deg)'
					}}
				>
					<svg width="68" height="8" viewBox="0 0 68 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="68" y1="4" y2="4" stroke="#F1F8FF" strokeWidth="8" />
					</svg>
				</div>
				<div
					style={{
						/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim sem velit, eu blandit purus porta non. Fusce tristique, risus eget finibus euismod, diam arcu pellentesque lectus, ac consequat nulla purus at tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In accumsan vestibulum augue laoreet pharetra. (Topic Introduction) */

						position: 'absolute',
						left: '895px',
						top: '450px',
						width: '378px',
						height: '490px',
					}}
					className = 'dFordNormalText'
				>
				
				
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum
					libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim sem velit, eu
					blandit purus porta non. Fusce tristique, risus eget finibus euismod, diam arcu pellentesque lectus,
					ac consequat nulla purus at tellus. Class aptent taciti sociosqu ad litora torquent per conubia
					nostra, per inceptos himenaeos. In accumsan vestibulum augue laoreet pharetra. (Topic Introduction)
				</div>
				{/* 栅格背景 */}
				<div
					style={{
						position: 'absolute',
						width: '832px',
						height: '894px',
						left: '257px',
						top: '130px'
					}}
				>
					<svg width="833" height="894" viewBox="0 0 833 894" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="894" stroke="#E8E8E8" />
						<line opacity="0.3" x1="277.5" y1="-2.18557e-08" x2="277.5" y2="894" stroke="#E8E8E8" />
						<line opacity="0.3" x1="555.5" y1="-2.18557e-08" x2="555.5" y2="894" stroke="#E8E8E8" />
						<line opacity="0.3" x1="832.5" y1="-2.18557e-08" x2="832.5" y2="894" stroke="#E8E8E8" />
					</svg>
				</div>
			</div>
		);
	}
}
