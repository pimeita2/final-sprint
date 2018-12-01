export default {
    state: {
          userStyle: [
            {
                cmpPartName: 'invaitorName',
                style: {
                    color: 'black',
                    textAlign:'center'
                }
            },
            {
                cmpPartName: 'eventName',
                style: {
                    color: 'black',
                    textAlign:'center'

                }
            },
            {
                cmpPartName: 'shortDescription',
                style: {
                    color: 'black',
                    textAlign:'center'
                }

            },
            {
                background: {
                    backgroundColor: '#ff9a90',
                    backgroundImage: ``,
                }
            }

        ]},
    // },

    mutations: {
        setBackground(state, { field, css }) {
            // console.log('in set Background', state.userStyle[state.userStyle.length-1], css);
            state.userStyle[state.userStyle.length-1].background = css;
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
            console.log(' setUserStyleOfCmp', field, css, currCmpPart);
            context.commit({ type: 'setUserStyle', field, css, currCmpPart })
        }
    },

    getters: {
        userStyleBackground(state) {
            return state.userStyle[state.userStyle.length-1].background;
        },
        getUserStyle(state) {
            return state.userStyle;
        },
    }
}

//     mutations: {
//         // setBackground(state, { field, css }) {
//         //     state.userStyle[field] = css;
//         // },
//         setUserStyle(state, { field, css, currCmpPart }) {
//             console.log('set user style has', field, css, currCmpPart, 'and in state', state.templateCmps[0].userStyle);
//             state.templateCmps[0].userStyle.map(obj => {
//                 if (obj.cmpPartName === currCmpPart) obj.style[field] = css[field];
//                 console.log('in state', state.templateCmps[0].userStyle);
//             })
//             console.log('new user style pref:', state.userStyle);
//         }
//     },

//     actions: {
//         // setBackgroundStyle(context, { field, css }) {
//         //     context.commit({ type: 'setUserStyle', field, css })
//         // },
//         setUserStyleOfCmp(context, { field, css, currCmpPart }) {
//             console.log(field, 'field')
//             context.commit({ type: 'setUserStyle', field, css, currCmpPart })
//         }
//     },

//     getters: {
//         // userStyleBackground(state) {
//         //     return state.userStyle.backgroundColor;
//         // },
//         getUserStyle(state) {
//             return state.userStyle;
//         },
//     }
// }