import styled from "styled-components";

const CounterContainer = styled.div`
    position: relative;
    width: 50%;
    opacity: ${props => (props.loading) && 0.25 };
`;
const CounterText = styled.p`
    font-size: 1.4rem;
    margin: 0;
    padding:  0 15px;
    position: absolute;
    top: 40%;
    span{
        font-weight: bolder;
    }
`;
function TodoCounter ({totalTodos, completedTodos, loading}){
 
    return (
    <CounterContainer loading = {loading} >
        <CounterText>Has completado <span> {completedTodos} de {totalTodos} </span> TODOs</CounterText>
    </CounterContainer>)
}
export default TodoCounter;