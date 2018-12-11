import axios from 'axios';

const BASE_URL = (process.env.NODE_ENV !== 'development') ?
             '' : 'http://localhost:3000';

             


function signup(user) {
    return axios.post(`${BASE_URL}/`, user)
        .then(res => res.data);
}

function login({nickname, password}){
    console.log("singing up ........")
    return axios.get(`${BASE_URL}/user`)
    .then(res => {
        const logged = res.data(
            user => {
                if 
                ((user.nickName === nickname) && (user.password === password))
                console.log("logged user is: ", logged)
            });
        
        
    })
}



//LOGIN function from car exmpale
// function login({nickname}){
//     return axios.put(`${BASE_URL}/login`,{
//         nickname
//     })
//     .then(res => res.data)
// }


function checkUser(user) {
    return axios.put(`${BASE_URL}/`, user)
        .then(res => res.data);
}

// function logout() {
//     axios.put(`${BASE_URL}/`)
//         .then(res => {
//             if (sessionStorage.getItem('user')) sessionStorage.removeItem('user');
//             if (localStorage.getItem('user')) localStorage.removeItem('user');
//         })
// }
function getLoggedInUser() {
    return axios.get(`${BASE_URL}/loggedin`)
        .then(res=>res.data)
}

export default {
    signup,
    checkUser,
    // logout,
    getLoggedInUser,
    login
}