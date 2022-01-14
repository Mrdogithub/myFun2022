import React from 'react';
import privacyBg_6_new from './privacyBg_6_new.png';
import privacyBg_7_new from './privacyBg_7_new.png';
import privacyBg_7_1_new from './privacyBg_7_1_new.png';
import { SubMenu } from '../../components/subMenu/subMenuComponent';
import { subMenuList } from '../../config/subMenuList';
export class PrivacyComponentIndex7 extends React.Component<any, any> {
	render() {
		return (
			<div style={{ width: '100%', height: '100%', background: '#2B393A' }} id="PrivacyComponentIndex7">
				{/*背景图片*/}
				<div
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						left: '128px',
						top: '0px'
					}}
				>
					<img src={privacyBg_6_new} style={{ objectFit: 'contain' }} />
				</div>

				{/* 背景虚化*/}
				<div
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						left: '1px',
						top: '0px',
						background: 'rgba(13, 19, 20, 0.38)',
						backdropFilter: 'blur(5px)'
					}}
				/>
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

				<div
					className="dFordText"
					style={{
						/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim sem velit, eu blandit purus porta non. */

						position: 'absolute',
						width: '370px',
						height: '248px',
						left: '113px',
						top: '322px'
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum
					libero tincidunt efficitur. Maecenas dapibus condimentum commodo. Proin dignissim sem velit, eu
					blandit purus porta non.
				</div>

				{/* 标题背景*/}
				<div
					style={{
						position: 'absolute',
						width: '913px',
						height: '142px',
						left: '113px',
						top: '731px',
						zIndex: '3'
					}}
				>
					<svg width="917" height="146" viewBox="0 0 917 146" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path opacity="0.2" d="M915 18V2H2V79.5M915 64V144H2V126" stroke="white" strokeWidth="4" />
					</svg>
				</div>
				{/*标题文本*/}
				<div
					className="dFordTitle"
					style={{
						position: 'absolute',
						width: '851px',
						height: '102px',
						left: '136px',
						top: '760px',
						zIndex: '3'
					}}
				>
					remote chauffeur
				</div>

				{/*手机背景*/}
				<div
					style={{
						position: 'absolute',
						width: '750px',
						height: '750px',
						left: '573px',
						top: '120px',
						backgroundImage: `url(${privacyBg_7_new})`,
						backgroundSize: 'contain',
						zIndex: '2'
					}}
					className={this.props.inAnimate.boxAnimate}
				/>
				{/*手机里的图片*/}
				<div
					style={{
						position: 'absolute',
						width: '317px',
						height: '683px',
						left: '790px',
						top: '153px',
						zIndex: '0'
					}}
					className={this.props.inAnimate.boxAnimate}
				>
					<img src={privacyBg_7_1_new} style={{ borderRadius: '40px' }} />
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
