import styled from "styled-components";

const EmptyContainer = styled.div`
    text-align: center;
    padding: 40px;
    img{
        margin: 20px auto;
        width: 200px;
        filter: blur(1px) grayscale(0.3);
        border-radius: 2%;
    }
`;  

function TodoEmpty({search}){

    return(
        <EmptyContainer>
            <img src='https://cdn.pixabay.com/photo/2014/08/26/19/16/notebook-428293_960_720.jpg' alt='empty'></img>
            {search === false && <p> Parece que no tienes TODOs. Ingresa un nuevo TODO.</p>}
            {search === true &&<p>No se han encontrado resultados bajo esa busqueda.</p>}
        </EmptyContainer>
    )
}
export default TodoEmpty;