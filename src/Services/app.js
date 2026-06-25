import axios from "axios"
async function getData() {
    const response = await axios.get('https://69b848ece69653ffe6a43962.mockapi.io/Mehsul/api/shoescategory')
    return response.data
}

async function getCategory() {
    const res = await axios.get('http://localhost:3000/CategoryProducts')
    return res.data
}
export {getData , getCategory}