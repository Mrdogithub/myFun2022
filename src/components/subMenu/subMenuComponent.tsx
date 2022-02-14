import React from 'react';

import { ActiveIndex } from './activeIndexComponent';
import { NormalIndex } from './normalIndexComponent';
interface ISubMenuProps {
	left?: string;
	top?: string;
	activeIndex?: number;
	bgColor?: string;
	indexGroup: [IndexItem];
}

interface IndexItem {
	indexText?: string;
	indexTextStyle?: Style;
	subTextStyle?: Style;
	subText?: string;
}

interface Style {
	width?: string;
	height?: string;
	left: string;
	top: string;
}

export class SubMenu extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		const { left = '944px', top = '934px', bgColor = '#3F434A',isActiveOnly } = this.props;
		this.state = {
			left,
			top,
			bgColor
		};
	}
	swiperTo(event,index: number) {
		if (!this.props.onSwiperTo) return;
		this.props.onSwiperTo(event,index);
	}
	render() {
		return (
			<div>
				{/* 背景*/}
				<div
					style={{
						position: 'absolute',
						left: this.props.left,
						right: this.props.right,
						top: this.props.top,
						bottom: this.props.bottom,
						background:this.props.isActiveOnly?'none': this.props.bgColor,
						width: '422px',
						height: '90px',
						zIndex: '999',
						transform: this.props.noScale ? 'scale(1)' : 'scale(0.9)'
					}}
					className = {this.props.className}
				>
					{/* 索引 1 激活态*/}
					{this.props.indexGroup.map((item: any, index: any) => {
						return item.isActive ? (
							<ActiveIndex
								indexItem={item}
								key={'ActiveIndex' + index}
								onSwiperTo={(event,index: number) => this.swiperTo(event,index)}
							/>
						) : (
							this.props.isActiveOnly?'':
							<NormalIndex
								indexItem={item}
								key={'NormalIndex' + index}
								onSwiperTo={(event,index: number) => this.swiperTo(event,index)}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}
