import React from 'react';
import privacyBg_8 from './privacyBg_8.png';
import { SubMenu } from '../../components/subMenu/subMenuComponent';
import { subMenuList } from '../../config/subMenuList';
export class PrivacyComponentIndex5 extends React.Component<any, any> {
	// privacy slide 8
	render() {
		return (
			<div id="PrivacyComponentIndex5">
				{/* 背景 */}
				<div
					style={{
						position: 'absolute',
						left: '0px',
						top: '0px'
					}}
				>
					<img src={privacyBg_8} style={{ objectFit: 'contain' }} />
				</div>
				{/* 背景栅格 */}
				<div
					style={{
						position: 'absolute',
						width: '832px',
						height: '892px',
						left: '257px',
						top: '145px'
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
					bgColor={subMenuList[1].bgColor}
					indexGroup={subMenuList[1].indexGroup}
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
