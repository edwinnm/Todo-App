import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

function TodoSearch({searchValue, setSearchValue}){
    
    const onChangeHandler  = (event) =>{
        setSearchValue(event.target.value);
    }
    return (
        <SearchContainer>
            <label htmlFor="searchTodo">
                <input 
                    id="searchTodo"
                    value={searchValue}
                    onChange={onChangeHandler}
                />
                <IoSearch size="20px"/>
            </label>
        </SearchContainer>
        
    )
}

const SearchContainer = styled.div`
    
    width:250px;
    margin: 10px auto;
    padding: 10px 0 10px 10px ;
    border-radius: 20px;
    border: solid 1px #6b7dff;
    box-shadow: rgba(134, 149, 255, 0.4) 0px 4px 12px;
    input{
        height: 20px;
        width: 220px;
        margin: 0 auto;
        background-color: transparent;
        border: none;
    }
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }
    svg{
        vertical-align: bottom;
    }
`;

export default TodoSearch;