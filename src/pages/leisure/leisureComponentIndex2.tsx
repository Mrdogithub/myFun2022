import React from 'react';
import LeisureBg_2 from './leisureBg_2.png';
export class LeisureComponentIndex2 extends React.Component {
	render() {
		return (
			<div id="LeisureSub">
				{/*背景图片*/}
				<div>
					<img src={LeisureBg_2} />
				</div>

				{/*右侧文本背景*/}
				<div
					style={{
						position: 'absolute',
						width: '554px',
						height: '1027px',
						left: '812px',
						top: '0px',
						background: 'rgba(99, 102, 113, 0.38)',
						backdropFilter: 'blur(48px)'
					}}
				>
					<svg
						width="554"
						height="1024"
						viewBox="0 0 554 1024"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g filter="url(#filter0_b_729_1037)">
							<rect width="554" height="1027" fill="#636671" fillOpacity="0.38" />
						</g>
						<defs>
							<filter
								id="filter0_b_729_1037"
								x="-48"
								y="-48"
								width="650"
								height="1123"
								filterUnits="userSpaceOnUse"
								colorInterpolationFilters="sRGB"
							>
								<feFlood floodOpacity="0" result="BackgroundImageFix" />
								<feGaussianBlur in="BackgroundImage" stdDeviation="24" />
								<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_729_1037" />
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="effect1_backgroundBlur_729_1037"
									result="shape"
								/>
							</filter>
						</defs>
					</svg>
				</div>
				{/*右侧文本*/}
				<div
					style={{
						position: 'absolute',
						left: '895px',
						top: '450px',
						width: '388px',
						height: '490px'
					}}
					className="dFordNormalText"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum
					libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim sem velit, eu
					blandit purus porta non. Fusce tristique, risus eget finibus euismod, diam arcu pellentesque lectus,
					ac consequat nulla purus at tellus. Class aptent taciti sociosqu ad litora torquent per conubia
					nostra, per inceptos himenaeos. In accumsan vestibulum augue laoreet pharetra. (Topic Introduction)
				</div>

				<div
					style={{
						position: 'absolute',
						width: '68px',
						height: '0px',
						left: '895px',
						top: '400px'
					}}
				>
					<svg width="68" height="8" viewBox="0 0 68 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="68" y1="4" y2="4" stroke="#BCB4E8" strokeWidth="8" />
					</svg>
				</div>

				{/* 右侧标题*/}
				<div
					style={{
						position: 'absolute',
						width: '388px',
						height: '94px',
						left: '895px',
						top: '295px',
						textAlign:'left'
					}}
					className = 'dFordTitle'
				>
				leisure
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
