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

    },
}