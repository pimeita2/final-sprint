export default {
    state: {
        currentIdx: null,
        templateCmps: [{
            id: 0,
            kind: 'text',
            type: 'invaitorName',
            isEdit: true,
            data: {
                txt: 'Meital invaits you',
                css: {
                    color: '#2c3e50',
                    textAlign: 'center',
                    fontWeight: {
                        isBold: false,
                        value: 'normal'
                    },  
                    // fontFamily: 'Asap Condensed',
                    // fontSize: 15
                    // },
                    fontFamily: 'Oswald',
                    fontSize: 12 + 'px'
                }
            }
        },
        {
            id: 1,
            kind: 'text',
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
                    fontFamily: 'Satisfy',
                    fontSize: 28 + 'px'
                }
            }
        },
        {
            id: 2,
            kind: 'text',
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
                    fontFamily: 'Asap Condensed',
                    fontSize: 16 + 'px'
                }
            }
        },
        {
            id: 3,
            kind: 'text',
            type: 'day',
            isEdit: true,
            data: {
                txt: '01/12/1990',
                css: {
                    color: 'black',
                    textAlign: 'center',
                    fontWeight: {
                        isBold: false,
                        value: 'normal'
                    },
                    fontFamily: 'Asap Condensed',
                    fontSize: 16 + 'px'
                }
            }
        },
        {
            id: 4,
            kind: 'text',
            type: 'hour',
            isEdit: true,
            data: {
                txt: '00:30',
                css: {
                    color: 'black',
                    textAlign: 'center',
                    fontWeight: {
                        isBold: false,
                        value: 'normal'
                    },
                    fontFamily: 'Satisfy',
                    fontSize: 18 + 'px'
                }
            }
        },
        {
            id: 5,
            kind: 'text',
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
                    fontFamily: 'Asap Condensed',
                    fontSize: 16 + 'px'
                }
            }
        },
        {
            id: 6,
            kind: 'cmp',
            type: 'attending',
            isEdit: true,
            data: {
            }
        },
        {
            id: 7,
            kind: 'cmp',
            type: 'socialMedia',
            isEdit: true,
            data: {
                txtF: '',
                txtL: '',
                txtT: '',
                txtI: ''
            }
        },
        {
            id: 8,
            kind: 'background',
            type: 'background',
            kind: 'other',
            css: {
                backgroundColor: '#ff9a90',
                backgroundImage: ``,
            }
        },
        ],
    },

    mutations: {
        setBackground(state, { field, css }) {
            state.templateCmps[state.templateCmps.length - 1].css = css;
        },

        setUserStyle(state, { field, css, currCmpPart }) {
            console.log('setUserStyle', css, field, currCmpPart)
            state.templateCmps.map(obj => {
                if (obj.type === currCmpPart) {
                    if (currCmpPart === 'fontSize') obj.data.css.fontSize =css[field];
                    else obj.data.css[field] = css[field];
                } 

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
