import React from 'react';
import comfortBg_6_1 from './comfortBg_6_1.png';
import comfortBg_7 from './comfortBg_7.png';
export class SelectFunction extends React.Component {
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
						left: '-=0px',
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
						left: '0px',
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

				{/* 左下角背景图片 */}
				<div
					style={{
						position: 'absolute',
						bottom: '0px',
						left: '0px'
					}}
				>
					<img src={comfortBg_7} />
				</div>
				{/* 左下角背景图片左侧遮罩 */}
				<div
					style={{
						position: 'absolute',
						width: '553px',
						height: '450px',
						left: '0px',
						top: '574px'
					}}
				>
					<svg width="543" height="450" viewBox="0 0 543 450" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect
							x="-10"
							width="553"
							height="450"
							fill="url(#paint0_linear_1205_1298)"
							style={{ mixBlendMode: 'multiply' }}
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1205_1298"
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
				{/* 左下角背景图片遮罩 */}
				<div
					style={{
						position: 'absolute',
						width: '831px',
						height: '450px',
						left: '-10px',
						top: '574px'
					}}
				>
					<svg width="812" height="450" viewBox="0 0 812 450" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect
							x="-19"
							width="831"
							height="450"
							fill="url(#paint0_linear_1205_1299)"
							fillOpacity="0.16"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1205_1299"
								x1="661.917"
								y1="55.5623"
								x2="241.78"
								y2="528.832"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#ECA89E" />
								<stop offset="1" stopColor="#1B1652" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				{/* 右侧文本*/}
				<div
					style={{
						position: 'absolute',
						width: '454px',
						height: '138px',
						left: '881px',
                        top: '697px',
                        zIndex:'2'
					}}
				>
					<svg width="419" height="120" viewBox="0 0 419 120" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							opacity="0.9"
							d="M14.984 27.57C20.76 27.57 23.8 23.96 25.358 20.426L24.94 20.198C23.458 23.504 20.722 26.164 16.086 26.164C10.386 26.164 6.966 20.92 6.966 14.042C6.966 5.416 10.158 1.084 14.832 1.084C19.734 1.084 22.66 5.644 24.028 10.052H24.37L24.218 0.665999H23.876L22.432 2.718C21.292 1.654 19.012 0.551998 15.782 0.551998C8.144 0.551998 2.406 6.518 2.406 14.346C2.406 22.402 7.498 27.57 14.984 27.57ZM27.4982 27H49.2342L49.7282 19.628H49.3862C49.0062 20.768 47.0682 24.492 45.9282 25.67C45.0162 26.62 42.6602 26.544 40.0002 26.544C36.1622 26.544 35.4782 26.202 35.4782 23.086V3.592C35.4782 2.756 35.7062 1.996 36.6562 1.692C37.3402 1.464 38.7462 1.35 39.4302 1.312V1.046H27.5362V1.312C28.2202 1.35 29.5882 1.578 30.2722 1.882C31.2222 2.3 31.4502 2.946 31.4502 3.782V24.416C31.4502 25.29 31.1842 25.936 30.2722 26.278C29.7022 26.506 28.1822 26.696 27.4982 26.734V27ZM51.4726 27H63.4046V26.734C62.7206 26.696 61.0866 26.468 60.6306 26.278C59.7566 25.898 59.4526 25.138 59.4526 24.302V3.668C59.4526 2.832 59.6806 2.11 60.6306 1.806C61.3146 1.578 62.7206 1.35 63.4046 1.312V1.046H51.4726V1.312C52.1566 1.35 53.6006 1.616 54.2466 1.882C55.1586 2.262 55.4246 3.022 55.4246 3.858V24.492C55.4246 25.328 55.1586 26.012 54.2466 26.354C53.7526 26.544 52.1566 26.696 51.4726 26.734V27ZM79.1461 27.57C84.9221 27.57 87.9621 23.96 89.5201 20.426L89.1021 20.198C87.6201 23.504 84.8841 26.164 80.2481 26.164C74.5481 26.164 71.1281 20.92 71.1281 14.042C71.1281 5.416 74.3201 1.084 78.9941 1.084C83.8961 1.084 86.8221 5.644 88.1901 10.052H88.5321L88.3801 0.665999H88.0381L86.5941 2.718C85.4541 1.654 83.1741 0.551998 79.9441 0.551998C72.3061 0.551998 66.5681 6.518 66.5681 14.346C66.5681 22.402 71.6601 27.57 79.1461 27.57ZM91.7743 27H103.554V26.734C102.87 26.696 101.274 26.354 100.818 26.164C99.9443 25.784 99.6403 25.138 99.6403 24.302V14.08H100.248C102.604 16.436 109.178 23.808 109.178 25.252C109.178 26.696 106.936 26.658 105.378 26.734V27H119.286V26.734C118.602 26.696 117.272 26.506 116.55 26.202C115.068 25.556 114.08 24.53 113.396 23.656C110.242 19.666 107.05 15.79 103.136 11.724C106.518 8.874 108.722 6.518 111.952 3.174C113.814 1.274 116.36 1.35 117.044 1.312V1.046H107.012V1.312C107.696 1.35 110.584 1.54 110.584 2.68C110.584 4.504 104.998 9.71 100.058 13.7H99.6403V3.668C99.6403 2.832 99.8683 2.11 100.818 1.806C101.502 1.578 102.87 1.35 103.554 1.312V1.046H91.7743V1.312C92.4583 1.35 93.7883 1.654 94.4343 1.92C95.3463 2.3 95.6123 3.022 95.6123 3.858V24.492C95.6123 25.328 95.3463 26.012 94.4343 26.354C93.9403 26.544 92.4583 26.696 91.7743 26.734V27ZM119.791 27H131.723V26.734C131.039 26.696 129.405 26.468 128.949 26.278C128.075 25.898 127.771 25.138 127.771 24.302V3.668C127.771 2.832 127.999 2.11 128.949 1.806C129.633 1.578 131.039 1.35 131.723 1.312V1.046H119.791V1.312C120.475 1.35 121.919 1.616 122.565 1.882C123.477 2.262 123.743 3.022 123.743 3.858V24.492C123.743 25.328 123.477 26.012 122.565 26.354C122.071 26.544 120.475 26.696 119.791 26.734V27ZM157.762 27.266H158.408V7.924C158.408 5.416 158.674 2.908 159.662 2.224C160.498 1.654 162.474 1.35 163.158 1.312V1.046H152.708V1.312C153.582 1.35 155.672 1.54 156.584 2.262C157.458 2.946 157.876 5.188 157.876 7.924V21.148L141.498 1.046H133.67V1.312C134.696 1.35 136.634 1.616 137.546 2.338C138.306 2.946 138.952 4.504 138.952 5.606V20.502C138.952 23.466 138.61 24.986 137.698 25.708C137.166 26.126 134.848 26.696 134.164 26.734V27H144.69V26.734C144.006 26.696 141.574 26.202 140.776 25.594C139.94 24.986 139.484 23.58 139.484 20.312V4.77L157.762 27.266ZM176.054 27.57C179.246 27.57 182.438 26.658 185.402 25.518L187.492 27.836L187.758 27.722V18.336C187.758 17.5 187.986 16.778 188.898 16.36C189.62 16.056 190.912 15.942 191.596 15.828V15.524H179.018V15.828C179.702 15.866 181.868 16.094 182.78 16.436C183.768 16.816 184.034 17.69 184.034 18.678V22.136C183.768 24.568 182.058 26.924 177.536 26.924C171.988 26.924 169.024 21.338 169.024 14.346C169.024 6.062 172.14 1.122 177.46 1.122C182.742 1.122 186.048 5.644 187.378 9.786H187.682L187.492 0.665999H187.15L185.82 2.832C184.642 1.768 181.754 0.551998 178.714 0.551998C170.544 0.551998 164.388 6.746 164.388 14.612C164.388 23.048 170.506 27.57 176.054 27.57ZM201.758 27H214.032V26.734C213.348 26.696 211.6 26.506 211.144 26.316C210.27 25.936 209.966 25.29 209.966 24.454V13.852H213.804C215.59 13.852 216.692 14.574 217.186 15.068C217.718 15.6 218.478 18.032 218.554 19.134H218.934V8.456H218.554C218.402 9.862 217.718 11.724 217.186 12.218C216.692 12.674 215.742 13.396 213.804 13.396H209.966V1.464H214.336C215.552 1.464 217.148 1.502 218.06 1.616C219.694 1.844 222.088 5.53 222.62 7.202H222.962V1.046H201.758V1.312C202.442 1.35 204.038 1.578 204.76 1.882C205.71 2.262 205.938 3.022 205.938 3.858V24.492C205.938 25.328 205.672 26.012 204.76 26.354C204.266 26.544 202.442 26.696 201.758 26.734V27ZM238.174 27.608C242.088 27.608 245.204 26.278 247.636 23.96C250.448 21.3 251.588 17.804 251.588 13.852C251.588 10.128 250.22 6.632 247.978 4.39C245.128 1.616 241.898 0.437998 238.326 0.437998C234.64 0.437998 231.296 1.768 228.712 4.39C226.242 6.86 225.026 10.166 225.026 14.308C225.026 18.45 226.584 21.68 229.092 24.036C231.562 26.354 234.716 27.608 238.174 27.608ZM238.326 27.152C232.398 27.152 229.624 21.262 229.624 14.118C229.624 5.872 232.93 0.893999 238.326 0.893999C244.634 0.893999 246.99 7.392 246.99 13.966C246.99 21.414 244.216 27.152 238.326 27.152ZM276.113 27.418C279.381 27.418 281.053 25.328 281.053 21.794V21.224H280.559V21.794C280.559 24.34 279.495 25.708 278.127 25.708C277.557 25.708 276.645 25.632 276.189 23.922C275.695 22.06 275.391 19.932 274.821 17.842C274.061 15.068 271.135 14.156 268.741 13.89V13.51C271.819 12.826 276.151 11.04 276.151 6.898C276.151 2.756 271.857 1.046 268.019 1.046H254.757V1.312C255.441 1.35 256.809 1.616 257.493 1.844C258.443 2.148 258.671 2.908 258.671 3.744V24.416C258.671 25.29 258.405 25.974 257.493 26.316C256.999 26.506 255.441 26.696 254.757 26.734V27H266.651V26.734C265.967 26.696 264.371 26.506 263.877 26.316C262.965 25.974 262.699 25.29 262.699 24.416V14.042H265.701C270.109 14.042 270.755 17.994 271.135 20.996C271.667 25.29 273.073 27.418 276.113 27.418ZM262.699 13.51V1.54H266.043C268.931 1.54 271.477 3.326 271.477 7.658C271.477 11.99 268.399 13.51 265.055 13.51H262.699ZM0.088 73H9.778V72.734C8.448 72.658 5.142 72.43 5.142 71.062C5.142 70.53 5.408 69.618 5.674 68.782C6.016 67.642 6.852 65.172 7.574 63.424H16.998L19.696 70.378C19.81 70.682 19.924 71.1 19.848 71.442C19.658 72.354 17.15 72.658 15.82 72.734V73H27.79V72.734C27.068 72.696 26.156 72.582 25.472 72.202C24.56 71.67 24.218 70.948 23.914 70.188C22.508 66.654 18.214 56.432 14.338 46.628H13.654C10.766 53.886 7.346 62.512 4.648 69.048C4.078 70.378 3.394 71.556 2.482 72.088C1.798 72.468 0.81 72.696 0.088 72.734V73ZM7.764 62.892L12.248 51.454L16.77 62.892H7.764ZM40.441 73.57C46.217 73.57 49.257 69.96 50.815 66.426L50.397 66.198C48.915 69.504 46.179 72.164 41.543 72.164C35.843 72.164 32.423 66.92 32.423 60.042C32.423 51.416 35.615 47.084 40.289 47.084C45.191 47.084 48.117 51.644 49.485 56.052H49.827L49.675 46.666H49.333L47.889 48.718C46.749 47.654 44.469 46.552 41.239 46.552C33.601 46.552 27.863 52.518 27.863 60.346C27.863 68.402 32.955 73.57 40.441 73.57ZM58.3236 73H70.9396V72.734C70.2556 72.696 68.2796 72.392 67.8236 72.202C66.9496 71.822 66.6456 71.138 66.6456 70.302V47.502H68.8116C69.8376 47.502 70.9776 47.54 71.8896 47.654C73.5236 47.882 75.7656 51.986 76.1836 53.658H76.5256V47.046H52.7376V53.658H53.0796C53.4976 51.986 55.7396 47.882 57.3736 47.654C58.2856 47.54 59.6156 47.502 60.4516 47.502H62.6176V70.378C62.6176 71.214 62.3516 71.936 61.4396 72.278C60.9456 72.468 59.0076 72.696 58.3236 72.734V73ZM78.5625 73H90.4945V72.734C89.8105 72.696 88.1765 72.468 87.7205 72.278C86.8465 71.898 86.5425 71.138 86.5425 70.302V49.668C86.5425 48.832 86.7705 48.11 87.7205 47.806C88.4045 47.578 89.8105 47.35 90.4945 47.312V47.046H78.5625V47.312C79.2465 47.35 80.6905 47.616 81.3365 47.882C82.2485 48.262 82.5145 49.022 82.5145 49.858V70.492C82.5145 71.328 82.2485 72.012 81.3365 72.354C80.8425 72.544 79.2465 72.696 78.5625 72.734V73ZM105.21 73.304L114.71 50.846C115.204 49.668 115.774 48.566 116.762 47.996C117.446 47.616 118.244 47.35 118.966 47.312V47.046H109.504V47.312C112.43 47.502 114.14 47.996 114.14 49.25C114.14 49.706 114.026 50.884 113.228 52.784L106.654 68.402L99.396 49.668C99.282 49.364 99.206 48.984 99.206 48.718C99.206 47.806 100.954 47.426 103.082 47.312V47.046H91.454V47.312C92.176 47.35 93.088 47.54 93.772 47.92C94.684 48.452 95.026 49.06 95.33 49.858L104.564 73.304H105.21ZM114.162 73H123.852V72.734C122.522 72.658 119.216 72.43 119.216 71.062C119.216 70.53 119.482 69.618 119.748 68.782C120.09 67.642 120.926 65.172 121.648 63.424H131.072L133.77 70.378C133.884 70.682 133.998 71.1 133.922 71.442C133.732 72.354 131.224 72.658 129.894 72.734V73H141.864V72.734C141.142 72.696 140.23 72.582 139.546 72.202C138.634 71.67 138.292 70.948 137.988 70.188C136.582 66.654 132.288 56.432 128.412 46.628H127.728C124.84 53.886 121.42 62.512 118.722 69.048C118.152 70.378 117.468 71.556 116.556 72.088C115.872 72.468 114.884 72.696 114.162 72.734V73ZM121.838 62.892L126.322 51.454L130.844 62.892H121.838ZM145.271 73H157.887V72.734C157.203 72.696 155.227 72.392 154.771 72.202C153.897 71.822 153.593 71.138 153.593 70.302V47.502H155.759C156.785 47.502 157.925 47.54 158.837 47.654C160.471 47.882 162.713 51.986 163.131 53.658H163.473V47.046H139.685V53.658H140.027C140.445 51.986 142.687 47.882 144.321 47.654C145.233 47.54 146.563 47.502 147.399 47.502H149.565V70.378C149.565 71.214 149.299 71.936 148.387 72.278C147.893 72.468 145.955 72.696 145.271 72.734V73ZM165.51 73H177.442V72.734C176.758 72.696 175.124 72.468 174.668 72.278C173.794 71.898 173.49 71.138 173.49 70.302V49.668C173.49 48.832 173.718 48.11 174.668 47.806C175.352 47.578 176.758 47.35 177.442 47.312V47.046H165.51V47.312C166.194 47.35 167.638 47.616 168.284 47.882C169.196 48.262 169.462 49.022 169.462 49.858V70.492C169.462 71.328 169.196 72.012 168.284 72.354C167.79 72.544 166.194 72.696 165.51 72.734V73ZM203.481 73.266H204.127V53.924C204.127 51.416 204.393 48.908 205.381 48.224C206.217 47.654 208.193 47.35 208.877 47.312V47.046H198.427V47.312C199.301 47.35 201.391 47.54 202.303 48.262C203.177 48.946 203.595 51.188 203.595 53.924V67.148L187.217 47.046H179.389V47.312C180.415 47.35 182.353 47.616 183.265 48.338C184.025 48.946 184.671 50.504 184.671 51.606V66.502C184.671 69.466 184.329 70.986 183.417 71.708C182.885 72.126 180.567 72.696 179.883 72.734V73H190.409V72.734C189.725 72.696 187.293 72.202 186.495 71.594C185.659 70.986 185.203 69.58 185.203 66.312V50.77L203.481 73.266ZM221.773 73.57C224.965 73.57 228.157 72.658 231.121 71.518L233.211 73.836L233.477 73.722V64.336C233.477 63.5 233.705 62.778 234.617 62.36C235.339 62.056 236.631 61.942 237.315 61.828V61.524H224.737V61.828C225.421 61.866 227.587 62.094 228.499 62.436C229.487 62.816 229.753 63.69 229.753 64.678V68.136C229.487 70.568 227.777 72.924 223.255 72.924C217.707 72.924 214.743 67.338 214.743 60.346C214.743 52.062 217.859 47.122 223.179 47.122C228.461 47.122 231.767 51.644 233.097 55.786H233.401L233.211 46.666H232.869L231.539 48.832C230.361 47.768 227.473 46.552 224.433 46.552C216.263 46.552 210.107 52.746 210.107 60.612C210.107 69.048 216.225 73.57 221.773 73.57ZM251.923 73H264.539V72.734C263.855 72.696 261.879 72.392 261.423 72.202C260.549 71.822 260.245 71.138 260.245 70.302V47.502H262.411C263.437 47.502 264.577 47.54 265.489 47.654C267.123 47.882 269.365 51.986 269.783 53.658H270.125V47.046H246.337V53.658H246.679C247.097 51.986 249.339 47.882 250.973 47.654C251.885 47.54 253.215 47.502 254.051 47.502H256.217V70.378C256.217 71.214 255.951 71.936 255.039 72.278C254.545 72.468 252.607 72.696 251.923 72.734V73ZM283.98 73V72.734C283.296 72.696 281.7 72.468 281.244 72.278C280.37 71.898 280.066 71.138 280.066 70.302V59.776H293.176V70.492C293.176 71.328 292.91 72.012 291.998 72.354C291.504 72.544 289.946 72.696 289.262 72.734V73H301.042V72.734C300.358 72.696 298.838 72.506 298.382 72.278C297.508 71.86 297.204 71.138 297.204 70.302V49.668C297.204 48.832 297.432 48.11 298.382 47.806C299.066 47.578 300.358 47.35 301.042 47.312V47.046H289.262V47.312C289.946 47.35 291.352 47.616 291.998 47.882C292.872 48.262 293.176 49.022 293.176 49.858V59.244H280.066V49.668C280.066 48.832 280.294 48.11 281.244 47.806C281.928 47.578 283.296 47.35 283.98 47.312V47.046H272.2V47.312C272.884 47.35 274.214 47.616 274.86 47.882C275.772 48.262 276.038 49.022 276.038 49.858V70.492C276.038 71.328 275.772 72.012 274.86 72.354C274.366 72.544 272.884 72.696 272.2 72.734V73H283.98ZM304.255 73H326.751L327.245 65.704H326.903C326.523 66.844 324.585 70.492 323.445 71.67C322.533 72.62 319.645 72.544 316.985 72.544C313.147 72.544 312.463 72.202 312.463 69.086V59.776H316.263C318.315 59.776 318.961 60.46 319.455 60.992C319.911 61.486 320.747 63.842 320.823 64.944H321.165V54.342H320.823C320.709 55.33 320.025 57.534 319.455 58.104C318.999 58.56 318.391 59.32 316.263 59.32H312.463V47.464H316.757C317.973 47.464 319.683 47.502 320.595 47.616C322.229 47.844 324.433 51.264 324.851 52.936H325.193V47.046H304.255V47.312C304.939 47.35 306.535 47.578 307.257 47.882C308.207 48.262 308.435 49.022 308.435 49.858V70.416C308.435 71.29 308.169 71.936 307.257 72.278C306.687 72.506 304.939 72.696 304.255 72.734V73ZM11.792 119.494C16.694 119.494 20.38 116.226 20.38 111.59C20.38 107.562 18.29 106.08 15.022 104.56C13.312 103.762 11.716 103.382 9.854 102.356C7.764 101.216 6.434 99.886 6.434 97.568C6.434 94.604 8.79 93.046 10.88 93.046C15.554 93.046 17.682 97.15 18.936 101.292H19.278L19.088 92.666H18.784L17.454 94.566C16.124 93.54 13.73 92.552 11.032 92.552C6.7 92.552 3.432 95.554 3.432 99.582C3.432 102.964 4.99 105.054 7.916 106.346C10.044 107.296 11.184 107.714 13.35 108.588C15.63 109.5 17.15 111.248 17.15 113.566C17.15 116.416 15.63 119 11.868 119C7.156 119 4.838 115.2 3.014 110.488H2.672L2.938 119.38H3.28L4.61 117.404C5.75 118.316 8.448 119.494 11.792 119.494ZM23.2253 119H45.7213L46.2153 111.704H45.8733C45.4933 112.844 43.5553 116.492 42.4153 117.67C41.5033 118.62 38.6153 118.544 35.9553 118.544C32.1173 118.544 31.4333 118.202 31.4333 115.086V105.776H35.2333C37.2853 105.776 37.9313 106.46 38.4253 106.992C38.8813 107.486 39.7173 109.842 39.7933 110.944H40.1353V100.342H39.7933C39.6793 101.33 38.9953 103.534 38.4253 104.104C37.9693 104.56 37.3613 105.32 35.2333 105.32H31.4333V93.464H35.7273C36.9433 93.464 38.6533 93.502 39.5653 93.616C41.1993 93.844 43.4033 97.264 43.8213 98.936H44.1633V93.046H23.2253V93.312C23.9093 93.35 25.5053 93.578 26.2273 93.882C27.1773 94.262 27.4053 95.022 27.4053 95.858V116.416C27.4053 117.29 27.1393 117.936 26.2273 118.278C25.6573 118.506 23.9093 118.696 23.2253 118.734V119ZM48.7618 119H70.4978L70.9918 111.628H70.6498C70.2698 112.768 68.3318 116.492 67.1918 117.67C66.2798 118.62 63.9238 118.544 61.2638 118.544C57.4258 118.544 56.7418 118.202 56.7418 115.086V95.592C56.7418 94.756 56.9698 93.996 57.9198 93.692C58.6038 93.464 60.0098 93.35 60.6938 93.312V93.046H48.7998V93.312C49.4838 93.35 50.8518 93.578 51.5358 93.882C52.4858 94.3 52.7138 94.946 52.7138 95.782V116.416C52.7138 117.29 52.4478 117.936 51.5358 118.278C50.9658 118.506 49.4458 118.696 48.7618 118.734V119ZM72.4323 119H94.9283L95.4223 111.704H95.0803C94.7003 112.844 92.7623 116.492 91.6223 117.67C90.7103 118.62 87.8223 118.544 85.1623 118.544C81.3243 118.544 80.6403 118.202 80.6403 115.086V105.776H84.4403C86.4923 105.776 87.1383 106.46 87.6323 106.992C88.0883 107.486 88.9243 109.842 89.0003 110.944H89.3423V100.342H89.0003C88.8863 101.33 88.2023 103.534 87.6323 104.104C87.1763 104.56 86.5683 105.32 84.4403 105.32H80.6403V93.464H84.9343C86.1503 93.464 87.8603 93.502 88.7723 93.616C90.4063 93.844 92.6103 97.264 93.0283 98.936H93.3703V93.046H72.4323V93.312C73.1163 93.35 74.7123 93.578 75.4343 93.882C76.3843 94.262 76.6123 95.022 76.6123 95.858V116.416C76.6123 117.29 76.3463 117.936 75.4343 118.278C74.8643 118.506 73.1163 118.696 72.4323 118.734V119ZM110.281 119.57C116.057 119.57 119.097 115.96 120.655 112.426L120.237 112.198C118.755 115.504 116.019 118.164 111.383 118.164C105.683 118.164 102.263 112.92 102.263 106.042C102.263 97.416 105.455 93.084 110.129 93.084C115.031 93.084 117.957 97.644 119.325 102.052H119.667L119.515 92.666H119.173L117.729 94.718C116.589 93.654 114.309 92.552 111.079 92.552C103.441 92.552 97.7029 98.518 97.7029 106.346C97.7029 114.402 102.795 119.57 110.281 119.57ZM128.163 119H140.779V118.734C140.095 118.696 138.119 118.392 137.663 118.202C136.789 117.822 136.485 117.138 136.485 116.302V93.502H138.651C139.677 93.502 140.817 93.54 141.729 93.654C143.363 93.882 145.605 97.986 146.023 99.658H146.365V93.046H122.577V99.658H122.919C123.337 97.986 125.579 93.882 127.213 93.654C128.125 93.54 129.455 93.502 130.291 93.502H132.457V116.378C132.457 117.214 132.191 117.936 131.279 118.278C130.785 118.468 128.847 118.696 128.163 118.734V119ZM148.098 119H170.594L171.088 111.704H170.746C170.366 112.844 168.428 116.492 167.288 117.67C166.376 118.62 163.488 118.544 160.828 118.544C156.99 118.544 156.306 118.202 156.306 115.086V105.776H160.106C162.158 105.776 162.804 106.46 163.298 106.992C163.754 107.486 164.59 109.842 164.666 110.944H165.008V100.342H164.666C164.552 101.33 163.868 103.534 163.298 104.104C162.842 104.56 162.234 105.32 160.106 105.32H156.306V93.464H160.6C161.816 93.464 163.526 93.502 164.438 93.616C166.072 93.844 168.276 97.264 168.694 98.936H169.036V93.046H148.098V93.312C148.782 93.35 150.378 93.578 151.1 93.882C152.05 94.262 152.278 95.022 152.278 95.858V116.416C152.278 117.29 152.012 117.936 151.1 118.278C150.53 118.506 148.782 118.696 148.098 118.734V119ZM173.597 119H185.225C192.559 119 200.159 115.048 200.159 106.194C200.159 95.782 191.191 93.046 185.985 93.046H173.749V93.312C174.433 93.35 175.497 93.426 176.409 93.806C177.321 94.186 177.587 95.022 177.587 95.858V116.492C177.587 117.328 177.321 118.012 176.409 118.354C175.915 118.544 174.357 118.734 173.597 118.734V119ZM185.757 118.544C182.831 118.544 181.843 117.48 181.615 115.618V93.54C182.451 93.502 184.047 93.464 184.921 93.464C191.305 93.464 195.485 98.86 195.485 106.156C195.485 113.376 192.445 118.544 185.757 118.544ZM212.112 119H224.386V118.734C223.702 118.696 221.954 118.506 221.498 118.316C220.624 117.936 220.32 117.29 220.32 116.454V105.852H224.158C225.944 105.852 227.046 106.574 227.54 107.068C228.072 107.6 228.832 110.032 228.908 111.134H229.288V100.456H228.908C228.756 101.862 228.072 103.724 227.54 104.218C227.046 104.674 226.096 105.396 224.158 105.396H220.32V93.464H224.69C225.906 93.464 227.502 93.502 228.414 93.616C230.048 93.844 232.442 97.53 232.974 99.202H233.316V93.046H212.112V93.312C212.796 93.35 214.392 93.578 215.114 93.882C216.064 94.262 216.292 95.022 216.292 95.858V116.492C216.292 117.328 216.026 118.012 215.114 118.354C214.62 118.544 212.796 118.696 212.112 118.734V119ZM248.764 119.608C252.526 119.608 258.568 117.67 258.568 111.476V99.278C258.568 96.922 258.796 94.87 259.822 94.224C260.62 93.73 262.634 93.35 263.318 93.312V93.046H252.868V93.312C253.742 93.35 255.452 93.578 256.744 94.414C257.58 94.946 258.036 96.732 258.036 99.506V111.324C258.036 114.516 255.718 118.24 249.676 118.24C243.748 118.24 242.76 114.402 242.76 111.666V95.668C242.76 94.832 242.988 94.11 243.938 93.806C244.622 93.578 245.99 93.35 246.674 93.312V93.046H234.856V93.312C235.464 93.35 236.832 93.464 237.516 93.806C238.39 94.262 238.694 94.87 238.694 95.706V112.16C238.694 116.112 242.114 119.608 248.764 119.608ZM287.905 119.266H288.551V99.924C288.551 97.416 288.817 94.908 289.805 94.224C290.641 93.654 292.617 93.35 293.301 93.312V93.046H282.851V93.312C283.725 93.35 285.815 93.54 286.727 94.262C287.601 94.946 288.019 97.188 288.019 99.924V113.148L271.641 93.046H263.813V93.312C264.839 93.35 266.777 93.616 267.689 94.338C268.449 94.946 269.095 96.504 269.095 97.606V112.502C269.095 115.466 268.753 116.986 267.841 117.708C267.309 118.126 264.991 118.696 264.307 118.734V119H274.833V118.734C274.149 118.696 271.717 118.202 270.919 117.594C270.083 116.986 269.627 115.58 269.627 112.312V96.77L287.905 119.266ZM307.109 119.57C312.885 119.57 315.925 115.96 317.483 112.426L317.065 112.198C315.583 115.504 312.847 118.164 308.211 118.164C302.511 118.164 299.091 112.92 299.091 106.042C299.091 97.416 302.283 93.084 306.957 93.084C311.859 93.084 314.785 97.644 316.153 102.052H316.495L316.343 92.666H316.001L314.557 94.718C313.417 93.654 311.137 92.552 307.907 92.552C300.269 92.552 294.531 98.518 294.531 106.346C294.531 114.402 299.623 119.57 307.109 119.57ZM324.992 119H337.608V118.734C336.924 118.696 334.948 118.392 334.492 118.202C333.618 117.822 333.314 117.138 333.314 116.302V93.502H335.48C336.506 93.502 337.646 93.54 338.558 93.654C340.192 93.882 342.434 97.986 342.852 99.658H343.194V93.046H319.406V99.658H319.748C320.166 97.986 322.408 93.882 324.042 93.654C324.954 93.54 326.284 93.502 327.12 93.502H329.286V116.378C329.286 117.214 329.02 117.936 328.108 118.278C327.614 118.468 325.676 118.696 324.992 118.734V119ZM345.23 119H357.162V118.734C356.478 118.696 354.844 118.468 354.388 118.278C353.514 117.898 353.21 117.138 353.21 116.302V95.668C353.21 94.832 353.438 94.11 354.388 93.806C355.072 93.578 356.478 93.35 357.162 93.312V93.046H345.23V93.312C345.914 93.35 347.358 93.616 348.004 93.882C348.916 94.262 349.182 95.022 349.182 95.858V116.492C349.182 117.328 348.916 118.012 348.004 118.354C347.51 118.544 345.914 118.696 345.23 118.734V119ZM373.512 119.608C377.426 119.608 380.542 118.278 382.974 115.96C385.786 113.3 386.926 109.804 386.926 105.852C386.926 102.128 385.558 98.632 383.316 96.39C380.466 93.616 377.236 92.438 373.664 92.438C369.978 92.438 366.634 93.768 364.05 96.39C361.58 98.86 360.364 102.166 360.364 106.308C360.364 110.45 361.922 113.68 364.43 116.036C366.9 118.354 370.054 119.608 373.512 119.608ZM373.664 119.152C367.736 119.152 364.962 113.262 364.962 106.118C364.962 97.872 368.268 92.894 373.664 92.894C379.972 92.894 382.328 99.392 382.328 105.966C382.328 113.414 379.554 119.152 373.664 119.152ZM412.667 119.266H413.313V99.924C413.313 97.416 413.579 94.908 414.567 94.224C415.403 93.654 417.379 93.35 418.063 93.312V93.046H407.613V93.312C408.487 93.35 410.577 93.54 411.489 94.262C412.363 94.946 412.781 97.188 412.781 99.924V113.148L396.403 93.046H388.575V93.312C389.601 93.35 391.539 93.616 392.451 94.338C393.211 94.946 393.857 96.504 393.857 97.606V112.502C393.857 115.466 393.515 116.986 392.603 117.708C392.071 118.126 389.753 118.696 389.069 118.734V119H399.595V118.734C398.911 118.696 396.479 118.202 395.681 117.594C394.845 116.986 394.389 115.58 394.389 112.312V96.77L412.667 119.266Z"
							fill="white"
						/>
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

