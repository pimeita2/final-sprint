// import Axios from "axios";


// export default {
//     query,
//     remove,
//     getById,
//     filter
// }

// function query() {
  
// }
// function remove(templateId) {
  
// }
// function getById(templateId) {
 
// }
// function filter() {
    

    
// }

import Axios from "axios";
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
    return Axios.get(`${BASE_URL}/toy?${queryParams}`)
        .then(res => res.data)
        // .catch(err =>{
        //     console.log('ERROR:', err);
            
        // })
}

function getById(toyId) {
    return Axios.get(`${BASE_URL}/toy/${toyId}`)
        .then(res => res.data)
}

function remove(toyId) {
    return Axios.delete(`${BASE_URL}/toy/${toyId}`)
        // .then(res => res.data)
}

function saveToy(toy) {
    if (toy._id) {
        return Axios.put(`${BASE_URL}/toy/${toy._id}`, toy)
    } else {
        toy.createdAt = Date.now()
        return Axios.post(`${BASE_URL}/toy`, toy)
    }
}