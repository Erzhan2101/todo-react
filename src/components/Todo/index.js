import React, {useState} from 'react';
import TodoItem from "../TodoItem";

const Todo = () => {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState([
        {id: 1, title: "Зима близко", time: +new Date()},
        {id: 2, title: "Зимы не будет", time: +new Date()},
    ])

    const handText = (e) => {
        setText(e.target.value)
    }

    const addBtn = () => {
        const newItem = {
            id: todos.length ? todos[todos.length - 1].id + 1 : 1,
            title: text,
            time: +new Date()
        }

        setTodos([...todos, newItem])
        setText("")
    }

    const deleteBtn = (id) => {
        setTodos(todos.filter(el => el.id !== id))
    }

    return (
        <div className="offset-md-4 mt-5">
            <div className="col-5">
                <div className="d-flex">
                    <input value={text} className="form-control me-3" type="text" onChange={handText}/>
                    <button className="btn btn-primary" onClick={addBtn} disabled={!text.trim()}>Добавить</button>
                </div>
                <div>
                    {
                        todos.map(item =>
                            <TodoItem deleteBtn={deleteBtn} item={item}/>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Todo;