

import { API_ENDPOINT } from "../constant/constant.js";

async function addTodo(data) {
    const url = `${API_ENDPOINT}/todos`
        await fetch(url,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
} 

export default addTodo