				{/* 手势 */}
				<div
					style={{
						position: 'absolute',
						left: '33.48%',
						right: '56.81%',
						top: '76.95%',
						bottom: '-4%'
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

				<div
					style={{
						position: 'absolute',
						width: '180.5px',
						height: ' 131px',
						left: '406px',
						top: '730px'
					}}
				>
					<svg width="181" height="131" viewBox="0 0 181 131" fill="none" xmlns="http://www.w3.org/2000/svg">
						<mask
							id="mask0_1290_1169"
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
						<g mask="url(#mask0_1290_1169)">
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

				<div
					style={{
						position: 'absolute',
						width: '554px',
						height: '450px',
						left: '812px',
						top: '574px',

						background: 'rgba(30, 33, 41, 0)',
                        backdropFilter: 'blur(48px)',
                        zIndex:'1'
					}}
				>
					<svg width="554" height="450" viewBox="0 0 554 450" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g filter="url(#filter0_b_1205_1300)">
							<rect width="554" height="450" fill="#1E2129" fillOpacity="0.26" />
						</g>
						<defs>
							<filter
								id="filter0_b_1205_1300"
								x="-48"
								y="-48"
								width="650"
								height="546"
								filterUnits="userSpaceOnUse"
								colorInterpolationFilters="sRGB"
							>
								<feFlood floodOpacity="0" result="BackgroundImageFix" />
								<feGaussianBlur in="BackgroundImage" stdDeviation="24" />
								<feComposite
									in2="SourceAlpha"
									operator="in"
									result="effect1_backgroundBlur_1205_1300"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="effect1_backgroundBlur_1205_1300"
									result="shape"
								/>
							</filter>
						</defs>
					</svg>
				</div>
			</div>
		);
	}
}
