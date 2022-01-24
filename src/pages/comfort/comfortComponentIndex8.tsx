import React from 'react';
import comfortBg_4_1 from './comfortBg_4_1.png';
import comfortBg_4_2 from './comfortBg_4_2.png';
import comfortBg_8_new from './comfortBg_8_new.png';
import { SubMenu } from '../../components/subMenu/subMenuComponent';
import { subMenuList } from '../../config/subMenuList';
export class ComfortComponentIndex8 extends React.Component<any, any> {
	render() {
		return (
			<div
				id="FlexibleDisplaySystem"
				style={{
					position: 'absolute',
					width: '1366px',
					height: '1009px',
					left: '0px',
					top: '0px',
					background: '#6E7883'
				}}
			>
				{/* 左侧背景图片 */}
				<div
					style={{
						/* 04 1 */

						position: 'absolute',
						left: '0px',
						top: '0px'
					}}
				>
					<img src={comfortBg_4_1} />
				</div>
				{/* 左侧背景图片 遮罩 */}
				<div
					style={{
						position: 'absolute',
						width: '544px',
						height: '557px',
						left: '0px',
						top: '469px'
					}}
				>
					<svg width="534" height="555" viewBox="0 0 534 555" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect
							x="0"
							width="544"
							height="557"
							fill="url(#paint0_linear_672_1324)"
							style={{ mixBlendMode: 'multiply' }}
						/>
						<defs>
							<linearGradient
								id="paint0_linear_672_1324"
								x1="181"
								y1="323"
								x2="216.601"
								y2="523.835"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopOpacity="0" />
								<stop offset="1" stopColor="#3D3C5F" stopOpacity="0.62" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				{/* 左侧背景图片 底部遮罩*/}
				<div
					style={{
						position: 'absolute',
						width: '571px',
						height: '1024px',
						left: '-19px',
						top: '0px'
					}}
				>
					<svg
						width="534"
						height="1024"
						viewBox="0 0 534 1024"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="-19"
							width="571"
							height="1024"
							fill="url(#paint0_linear_1175_1196)"
							fillOpacity="0.16"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1175_1196"
								x1="231.408"
								y1="101.099"
								x2="368.959"
								y2="1008.47"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#ECA89E" />
								<stop offset="1" stopColor="#1B1652" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				{/* 下半部分灰色背景*/}
				<div
					style={{
						position: 'absolute',
						width: '832px',
						height: '633px',
						left: '534px',
						top: '391px',
						background: '#5F6871',
						backdropFilter: 'blur(10px)'
					}}
				/>

				{/* 右侧背景图片 */}
				<div
					style={{
						position: 'absolute',
						right: '0px',
						top: '0px'
					}}
				>
					<img src={comfortBg_8_new} />
				</div>
				{/* 右侧背景图片 遮罩 */}
				<div
					style={{
						position: 'absolute',
						height: '731px',
						right: '0px',
						top: '0px'
					}}
				>
					<svg width="727" height="715" viewBox="0 0 727 715" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect
							x="-30"
							width="757"
							height="731"
							fill="url(#paint0_linear_1175_1189)"
							fillOpacity="0.16"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1175_1189"
								x1="301.977"
								y1="72.1711"
								x2="355.707"
								y2="730.412"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#ECA89E" />
								<stop offset="1" stopColor="#1B1652" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				{/* 右侧背景图片 底部遮罩*/}
				<div
					style={{
						position: 'absolute',
						height: '715px',
						right: '0px',
						top: '0px'
					}}
				>
					<svg width="727" height="715" viewBox="0 0 727 715" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g opacity="0.34">
							<rect
								width="737"
								height="715"
								fill="url(#paint0_linear_543_765)"
								style={{ mixBlendMode: 'multiply' }}
							/>
						</g>
						<defs>
							<linearGradient
								id="paint0_linear_543_765"
								x1="335.5"
								y1="619"
								x2="351.5"
								y2="504.5"
								gradientUnits="userSpaceOnUse"
							>
								<stop />
								<stop offset="1" stopColor="#040404" stopOpacity="0" />
							</linearGradient>
						</defs>
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

				{/* 文本 Flexible */}
				<div
					className="dFordNormalTitle"
					style={{
						/* Replacement for hard screens */

						position: 'absolute',
						width: '616px',
						height: '144px',
						left: '363px',
						top: '358px',
						textAlign:'left'
					}}
				>
					Replacement for hard screens
				</div>

				<div
					className = 'dFordText'
					style={{
						/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo. */

						position: 'absolute',
						width: '627px',
						height: '93px',
						left: '637px',
						top: '775px'
					}}
				>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium odio ipsum, eget interdum libero tincidunt efficitur. Maecenas dapibus condimentum commodo.</div>
				<SubMenu
					right="0px"
					bottom="0px"
					bgColor={subMenuList[5].bgColor}
					indexGroup={subMenuList[5].indexGroup}
					onSwiperTo={(index: number) => {
						console.log(index);
					}}
					noScale="true"
				/>
			</div>

		);
	}
}
