import { useState } from "react";
import Button from "../TodoButton";
import styled from "styled-components";


function TodoForm ({setOpenModal, addTodo}){
    const [error, setError] = useState(false);
    const [todoData, setTodoData] = useState({
        text:'',
        date:'',
        timeStart:'',
        timeEnd:'',
    });
    
    

    function handleChange(event){
        setError(false);
        setTodoData({
            ...todoData,
            [event.target.name]: event.target.value
        })
    }
    function handleSave(){
        if((todoData.text !== '') && (todoData.date !== '') && (todoData.timeStart !== '') && (todoData.timeEnd !=='') ){
            addTodo(todoData);
            setOpenModal(false);
        }else{
            setError(true);
        }
        
    }

    return(
        <Form>
            <FormContent>
                {error && <ErrorMessage>
                    Llena todos campos
                </ErrorMessage>}
                <FormInputs>
                    <textarea 
                        autoCapitalize="true" 
                        placeholder="Escribe tu TODO aqui"
                        name="text"
                        value={todoData.text}
                        onChange={handleChange}/>
                    <label htmlFor="date">Fecha</label>
                    <input 
                        type="date"
                        name="date"
                        value={todoData.date}
                        onChange={handleChange}
                        />
                    <FormInline>
                        <label htmlFor="time">Hora Inicio</label>
                        <label htmlFor="time">Fin Hora</label>
                    </FormInline>
                    <FormInline>
                        <input 
                            type="time"
                            name="timeStart"
                            value={todoData.dateStart}
                            onChange={handleChange}
                            max={todoData.dateEnd}
                            />
                        <input 
                            type="time"
                            name="timeEnd"
                            value={todoData.dateEnd}
                            onChange={handleChange}
                            min={todoData.dateStart}
                        />
                    </FormInline>
                    
                </FormInputs>
                
                <FormButtons>
                    <Button onClick={()=>setOpenModal(false)}>Cancelar</Button>
                    <Button onClick={handleSave}>Guardar</Button>
                </FormButtons>
            </FormContent>
            

        </Form>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
`;
const FormInputs = styled.div`
    height: 235px;
    overflow-y: auto;
    input{
        border-radius: 10px;
    }
    textarea{
        border-radius: 10px;
        resize:none;
        width: 95%;
        height: 50px;
        margin-bottom: 10px;
        border-color: #6b7dff;
        border-width: 2px;
        color: #6b7dff;
        &:focus-visible{
            outline-color: #6b7dff;
        }
        &::placeholder{
            line-height:50px;
            text-align: center;
        }
    }
    label{
        display: block;
        margin-bottom: 10px;
        font-size: 1.8rem;
        font-weight: 700;
    }
    input[type="date"]{
        margin-bottom: 10px;
        background-color: transparent;
        width: 95%;
        color: #6b7dff;
        border-color: #6b7dff;
        border-width: 2px;
        outline: none;
        text-align: center;
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
        filter:  invert(65%) sepia(90%) saturate(4463%) hue-rotate(212deg) brightness(100%) contrast(103%);
    }
    input[type="time"]{
        margin-bottom: 10px;
        background-color: transparent;
        width: 40%;
        color: #6b7dff;
        border-color: #6b7dff;
        border-width: 2px;
        outline: none;
        text-align: center;
    }
    input[type="time"]::-webkit-calendar-picker-indicator {
        filter:  invert(65%) sepia(90%) saturate(4463%) hue-rotate(212deg) brightness(100%) contrast(103%);
    }
`;

const FormButtons = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
    height: 40px;
    width: 100%;
`;
const FormInline = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
`;
const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
    font-family: monospace;
    
`
export default TodoForm;