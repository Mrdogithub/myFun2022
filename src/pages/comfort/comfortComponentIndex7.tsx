import React from 'react';
import comfortBg_7_new from './comfortBg_7_new.png';
import { SubMenu } from '../../components/subMenu/subMenuComponent';
import { subMenuList } from '../../config/subMenuList';
export class ComfortComponentIndex7 extends React.Component<any, any> {
	render() {
		return (
			<div>
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

				<div>
					<img src={comfortBg_7_new} />
				</div>

				<div
					style={{
						position: 'absolute',
						width: '709px',
						height: '239px',
						left: '167px',
						top: '338px'
					}}
				>
					<svg width="713" height="243" viewBox="0 0 713 243" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							opacity="0.2"
							d="M711 28.9296V2H2V132.44M711 106.352V241H2V210.704"
							stroke="white"
							strokeWidth="4"
						/>
					</svg>
				</div>

				<div
					className="dFordTitle"
					style={{
						position: 'absolute',
						width: '655px',
						height: '204px',
						left: '193px',
                        top: '364px',
                        textAlign:'left'
					}}
				>
					fLEXIBLE DISPLAY SYSTEM
				</div>
				<SubMenu
					right="0px"
					bottom="0px"
					bgColor={subMenuList[5].bgColor}
					indexGroup={subMenuList[5].indexGroup}
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
