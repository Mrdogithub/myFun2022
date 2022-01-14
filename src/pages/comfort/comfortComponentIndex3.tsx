import React from 'react';
import comfortBg_3_new from './comfortBg_3_new.png';
import { SubMenu } from '../../components/subMenu/subMenuComponent';
import { subMenuList } from '../../config/subMenuList';
export class ComfortComponentIndex3 extends React.Component<any, any> {
	render() {
		return (
			<div id="ComfortComponentIndex3" style={{ background: '#5F6871', width: '100%', height: '100%' }}>
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
						height: '394px',
						left: '0px',
						top: '466px',
						background: 'linear-gradient(350.14deg, #0B0B0B 19.47%, rgba(4, 4, 4, 0) 53.64%)',
						mixBlendMode: 'multiply',
						opacity: '0.34'
					}}
				/>

				<div>
					<img src={comfortBg_3_new} />
				</div>

				<div
					className="dFordNormalTitle"
					style={{
						position: 'absolute',
						width: '621px',
						height: '72px',
						left: '101px',
						top: '792px',
                        color: '#FCE9CA',
                        textAlign:'left'
					}}
				>
					MAXIMAL
				</div>

				<div
					className="dFordNormalTitle"
					style={{
						position: 'absolute',
						width: '819px',
						height: '72px',
						left: '101px',
                        top: '862px',
                        textAlign:'left'
					}}
				>
					SPACE UTILIZATION
				</div>


				<div
					className="dFordText"
					style={{
						position: 'absolute',
						width: '441px',
						height: '62px',
						left: '890px',
						top: '816px',
						zIndex: '2'
					}}
				>
					providing natural and relaxing viewing by conforming to user’s learned behaviors
				</div>

				<div
					style={{
						position: 'absolute',
						width: '554px',
						height: '288px',
						left: '812px',
						top: '736px',

						background: 'rgba(30, 33, 41, 0.26)',
						backdropFilter: ' blur(48px)'
					}}
				/>

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
				<SubMenu
					right="0px"
					bottom="0px"
					bgColor={subMenuList[3].bgColor}
					indexGroup={subMenuList[3].indexGroup}
					onSwiperTo={(index: number) => {
						console.log(index);
					}}
					noScale="true"
					className={this.props.inAnimate.footer}
				/>
			</div>
		);
	}
}
