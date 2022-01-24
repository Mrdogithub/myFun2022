import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import introBg_1 from './introBg_1.png';
import introBgMask from './introBgMask.png';

export default class LoginComponent extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			password: ''
		};
		this.state = { image: [] };
	}
	login() {
		if (this.state.password === 'admin2020') {
			window.location.href = '#/';
		}
	}
	checkLogin(loginPassword: any) {
		this.setState({ password: loginPassword });
	}
	render() {
		return (
			<div>
				<div
					style={{
						width: '100%',
						height: '100%',
						position: 'absolute',
						left: '0%',
						right: '0%',
						top: ' 0%',
						bottom: '0%',
						background: '#817066'
					}}
				>
					<input
						onChange={(e) => this.checkLogin(e.target.value)}
						placeholder="Input Password"
						style={{
							position: 'absolute',
							width: '310px',
							height: '62px',
							left: '0px',
							top: '50%',
							right: '0px',
							margin: '0 auto',
							background: '#5E504B',
							border: '3px solid #929292',
							boxSizing: 'border-box',
							textAlign: 'center',
							borderRadius: '41px',
							fontFamily: 'Lincoln Proxima Nova Light',
							fontStyle: 'normal',
							fontWeight: 300,
							fontSize: '22px',
							lineHeight: '110%',
							/* or 24px */
							letterSpacing: '-0.01em',
							color: '#FFFFFF'
						}}
					/>
					<div
						className="dFordTextThin"
						style={{
							position: 'absolute',
							width: '355px',
							height: '37px',
							left: '509px',
							top: '613px',
							textAlign: 'center'
						}}
						onClick={() => {
							this.login();
						}}
					>
						Login
					</div>
				</div>
			</div>
		);
	}
}
