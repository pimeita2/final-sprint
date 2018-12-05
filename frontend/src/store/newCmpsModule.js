export default {
    state: {
        currentIdx: null,
        templateCmps: [{
            id: '0',
            kind: 'text',
            type: 'invaitorName',
            isEdit: true,
            data: {
                txt: 'Invaitor name goes here ...',
                css: {
                    color: '#2c3e50',
                    textAlign: 'center',
                    fontWeight: {
                        isBold: false,
                        value: 'normal'
                    },
                    fontFamily: 'Oswald',
                    fontSize: 12 + 'px'
                }
            }
        },
        {
            id: '1',
            kind: 'text',
            type: 'eventTitle',
            isEdit: true,
            data: {
                txt: 'Event title goed here !',
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
            id: '2',
            kind: 'text',
            type: 'shortDescription',
            isEdit: true,
            data: {
                txt: 'add few word to describe your event',
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
            id: '3',
            kind: 'text',
            type: 'day',
            isEdit: true,
            data: {
                txt: '01/12/2018',
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
            id: '4',
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
                    fontFamily: 'Asap condensed',
                    fontSize: 28 + 'px'
                }
            }
        },
        {
            id: '5',
            kind: 'text',
            type: 'location',
            isEdit: true,
            data: {
                txt: 'type your full address here',
                css: {
                    color: 'black',
                    textAlign: 'center',
                    fontWeight: {
                        isBold: false,
                        value: 'normal'
                    },
                    fontFamily: 'Asap Condensed',
                    fontSize: 20 + 'px'
                }
            }
        },
        {
            id: '6',
            kind: 'cmp',
            type: 'attending',
            isEdit: true,
            data: {
            }
        },
        {
            id: '7',
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
            id: '8',
            kind: 'background',
            type: 'background',
            kind: 'other',
            css: {
                backgroundColor: '#ff9a90',
                backgroundImage: ``,
            }
        },
        // {
        //     id:'9',
        //     type: 'map',
        //     data: {
        //         map: '',
        //     }
        // }
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
                    if (currCmpPart === 'fontSize') obj.data.css.fontSize = css[field];
                    else obj.data.css[field] = css[field];
                }
            });
        },
        updateUserTxt(state, newTxt, id) {
            state.templateCmps.find(cmp => {
                if (cmp.id === id) {
                    cmp.data.txt = newTxt
                }
            })
        },
    },
    actions: {
        setBackgroundStyle(context, { field, css }) {
            context.commit({ type: 'setBackground', field, css })
        },
        setUserStyleOfCmp(context, { field, css, currCmpPart }) {
            console.log(' setUserStyleOfCmp', field, css, currCmpPart);
            context.commit({ type: 'setUserStyle', field, css, currCmpPart })
        },
        updateTxt(context, {newTxt, cmpId}) {
            context.commit({type: 'updateUserTxt', newTxt, cmpId})
        }
    },
    getters: {
        userStyleBackground(state) {
            return state.templateCmps[state.templateCmps.length - 1].css;
        },
        dynamicCmps: state => state.templateCmps,
    }
}
