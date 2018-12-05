
export default {
    state: {
        currentIdx: null,
        templateCmps: null,
        generalStyle: {}
    },

    mutations: {

        setUserStyle(state, { field, css, currCmpPart }) {
            console.log('setUserStyle', field, css, currCmpPart);
            const cmp = state.templateCmps.find(cmp =>cmp.id === currCmpPart)
            cmp.data.css[field] = css[field]; console.log(cmp);
        },
        setGenralStyle(state, { field, css} ){
            console.log(' setGenralStyle',  field, css );
           state.generalStyle=css;
           console.log('general style', state.generalStyle);
        },
        setCurrTemplate(state, context) {

            state.templateCmps = context.payload.tmpData;
            state.generalStyle = context.payload.general;

            // console.log('state:', state.templateCmps)
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
        setUserStyleOfCmp(context, { field, css, currCmpPart }) {
            context.commit({ type: 'setUserStyle', field, css, currCmpPart })
        },
        setGenralStyle(context, { field, css}){
            context.commit({ type: 'setGenralStyle', field, css })
        },
        updateTxt(context, { newTxt, cmpId }) {
            context.commit({ type: 'updateUserTxt', newTxt, cmpId })
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
        generalStyle: state => state.generalStyle
    }
}
