import styled from "styled-components";
import {IoChevronBack, IoChevronForward} from 'react-icons/io5';

const TodoDateContainer = styled.div`
align-items:center;
box-shadow: rgb(107, 125, 255, 0.24) 0px 3px 8px;
color: #6b7dff;
display: flex;
height: 60px;
justify-content: space-between;
`;
const ActionsDate = styled.button`
font-size: 2.2rem;
padding: 0 20px;
background-color:transparent;
border:none;

`;
const Day = styled.span`
text-transform: uppercase;
font-weight: 700;
letter-spacing: 3px;
font-size: 1.8rem;
:after{
    content: ',';
    margin-right: 5px
}
`;
const Date = styled.span`
font-size: 12px;
letter-spacing: 1px;
font-size: 1.4rem;
`;
function TodoDate(){


    return (
    <TodoDateContainer>
        <ActionsDate onClick={()=> alert('Previous')}> <IoChevronBack color="#6b7dff"/> </ActionsDate>
        <p>
            <Day>Lunes</Day>
            
            <Date>14 Marzo</Date>
        </p>
        <ActionsDate onClick={()=> alert('Next')}> <IoChevronForward color="#6b7dff"/> </ActionsDate>
    </TodoDateContainer>
    );
}

export default TodoDate;