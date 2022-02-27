import styled from "styled-components";

function TodoList ({error,
     loading,
     searchedTodos,
     searchValue,
     onError,
     onLoading,
     onEmpty,
     render,
     children
    }){
        const renderFunc = render || children;
    return(
        <TodoListContainer>
            {loading && onLoading()}
            {error && onError()}
            {(!loading && searchedTodos.length === 0) && onEmpty(searchValue)}
            {/* {searchedTodos.map(render)} */}
            {searchedTodos.map(renderFunc)}
        </TodoListContainer>
    )

}

const TodoListContainer = styled.section`
    font-size: 1.4rem;
    padding:0 50px;
    margin:0 auto;
    margin-top: 50px;
`;

export default TodoList;