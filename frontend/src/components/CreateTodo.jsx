
export function CreateTodo() {
    return <div>
    <input style={{
        padding:10,
        margin:10
    }} type="text" placeholder="title"></input> <br/><br/>
    <input style={{
        padding:10,
        margin:10
    }}type="text" placeholder="description"></input> <br/>

    <button style={{
        padding:5,
        margin:10
    }}>Add TODO</button>
    </div>

}