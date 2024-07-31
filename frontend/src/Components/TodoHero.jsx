// eslint-disable-next-line react/prop-types
function ToDoHero({todos_completed, total_todos}){
    return(
        <div className=" mt-24 border-2 border-green-500 w-1/4 m-auto flex flex-row p-4 justify-between rounded-lg text-white bg-black">
            <div className=" flex flex-col ">
                <h2 className=" text-3xl">
                    Task Done
                </h2>
                <p className=" text-xl">
                    keep it up
                </p>
            </div>
            <div className="  w-24 h-24 bg-green-500 text-black rounded-full flex items-center justify-center">
                 {todos_completed}/{total_todos}
            </div>
        </div>
    )
}
export default  ToDoHero