import React from 'react';
import privacyBg_9 from './privacyBg_9.png';
import { SubMenu } from '../../components/subMenu/subMenuComponent';
import { subMenuList } from '../../config/subMenuList';
export class PrivacyComponentIndex9 extends React.Component<any, any> {
	// privacy slide 9
	render() {
		return (
			<div id="PrivacyComponentIndex9">
				{/* 背景 */}
				<div
					style={{
						position: 'absolute',
						top: '0px',
						left: '0px',
						width: '100%',
						height: '100%'
					}}
				>
					<img src={privacyBg_9} />
				</div>
				{/* 栅格背景 */}
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
				{/* 右侧标题背景 */}
				<div
					style={{
						position: 'absolute',
						width: '582px',
						height: '142px',
						left: '120px',
						top: '750px'
					}}
				>
					<svg width="586" height="146" viewBox="0 0 586 146" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path opacity="0.2" d="M584 18V2H2V79.5M584 64V144H2V126" stroke="white" strokeWidth="4" />
					</svg>
				</div>
				{/* 右侧标题 */}
				<div
					style={{
						position: 'absolute',
						width: '538px',
						height: '102px',
						left: '143px',
						top: '779px',
						opacity: '0.9'
					}}
					className="dFordTitle"
				>
					digital seal
				</div>
				<SubMenu
					right="0px"
					bottom="0px"
					bgColor={subMenuList[2].bgColor}
					indexGroup={subMenuList[2].indexGroup}
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
