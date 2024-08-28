import { useState } from "react";
import "./todoLists.css"

export const TodoLists = () => {
    const [changeTodo, setChangeTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo])
        setChangeTodo('')
    }

    return (
        <>
            <div>
                <h1>TodoLists</h1>
                <input type="text" value={changeTodo} onChange={(e) => {setChangeTodo(e.target.value)}} />
                <button className="addTodoButton" onClick={() => {addTodo(changeTodo)}}>追加</button>
            </div>
            <div>
                {todos.map((todo) => {
                    return(
                        <ul key={todo}>
                            <li>{todo}</li>
                        </ul>
                    )
                })}
            </div>
        </>
    )
}