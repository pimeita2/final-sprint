export default {
    state: {
        userStyle: {
            backgroundColor: {
                backgroundColor: '#ff9a90'
            },
            color:{
                color:'blue'
            }
        }
    },

    

    mutations: {
        setUserStyle(state, { field, css }) {
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
            return state.userStyle.backgroundColor;
        }
    }
}