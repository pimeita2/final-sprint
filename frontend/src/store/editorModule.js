export default {
    state: {
        userStyle: {
            background: {
                backgroundColor: '#ff9a90',
                backgroundImage: ``,
            }
        }
    },

    

    mutations: {
        setUserStyle(state, { field, css }) {
            state.userStyle[field] = css;
            console.log(state.userStyle.background)
        }
    },

    actions: {
        setUserStyle(context, { field, css }) {
            console.log(field, 'field')
            console.log(css , "css")
            context.commit({ type: 'setUserStyle', field, css })
        }
    },

    getters: {
        userStyle(state) {
            console.log('step 2, state:', state);
            return state.userStyle;
        }
    }
}