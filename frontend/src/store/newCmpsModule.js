export default {
    state: {
        currentIdx: null,
        templateCmps: [{
            id: 0,
            type: 'invaitorName',
            isEdit: true,
            data: {
                txt: 'meital invaits you',
                // cmpPartName: 'invaitorName',
                css: {
                    color: 'black',
                    textAlign: 'center',
                    fontWeight: {
                        isBold: false,
                        value: 'normal'
                    },
                    fontFamily: 'arial',
                    fontSize: 16
                }
            }
        },
        {
            id: 1,
            type: 'eventTitle',
            isEdit: true,
            data: {
                txt: 'Get your dance on',
                // cmpPartName: 'eventName',
                css: {
                    color: 'black',
                    textAlign: 'center',
                    fontWeight: {
                        isBold: false,
                        value: 'normal'
                    },
                    fontFamily: 'arial',
                    fontSize: 30
                }
            }
        },
        {
            id: 2,
            type: 'shortDescription',
            isEdit: true,
            data: {
                txt: 'learn how to dance in three simple steps',
                css: {
                    color: 'black',
                    textAlign: 'center',
                    fontWeight: {
                        isBold: false,
                        value: 'normal'
                    },
                    fontFamily: 'arial',
                    fontSize: 16
                }
            }
        },
        {
            id: 3,
            type: 'date',
            isEdit: true,
            data: {
                txt: '01/12/1990',
                css: {
                    color: 'black',
                    textAlign: 'right',
                    fontWeight: {
                        isBold: false,
                        value: 'normal'
                    },
                    fontFamily: 'arial',
                    fontSize: 16
                }
            }
        },
        {
            id: 4,
            type: 'time',
            isEdit: true,
            data: {
                txt: '00:30',
                css: {
                    color: 'black',
                    textAlign: 'left',
                    fontWeight: {
                        isBold: false,
                        value: 'normal'
                    },
                    fontFamily: 'arial',
                    fontSize: 16
                }
            }
        },
        {
            id: 5,
            type: 'address',
            isEdit: true,
            data: {
                txt: '23 Magal Street, Rishon-Lezion',
                css: {
                    color: 'black',
                    textAlign: 'center',
                    fontWeight: {
                        isBold: false,
                        value: 'normal'
                    },
                    fontFamily: 'arial',
                    fontSize: 16
                }
            }
        },
        {
            id: 6,
            type: 'socialMediaCmp',
            isEdit: true,
            data: {
                F: '@/assets/f.png',
                L: '',
                T: '',
                I: ''
            }
        },
        {
            id: 7,
            type: 'background',
            css: {
                backgroundColor: '#ff9a90',
                backgroundImage: ``,
            }
        },
        ],
    },
   
    mutations: {
        setBackground(state, { field, css }) {
            // console.log('in set Background', state.userStyle[state.userStyle.length-1], css);
            state.userStyle[state.userStyle.length - 1].background = css;
        },
        setUserStyle(state, { field, css, currCmpPart }) {
            state.userStyle.map(obj => {
                if (obj.cmpPartName === currCmpPart) obj.style[field] = css[field];
            })
            console.log('set user style has', field, css, currCmpPart, 'and in state', state.userStyle);
        }
    },

    actions: {
        setBackgroundStyle(context, { field, css }) {
            // console.log('in setBackgroundStyle', field, css);
            context.commit({ type: 'setBackground', field, css })
        },
        setUserStyleOfCmp(context, { field, css, currCmpPart }) {
            // console.log(' setUserStyleOfCmp', field, css, currCmpPart);
            context.commit({ type: 'setUserStyle', field, css, currCmpPart })
        }
    },
    getters: {
        userStyleBackground(state) {
            return state.templateCmps[state.templateCmps.length - 1].css;
        },
        dynamicCmps: state => state.templateCmps,
    }
}
