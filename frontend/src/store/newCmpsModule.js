
export default {
    state: {
        currentIdx: null,
        templateCmps: null,
    },

    mutations: {

        setUserStyle(state, { field, css, currCmpPart }) {
            // console.log('setUserStyle', field, css, currCmpPart);
            const cmp = state.templateCmps.find(cmp => {
                // console.log(cmp.type, currCmpPart);
                return cmp.type === currCmpPart
            })
            if(field==="background")  cmp.data.css=css;
            cmp.data.css[field] = css[field];            console.log(cmp);

        },
        setCurrTemplate(state, context) {

            state.templateCmps = context.payload.tmpData;
            // console.log('state:', state.templateCmps)
        }
    },

    actions: {

        setUserStyleOfCmp(context, { field, css, currCmpPart }) {
            // console.log(' setUserStyleOfCmp', field, css, currCmpPart);
            context.commit({ type: 'setUserStyle', field, css, currCmpPart })
        },
        setCurrTemplate(context, payload) {
            // console.log('setCurrTemplate', payload)
            context.commit({ type: 'setCurrTemplate', payload })
        }
    },
    getters: {
        // userStyleBackground(state) {
        //     return state.templateCmps[state.templateCmps.length - 1].css;
        // },
        dynamicCmps: state => state.templateCmps,
    }
}
