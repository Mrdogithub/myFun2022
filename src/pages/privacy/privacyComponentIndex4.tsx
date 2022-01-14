import React from 'react';
import privacyBg_4_new from './privacyBg_4_new.png';
import { SubMenu } from '../../components/subMenu/subMenuComponent';
import {subMenuList} from '../../config/subMenuList'
export class PrivacyComponentIndex4 extends React.Component<any, any> {
	// privacy slide 4
	constructor(props: any) {
		super(props);
		console.log(this.props);
	}
	render() {
		return (
			<div id="PrivacyComponentIndex4">
				<div
					style={{
						background: '#3F3E44',
						width: '100%',
						height: ' 100%',
						position: 'absolute',
						top: '0px',
						left: '0px'
					}}
					// className={this.props.inAnimate.boxAnimate}
				/>
				{/* 背景 */}
				<div
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						top: '0px',
						right: '-130px'
					}}
				>
					<img src={privacyBg_4_new} style={{ objectFit: 'contain' }} />
				</div>
				{/* 左下角背景 */}
				<div
					style={{
						position: 'absolute',
						width: '537px',
						height: '430px',
						left: '0px',
						top: '594px',
						background: 'rgba(139, 146, 156, 0.2)',
						backdropFilter: ' blur(46px)'
					}}
				/>
				{/* 左下角标题 */}
				<div
					style={{
						position: 'absolute',
						width: '850px',
						height: '156px',
						left: '124px',
						top: '522px',
						textAlign: 'left'
					}}
					className={'dFordTitle ' + this.props.inAnimate.textAnimate}
				>
					Advanced Dimmable window
				</div>
				{/* 左下角文本 */}
				<div
					style={{
						position: 'absolute',
						width: '328px',
						height: '194px',
						left: '123px',
						top: '743px'
					}}
					className={'dFordText ' + this.props.inAnimate.textAnimate}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum
					libero tincidunt efficitur.
				</div>

				{/* 栅格背景 */}
				<div
					style={{
						position: 'absolute',
						width: '832px',
						height: '894px',
						left: '259px',
						top: '130px'
					}}
				>
					<svg width="833" height="894" viewBox="0 0 833 894" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="894" stroke="#E8E8E8" />
						<line opacity="0.3" x1="277.5" y1="-2.18557e-08" x2="277.5" y2="894" stroke="#E8E8E8" />
						<line opacity="0.3" x1="555.5" y1="-2.18557e-08" x2="555.5" y2="894" stroke="#E8E8E8" />
						<line opacity="0.3" x1="832.5" y1="-2.18557e-08" x2="832.5" y2="894" stroke="#E8E8E8" />
					</svg>
				</div>
				<SubMenu
					right= '0px'
					bottom='0px'
					bgColor={subMenuList[0].bgColor}
					indexGroup={subMenuList[0].indexGroup}
					onSwiperTo={(index: number) => { console.log(index)}}
					noScale = 'true'
					className={this.props.inAnimate.footer}
				/>
			</div>
		);
	}
}
