import { useState } from "react";
import "./todoLists.css"

export const TodoLists = () => {
    const [changeTodo, setChangeTodo] = useState('');
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);

    const addTodo = (todo) => {
        if(changeTodo != "") {
            setIncompleteTodos([...incompleteTodos, todo])
            setChangeTodo('')
        } else {
            alert('文字を入れてください');
        }
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

    const handleBack = (todo) => {
        const updateCompleteTodos = completeTodos.filter((t) => t != todo);
        setCompleteTodos(updateCompleteTodos);
        setIncompleteTodos([...incompleteTodos, todo]);
    }

    return (
        <div className="todoLists">
            <div className="addTodo">
                <h2>TODOを追加</h2>
                <div>
                    <input type="text" value={changeTodo} onChange={(e) => {setChangeTodo(e.target.value)}} />
                    <button className="addTodoButton" onClick={() => {addTodo(changeTodo)}} disabled={incompleteTodos.length >= 5}>追加</button>
                </div>
            </div>
            <h2 className="todoTitle">Incomplete TODO</h2>
            <div className="todos">
                <ul>
                    {incompleteTodos.map((todo) => {
                        return(
                            <div key={todo} className="todoList">
                                <li>{todo}</li>
                                <button onClick={() => handleComplete(todo)}>完了</button>
                                <button onClick={() => handleIncompleteTodoDelete(todo)}>削除</button>
                            </div>
                        )
                    })}
                </ul>
            </div>
            <h2 className="todoTitle">complete TODO</h2>
            <div className="todos">
                <ul>
                {completeTodos.map((todo) => {
                    return(
                        <div key={todo} className="todoList">
                            <li>{todo}</li>
                            <button onClick={() => handleBack(todo)}>戻す</button>
                            <button onClick={() => handleCompleteTodoDelete(todo)}>削除</button>

                        </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}