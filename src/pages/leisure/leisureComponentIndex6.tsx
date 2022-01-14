import React from 'react';
import leisureBg_6 from './leisureBg_6.png';
import leisureBg_6_1 from './leisureBg_6_1.png';
import leisureBg_6_2 from './leisureBg_6_2.png';
import '../../assets/animate.css';
export class LeisureComponentIndex6 extends React.Component {
	render() {
		return (
			<div
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					left: '0px',
					top: '0px'
				}}
			>
				{/*背景图片*/}
				<div
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%'
					}}
				>
					<img src={leisureBg_6} />
				</div>

				<div
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						left: '0px',
						top: '0px',
						background: ' linear-gradient(207.15deg, #3D2B37 19.73%, rgba(123, 175, 253, 0.31) 73.87%)',
						mixBlendMode: 'multiply',
						transform: ' matrix(1, 0, 0, -1, 0, 0)'
					}}
				/>

				<div
					style={{
						position: 'absolute',
						width: '100%',
						height: '594px',
						left: '-7px',
						top: '0px',

						background: 'rgba(17, 17, 17, 0.04)',
						opacity: ' 0.66',
						backdropFilter: 'blur(25px)'
					}}
				/>

				<div
					className="floating-balloon-1"
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						left: '0px',
						background: `linear-gradient(180deg, rgba(45, 107, 126, 0.2) 12.3%, rgba(186, 98, 217, 0.154) 88.58%), url(${leisureBg_6_2})`,
						mixBlendMode: 'color-dodge'
					}}
				/>
				<div
					className="floating-balloon-1"
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						left: '0px',
						background: `linear-gradient(180deg, rgba(45, 107, 126, 0.2) 12.3%, rgba(186, 98, 217, 0.154) 88.58%), url(${leisureBg_6_2})`,
						mixBlendMode: 'color-dodge'
					}}
				/>
				<div
					className="floating-balloon-2"
					style={{
						position: 'absolute',
						width: '605.95px',
						height: ' 613.53px',
						right: '200px',
						top: '299px',

						background: `url(${leisureBg_6_1})`,
						mixBlendMode: 'screen',
						filter: ' drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
					}}
				/>

				<div
					style={{
						position: 'absolute',
						width: '100%',
						height: '369px',
						left: '-2px',
						top: '0px',
						background: 'linear-gradient(180deg, #331C36 -9.89%, rgba(43, 46, 55, 0) 100%)',
						mixBlendMode: 'soft-light'
					}}
				/>

				{/* 标题*/}
				<div
					style={{
						/* music studio */

						position: 'absolute',
						left: '82px',
						top: '728px'
					}}
					className="dFordNormalTitle"
				>
					music studio
				</div>

				{/*文本图标*/}
				<div
					style={{
						/* Line 39 */

						position: 'absolute',
						width: '68px',
						height: '0px',
						left: '82px',
						top: '838px',
						transform: ' rotate(180deg)'
					}}
				>
					<svg width="68" height="8" viewBox="0 0 68 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="68" y1="4" y2="4" stroke="#BCB4E8" strokeWidth="8" />
					</svg>
				</div>
			


				{/*文本*/}
				<div
					style={{
						/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. */
	
						position: 'absolute',
						width: '626px',
						height: '93px',
						left: '82px',
						top: '858px'
					}}
					className = 'dFordNormalText'
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum
					libero tincidunt efficitur. Maecenas dapibus condimentum commodo.
				</div>
			</div>
		);
	}
}
