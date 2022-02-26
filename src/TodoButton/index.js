import styled from "styled-components";

const Button =  styled.div`
    background-color: transparent;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    color: #6b7dff;
    font-size: 1.4rem;
    font-family: "Dosis", sans-serif;
    font-weight: 700;
    height: 50px;
    margin-right: 10px;
    padding: 0 10px;
    cursor: pointer;
    position: relative;

    &:hover{
        background: rgba(0,0,0,0.1);
    }
`;

export default Button;