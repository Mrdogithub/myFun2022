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
			<div >
				<div
					style={{
						position: 'relative',
						top: indexTextStyle.top,
						left: indexTextStyle.left,
						zIndex: '99',
						width: '47px',
						height: '47px',
						boxSizing: 'border-box',
						padding: '7px'
					}}
					onClick={() => this.swiperTo(slideIndex)}
				>
					<img src={indexText} />
				</div>
				<div
					style={{
						/* Advanced dimmabel window */

						position: 'absolute',
						left: subTextStyle.left,
						top: subTextStyle.top
					}}
				>
					<img src={subText} />
					<div
						style={{
							position: 'absolute',
							borderBottom: '2px solid #fff',
							opacity: '0.5',
							width: ' 100%'
						}}
					/>
				</div>
			</div>
		);
	}
}
