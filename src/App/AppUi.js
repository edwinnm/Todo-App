import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import TodoCounter from "../TodoCounter"; 
import TodoSearch from "../TodoSearch";
import CreateTodoButton from "../CreateTodoButton";
import TodoDate from "../TodoDate";
import TodoItem from "../TodoItem";
import TodoForm from "../TodoForm";
import Modal  from "../Modal";
import styled from "styled-components";
import TodoEmpty from "../TodoEmpty";
import TodoLoading from "../TodoLoading";



function AppUi (){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    searchValue,
    setSearchValue,
    completedTodos,
    totalTodos,
    addTodo
  } = useContext(TodoContext);
  return(
    
    <AppStyled>
      <TodoHeader>
        <TodoDate/>
      </TodoHeader>
      <TodoBody>
        <TodoSearch 
          searchValue = {searchValue} 
          setSearchValue = {setSearchValue}
        />
        <TodoList>
          {loading && <TodoLoading />}
          {error && <p>Existe un error</p>}
          {((!loading && searchedTodos.length === 0) && searchValue === '') && <TodoEmpty search = {false}/>}
          {((!loading && searchedTodos.length === 0) && searchValue !== '') && <TodoEmpty search = {true}/>}
          
          {searchedTodos.map(todo => (
            <TodoItem 
              key = {todo.text}
              todo = {todo} 
              onComplete = {completeTodo}
              onDelete = {deleteTodo}
              />
          ))}                
        </TodoList>
        {openModal && 
        <Modal setOpenModal = {setOpenModal}>
          <TodoForm 
            setOpenModal = {setOpenModal} 
            addTodo = {addTodo}
          />
        </Modal>
        }
      </TodoBody>
      <TodoFooter>
        <TodoCounter 
          totalTodos = {totalTodos}
          completedTodos = {completedTodos}
        />
        <CreateTodoButton setOpenModal = {setOpenModal}/>
      </TodoFooter>
    </AppStyled>
        
  )
}

const AppStyled = styled.div`
background-color: #FFFFFF;
box-shadow: 5px 5px 20px rgba(0,0,0,0.33);
display: flex;
flex-direction: column;
margin:0 auto;
max-width:500px;
min-width: 375px;
height: 800px;
border-radius: 2%;
`;
const TodoHeader = styled.div`
width: 100%;
height: 80px;
`;  
const TodoBody = styled.div`
width: 100%;
height: 640px;
`;
const TodoFooter = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
height: 80px;
width: 100%;
`;
const TodoList = styled.section`
    font-size: 1.4rem;
    padding:0 50px;
    margin:0 auto;
    margin-top: 50px;
`;
export default AppUi;