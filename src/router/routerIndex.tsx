import SwiperIndex from '../swiperIndex';
import LoginComponent from '../pages/login/loginComponent';
import { MainComponent } from '../mainComponent';
interface router {
	path: string;
	component: any;
	children?: Array<router>;
}

export const routers: Array<router> = [
	{
		path: '/',
		component: LoginComponent
	},
	{
		path: '/home',
		component: MainComponent
	}
];
