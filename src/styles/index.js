import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        font-family: 'Roboto', sans-serif;
        
        --cor-sombra: rgba(0,0,0, 0.25);
        
        //Variáveis de cores - LIGTH MODE
        /* --cor-primaria: #BB86FC;
        --cor-background: rgb(245,245,245);
        --cor-secundaria: #fff;
        --cor-complementar-1: #000000;
        --cor-complementar-2: rgb(96, 57, 145) */
        
        //Variáveis de cores - DARK MODE
        --cor-primaria: rgb(149, 75, 242);
        --cor-background: hsl(0,0%,8.0%);
        --cor-secundaria: hsl(0,0%,16.0%);
        --cor-complementar-1: #e5e5e5;
        --cor-complementar-2: rgb(132, 35, 252);
}
`;

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: var(--cor-background) ;
    box-shadow: 0px 4px 4px var(--cor-sombra);
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem 1.75rem;
    

    .title{
        font-family: 'Poiret One', cursive;
        font-size: 2.75rem;
        line-height: 4.5rem;
        color: var(--cor-primaria);
        filter: drop-shadow(2px 2px 4px var(--cor-complementar-2));
    }
`;

export const Input = styled.input`
    padding:  0.5rem 1.5rem;
    width: 195px;
    height: 50px;

    background-color: var(--cor-secundaria);
    box-shadow: 0px 4px 4px var(--cor-sombra);
    border:  none;
    border-radius: 6px;

    //Interior Input
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--cor-primaria);

    &::placeholder{
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.5;
        color: var(--cor-primaria);
        opacity: 0.7;
    }
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction || "column"};
    justify-content: ${(props) => props.justify || "center"};
    align-items: ${(props) => props.align || "center"};
    gap: ${(props) => props.gap || "1rem"}
`;

export const Spacer = styled.div`
    width: 100%;
    margin: ${(props) => props.margin  || "20px"};
`;

export const Button = styled.button`
    width: 112px;
    height: 50px;
    background-color: var(--cor-primaria);
    border: none;
    border-radius: 6px;
    transition: 0.5s;
    cursor: pointer;

    &:active, :hover, :focus{
            opacity: 0.7;
            box-shadow: 0px 0px 12px 5px var(--cor-complementar-2);
        }

    //Interior Button
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--cor-background);
`;

export const Item = styled.li`
    padding: 0.875rem 0.875rem 0.5rem 1.5rem;
    min-width: 320px;
    min-height: 50px;

    background-color:  ${(props) => props.checked ? "var(--cor-primaria)" : "var(--cor-secundaria)"};
    box-shadow: 0px 4px 4px var(--cor-sombra);
    border-radius: 6px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    //Interior da Lista
    p{
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.5rem;
        text-decoration-line: ${(props) => props.checked  ? "line-through" : "none"};
        color: ${(props) => props.checked ? "var(--cor-complementar)" : "var(--cor-primaria)"};
   
        //Quebrando linha
        width: 80%;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
    }

    button{
        background-color: transparent;
        border: none;
        transition: 0.5s;
        cursor: pointer;
        
        &:active, :hover, :focus{
            opacity: 0.5;
        }

    
    }

    i{
        font-size: 1.25rem;
        color: ${(props) => (props.checked ? "var(--cor-secundaria)" : "var(--cor-primaria)")};
    }
`;