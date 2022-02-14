import React from 'react';

export class NormalIndex extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	swiperTo(event,slideIndex: number) {
		event.stopPropagation();
		event.nativeEvent.stopImmediatePropagation();
		this.props.onSwiperTo(event,slideIndex);
	}
	render() {
		const { indexText, subText, indexTextStyle, subTextStyle,slideIndex } = this.props.indexItem;
		return (
			<div
				style={{
					position: 'absolute',
					left: indexTextStyle.left,
					top: indexTextStyle.top,
					width: '35px',
					height: '30px',
					padding: '5px',
					boxSizing: 'border-box'
				}}
				className = 'dFordSunMenuNormalIndex'
				onTouchEnd={(event) => this.swiperTo(event,slideIndex)}
			>
				{indexText}
			</div>
		);
	}
}
