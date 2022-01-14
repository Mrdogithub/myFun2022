import React from 'react';
import SwiperIndex from './swiperIndex';
export class PreloadComponent extends React.Component<any, any> {
	render() {
		const { isResourceLoaded, loadInProgress } = this.props;

		if (isResourceLoaded) {
			return <SwiperIndex images={this.props.images} />;
		}
		return (
			<div style={{ position: 'absolute', width: '100%', height: '100%', background: '#594E5B' }}>
				<p
					className="dFordTitle"
					style={{
						position: 'absolute',
						left: '0px',
						right: '0px',
						bottom: '0px',
						top: '50%',
						margin: '0 auto'
					}}
				>
					{loadInProgress} %
				</p>
			</div>
		);
	}
}
