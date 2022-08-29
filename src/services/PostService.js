import axios from "axios";

export const PostService = {
    getPost
}

async function getPost(url){
    return axios.get(url).then((response) => {
       return response.data
    }).catch((error) => {
        return error.message
    })
}