import ReactDOM from 'react-dom';
import styled from "styled-components";
import {IoClose} from "react-icons/io5"
const OverFlow = styled.div`
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    height: 100%; /* Full height */
    left: 0;
    overflow: auto; /* Enable scroll if needed */
    position: fixed;
    top: 0;
    width: 100%; /* Full width */
    z-index: 1; /* Sit on top */
`;
const ModalContainer = styled.div`
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.33);
    height: 400px;
    left: 50%;
    /*margin-top: -200px; /*Negative half of height.*/
    margin-left: -175px; /* Negative half of width. */
    position: fixed;
    top: 200px;
    width: 350px;
    z-index: 2;
`;
const ModalHeader = styled.div`
    align-items:center;
    box-shadow: rgb(107, 125, 255, 0.24) 0px 3px 8px;
    color: #6b7dff;
    display: flex;
    height: 60px;
    justify-content: space-between;
    padding: 0 20px;

`;
const ModalClose = styled.div`
    font-weight: 700;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    font-size: 30px;
    &:hover{
        background: rgba(0,0,0,0.1);
    }
    
`;
function Modal({children, setOpenModal}){

    return (ReactDOM.createPortal(
        <>
            <OverFlow onClick={()=>setOpenModal(false)} />
             <ModalContainer>
                <ModalHeader>
                    <h1>Nuevo TODO</h1>
                    <ModalClose  onClick={()=>setOpenModal(false)}><IoClose/></ModalClose>
                </ModalHeader>
                {children}
            </ModalContainer>
        </>,
        document.getElementById('modal')
    ));
}
export default Modal;