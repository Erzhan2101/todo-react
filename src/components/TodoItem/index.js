import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faSave, faTrash} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({item, deleteBtn}) => {
    const [edit, setEdit] = useState(false)
    const [textFix, setTextInput] = useState(item.title)

    const InputFix = (e) => {
        setTextInput(e.target.value)
    }

    return (
        <div>
            <li className="form-control my-3 d-flex justify-content-between align-items-center">
                {
                    edit ? <input defaultValue={item.title} onChange={InputFix} type="text"/> : <span>{item.title}</span>
                }
                <div>
                    <button className="btn btn-warning" onClick={() => setEdit(!edit)}>{
                        edit ? <FontAwesomeIcon icon={faSave}/> : <FontAwesomeIcon icon={faEdit}/>
                    }</button>
                    <button onClick={() => deleteBtn(item.id)} className="btn btn-danger ms-3"><FontAwesomeIcon icon={faTrash}/></button>
                </div>
            </li>
        </div>
    );
};

export default TodoItem;


