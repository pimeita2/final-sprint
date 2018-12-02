export default {
    state: {
        currentIdx: null,
        templateCmps: [{
            id: 0,
            type: 'invaitorName',
            isEdit: true,
            data: {
                txt: 'meital invaits you',
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
            type: 'day',
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
            type: 'hour',
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
            type: 'location',
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
            type: 'attending',
            isEdit: true,
            data: {
              
            }
        },
        {
            id: 7,
            type: 'socialMedia',
            isEdit: true,
            data: {
                F: '@/assets/f.png',
                L: '',
                T: '',
                I: ''
            }
        },
        {
            id: 8,
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
            state.userStyle[state.templateCmps.length - 1].background = css;
        },
        setUserStyle(state, { field, css, currCmpPart }) {
            console.log('setUserStyle', css ,currCmpPart)
            state.templateCmps.map(obj => {
                if (obj.type === currCmpPart) obj.data.css[field] = css[field];
            });
        }
    },

    actions: {
        setBackgroundStyle(context, { field, css }) {
            // console.log('in setBackgroundStyle', field, css);
            context.commit({ type: 'setBackground', field, css })
        },
        setUserStyleOfCmp(context, { field, css, currCmpPart }) {
            console.log(' setUserStyleOfCmp', field, css, currCmpPart);
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
