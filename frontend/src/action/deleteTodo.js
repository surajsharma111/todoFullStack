import { API_ENDPOINT } from "../constant/constant";

async function deleteTodo(id){
    const url = `${API_ENDPOINT}/todos/${id}`;
    try {
         await fetch (url, {
            method: 'DELETE'}).then((response) =>{

           
        if(!response.ok){
            throw new Error('Failed to delete todo');
        }
        
    });
    
    } catch (error) {
        console.log('Error', error)
    }
}
export default deleteTodo