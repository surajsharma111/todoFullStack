import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { formSchema } from "../ValidationSchema/formvalidation";
import ToDoHero from "./TodoHero";
import { useState } from "react";
import { TiTick } from "react-icons/ti";


function Landing(){
    const[todos, setTodos] = useState([
        {
            title: 'Some Task',
             d: self.crypto.randomUUID(),
            is_completed: false
        },
        {
            title: 'Some other task',
            id: self.crypto.randomUUID(),
            is_completed: true
         },
        {
            title: 'Last task',
            id: self.crypto.randomUUID(),
            is_completed: false
        }
    ])

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(formSchema)
      });
      
      const onSubmit = function (data){
        console.log (data);
    }  
  return(
        <>
        <div className=" flex flex-row  border w-fit items-center justify-center text-white bg-black absolute top-5 left-24 " >
                <TiTick className=" w-12 h-12 " />
                <h1 className=" text-2xl">TODO</h1>
         </div>
        <ToDoHero  />
       <form className=" w-1/4 m-auto mt-4 gap-2  flex items-center justify-between"  onSubmit={handleSubmit(onSubmit)}>
        <input {...register("task")} type="text" className=" flex-grow p-2 text-white ml-4 border-black  bg-black w-1/4 rounded-lg" placeholder="Write your next task here" />
        {errors.task && <p role="alert">{errors.task.message}</p>}
        <input type="submit" name="submit" className=" w-1/6 bg-blue p-2 rounded-xl" id="" />
       </form>
       </>
    )
}
export default Landing