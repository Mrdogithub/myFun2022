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
	}
	swiperTo(index: number) {
		console.log('subMenu index:' + index);
		this.props.onSwiperTo(index);
	}
	render() {
		return (
			<div>
				{/* 背景*/}
				<div
					style={{
						position: 'absolute',
						left: this.props.left,
						top: this.props.top,
						background: this.props.bgColor,
						width: '422px',
						height: '90px',
						zIndex: '999',
						transform: 'scale(0.9)'
					}}
				>
					{/* 索引 1 激活态*/}
					{this.props.indexGroup.map((item: any, index: any) => {
						return item.isActive ? (
							<ActiveIndex
								indexItem={item}
								key={'ActiveIndex' + index}
								onSwiperTo={(index: number) => this.swiperTo(index)}
							/>
						) : (
							<NormalIndex
								indexItem={item}
								key={'NormalIndex' + index}
								onSwiperTo={(index: number) => this.swiperTo(index)}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}
