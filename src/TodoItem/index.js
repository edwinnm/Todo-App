import styled from "styled-components";
import { IoTrash } from "react-icons/io5";

const TodoContainer = styled.div`
    align-items: center;
    /* border-bottom: 2px solid #6b7dffaa; */
    display: flex;
    padding: 5px 0;
    justify-content: space-between;
    div{
        width: 20px;
        height: 20px;
        border: 2px solid #6b7dff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.4rem;
        cursor: pointer;
    }
    p{
        font-size: 1.6rem;
        padding: 0 15px;
        width: 200px;
        text-decoration-line: ${props => props.completed ? "line-through": 'none'}; 
    }
    small{
        width: 70px;
        text-decoration-line: ${props => props.completed ? "line-through": 'none'}; 
    }
    .icon{
        cursor: pointer;
    }
`;


function TodoItem ({todo, onComplete, onDelete}){
    const {text, time, completed} = todo;
    return (
        <TodoContainer completed={completed}>
            <div onClick={()=>onComplete(text)}>{completed ? '✔': '' }</div>
            <p>{text}</p>
            <small>{time}</small>
            <IoTrash className='icon' onClick={()=> onDelete(text)}/>
        </TodoContainer>
    )
}

export default TodoItem;