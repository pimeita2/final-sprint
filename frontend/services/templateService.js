import axios from "axios";
const BASE_URL = 'http://localhost:3000'

export default {
    query,
    remove,
    getById,
    saveTemplate,
}

function query(filter = {}) {
    var queryParams  = new URLSearchParams()
    queryParams.append('inStock', filter.byStatus)
    queryParams.append('name', filter.byName)
    queryParams.append('type', filter.byType)
    queryParams.append('sortBy', filter.sort)
    return axios.get(`${BASE_URL}/template?${queryParams}`)
        .then(res => res.data)
        // .catch(err =>{
        //     console.log('ERROR:', err);
            
        // })
}

function getById(templateId) {
    return axios.get(`${BASE_URL}/template/${templateId}`)
        .then(res => res.data)
}

function remove(templateId) {
    return axios.delete(`${BASE_URL}/template/${templateId}`)
        // .then(res => res.data)
}

function saveTemplate(template) {
    if (template._id) {
        return axios.put(`${BASE_URL}/template/${template._id}`, template)
    } else {
        // template.createdAt = Date.now()
        return axios.post(`${BASE_URL}/template`, template)
    }
}