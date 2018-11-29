export default {
    state: {
        templateCmps: [{
            type: 'titleCmp',
            isEdit: true,
            data: {
                invaitorName: 'meital invaits you',
                eventName: 'Get your dance on',
                shortDescription: 'learn how to dance in three simple steps'
            },
        },
        {
            type: 'detailsCmp',
            isEdit: true,
            data: {
                date: 'oct 30 2018',
                time: '20:30',
                address: '23 magal street, rishon-lezion'
            },
        },
        ],
    },
    mutations: {
       
    },
    actions: {},
    getters: {
        getData(state) {
            return state.templateCmps[0].data;
        },
    },
}