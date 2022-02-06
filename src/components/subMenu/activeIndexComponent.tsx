import React from 'react';

export class ActiveIndex extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	swiperTo(slideIndex: number) {
		this.props.onSwiperTo(slideIndex);
	}
	render() {
		const { indexText, subText, indexTextStyle, subTextStyle, slideIndex } = this.props.indexItem;

		return (
			<div>
				<div
					style={{
						position: 'relative',
						top: indexTextStyle.top,
						left: indexTextStyle.left,
						zIndex: '99',
						width: '47px',
						height: '47px',
						boxSizing: 'border-box',
						padding: '7px',
					}}
					className = 'dFordSunMenuActiveIndex'
					onTouchStart={() => this.swiperTo(slideIndex)}
				>
					{indexText}
				</div>
				<div
					style={{
						/* Advanced dimmabel window */
						borderBottom: '2px solid rgba(255, 255, 255,0.5)',
						position: 'absolute',
						left: subTextStyle.left,
						bottom:'28px',
						maxWidth: '160px'

					}}
					className = 'dFordSunMenuText'
				>
					{subText}
				</div>
				
			</div>
		);
	}
}
