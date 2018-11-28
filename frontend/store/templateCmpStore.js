export default {
    state: {
        templateCmps: [{
            type: 'titleCmp',
            isEdit: true,
            data: {
                invaitorName: 'meital',
                eventName: 'get your dance on',
                shortDescription: 'learn how to dance in three simple steps'
            },
        }
        ],
    },
    mutations: {
        updateInvaitorName(state, { invaitorName }) {
            state.templateCmps.data.invaitorName = invaitorName;
        },
    },
    actions: {},
    getters: {
        getData(state) {
            return state.templateCmps[0].data;
        }
    },
    mutations: {
    },
}