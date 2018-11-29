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
            console.log(field, 'field')
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