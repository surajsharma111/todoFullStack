
import * as yup from "yup"


export const formSchema = yup
  .object({
    title: yup.string().required('Plese Enter a task')
    
  })
  .required()