import React, { useState } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import './styles.css';
import 'swiper/css/free-mode'
import { Intro } from './pages/intro/introComponent';
import { FingerPrint } from './pages/intro/fingerPrintComponent';
import {HomeComponentIndex1} from './pages/home/homeComponentIndex1'
import {HomeComponentIndex2} from './pages/home/homeComponentIndex2'
import {HomeComponentIndex3} from './pages/home/homeComponentIndex3'

import { PrivacyComponentIndex1 } from './pages/privacy/privacyComponentIndex1';
import { PrivacyComponentIndex2 } from './pages/privacy/privacyComponentIndex2';
import { PrivacyComponentIndex3} from './pages/privacy/privacyComponentIndex3';
import { PrivacyComponentIndex4 } from './pages/privacy/privacyComponentIndex4';
import { PrivacyComponentIndex5 } from './pages/privacy/privacyComponentIndex5';
import { PrivacyComponentIndex6 } from './pages/privacy/privacyComponentIndex6';
import { PrivacyComponentIndex7 } from './pages/privacy/privacyComponentIndex7';
import { PrivacyComponentIndex8 } from './pages/privacy/privacyComponentIndex8';
import { PrivacyComponentIndex9 } from './pages/privacy/privacyComponentIndex9';
import { PrivacyComponentIndex10 } from './pages/privacy/privacyComponentIndex10';
import { PrivacyComponentIndex11 } from './pages/privacy/privacyComponentIndex11';
import { PrivacyComponentIndex12 } from './pages/privacy/privacyComponentIndex12';
import { PrivacyComponentIndex13 } from './pages/privacy/privacyComponentIndex13';






import { ComfortComponentIndex1 } from './pages/comfort/comfortComponentIndex1';
import { ComfortComponentIndex2 } from './pages/comfort/comfortComponentIndex2';
import { ComfortComponentIndex3 } from './pages/comfort/comfortComponentIndex3';
import { ComfortComponentIndex4 } from './pages/comfort/comfortComponentIndex4';
import { ComfortComponentIndex5 } from './pages/comfort/comfortComponentIndex5';
import { ComfortComponentIndex6 } from './pages/comfort/comfortComponentIndex6';
import { ComfortComponentIndex7 } from './pages/comfort/comfortComponentIndex7';
import { ComfortComponentIndex8 } from './pages/comfort/comfortComponentIndex8';
import { ComfortComponentIndex9 } from './pages/comfort/comfortComponentIndex9';
import { ComfortComponentIndex10 } from './pages/comfort/comfortComponentIndex10';
import { ComfortComponentIndex11 } from './pages/comfort/comfortComponentIndex11';
import { ComfortComponentIndex12 } from './pages/comfort/comfortComponentIndex12';



import { LeisureComponentIndex1 } from './pages/leisure/leisureComponentIndex1';
import { LeisureComponentIndex2 } from './pages/leisure/leisureComponentIndex2';
import { LeisureComponentIndex3 } from './pages/leisure/leisureComponentIndex3';
import { LeisureComponentIndex4 } from './pages/leisure/leisureComponentIndex4';
import { LeisureComponentIndex5 } from './pages/leisure/leisureComponentIndex5';
import { LeisureComponentIndex6 } from './pages/leisure/leisureComponentIndex6';
import { LeisureComponentIndex7 } from './pages/leisure/leisureComponentIndex7';
import { LeisureComponentIndex8 } from './pages/leisure/leisureComponentIndex8';

import { UniqueComponentIndex1 } from './pages/unique/uniqueComponentIndex1';
import { UniqueComponentIndex2 } from './pages/unique/uniqueComponentIndex2';
import { UniqueComponentIndex3 } from './pages/unique/uniqueComponentIndex3';
import { UniqueComponentIndex4 } from './pages/unique/uniqueComponentIndex4';

import { Menu } from './components/menu/menu';
import { textConfig,slideAnimateMap } from './config/textConfig';
import SwiperCore, { Mousewheel,FreeMode} from 'swiper';


let _swiper: any = null;
SwiperCore.use([
	Mousewheel
]);

