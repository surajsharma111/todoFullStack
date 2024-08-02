import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { formSchema } from "../ValidationSchema/formvalidation";
import ToDoHero from "./TodoHero";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import TodoList from "./TodoList";
import getAllTodos from "../action/getTodo";
import addTodo from "../action/addtodo";




function Landing() {
    const [todos, setTodos] = useState([])
    const todos_completed = todos.filter((todo) => todo.is_completed === true).length
    const total_todos = todos.length

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    const onSubmit = async function (data) {
        //console.log (data);
        const newTodo = {
            title: data.title,
            id: self.crypto.randomUUID(),
            isCompleted: false
        };
        setTodos((prevTodos) => [...prevTodos, newTodo])
        console.log(data.task)
        await addTodo(data)

       
    }
   
    useEffect(() => {
        (async() =>{
           const allData = await getAllTodos();
           setTodos(allData.data)
        })()
        
       
    }, [])
    return (
        <div className=" border h-screen bg-gray-500">
            <div className=" flex flex-row  border w-fit items-center justify-center text-white bg-black absolute top-5 left-24 " >
                <TiTick className=" w-12 h-12 " />
                <h1 className=" text-2xl">TODO</h1>
            </div>
            <ToDoHero todos_completed={todos_completed} total_todos={total_todos} />
            {

            }
            <form className=" relative w-1/4 m-auto mt-4 gap-2  flex items-center justify-between" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} type="text" className="  flex-grow p-2 text-white ml-4 border-black  bg-black w-1/4 rounded-lg" placeholder="Write your next task here" />
                {errors.task && <p className=" absolute top-12 left-12 text-red-500" role="alert">{errors.task.message}</p>}
                <input type="submit" name="submit" className=" w-1/6 bg-blue p-2 rounded-xl" id="" />
            </form>
            <TodoList todos={todos} />



        </div>
    )
}
export default Landing