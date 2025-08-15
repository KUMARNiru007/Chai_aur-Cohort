import axios from 'axios'

const API_URL ='/api/todos'

//no course issue in Next.js
const todoService ={
    getAllTodos : async () => {

        try{
            const response = await axios.get(API_URL)
            return response.data
        } catch(error){

        }

    }
}

getTodoBuTd : async ()=> {
    try{
        await axios.get(`${API_URL}/id${id}`)
        return response.data
    }catch(error){

    }
}

export default todoService