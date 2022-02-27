import TodoCounter from "../TodoCounter"; 
import TodoSearch from "../TodoSearch";
import CreateTodoButton from "../CreateTodoButton";
import TodoDate from "../TodoDate";
import TodoItem from "../TodoItem";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import Modal  from "../Modal";
import TodoEmpty from "../TodoEmpty";
import TodoLoading from "../TodoLoading";

import useTodos from "./useTodos";

import styled from "styled-components";
import TodoError from "../TodoError";


function App(){

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
  } = useTodos();
  return(
    
    <AppStyled>
      <TodoHeader>
        <TodoDate/>
      </TodoHeader>
      <TodoBody>
        <TodoSearch 
          searchValue = {searchValue} 
          setSearchValue = {setSearchValue}
          loading = {loading}
        />
        <TodoList 
          error = {error}
          loading = {loading}
          searchedTodos = {searchedTodos}
          searchValue = {searchValue}
          onError = {()=> <TodoError/>}
          onLoading = {() => <TodoLoading />}
          onEmpty = { (search) => <TodoEmpty search={search}/>}
          render = {(todo) => <TodoItem key = {todo.text}
              todo = {todo} 
              onComplete = {completeTodo}
              onDelete = {deleteTodo} />}
        >
          {/* {(todo) => <TodoItem key = {todo.text}
              todo = {todo} 
              onComplete = {completeTodo}
              onDelete = {deleteTodo} />} */}
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
          loading = {loading}
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

export default App;