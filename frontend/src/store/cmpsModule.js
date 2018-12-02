export default {
    state: {
        currentIdx: null,
        templateCmps: [{
            id: 0,
            type: 'titleCmp',
            isEdit: true,
            data: {
                invaitorName: 'meital invaits you',
                eventName: 'Get your dance on',
                shortDescription: 'learn how to dance in three simple steps'
            },
        },
        {
            id: 1,
            type: 'eventDetailsCmp',
            isEdit: true,
            data: {
                date: 'oct 30 2018',
                time: '20:30',
                address: '23 magal street, rishon-lezion'
            },
        },
        {
            id: 2,
            type: 'socialMediaCmp',
            isEdit: true,
            data: {
                F: '@/assets/f.png',
                L: '',
                T: '',
                I: ''

            }
        },
        {
            id: 3,
            type: 'attendingCmp',
            isEdit: true,
            data: {         
            }
        },

        ],
    },
 
    getters: {
        dynamicCmps: state => state.templateCmps,
    },
}
    // mutations: {
    //     getCurrCmp(state, { idx }) {
    //         const cmpIdx = state.templateCmps.findIndex(cmp => cmp.id === templateCmps.id);
    //         state.currentIdx = idx;
    //     }
    // },
