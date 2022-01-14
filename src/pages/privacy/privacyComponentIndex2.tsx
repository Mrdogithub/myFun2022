import React from 'react';
import privacySubBg from './privacyBg_2.png';

export class PrivacyComponentIndex2 extends React.Component<any, any> {
	constructor(props: any) {
		super(props);

		
	}
	render() {
		return (
			<div id="PrivacyComponentIndex2">
				{/* 背景图片 */}
				<div>
					<img src={privacySubBg} />
				</div>

				{/* 侧边栏背景 */}
				<div
					style={{
						position: 'absolute',
						width: '533px',
						height: '1024px',
						left: '1px',
						top: '0px',
						background: 'rgba(26, 32, 50, 0.16)',
						backdropFilter: 'blur(15px)'
					}}
				>
					<svg
						width="533"
						height="1024"
						viewBox="0 0 533 1024"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g filter="url(#filter0_b_543_916)">
							<rect width="533" height="1024" fill="#1A2032" fillOpacity="0.16" />
						</g>
						<defs>
							<filter
								id="filter0_b_543_916"
								x="-46"
								y="-46"
								width="625"
								height="1116"
								filterUnits="userSpaceOnUse"
								colorInterpolationFilters="sRGB"
							>
								<feFlood floodOpacity="0" result="BackgroundImageFix" />
								<feGaussianBlur in="BackgroundImage" stdDeviation="23" />
								<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_543_916" />
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="effect1_backgroundBlur_543_916"
									result="shape"
								/>
							</filter>
						</defs>
					</svg>
				</div>
				{/* 背景竖纹 */}
				<div
					style={{
						position: 'absolute',
						width: '832px',
						height: '892px',
						left: '257px',
						top: '132px'
					}}
				>
					<svg width="833" height="892" viewBox="0 0 833 892" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="892" stroke="#E8E8E8" />
						<line opacity="0.3" x1="277.5" y1="-2.18557e-08" x2="277.5" y2="892" stroke="#E8E8E8" />
						<line opacity="0.3" x1="555.5" y1="-2.18557e-08" x2="555.5" y2="892" stroke="#E8E8E8" />
						<line opacity="0.3" x1="832.5" y1="-2.18557e-08" x2="832.5" y2="892" stroke="#E8E8E8" />
					</svg>
				</div>
				{/* 左侧文本 */}
				<div
					style={{
						position: 'absolute',
						width: '298px',
						height: '490px',
						left: '109px',
						top: '476px'
					}}
					className={'dFordText ' + this.props.inAnimate.textAnimate}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum
					libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim sem velit, eu
					blandit purus porta non. Fusce tristique, risus eget finibus euismod, diam arcu pellentesque lectus,
					ac consequat nulla purus at tellus.
				</div>
				{/* 左侧标题 */}
				<div
					style={{
						position: 'absolute',
						width: '335px',
						height: '94px',
						left: '105px',
						top: '342px'
					}}
					className={'dFordTitle ' + this.props.inAnimate.titleAnimate}
				>
					Privacy
				</div>
				{/* 左侧标题加号icon */}
				<div
					style={{
						position: 'absolute',
						width: '45px',
						height: '110px',
						left: '448px',
						top: '335px'
					}}
					className={this.props.inAnimate.titleAnimate}
				>
					<svg width="41" height="44" viewBox="0 0 41 44" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							opacity="0.8"
							d="M40.2058 23.56V19.78H22.5658V0.789999H18.5158V19.78H0.785781V23.56H18.5158V43.09H22.5658V23.56H40.2058Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
		);
	}
}
