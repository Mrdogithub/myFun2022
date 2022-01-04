import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import {Intro} from './pages/intro/introComponent'
import {FingerPrint} from './pages/intro/fingerPrintComponent'
import{DegreesSpinningVideo} from './pages/intro/degreesSpinningVideoComponent'

import {PrivacyIndex} from './pages/privacy/privacyIndexComponent'
import {PrivacySub} from './pages/privacy/privacySubComponent'
import {Advanced} from './pages/privacy/advancedComponent'
import {AdvancedSub} from './pages/privacy/advancedSubComponent'
import {Remote} from './pages/privacy/remoteComponent'
import {AdvancedDimmable} from './pages/privacy/advancedDimmableComponent'
import {RemoteSub} from './pages/privacy/remoteSubComponent'
import {DigitalSeal} from './pages/privacy/digitalSealComponent'
import {DigitalSealSub} from './pages/privacy/digitalSealSubComponent'
import {InteriorCameras} from './pages/privacy/interiorCamerasComponent'
import {InteriorCamerasSub} from './pages/privacy/interiorCamerasSubComponent'
import {PrivacyVideoSlide} from './pages/privacy/privacyVideoSlideComponent'
import {ContinueToComfort } from './pages/privacy/continueToComfortComponent'


import {Comfort} from './pages/comfort/comfortComponent'
import {ComfortSub} from './pages/comfort/comfortSubComponent'
import {VoiceInitiated} from './pages/comfort/voiceInitiatedComponent'
import {FlexibleDisplaySystem} from './pages/comfort/flexibleDisplaySystemComponent'
import {FlexibleDisplaySystemSub} from './pages/comfort/flexibleDisplaySystemSubComponent'
import {ControlPrinciples} from './pages/comfort/controlPrinciplesComponent'
import {SelectFunction} from './pages/comfort/selectFunctionComponent'
import {ProjectionTech} from './pages/comfort/projectionTechComponent'
import {ProjectionTechSub} from './pages/comfort/projectionTechSubComponent'
import { ProjectMagazine } from './pages/comfort/projectionMagazineComponent';
import {ProjectionMagaineSub} from './pages/comfort/projectionMagazineSubComponent'
import {ContinueToLeisure} from './pages/comfort/continueToLeisureComponent'


import {Ieisure} from './pages/leisure/leisureComponent' 
import {LeisureSub} from './pages/leisure/leisureSubComponent'
import {FunkBar} from './pages/leisure/funkbarComponent'
import {FunkBarSub} from './pages/leisure/funkbarSubComponent'
import {MusicStudio} from './pages/leisure/musicStudioComponent'
import {MusicStudioSub} from './pages/leisure/musicStudioSubComponent'
import {Cam} from './pages/leisure/CamComponent'
import {CamSub} from './pages/leisure/camSubComponent'


import {Unique} from './pages/unique/uniqueComponent'
import {UniqueSub} from './pages/unique/uniqueSubComponent'
import {UniqueThree} from './pages/unique/uniqueThreeComponent'
import {NftArt} from './pages/unique/nftArtComponent'


import {Menu} from './components/menu/menu'
// import Swiper core and required modules
import SwiperCore, { Mousewheel, Pagination } from 'swiper';
let _swiper:any = null
// install Swiper modules
SwiperCore.use([Mousewheel,Pagination]);
// const [swiperDom, setSwiperDom] = useState(SwiperProps);
export function swiperTo (index:number) {
	_swiper.slideTo(index,1000,false)
}

export function getSwiperDom(swiper:any) {
	_swiper = swiper;
}
export default function App() {

	return (<>
	<Menu onSwiperTo = {(index:number)=>swiperTo(index)}></Menu>
		<Swiper
			onSwiper = {(swiper:any)=>getSwiperDom(swiper)}
			direction={'vertical'}
			slidesPerView={1}
			spaceBetween={30}
			mousewheel={true}
			pagination={{
				clickable: true,
			}}
			className="mySwiper"
		>
			<SwiperSlide><Intro></Intro></SwiperSlide>
			<SwiperSlide><FingerPrint></FingerPrint></SwiperSlide>
			<SwiperSlide><DegreesSpinningVideo></DegreesSpinningVideo></SwiperSlide>
			<SwiperSlide><PrivacyIndex></PrivacyIndex></SwiperSlide>
			<SwiperSlide><PrivacySub></PrivacySub></SwiperSlide>
			<SwiperSlide><Advanced onSwiperTo = {(index:number)=>swiperTo(index)}> </Advanced></SwiperSlide>
			<SwiperSlide><AdvancedSub></AdvancedSub></SwiperSlide>
			<SwiperSlide><Remote></Remote></SwiperSlide>
			<SwiperSlide><AdvancedDimmable></AdvancedDimmable></SwiperSlide>
			<SwiperSlide><RemoteSub></RemoteSub></SwiperSlide>
			<SwiperSlide><DigitalSeal></DigitalSeal></SwiperSlide>
			<SwiperSlide><DigitalSealSub></DigitalSealSub></SwiperSlide>
			<SwiperSlide><InteriorCameras></InteriorCameras></SwiperSlide>
			<SwiperSlide><InteriorCamerasSub></InteriorCamerasSub></SwiperSlide>
			<SwiperSlide><PrivacyVideoSlide></PrivacyVideoSlide></SwiperSlide>
			<SwiperSlide><ContinueToComfort></ContinueToComfort></SwiperSlide>

			<SwiperSlide><Comfort></Comfort></SwiperSlide>
			<SwiperSlide><ComfortSub></ComfortSub></SwiperSlide>
			<SwiperSlide><VoiceInitiated></VoiceInitiated></SwiperSlide>
			<SwiperSlide><FlexibleDisplaySystem></FlexibleDisplaySystem></SwiperSlide>
			<SwiperSlide><FlexibleDisplaySystemSub></FlexibleDisplaySystemSub></SwiperSlide>
			<SwiperSlide><ControlPrinciples></ControlPrinciples></SwiperSlide>
			<SwiperSlide><SelectFunction></SelectFunction></SwiperSlide>
			<SwiperSlide><ProjectionTech></ProjectionTech></SwiperSlide>
			<SwiperSlide><ProjectionTechSub></ProjectionTechSub></SwiperSlide>
			<SwiperSlide><ProjectMagazine></ProjectMagazine></SwiperSlide>
			<SwiperSlide><ProjectionMagaineSub></ProjectionMagaineSub></SwiperSlide>
			<SwiperSlide><ContinueToLeisure></ContinueToLeisure></SwiperSlide>

			<SwiperSlide><Ieisure></Ieisure></SwiperSlide>
			<SwiperSlide><LeisureSub></LeisureSub></SwiperSlide>
			<SwiperSlide><FunkBar></FunkBar></SwiperSlide>
			<SwiperSlide><FunkBarSub></FunkBarSub></SwiperSlide>
			<SwiperSlide><MusicStudio></MusicStudio></SwiperSlide>
			<SwiperSlide><MusicStudioSub></MusicStudioSub></SwiperSlide>
			<SwiperSlide><Cam></Cam></SwiperSlide>
			<SwiperSlide><CamSub></CamSub></SwiperSlide>

			<SwiperSlide><Unique></Unique></SwiperSlide>
			<SwiperSlide><UniqueSub></UniqueSub></SwiperSlide>
			<SwiperSlide><UniqueThree></UniqueThree></SwiperSlide>
			<SwiperSlide><NftArt></NftArt></SwiperSlide>
		</Swiper>
	</>
	);
}
