import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "swiper/css/bundle";
import "./styles.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'animate.css';
import 'video-react/dist/video-react.css';
import './assets/base.css';
import './assets/animate.css';
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
