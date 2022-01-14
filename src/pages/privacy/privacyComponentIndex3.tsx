import React from 'react';
import privacyBg_3_new from './privacyBg_3_new.png';
import { SubMenu } from '../../components/subMenu/subMenuComponent';
import { subMenuList } from '../../config/subMenuList';
export class PrivacyComponentIndex3 extends React.Component<any, any> {
	render() {
		return (
			<div
				id="privacyComponentIndex3"
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%'
				}}
			>
				{/* 背景图片 */}
				<div>
					<img src={privacyBg_3_new} style={{ objectFit: 'cover' }} />
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

				<SubMenu
					right="0px"
					bottom="0px"
					bgColor={subMenuList[0].bgColor}
					indexGroup={subMenuList[0].indexGroup}
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
