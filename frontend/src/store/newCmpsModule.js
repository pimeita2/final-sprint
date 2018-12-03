export default {
    state: {
        currentIdx: null,
        templateCmps: [{
            id: 0,
            kind:'text',
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
                    fontFamily: 'Oswald',
                    fontSize: 12
                }
            }
        },
        {
            id: 1,
            kind:'text',
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
                    fontSize: 32
                }
            }
        },
        {
            id: 2,
            kind:'text',
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
                    fontSize: 16
                }
            }
        },
        {
            id: 3,
            kind:'text',
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
                    fontFamily: 'Asap Condensed',
                    fontSize: 16
                }
            }
        },
        {
            id: 4,
            kind:'text',
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
                    fontFamily: 'Satisfy',
                    fontSize: 18,
                }
            }
        },
        {
            id: 5,
            kind:'text',
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
                    fontSize: 16
                }
            }
        },
        {
            id: 6,
            kind:'cmp',
            type: 'attending',
            isEdit: true,
            data: {
               
             
              
            }
        },
        {
            id: 7,
            kind:'cmp',
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
            kind:'background',
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
            state.templateCmps[state.templateCmps.length - 1].css = css;
            
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