export default class SwiperIndex extends React.Component<any, any> {
	constructor(props:any) {
		super(props);
		this.state = {
            inAnimate: '',
            outAnimate: '',
            userName:'',
            activeIndex: 0,
            videoConfig:{
                autoPlay:false,
                pause:false,
            }
        };
    }
    currentTransitionSpeed = 0
    videoConfig = []

    setTransition(transitionSpeed) {
        console.log('transitionSpeed')
        console.log(transitionSpeed)
        this.currentTransitionSpeed = transitionSpeed;
        // console.log("transition", transitionSpeed);
      }
  
	swiperTo(index: number) {
        console.log('swiperTo')
		_swiper.slideTo(index, 1000, false);
	}
	
	getSwiperDom(swiper: any) {
		_swiper = swiper;
	}
	setAnimate(swiper:any) {
        const currentActiveIndex = swiper.activeIndex;
      
        // 更新全局当前索引
        console.log(swiper)
        this.setState({activeIndex: swiper.activeIndex})

        // 模拟视屏播放
        // if(swiper.activeIndex === 3) {
        //     this.setState({videoConfig: {    autoPlay:true,
        //         pause:false,}})
        // } else {
        //     this.setState({videoConfig:{    autoPlay:false,
        //         pause:true}})
        // }
        if(!slideAnimateMap[swiper.activeIndex]) {
            this.setState({
                inAnimate: slideAnimateMap[999].in,
                outAnimate:slideAnimateMap[999].out,
			})
            return;
        }

    
		this.setState({
            inAnimate: '',
            outAnimate:''
		})
		setTimeout(()=>{
			this.setState({
                inAnimate: slideAnimateMap[swiper.activeIndex].in,
                outAnimate:slideAnimateMap[swiper.activeIndex].out,
            })
        })
    }
    


	updateUserInfo (userInfo: string) {
		if(userInfo) {
			this.setState({userName: userInfo})
			_swiper.slideTo(1,1000,false)
		} 
    }

    isShowMenu() {
        const hideMenuByIndex = [0,1];
        return hideMenuByIndex.includes(this.state.activeIndex)?'none':'block'
    }

    onNext() {
        if(_swiper) {
            _swiper.slideTo(2, 1000, false);
        }
    }

    onTouchMove(swiper) {
        const currentActiveIndex = swiper.activeIndex;
        if(currentActiveIndex === 5) {
            this.setState({videoConfig: {autoPlay:true, pause:false,}});
            // this.setState({
            //     inAnimate: '',
            //     outAnimate:''
            // })
            // setTimeout(()=>{
            //     this.setState({
            //         inAnimate: '',
            //         outAnimate:slideAnimateMap[_swiper.activeIndex].out,
            //     })
            // },2000)

            // setTimeout(()=>{
            //     this.setState({
            //         inAnimate: slideAnimateMap[_swiper.activeIndex].in,
            //         outAnimate:'',
            //     })
            // },2500)
        }
    }
    onTransition(swiper) {
        // console.log('onTransition')
        // console.log(1,swiper)
    }

    onChangeAnimateByTime() {
        this.setState({
            inAnimate: '',
            outAnimate:''
        })
		setTimeout(()=>{
			this.setState({
                // inAnimate: slideAnimateMap[_swiper.activeIndex].out,
                outAnimate:slideAnimateMap[_swiper.activeIndex].out,
            })
        })
        this.setState({
            inAnimate: slideAnimateMap[_swiper.activeIndex].in,
            outAnimate:'',
        })
    }

	render() {
        
        return(<>
            <Menu displayStatus = {this.isShowMenu()}  onSwiperTo={(index: number) => this.swiperTo(index)} userName = {this.state.userName}/>
        
            {/* globalIndex:4*/}
            <HomeComponentIndex3></HomeComponentIndex3>
            {/* globalIndex:5*/}
            {/* <PrivacyComponentIndex1 
            inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}
            videoConfig = {this.state.videoConfig} changeAnimateByTime = {()=>this.onChangeAnimateByTime()}/> */}
        
            {/* globalIndex:6*/}
            {/* <PrivacyComponentIndex2  inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}/> */}

            
        </>)
     
    }
    
  
}
