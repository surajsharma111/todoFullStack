
import * as yup from "yup"


export const formSchema = yup
  .object({
    task: yup.string().required('Plese Enter a task')
    
  })
  .required()