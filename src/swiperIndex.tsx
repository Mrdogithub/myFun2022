import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import './styles.css';

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
import SwiperCore, { Mousewheel } from 'swiper';



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
            videoConfig:{
                autoPlay:false,
                pause:false,
            }
        };
    }

    videoConfig = []

    
  
	swiperTo(index: number) {
		_swiper.slideTo(index, 1000, false);
	}
	
	getSwiperDom(swiper: any) {
		_swiper = swiper;
	}
	setAnimate(swiper:any) {
        if(swiper.activeIndex === 3) {
            this.setState({videoConfig: {    autoPlay:true,
                pause:false,}})
        } else {
            this.setState({videoConfig:{    autoPlay:false,
                pause:true}})
        }
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
            console.log(this.state)
        },100)
	}
	updateUserInfo (userInfo: string) {
		if(userInfo) {
			this.setState({userName: userInfo})
			_swiper.allowSlideNext = true
			_swiper.slideTo(1,1000,false)
		} 
    }



	render() {
        
        return(<>
            <Menu  onSwiperTo={(index: number) => this.swiperTo(index)} userName = {this.state.userName}/>
            <Swiper
                onSwiper={(swiper: any) => this.getSwiperDom(swiper)}
                onSlideChange = {(swiper:any)=>{this.setAnimate(swiper)}}
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true
                }}
                className="mySwiper"
            >
            {/* section one */}
                <SwiperSlide>
                    {/* globalIndex:0*/}
                    <Intro images = {this.props.images} onUserNameChange = {(userInfo:string)=>{this.updateUserInfo(userInfo)}}/>
                </SwiperSlide>
                <SwiperSlide>
                     {/* globalIndex:1*/}
                    <FingerPrint />
                </SwiperSlide>
                
                <SwiperSlide>
                     {/* globalIndex:2*/}
                    <HomeComponentIndex1></HomeComponentIndex1>
                </SwiperSlide>
                <SwiperSlide>
                     {/* globalIndex:3*/}
                    <HomeComponentIndex2 videoConfig = {this.state.videoConfig}></HomeComponentIndex2>
                </SwiperSlide>
                <SwiperSlide>
                     {/* globalIndex:4*/}
                    <HomeComponentIndex3></HomeComponentIndex3>
                </SwiperSlide>

                <SwiperSlide>
                     {/* globalIndex:5*/}
                    <PrivacyComponentIndex1 />
                </SwiperSlide>
                <SwiperSlide>
                     {/* globalIndex:6*/}
                    <PrivacyComponentIndex2  inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}/>
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:7*/}
                    <PrivacyComponentIndex3  inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}></PrivacyComponentIndex3>
                </SwiperSlide>

                <SwiperSlide>
                    {/* globalIndex:8*/}
                    <PrivacyComponentIndex4  inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}/>
                </SwiperSlide>

                <SwiperSlide>
                    {/* globalIndex:9*/}
                    <PrivacyComponentIndex5 inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}/>
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:10*/}
                    <PrivacyComponentIndex6 inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}/>
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:11*/}
                    <PrivacyComponentIndex7 inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}/>
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:12*/}
                    <PrivacyComponentIndex8 inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}/>
                </SwiperSlide>

                <SwiperSlide>
                    {/* globalIndex:13*/}
                    <PrivacyComponentIndex9 inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate} />
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:14*/}
                    <PrivacyComponentIndex10 inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate} />
                </SwiperSlide>

                <SwiperSlide>
                    {/* globalIndex:15*/}
                    <PrivacyComponentIndex11 inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate} />
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:16*/}
                    <PrivacyComponentIndex12 inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate} />
                </SwiperSlide>

                <SwiperSlide>
                    {/* globalIndex:17*/}
                    <PrivacyComponentIndex13  inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}/>
                </SwiperSlide>
            

                {/*section: Comfort */}
                <SwiperSlide>
                    {/* globalIndex:18*/}
                    <ComfortComponentIndex1 />
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:19*/}
                    <ComfortComponentIndex2 />
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:20*/}
                    <ComfortComponentIndex3 inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}/>
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:21*/}
                    <ComfortComponentIndex4 inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}/>
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:22*/}
                    <ComfortComponentIndex5 inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}/>
                </SwiperSlide>

                <SwiperSlide>
                    {/* globalIndex:23*/}
                    <ComfortComponentIndex6 inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}/>
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:24*/}
                    <ComfortComponentIndex7 inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}/>
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:25*/}
                    <ComfortComponentIndex8 inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}/>
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:26*/}
                    <ComfortComponentIndex9 inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate} />
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:27*/}
                    <ComfortComponentIndex10 inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}/>
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:28*/}
                    <ComfortComponentIndex11 inAnimate = {this.state.inAnimate} outAnimate = {this.state.outAnimate}/>
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:29*/}
                    <ComfortComponentIndex12 />
                </SwiperSlide>
                
                {/* section: leisure*/}
                <SwiperSlide>
                    {/* globalIndex:30*/}
                    <LeisureComponentIndex1 />
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:31*/}
                    <LeisureComponentIndex2 />
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:32*/}
                    <LeisureComponentIndex3 />
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:33*/}
                    <LeisureComponentIndex4 />
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:34*/}
                    <LeisureComponentIndex5 />
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:35*/}
                    <LeisureComponentIndex6 />
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:36*/}
                    <LeisureComponentIndex7 />
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:37*/}
                    <LeisureComponentIndex8 />
                </SwiperSlide>
                
                {/* section Unique*/}
                <SwiperSlide>
                    {/* globalIndex:38*/}
                    <UniqueComponentIndex1 />
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:39*/}
                    <UniqueComponentIndex2 />
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:40*/}
                    <UniqueComponentIndex3 />
                </SwiperSlide>
                <SwiperSlide>
                    {/* globalIndex:41*/}
                    <UniqueComponentIndex4 />
                </SwiperSlide>
            </Swiper>
            
        </>)
     
    }
    
  
}
