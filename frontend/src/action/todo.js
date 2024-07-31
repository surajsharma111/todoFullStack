
import { API_ENDPOINT } from "../constant/constant";

 async function getAllTodos(){
   const response = await fetch(`${API_ENDPOINT}/todos`)
   const data =  await response.json();
   return data;
}
export default getAllTodos