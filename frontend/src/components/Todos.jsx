
export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1><br/>
                <h2>{todo.description}</h2><br/>
                <button>{todo .completed==true?"completed":"mark as completed"}</button>
            </div>

        })}


    </div>
}