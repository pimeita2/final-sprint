

import axios from "axios";
const BASE_URL = 'http://localhost:3000'// is this our local host?

export default {
    query,
    remove,
    getById,
    saveToy,
}

function query(filter = {}) {
    var queryParams  = new URLSearchParams()
    queryParams.append('inStock', filter.byStatus)
    queryParams.append('name', filter.byName)
    queryParams.append('type', filter.byType)
    queryParams.append('sortBy', filter.sort)
    return axios.get(`${BASE_URL}/toy?${queryParams}`)
        .then(res => res.data)
        // .catch(err =>{
        //     console.log('ERROR:', err);
            
        // })
}

function getById(toyId) {
    return axios.get(`${BASE_URL}/toy/${toyId}`)
        .then(res => res.data)
}

function remove(toyId) {
    return axios.delete(`${BASE_URL}/toy/${toyId}`)
        // .then(res => res.data)
}

function saveToy(toy) {
    if (toy._id) {
        return axios.put(`${BASE_URL}/toy/${toy._id}`, toy)
    } else {
        toy.createdAt = Date.now()
        return axios.post(`${BASE_URL}/toy`, toy)
    }
}