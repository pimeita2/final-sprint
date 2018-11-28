export default {
    state: {
        userStyle: {
            backgroundColor: {
                backgroundColor: 'red'
            }
        }
    },
    
    mutations: {
        setUserStyle(state, { field, css }) {
            console.log({ field, css })
            state.userStyle[field] = css;
        }
    },

    actions: {
        setUserStyle(context, { field, css }) {
            context.commit({ type: 'setUserStyle', field, css })
        }
    },

    getters: {
        userStyle(state) {
            return state.userStyle;
        }
    }
}