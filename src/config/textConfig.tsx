export const textConfig = [
	{
		slideName: '',
		title: '',
		text: '',
		titleAnimate: 'animate__animated animate__slideInDown',
		textAnimate: 'animate__animated animate__slideInDown',
		boxAnimate: 'animate__animated animate__slideInLeft'
	}
];

export interface SlideAnimate {
	[index: number]: AnimateConfig;
}

export interface AnimateConfig {
	slideName?: string;
	title?: string;
	text?: string;
	in?: AnimateList;
	out?: AnimateList;
}
export interface AnimateList {
	titleAnimate?: string;
	textAnimate?: string;
	boxAnimate?: string;
	footer?: string;
	bacground?: string;
}

export const slideAnimateMap: SlideAnimate = {
	[999]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: ''
		}
	},
	[5]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInDown',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: 'animate__animated animate__slideInLeft',
		},
		out: {
			titleAnimate: 'animate__animated animate__fadeOut',
			textAnimate: 'animate__animated animate__slideOutLeft',
			boxAnimate: ''
		}
	},
	[6]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: ''
		}
	},
	[7]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInDown',
			textAnimate: 'animate__animated animate__slideInDown',
			boxAnimate: 'animate__animated animate__slideInLeft',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	},
	[8]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInDown',
			textAnimate: 'animate__animated animate__slideInDown',
			boxAnimate: 'animate__animated animate__slideInLeft',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	},
	[9]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: '',
			textAnimate: '',
			boxAnimate: '',
			footer: ''
		},
		out: {
			titleAnimate: '',
			textAnimate: '',
			boxAnimate: '',
			footer: ''
		}
	},
	[10]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: 'animate__animated animate__slideInLeft',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	},
	[11]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: 'animate__animated animate__slideInDown',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	},
	[12]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: 'animate__animated animate__slideInDown',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	},
	[13]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: 'animate__animated animate__slideInDown',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	},
	[14]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: 'animate__animated animate__slideInDown',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	},
	[15]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: 'animate__animated animate__slideInDown',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	},
	[16]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: 'animate__animated animate__slideInDown',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	},
	[20]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: 'animate__animated animate__slideInDown',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	},
	[21]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: 'animate__animated animate__slideInDown',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	},
	[22]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: 'animate__animated animate__slideInDown',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	},
	[23]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: 'animate__animated animate__slideInDown',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	},
	[24]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: 'animate__animated animate__slideInDown',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	},
	[25]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: 'animate__animated animate__slideInDown',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	},
	[26]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: 'animate__animated animate__slideInDown',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	},
	[27]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: 'animate__animated animate__slideInDown',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	},
	[28]: {
		slideName: '',
		title: '',
		text: '',
		in: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: 'animate__animated animate__slideInDown',
			footer: ''
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: ''
		}
	}
};
