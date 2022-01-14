import React from 'react';
import introBgMask from './introBgMask.png';
export class FingerPrint extends React.Component {
	render() {
		return (
			<div
				style={{
					width: '100%',
					height: '100%',
					background: 'linear-gradient(349.98deg, #131A20 9.93%, rgba(190, 151, 129, 0.28) 102.69%)'
				}}
			>
				<div>
					<div />
					<img src={introBgMask} />
				</div>
				<div
					style={{
						position: 'absolute',
						width: '244px',
						height: '244px',
						left: '556px',
						top: '375px',
						opacity: 0.6
					}}
				>
					<svg width="244" height="244" viewBox="0 0 244 244" fill="none" xmlns="http://www.w3.org/2000/svg">
						<mask
							id="mask0_1275_1109"
							style={{ maskType: 'alpha' }}
							maskUnits="userSpaceOnUse"
							x="0"
							y="0"
							width="244"
							height="244"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M66 0H0V66H66V0ZM66 178H0V244H66V178ZM178 0H244V66H178V0ZM244 178H178V244H244V178Z"
								fill="#C4C4C4"
							/>
						</mask>
						<g mask="url(#mask0_1275_1109)">
							<rect
								opacity="0.6"
								x="2.5"
								y="2.5"
								width="239"
								height="239"
								rx="17.5"
								stroke="white"
								strokeWidth="5"
							/>
						</g>
					</svg>
				</div>

				<div
					style={{
						position: 'absolute',
						width: '363px',
						height: '224px',
						left: '501px',
						top: '386px'
					}}
				>
					<svg
						width="363"
						height="224"
						viewBox="0 0 363 224"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
					>
						<mask
							id="mask0_1275_1100"
							style={{ maskType: 'alpha' }}
							maskUnits="userSpaceOnUse"
							x="0"
							y="0"
							width="363"
							height="224"
						>
							<rect width="363" height="224" fill="url(#pattern0)" />
						</mask>
						<g mask="url(#mask0_1275_1100)">
							<rect x="90" y="19" width="245" height="205" fill="white" />
						</g>
						<defs>
							<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
								<use
									xlinkHref="#image0_1275_1100"
									transform="translate(-0.000275482) scale(0.00440771 0.00714286)"
								/>
							</pattern>
							<image
								id="image0_1275_1100"
								width="227"
								height="140"
								xlinkHref="data:image/png;base64,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"
							/>
						</defs>
					</svg>
				</div>

				<div
					style={{
						position: 'absolute',
						width: '321px',
						height: '0px',
						left: '522px',
						top: '485px'
					}}
				>
					<svg width="321" height="3" viewBox="0 0 321 3" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line y1="1.5" x2="321" y2="1.5" stroke="url(#paint0_linear_1275_1110)" strokeWidth="3" />
						<defs>
							<linearGradient
								id="paint0_linear_1275_1110"
								x1="22.5383"
								y1="3"
								x2="290.949"
								y2="3"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="white" stopOpacity="0" />
								<stop offset="0.520864" stopColor="white" />
								<stop offset="1" stopColor="white" stopOpacity="0" />
							</linearGradient>
						</defs>
					</svg>
				</div>

				<div
					style={{
						position: 'absolute',
						width: '321px',
						height: '0px',
						left: '522px',
						top: '487px',
						filter: ' blur(12px)'
					}}
				>
					<svg width="345" height="31" viewBox="0 0 345 31" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g filter="url(#filter0_f_1275_1111)">
							<line
								x1="12"
								y1="15.5"
								x2="333"
								y2="15.5"
								stroke="url(#paint0_linear_1275_1111)"
								strokeWidth="7"
							/>
						</g>
						<defs>
							<filter
								id="filter0_f_1275_1111"
								x="0"
								y="0"
								width="345"
								height="31"
								filterUnits="userSpaceOnUse"
								colorInterpolationFilters="sRGB"
							>
								<feFlood floodOpacity="0" result="BackgroundImageFix" />
								<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
								<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_1275_1111" />
							</filter>
							<linearGradient
								id="paint0_linear_1275_1111"
								x1="4.48723"
								y1="19"
								x2="327.536"
								y2="19"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="white" stopOpacity="0" />
								<stop offset="0.520864" stopColor="white" />
								<stop offset="1" stopColor="white" stopOpacity="0" />
							</linearGradient>
						</defs>
					</svg>
				</div>

				<div
					style={{
						position: 'absolute',
						width: '388px',
						height: '150px',
						left: '484px',
						top: '500px'
					}}
				>
					<svg width="388" height="150" viewBox="0 0 388 150" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="388" height="150" fill="url(#paint0_radial_1275_1112)" />
						<defs>
							<radialGradient
								id="paint0_radial_1275_1112"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(194) rotate(90) scale(98.6842 134.209)"
							>
								<stop stopColor="white" />
								<stop offset="0.437775" stopColor="#C1B9B4" stopOpacity="0.37" />
								<stop offset="1" stopColor="#C5B297" stopOpacity="0" />
							</radialGradient>
						</defs>
					</svg>
				</div>

				<div
					className="dFordTextThin"
					style={{
						position: 'absolute',
						width: '355px',
						height: '37px',
						left: '509px',
						top: '683px'
					}}
				>
					Finger Print Sensor Login
				</div>
			</div>
		);
	}
}
