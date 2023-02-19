import styled from 'styled-components'

export const MenuBox = styled.div`
    display: grid;
    margin: auto;
    grid-template-columns: 1fr 1fr;
    place-content: center;
    width: 90%;
    height: 10vh;

    @keyframes menuBtnAnimation {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`;

export const MenuButtonDropDown = styled.button`
    color: white;
    display:none;
    font-size: 20px;
    border: none;
    background: none;
    
    &:hover{
        cursor: pointer ;
    }
    @media (max-width: 1130px){
        display: block;
        grid-column: 5/6;
    }
    
`;

export const MenuBoxDropDown = styled.div`
    visibility: ${(props) => props.see ? "visible" : "hidden"};
    width: 200px;
    position: absolute;
    display: grid;
    z-index: 1;
    right: 3px;
    border-radius: 5px;
    margin-top: -3px;
    background: white;

    @media (min-width: 1130px){
        display: none;
    }
`;

export const MenuLogo = styled.h1`
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 21px;

    &:hover{
        cursor: default;
    }

`;

export const MenuOptions = styled.div`
    display: grid;
    grid-column: 2/3;
    grid-template-columns: repeat(5, 1fr);
    place-items: center;
    animation-name: menuBtnAnimation;
    animation-duration: 2s;
    
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;

    
`;

export const MenuButton = styled.button`
    color: white;
    font-size: 15px;
    border: none;
    background: none;
    animation-name: menuBtnAnimation;
    animation-duration: 2s;

    &:hover{
        cursor: pointer ;
        color: #1EF1DC;
    }
    @media (max-width: 1130px){
        display: ${(props) => props.display};
    }
    
`;