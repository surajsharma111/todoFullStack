import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import propTypes from 'prop-types'
import deleteTodo from "../action/deleteTodo";


function TodoList({ todos }) {  // Destructure todos prop
    TodoList.propTypes = {
        todos: {
            name: propTypes.string,
            id: propTypes.string,
            isCompleted: propTypes.bool
        }
    }
  
   const handleDelete = async function(data){
    await deleteTodo(data.id)

   }

   
    
    return (
        <ul className="w-1/4 m-auto mt-4 flex flex-col gap-3">
            {
                todos && todos.length > 0 ? (
                    todos.map((todo) => (
                        <li key={todo.id} className=" border-2 border-green-600 w-full flex flex-row items-center justify-between p-3 text-white bg-black">
                            <p className={todo.isCompleted ? "line-through flex items-center gap-3" : 'flex items-center gap-3'}>
                                <input checked={todo.isCompleted} className=" text-green-500" type="checkbox" />
                                {todo.title}
                            </p>
                            <span className="flex flex-row gap-4">

                                <button onClick={handleDelete} className=" hover:text-green-300 cursor-pointer"><RiDeleteBin6Line /> </button>
                                <button className=" hover:text-green-300 cursor-pointer"><MdEditSquare /></button>
                            </span>
                        </li>
                    ))
                ) : (
                    <p>Seems lonely here</p>
                )
            }
        </ul>
    );
}

export default TodoList;
