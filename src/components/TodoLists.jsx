import { useState } from "react";
import "./todoLists.css"

export const TodoLists = () => {
    const [changeTodo, setChangeTodo] = useState('');
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);

    const addTodo = (todo) => {
        setIncompleteTodos([...incompleteTodos, todo])
        setChangeTodo('')
    }

    const handleIncompleteTodoDelete = (todo) => {
        const updateIncompleteTodos = incompleteTodos.filter((t) => t != todo);
        setIncompleteTodos(updateIncompleteTodos);
    }

    const handleCompleteTodoDelete = (todo) => {
        const updateCompleteTodos = completeTodos.filter((t) => t != todo);
        setCompleteTodos(updateCompleteTodos);
    }

    const handleComplete = (todo) => {
        const updateIncompleteTodos = incompleteTodos.filter((t) => t != todo);
        setIncompleteTodos(updateIncompleteTodos);
        setCompleteTodos([...completeTodos, todo]);
    }

    return (
        <div className="todoLists">
            <div className="addTodo">
                <h2>TODOを追加</h2>
                <div>
                    <input type="text" value={changeTodo} onChange={(e) => {setChangeTodo(e.target.value)}} />
                    <button className="addTodoButton" onClick={() => {addTodo(changeTodo)}}>追加</button>
                </div>
            </div>
            <div className="todos">
                {incompleteTodos.map((todo) => {
                    return(
                        <ul key={todo}>
                            <li>{todo}</li>
                            <button onClick={() => handleComplete(todo)}>完了</button>
                            <button onClick={() => handleIncompleteTodoDelete(todo)}>削除</button>
                        </ul>
                    )
                })}
            </div>
            <div className="todos">
                {completeTodos.map((todo) => {
                    return(
                        <ul key={todo}>
                            <li>{todo}</li>
                            <button>戻す</button>
                            <button onClick={() => handleCompleteTodoDelete(todo)}>削除</button>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}