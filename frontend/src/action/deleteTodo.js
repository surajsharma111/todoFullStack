
import { API_ENDPOINT } from "../constant/constant";

 async function deleteTodo(){
   const response = await fetch(`${API_ENDPOINT}/`)
   const data =  await response.json();
   return data;
}
export default deleteTodo