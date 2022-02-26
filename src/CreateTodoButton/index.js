import Button from "../TodoButton";

import { IoAdd } from "react-icons/io5";


function CreateTodoButton ({setOpenModal}){
    return( 
    <Button onClick={()=>setOpenModal(true)}>Agregar Nuevo 
        <IoAdd color="#6b7dff"/> 
    </Button>)
}

export default CreateTodoButton;