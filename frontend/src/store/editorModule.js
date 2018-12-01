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
            state.userStyle[field] = css;
        },
        setUserStyle(state, { field, css, currCmpPart }) {
            console.log('set user style has', field, css, currCmpPart, 'and in state', state.userStyle);
            state.userStyle.map(obj => {
                if (obj.cmpPartName === currCmpPart) obj.style[field] = css[field];
                console.log('in state', state.userStyle);
            })
            console.log('new user style pref:', state.userStyle);
        }
    },

    actions: {
        setBackgroundStyle(context, { field, css }) {
            context.commit({ type: 'setUserStyle', field, css })
        },
        setUserStyleOfCmp(context, { field, css, currCmpPart }) {
            console.log(field, 'field')
            context.commit({ type: 'setUserStyle', field, css, currCmpPart })
        }
    },

    getters: {
        // userStyleBackground(state) {
        //     return state.userStyle.backgroundColor;
        // },
        getUserStyle(state) {
            return state.userStyle;
        },
    }
}
// }
// }