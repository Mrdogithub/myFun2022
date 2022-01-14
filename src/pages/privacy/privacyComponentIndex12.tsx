import React from 'react';
import privacyBg_12 from './privacyBg_12.png';
import { SubMenu } from '../../components/subMenu/subMenuComponent';
import { subMenuList } from '../../config/subMenuList';
export class PrivacyComponentIndex12 extends React.Component<any, any> {
	render() {
		return (
			<div id="PrivacyComponentIndex12">
				{/* 背景图片 */}
				<div>
					<img src={privacyBg_12} />
				</div>
				{/* 背景图片底部遮罩 */}
				<div
					style={{
						position: 'absolute',
						width: '1366px',
						height: '453px',
						left: '0px',
						top: '568px'
					}}
				>
					<svg
						width="1366"
						height="453"
						viewBox="0 0 1366 453"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							width="1366"
							height="453"
							fill="url(#paint0_linear_771_1349)"
							fillOpacity="0.47"
							style={{ mixBlendMode: 'multiply' }}
						/>
						<defs>
							<linearGradient
								id="paint0_linear_771_1349"
								x1="683"
								y1="0"
								x2="683"
								y2="453"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopOpacity="0" />
								<stop offset="1" />
							</linearGradient>
						</defs>
					</svg>
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

				{/* 右侧文本内容 */}
				<div
					style={{
						position: 'absolute',
						width: '349px',
						height: '155px',
						left: '618px',
						top: '679px'
					}}
					className = 'dFordText'
				>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.
				</div>
				<SubMenu
					right= '0px'
					bottom='0px'
					bgColor={subMenuList[2].bgColor}
					indexGroup={subMenuList[2].indexGroup}
					onSwiperTo={(index: number) => { console.log(index)}}
					noScale = 'true'
					className={this.props.inAnimate.footer}
				/>
			</div>
		);
	}
}
