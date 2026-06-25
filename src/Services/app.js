import axios from "axios"
async function getData() {
    const response = await axios.get('https://69b848ece69653ffe6a43962.mockapi.io/Mehsul/api/shoescategory')
    return response.data
}

async function getCategory() {
    const res = await axios.get('https://69bfc34f72ca04f3bcb92a0d.mockapi.io/proDuct')
    return res.data
}
export {getData , getCategory}