import {useState, createContext} from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider ({children}){
    const {
        item: todos,
        saveItems: saveTodos,
        loading,
        error
        
    }= useLocalStorage('TODOS_V1', []);
    
    const [openModal, setOpenModal] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const completedTodos = todos.filter(todo => todo.completed === true).length;
    const totalTodos = todos.length;

    let searchedTodos  = [];

    if(!searchValue.length >=1){
        searchedTodos = todos;
    }else{
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes( searchText );
        } );
    }

    const completeTodo = (text) => {
        const todoIndex  = todos.findIndex(todo => todo.text === text);
        const newTodos =[...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }
    const deleteTodo = (text) => {
        const todoIndex  = todos.findIndex(todo => todo.text === text);
        const newTodos =[...todos];
        newTodos.splice(todoIndex,1)
        saveTodos(newTodos);
    }
    const addTodo = (todoData) =>{
        const newTodos =[...todos];
        newTodos.push({
            text: todoData.text, 
            date: todoData.date,
            time: `${todoData.timeStart} - ${todoData.timeEnd}`,
            completed: false})
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            completedTodos,
            totalTodos,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    )
}
export {TodoContext, TodoProvider};