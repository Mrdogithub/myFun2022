import React from 'react';
import homeBg_1 from './homeBg_1.png';
import video from './qq.mp4';
import {
	Player,
	ControlBar,
	PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
	ReplayControl, // 后退按钮
	ForwardControl, // 前进按钮
	CurrentTimeDisplay,
	TimeDivider,
	PlaybackRateMenuButton, // 倍速播放选项
	VolumeMenuButton
} from 'video-react';
import 'video-react/dist/video-react.css';
export class HomeComponentIndex2 extends React.Component<any, any> {
	player: any;
	constructor(props: any, context: any) {
		super(props, context);
		this.state = {
			playerSource: video,
		};
	}
	componentDidUpdate(prevProps: any, prevState: any) {
		if(this.props.videoConfig.autoPlay){
			this.player.play();
		}
		if(this.props.videoConfig.pause){
			this.player.pause();
		}
		

		if(this.props.videoConfig.autoPlay)
		if (this.state.playerSource !== prevState.playerSource) {
			this.player.load();
		}
	}

	handleValueChange(e:any) {
		const { value } = e.target;
		this.setState({
			inputVideoUrl: value
		});
	}


	render() {
		return (
			<div>
				{/* 背景图片*/}
				<div>
					<img src={homeBg_1} />
				</div>
				{/* 栅格背景 */}
				<div
					style={{
						position: 'absolute',
						width: '832px',
						height: '894px',
						left: '257px',
						top: '130px'
					}}
				>
					<svg width="833" height="894" viewBox="0 0 833 894" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line opacity="0.3" x1="0.5" y1="-2.18557e-08" x2="0.500039" y2="894" stroke="#E8E8E8" />
						<line opacity="0.3" x1="277.5" y1="-2.18557e-08" x2="277.5" y2="894" stroke="#E8E8E8" />
						<line opacity="0.3" x1="555.5" y1="-2.18557e-08" x2="555.5" y2="894" stroke="#E8E8E8" />
						<line opacity="0.3" x1="832.5" y1="-2.18557e-08" x2="832.5" y2="894" stroke="#E8E8E8" />
					</svg>
				</div>

				<div style={{ position: 'absolute', left: '0px', right: '0px', top: '0px' }}>
					<div
						style={{
							margin: '0px',
							paddingTop: '140px'
						}}
					>
						<Player
							ref={(player: any) => {
								// this.setState({player:player})
								this.player = player;
							}}
							autoPlay={true}
						>
							<source src={video} />
						</Player>
					</div>
				</div>
			</div>
		);
	}
}
