import React from 'react';
import comfortBg_6_1 from './comfortBg_6_1.png';
import comfortBg_6_2 from './comfortBg_6_2.png';
import { SubMenu } from '../../components/subMenu/subMenuComponent';
import { subMenuList } from '../../config/subMenuList';
export class ComfortComponentIndex5 extends React.Component<any, any> {
	render() {
		return (
			<div
				style={{
					position: 'absolute',
					width: '1366px',
					height: '1024px',
					left: '0px',
					top: '0px',
					background: '#878587'
				}}
			>
				{/* 上半部分背景 */}
				<div>
					{' '}
					<img src={comfortBg_6_1} />
				</div>

				{/* 上半部分上遮罩 */}
				<div
					style={{
						position: 'absolute',
						left: '-19px',
						top: '0px'
					}}
				>
					<svg
						width="1366"
						height="574"
						viewBox="0 0 1366 574"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="-19"
							width="1385"
							height="1024"
							fill="url(#paint0_linear_1205_1254)"
							fillOpacity="0.16"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1205_1254"
								x1="588.382"
								y1="101.099"
								x2="646.168"
								y2="1025.71"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#ECA89E" />
								<stop offset="1" stopColor="#1B1652" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				{/* 上半部分下遮罩 */}
				<div
					style={{
						position: 'absolute',
						left: '-10px',
						top: '130px'
					}}
				>
					<svg
						width="1366"
						height="444"
						viewBox="0 0 1366 444"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="-10"
							width="1396"
							height="447"
							fill="url(#paint0_linear_1205_1252)"
							style={{ mixBlendMode: 'multiply' }}
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1205_1252"
								x1="594"
								y1="255"
								x2="589"
								y2="586"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopOpacity="0" />
								<stop offset="1" stopColor="#423C51" stopOpacity="0.42" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				{/* 左下角背景 */}
				<div
					style={{
						position: 'absolute',
						left: '0px',
						bottom: '0px'
					}}
				>
					<img src={comfortBg_6_2} />
				</div>
				{/* 左下角背景遮罩*/}

				{/* 左下角背景左侧遮罩 */}
				<div
					style={{
						position: 'absolute',
						left: '0px',
						bottom: '0px'
					}}
				>
					<svg width="534" height="450" viewBox="0 0 534 450" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect
							x="-10"
							width="553"
							height="450"
							fill="url(#paint0_linear_1205_1280)"
							style={{ mixBlendMode: 'multiply' }}
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1205_1280"
								x1="190.767"
								y1="276.573"
								x2="-152.503"
								y2="274.001"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopOpacity="0" />
								<stop offset="1" stopColor="#423C51" stopOpacity="0.42" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				{/*右下角背景*/}
				<div
					style={{
						position: 'absolute',
						left: '0px',
						top: '574px'
					}}
				>
					<svg width="534" height="450" viewBox="0 0 534 450" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect
							x="-19"
							width="562"
							height="450"
							fill="url(#paint0_linear_1205_1283)"
							fillOpacity="0.16"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1205_1283"
								x1="441.5"
								y1="55.5623"
								x2="33.5683"
								y2="366.333"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#ECA89E" />
								<stop offset="1" stopColor="#1B1652" />
							</linearGradient>
						</defs>
					</svg>
				</div>

				{/*右下角文本标题 Voice-initiated control system*/}
				<div
					style={{
						position: 'absolute',
						left: '601px',
                        top: '649px',
                        zIndex:'99'
					}}
					className  = 'dFordSubTitle'
				>
					Voice-initiated control system
				</div>
				{/*右下角文本标题 control principles: */}
				<div
					className = 'dFordSubTitle'
					style={{

						position: 'absolute',
						left: '601px',
                        top: '696px',
                        zIndex:'99'
					}}
				>control principles:

				</div>
				{/*右下角文本内容 */}
				<div
					className = 'dFordText'
					style={{
						/* Efficient control by enlarging the advantages of voice commands ; No need for precise hand movements to reduce the burden of keeping attention ; Universal interaction among multiple in-car applications */

						position: 'absolute',
						left: '601px',
                        top: '806px',
                        zIndex:'99'
					}}
				>
					Efficient control by enlarging the advantages of voice commands ; No need for precise hand movements to reduce the burden of keeping attention ; Universal interaction among multiple in-car applications 
				</div>
			
				{/*手型图标 */}
				<div
					style={{
						position: 'absolute',
						left: '23.31%',
						right: '66.98%',
						top: '75.88%',
						bottom: '-2.93%'
					}}
				>
					<svg width="133" height="277" viewBox="0 0 133 277" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							opacity="0.8"
							fillRule="evenodd"
							clipRule="evenodd"
							d="M33.7786 2.03681C30.2706 4.74562 27.1755 10.7913 26.5784 16.0996C26.3173 18.4238 25.8881 27.2568 25.6249 35.728C24.6725 66.4033 22.9881 85.5 22.9881 87.5C22.4881 88 22.0056 86.7114 19.5158 84.5651C17.5826 82.8996 14.3691 81.2352 12.3732 80.8675C8.72954 80.1968 2.00102 80.5 0.500569 82.5C0 83.5 0.760095 86.0815 2.32585 90.6038C4.77216 97.6679 5.23571 100.797 5.61222 112.79C5.85412 120.47 5.5272 132.32 4.88652 139.123C1.98071 169.961 1.85924 172.303 2.81469 178.917C3.35112 182.63 5.19623 189.157 6.91583 193.422C11.5109 204.823 28.1714 237.015 36.1986 250.004C40.0366 256.215 44.162 263.95 45.3675 267.194C47.3097 272.425 48.0324 273.286 51.7479 274.804C57.6577 277.218 72.3446 277.745 81.3859 275.867C94.6954 273.103 110.72 265.591 118.526 258.458C120.107 257.013 122.519 253.967 123.887 251.689L126.375 247.548L123.7 241.307C120.66 234.216 120.759 232.191 124.739 219.818C126.111 215.555 127.699 208.842 128.269 204.901C130.1 192.229 133.523 143.695 132.917 139.003C132.312 134.309 125.186 114.893 121.394 107.606C118.588 102.212 114.045 99.1197 108.104 98.5593L103.344 98.1101L101.441 92.616C97.6366 81.6267 90.7228 75.6576 83.3687 77.013C80.3495 77.5685 79.9143 77.3359 78.7332 74.5377C78.0166 72.8385 75.1047 69.3963 72.2616 66.8873C67.1605 62.3838 67.0198 62.3312 61.3711 62.834L55.6486 63.3437L54.9857 55.746C54.6203 51.5675 53.8946 44.7955 53.3734 40.6965C52.8511 36.5975 51.9452 28.1292 51.3602 21.8779C50.2246 9.7429 47.9484 2.86654 44.4596 1.03417C41.237 -0.660081 36.7209 -0.235771 33.7786 2.03681ZM43.3341 6.46289C46.67 11.1382 43.5882 15.9167 38.9881 13.5C36.2472 12.0591 35.2614 7.09885 37.4881 5.5C39.9951 3.70042 41.5467 3.9558 43.3341 6.46289ZM35.4881 15.5C37.6287 17.6017 42.4881 19 45.4881 16C45.4881 16 45.4342 15.6762 47.8623 39.7028C48.7186 48.174 50.0779 60.2474 50.8815 66.5325C51.6861 72.8176 52.6274 83.9967 52.9746 91.3749C53.6011 104.709 54.7974 112.242 56.2883 112.242C56.7174 112.242 57.7882 111.684 58.6678 111C60.0048 109.963 60.1253 108.696 59.3986 103.299C58.9208 99.7467 58.1202 90.8035 57.6192 83.4253C56.8257 71.7504 56.9127 69.8495 58.2872 68.7683C62.6191 65.3609 70.4095 69.4868 73.708 76.9335C74.7737 79.3392 75.9508 86.1043 76.6532 93.8591C78.0206 108.963 79.4619 116.223 81.0884 116.202C83.8606 116.166 85.0559 114.442 84.2796 111.603C83.2766 107.934 80.9102 84.1537 81.4527 83.1769C81.6794 82.7675 83.4324 82.4316 85.3484 82.4316C91.6873 82.4316 95.2186 88.2596 101.033 108.315C105.056 122.194 106.283 125.165 108.971 127.553C111.022 129.376 111.076 129.367 111.949 127.048C112.587 125.357 112.323 123.699 111.019 121.198C108.811 116.963 105.402 104.586 106.221 103.781C107.289 102.733 112.068 104.468 114.255 106.698C116.622 109.112 124.538 127.562 126.815 135.974C128.101 140.724 128.037 144.398 126.247 168.766C123.84 201.528 123.068 207.103 119.154 219.984C115.619 231.623 115.481 234.683 118.182 241.66C119.295 244.536 120.206 247.403 120.206 248.032C120.207 248.661 118.06 251.253 115.437 253.793C102.108 266.694 72.8527 275.326 57.4198 270.91C51.9979 269.358 51.843 269.21 49.5566 263.396C48.2743 260.134 45.4565 254.778 43.2946 251.495C34.393 237.972 15.1262 200.633 10.5068 187.952C8.27207 181.818 7.86417 179.038 7.88138 170.065C7.89251 164.224 8.32168 156.536 8.83584 152.984C10.6081 140.734 11.8833 111.933 10.9613 104.967C10.2174 99.3512 10.35 97.6967 11.7345 95.3288C13.105 92.9846 13.195 91.9264 12.2396 89.4391C9.70724 82.8539 17.4662 87.6485 21.0269 94.8687C23.1847 99.2449 23.2191 99.9286 22.4955 124.217C21.8427 146.153 21.536 149.359 19.8973 151.404C18.0958 153.653 18.0967 153.771 19.9095 155.382C21.6736 156.949 21.9196 156.879 24.2738 154.133C27.0136 150.934 27.1695 148.746 28.6714 92.3686C28.9842 80.6181 29.6664 66.0853 30.1866 60.0735C30.7068 54.0616 31.14 42.659 31.1481 34.7343C31.1602 21.868 32.5641 12.873 32.7442 12.873C32.9244 12.873 34.0306 14.0691 35.4881 15.5ZM9 88.5C9.96354 90.7626 9.69325 92.6774 9.09408 93.2656C8.49389 93.8549 7.71355 93.0092 7 91C4.76826 84.7139 6.49904 82.6213 9 88.5Z"
							fill="white"
						/>
					</svg>
				</div>
				{/*圆形图标 */}
				<div
					style={{
						/* Mask Group */

						position: 'absolute',
						width: '180.5px',
						height: '131px',
						left: '267px',
						top: '719px'
					}}
				>
					<svg width="181" height="131" viewBox="0 0 181 131" fill="none" xmlns="http://www.w3.org/2000/svg">
						<mask
							id="mask0_1290_1166"
							style={{ maskType: 'alpha' }}
							maskUnits="userSpaceOnUse"
							x="0"
							y="0"
							width="181"
							height="131"
						>
							<path
								d="M96.5 63C95.7 61.8 92.8333 60.5 91.5 60C83 60 82 68.5 81 70C80.2 71.2 79 117.833 78 131L0 124V0H180.5L173 122.5L104.5 124C102.667 109.333 97.3 64.2 96.5 63Z"
								fill="#C4C4C4"
							/>
						</mask>
						<g mask="url(#mask0_1290_1166)">
							<circle opacity="0.4" cx="90.5" cy="64.5" r="45" stroke="white" strokeWidth="5" />
							<circle
								opacity="0.5"
								cx="90.5"
								cy="64.5"
								r="20"
								fill="#D8D8D8"
								stroke="#F8F8F8"
								strokeWidth="5"
							/>
						</g>
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

				<div
					style={{
						position: 'absolute',
						width: '832px',
						height: '450px',
						left: '534px',
						top: '574px',
						background: ' rgba(30, 33, 41, 0)',
						backdropFilter: ' blur(48px)'
					}}
				>
					<svg width="832" height="450" viewBox="0 0 832 450" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g filter="url(#filter0_b_1205_1255)">
							<rect width="832" height="450" fill="#1E2129" fillOpacity="0.26" />
						</g>
						<defs>
							<filter
								id="filter0_b_1205_1255"
								x="-48"
								y="-48"
								width="928"
								height="546"
								filterUnits="userSpaceOnUse"
								colorInterpolationFilters="sRGB"
							>
								<feFlood floodOpacity="0" result="BackgroundImageFix" />
								<feGaussianBlur in="BackgroundImage" stdDeviation="24" />
								<feComposite
									in2="SourceAlpha"
									operator="in"
									result="effect1_backgroundBlur_1205_1255"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="effect1_backgroundBlur_1205_1255"
									result="shape"
								/>
							</filter>
						</defs>
					</svg>
				</div>
				<SubMenu
					right="0px"
					bottom="0px"
					bgColor={subMenuList[4].bgColor}
					indexGroup={subMenuList[4].indexGroup}
					onSwiperTo={(index: number) => {
						console.log(index);
					}}
					noScale="true"
				/>
			</div>
		);
	}
}
