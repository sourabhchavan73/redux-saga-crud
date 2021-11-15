import axios from 'axios';

export const loadUserAPI = async() =>{
    return await axios.get("http://localhost:5000/users")
}

export const createUserAPI = async(user) =>{
    return await axios.post("http://localhost:5000/users", user)
}

export const deleteUserAPI = async(id) =>{
    return await axios.delete(`http://localhost:5000/users/${id}`)
}

export const updateUserAPI = async(id, user) =>{
    return await axios.put(`http://localhost:5000/users/${id}`, user)
}



