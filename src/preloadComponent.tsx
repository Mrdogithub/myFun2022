import React from 'react';
import SwiperIndex from './swiperIndex';
export class PreloadComponent extends React.Component<any, any> {
	render() {
		const { isResourceLoaded, loadInProgress, isPreload } = this.props;

		return (
			<div>
				<div style={{ position: 'absolute', width: '100%', height: '100%', opacity: isPreload ? '0' : '1' }}>
					<SwiperIndex
						privacyImages={this.props.privacyImages}
						comfortImages={this.props.comfortImages}
						leisureImages={this.props.leisureImages}
						uniqueImages={this.props.uniqueImages}
						magazineImages={this.props.magazineImages}
						frunkBarImges={this.props.frunkBarImges}
						advancedDimmableWindowImages = {this.props.advancedDimmableWindowImages}
						digitalSealInsertImages = {this.props.digitalSealInsertImages}
						digitalSealRotateImages={this.props.digitalSealRotateImages}
						images={this.props.images}
					/>
				</div>
				<div
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						background: '#594E5B',
						zIndex: '999',
						display: isPreload ? 'block' : 'none'
					}}
				>
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
			</div>
		);
	}
}
