import React from 'react';
import uniqueBg_4 from './uniqueBg_4.png';
import uniqueBg_4_1 from './uniqueBg_4_1.png';
export class UniqueComponentIndex4 extends React.Component {
	render() {
		return (
			<div>
				{/*背景图片*/}
				<div style={{ position: 'absolute', left: '0px', top: '0px' }}>
					<img src={uniqueBg_4} />
				</div>
				<div
					style={{
						position: 'absolute',
						width: '1366px',
						height: '781px',
						left: '0px',
						bottom: '0px',
						opacity: '0.57'
					}}
				>
					<svg
						width="1366"
						height="781"
						viewBox="0 0 1366 781"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g opacity="0.57">
							<rect
								width="1366"
								height="781"
								transform="matrix(1 0 0 -1 0 781)"
								fill="url(#paint0_linear_1042_1817)"
								style={{ mixBlendMode: 'multiply' }}
							/>
						</g>
						<defs>
							<linearGradient
								id="paint0_linear_1042_1817"
								x1="625.5"
								y1="27.8326"
								x2="747.163"
								y2="768.155"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#294352" stopOpacity="0.7" />
								<stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
							</linearGradient>
						</defs>
					</svg>
				</div>

				{/*左下角标题*/}
				<div
					style={{
						/* NFT ART */

						position: 'absolute',
						width: '335px',
						height: '94px',
						left: '216px',
						top: '841px'
					}}
					className="dFordTitle"
				>
					NFT ART
				</div>

				<div
					style={{
						position: 'absolute',
						width: '499px',
						height: '142px',
						left: '134px',
						top: '809px'
					}}
				>
					<svg width="503" height="146" viewBox="0 0 503 146" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path opacity="0.2" d="M501 18V2H2V79.5M501 64V144H2V126" stroke="white" strokeWidth="4" />
					</svg>
				</div>
				{/*右下角标题*/}
				<div
					style={{
						/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. */
						position: 'absolute',
						left: '717px',
						top: '827px',
						width: '547px',
						height: '93px'
					}}
					/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. */

					className="dFordNormalText"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum
					libero tincidunt efficitur.
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
				{/*左侧背景图片*/}
				<div
					style={{
						/* Mask Group */

						position: 'absolute',
						width: '144.5px',
						height: '619.5px',
						left: '347px',
						top: ' 58.5px'
					}}
				>
					<svg
						width="145"
						height="620"
						viewBox="0 0 145 620"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
					>
						<mask
							id="mask0_1042_1829"
							style={{ maskType: 'alpha' }}
							maskUnits="userSpaceOnUse"
							x="0"
							y="0"
							width="145"
							height="620"
						>
							<path d="M144.5 152L0 0.5V620L142.5 588.5L144.5 152Z" fill="#C4C4C4" />
						</mask>
						<g mask="url(#mask0_1042_1829)">
							<rect
								width="496.175"
								height="797.82"
								transform="matrix(0.965926 -0.258819 0 1 -169 -110.58)"
								fill="url(#pattern_nft)"
							/>
							<rect x="-1" y="438" width="146" height="192" fill="url(#paint0_linear_1042_1829)" />
							<rect x="-1" y="1" width="146" height="406" fill="url(#paint1_linear_1042_1829)" />
						</g>
						<defs>
							<pattern id="pattern_nft" patternContentUnits="objectBoundingBox" width="1" height="1">
								<use
									xlinkHref="#image0_1042_1829"
									transform="translate(-0.143176) scale(0.00174776 0.00108696)"
								/>
							</pattern>
							<linearGradient
								id="paint0_linear_1042_1829"
								x1="152"
								y1="606.5"
								x2="57.5"
								y2="438"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.0429129" stopColor="#AEBAC9" />
								<stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
							</linearGradient>
							<linearGradient
								id="paint1_linear_1042_1829"
								x1="88.5"
								y1="63.5"
								x2="157.433"
								y2="237.625"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.0429129" stopColor="#2C353F" />
								<stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
							</linearGradient>
							<image
								id="image0_1042_1829"
								width="736"
								height="920"
							/>
						</defs>
					</svg>
				</div>
			</div>
		);
	}
}