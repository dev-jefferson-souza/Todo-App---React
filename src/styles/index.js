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
        
        //Variáveis de cores - DARK MODE
        --cor-primaria-dark: rgb(149, 75, 242);
        --cor-background-dark: hsl(0,0%,8.0%);
        --cor-secundaria-dark: hsl(0,0%,16.0%);
        --cor-complementar-1-dark: #e5e5e5;
        --cor-complementar-2-dark: rgb(132, 35, 252);
        
        //Variáveis de cores - LIGTH MODE
        --cor-primaria: #BB86FC;
        --cor-background: rgb(245,245,245);
        --cor-secundaria: #fff;
        --cor-complementar-1: #000000;
        --cor-complementar-2: rgb(96, 57, 145)
        
}
`;

export const Container = styled.div`
    
    min-height: 100vh;
    background-color: ${(props) => props.theme == true ? "var(--cor-background)" : "var(--cor-background-dark)"};
    box-shadow: 0px 4px 4px var(--cor-sombra);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s;
    padding: 3rem 1.75rem;

    

    .title{
        font-family: 'Poiret One', cursive;
        font-size: 2.75rem;
        line-height: 4.5rem;
        color: ${(props) => props.theme == true ? "var(--cor-primaria)" : "var(--cor-primaria-dark)"};
        filter: drop-shadow(2px 2px 4px ${(props) => props.theme == true ? "none" : "var(--cor-complementar-2-dark)"});
    }

    //Botão de mudança de tema
    #change-button{
        cursor: pointer;
        height: 50px;
        width: 50px;
        border: 3px solid ${(props) => props.theme == true ? "var(--cor-primaria)" : "var(--cor-primaria-dark)"};
        border-radius: 50%;

        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translate(-50%, 0);
        
        padding: 0.875rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        z-index: 2;

        font-size: 2rem;
        transition: 0.3s;
        background-color: transparent;
        color: ${(props) => props.theme == true ? "var(--cor-primaria)" : "var(--cor-primaria-dark)"};
        box-shadow: 0px 0px 20px ${(props) => props.theme == true ? "var(--cor-complementar-2)" : "var(--cor-complementar-2-dark)"};
    }

    //Icones dentro do botão
    .bxs-sun{
        display: ${(props) => props.theme == true ? "none" : "block"};
    }
    .bxs-moon{
        display: ${(props) => props.theme == true ? "block" : "none"};
    }

    //Fade no fim da página
    #sombra{
        display: flex;
        align-items: center;
        justify-items: center;
        position: fixed;
        bottom: -1rem;
        width: 100vw;
        height: 75px;
        transition: 0.3s;
        background-color: ${(props) => props.theme == true ? "var(--cor-background)" : "var(--cor-background-dark)"};
        box-shadow: -10px -40px 40px 36px ${(props) => props.theme == true ? "var(--cor-background)" : "var(--cor-background-dark)"};
    }
`;

export const Input = styled.input`
    padding:  0.5rem 1.5rem;
    width: 195px;
    height: 50px;

    background-color: ${(props) => props.theme == true ? "var(--cor-secundaria)" : "var(--cor-secundaria-dark)"};
    box-shadow: 0px 4px 4px var(--cor-sombra);
    border:  none;
    border-radius: 6px;
    transition: 0.3s;

    //Interior Input
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5;
    color: ${(props) => props.theme == true ? "var(--cor-primaria)" : "var(--cor-primaria-dark)"};

    &::placeholder{
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.5;
        color: ${(props) => props.theme == true ? "var(--cor-primaria)" : "var(--cor-primaria-dark)"};
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
    padding: ${(props) => props.padding  || "0px"};
    width: 100%;
    margin: ${(props) => props.margin  || "20px"};
`;

export const Button = styled.button`
    width: 112px;
    height: 50px;
    background-color: ${(props) => props.theme == true ? "var(--cor-primaria)" : "var(--cor-primaria-dark)"};
    border: none;
    border-radius: 6px;
    transition: 0.3s;
    cursor: pointer;

    &:active, :hover, :focus{
            opacity: 0.7;
            box-shadow: 0px 0px 12px 5px ${(props) => props.theme == true ? "var(--cor-complementar-2)" : "var(--cor-complementar-2-dark)"};;
        }

    //Interior Button
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${(props) => props.theme ? "var(--cor-background)" : "var(--cor-background-dark)"};
    
`;

export const Item = styled.li`
    padding: 0.875rem 0.875rem 0.5rem 1.5rem;
    min-width: 320px;
    min-height: 50px;

    /* background-color:  ${(props) => props.checked ? "var(--cor-primaria)" : "var(--cor-secundaria)"}; */
    background-color: ${(props) => {
        if(props.theme != true && props.checked == false){
            return "var(--cor-secundaria-dark)"
        } else if(props.theme != true && props.checked == true){
            return "var(--cor-primaria-dark)"
        } else if(props.theme == true && props.checked == false){
            return "var(--cor-secundaria)"
        } else if(props.theme == true && props.checked == true){
            return "var(--cor-primaria)"
        }

    }};
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
        color: ${(props) => {
        if(props.theme != true && props.checked == false){
            return "var(--cor-primaria-dark)"
        } else if(props.theme != true && props.checked == true){
            return "var(--cor-secundaria-dark)"
        } else if(props.theme == true && props.checked == false){
            return "var(--cor-primaria)"
        } else if(props.theme == true && props.checked == true){
            return "var(--cor-secundaria)"
        }

    }};
   
        //Quebrando linha
        width: 80%;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
    }

    button{
        background-color: transparent;
        border: none;
        transition: 0.3s;
        cursor: pointer;
        
        &:active, :hover, :focus{
            opacity: 0.5;
        }

    
    }

    i{
        font-size: 1.25rem;
        color: ${(props) => {
        if(props.theme != true && props.checked == false){
            return "var(--cor-primaria-dark)"
        } else if(props.theme != true && props.checked == true){
            return "var(--cor-secundaria-dark)"
        } else if(props.theme == true && props.checked == false){
            return "var(--cor-primaria)"
        } else if(props.theme == true && props.checked == true){
            return "var(--cor-secundaria)"
        }

    }};
    }
`;