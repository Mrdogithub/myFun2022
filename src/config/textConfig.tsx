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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: '',
			textAnimate: '',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
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
			footer: 'animate__animated animate__slideInDown'
		},
		out: {
			titleAnimate: 'animate__animated animate__slideInLeft',
			textAnimate: 'animate__animated animate__slideInLeft',
			boxAnimate: '',
			footer: 'animate__animated animate__slideInDown'
		}
	}
};
