import React from 'react';
import comfortBg_2_new from './comfortBg_2_new.png';
export class ComfortComponentIndex2 extends React.Component {
	render() {
		return (
			<div id="ComfortComponentIndex2">
				<div
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						top: '0px',
						background:
							'linear-gradient(175.17deg, rgba(236, 168, 158, 0.16) 12.52%, rgba(27, 22, 82, 0.16) 96.1%)'
					}}
				/>

				<div
					style={{
						position: 'absolute',
						width: '100%',
						height: '558px',
						left: '0px',
						top: '466px',
						background: 'linear-gradient(350.14deg, #0B0B0B 19.47%, rgba(4, 4, 4, 0) 53.64%)',
						mixBlendMode: 'multiply',
						opacity: '0.34'
					}}
				/>

				<div>
					<img src={comfortBg_2_new} />
				</div>

				{/*文本*/}
				<div
					className="dFordText"
					style={{
						/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim sem velit, eu blandit purus porta non. */
						position: 'absolute',
						width: '559px',
						height: '273px',
						left: '118px',
						top: '786px'
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum
					libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim sem velit, eu
					blandit purus porta non.
				</div>

				{/*标题*/}
				<div
					className="dFordTitle"
					style={{
						position: 'absolute',
						width: '396px',
						height: '94px',
						left: '862px',
						top: '796px'
					}}
				>
					Comfort
				</div>

				<div
					style={{
						position: 'absolute',
						width: '45px',
						height: '110px',
						right: '60px',
						top: '790px'
					}}
				>
					<svg width="41" height="44" viewBox="0 0 41 44" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							opacity="0.8"
							d="M40.2058 23.56V19.78H22.5658V0.789999H18.5158V19.78H0.785781V23.56H18.5158V43.09H22.5658V23.56H40.2058Z"
							fill="white"
						/>
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
