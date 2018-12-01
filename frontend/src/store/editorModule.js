export default {
    state: {
        // userStyle: {
        //     background: {
        //         backgroundColor: '#ff9a90',
        //         backgroundImage: ``,
            
        userStyle: [
            {
                cmpPartName: 'invaitorName',
                style: {
                    color: 'black'
                }
            },
            {
                cmpPartName: 'eventName',
                style: {
                    color: 'black'
                }
            },
            {
                cmpPartName: 'shortDescription',
                style: {
                    color: 'black'
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
            // console.log('set user style has', field, css, currCmpPart, 'and in state', state.userStyle);
            state.userStyle.map(obj => {
                if (obj.cmpPartName === currCmpPart) obj.style[field] = css[field];
                // console.log('in state', state.userStyle);
            })
            // console.log('new user style pref:', state.userStyle);
        }
    },

    actions: {
        setBackgroundStyle(context, { field, css }) {
            // console.log('in setBackgroundStyle', field, css);
            context.commit({ type: 'setBackground', field, css })
        },
        setUserStyleOfCmp(context, { field, css, currCmpPart }) {
            // console.log(field, 'field')
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
// }
// }