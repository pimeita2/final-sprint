import userService from '../services/userService.js';
import authService from '../services/authService.js';

export default {
    state: {
        loggedinUser: null,
        user: {
            nickname: '',
            _id: '',
            password: ''
        },

    },

    getters: {
        getUser(state) {
            return state.loggedinUser;
        },
        isUserLoggedIn: state => !!state.user._id,
        loggedInUser: state => state.user
    },

    mutations: {
        setUser(state, { user }) {
            console.log('in mutations setUser', user)
            state.loggedinUser = user;
            // userService.login(user);
            // console.log('logged in user', state.loggedinUser);
        },
    },

    // mutations: {
    //     setUser(state, { user }) {
    //         state.user = user
    //     }
    // },

    actions: {
        getUserById(context, userId) {
            return userService.getById(userId);
        },
        signup(context, { user }) {
            return authService.signup(user)
                .then(user => {
                    context.commit({ type: 'setUser', user });
                })
        },
        // login(context, { user, rememberPref }) {
        //     authService.getLoggedInUser()
        //         .then(sessionUser => {
        //             if (sessionUser) {
        //                 context.commit({ type: 'setUser', user: sessionUser, rememberPref })
        //             } else {
        //                 authService.checkUser(user)
        //                     .then(loggedInUser => {
        //                         context.commit({ type: 'setUser', user: loggedInUser, rememberPref })
        //                     });
        //             }
        //         })
        //         .catch(err => {
        //             console.log('DEBUG::err', err);
        //         })

        // },


        login(context, { user }) {
            console.log('in user store', user.nickname, user.password)
            return authService.login(user.nickname, user.password)
                .then(user => {
                    // if (user.nickname && user.password) {
                    context.commit({ type: 'setUser', user })
                    localStorage.setItem('loggedInUser', JSON.stringify(user))
                    // }
                    return user
                })
        },


        logout(context) {
            context.commit({ type: 'setUser', user: null })
            authService.logout()
        }


    },

}