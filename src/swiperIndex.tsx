import React, { useState } from 'react';
import {HomeComponentIndex3} from './pages/home/homeComponentIndex3'
import { Menu } from './components/menu/menu';
export default class SwiperIndex extends React.Component<any, any> {
	constructor(props:any) {
		super(props);
		this.state = {
            showMenu: 'none',
        };
        this.homeComponent = React.createRef();
    }
    homeComponent:any;
    
    componentDidMount () {
        this.setState({showMenu:'none'})
    } 

    /**
     * 控制menu菜单跳转
     * 
    */
	swiperTo(index: number) {
        this.homeComponent.current.onSlideTo(index)
	}
	
    /**
     * 同步用户名称到menu菜单
     * 
    */
	updateUserInfo (userInfo: string) {
		if(userInfo) {
			this.setState({userName: userInfo})
		} 
    }

    /**
     * 控制menu 菜单显示状态
     * 
    */
    showMenu() {
        this.setState({showMenu:'block'})
    }

	render() {   
        return(<>
            <Menu displayStatus = {this.state.showMenu} onSwiperTo={(index: number) => this.swiperTo(index)} userName = {this.state.userName}/>
            <HomeComponentIndex3
            privacyImages={this.props.privacyImages}
            comfortImages={this.props.comfortImages}
            leisureImages={this.props.leisureImages}
            uniqueImages={this.props.uniqueImages}
            ref = {this.homeComponent}
            onShowMenu = {()=>{this.showMenu()}}
            onUserNameChange = {(userInfo:string)=>{this.updateUserInfo(userInfo)}}></HomeComponentIndex3>
        </>)
    }
}
