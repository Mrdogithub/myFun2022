import React from 'react';
import homeBg_1 from './homeBg_1.png';
export class HomeComponentIndex1 extends React.Component {
	render() {
		return (
			<div>
				{/* 背景图片*/}
				<div>
					<img src={homeBg_1} />
				</div>

				{/* 标题*/}
				<div
					style={{
						/* Demo Intro */

						position: 'absolute',
						width: '100%',
						height: '190px',
						textAlign: 'center',
						top: '439px'
					}}
					className="dFordMainTitle"
				>
					Demo Intro
				</div>

				{/*文本*/}
				<div
                    className = 'dFordNormalText'
					style={{
						/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. */

						position: 'absolute',
						width: '636px',
						height: '167px',
						left: '365px',
						top: '610px'
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</div>
			</div>
		);
	}
}
