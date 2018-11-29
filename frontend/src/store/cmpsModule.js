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

                }
            ]
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
            id:2,
            type: 'socialMediaCmp',
            isEdit:true,
            data:{
                F: '@/assets/f.png'
            }
        }

        ],
    },
    mutations: {
        setUserStyle(state, { field, css, currCmpPart }) {
            console.log('set user style has',field, css, currCmpPart, 'and in state', state.templateCmps[0].userStyle);
            state.templateCmps[0].userStyle.map(obj=>{
               if(obj.cmpPartName===currCmpPart) obj.style[field]=css[field];
               console.log('in state', state.templateCmps[0].userStyle);
            })
           
            // [currCmpPart] = css;
            console.log('new user style pref:', state.userStyle);
        }
    },
    actions: {
        setUserStyleOfCmp(context, { field, css, currCmpPart }) {
            console.log(field, 'field')
            context.commit({ type: 'setUserStyle', field, css, currCmpPart })
        }
    },
    getters: {
        getData(state) {
            return state.templateCmps[0].data;
        },
        getuserStyle(state){
            return state.templateCmps[0].userStyle;
        }
    }
    // getters: {// merge with meital files as written in notebook
    //     // getCurrCmp: (state) => state.currentCmp,
    //     // getData(state) {
    //     //     return state.templateCmps[0].data;
    //     // },
    //     dynamicCmps: state => state.templateCmps,
    // },
    // mutations: {
    //     getCurrCmp(state, { idx }) {
    //         const cmpIdx = state.templateCmps.findIndex(cmp => cmp.id === templateCmps.id);
    //         state.currentIdx = idx;
    //     }
    // },
    // actions: {
    // }
}