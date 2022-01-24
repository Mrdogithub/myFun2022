import React, { useState } from 'react';
import {  HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { routers } from './router/routerIndex';
export default class App extends React.Component<any, any> {
	render(): React.ReactNode {
		return (
			<Router>
				<Routes>
					{routers.map((router, index) => {
						return (
							<Route
								path={router.path}
								key={index}
								element={<router.component />}
							/>
						);
					})}
				</Routes>
			</Router>
		);
	}
}
