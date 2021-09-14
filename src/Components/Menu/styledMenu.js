import styled from 'styled-components'

export const MenuBox = styled.div`
    display: grid;
    font-family: 'Nanum Myeongjo', serif;
    grid-column:1/3;
    color: white;
    grid-row: 1/2;
    width: 92%;
    height: 90px;
    grid-template-rows: 40px 50px;
    grid-template-columns: 1fr auto;
    margin-inline: 4%;
    @media (max-width: 388px){
        height: 60px;
        grid-template-rows: 20px 40px;
    }
`;

export const MenuButtonDropDown = styled.button`
    display:none;
    width: auto;
    margin-right:10px;
    margin-left: 10px;
    font-size: 20px;
    grid-row:2/3;
    border: none;
    background: none;
    &:hover{
        cursor: pointer ;
    }
    @media (max-width: 760px){
        display: block;
    }
    
`;

export const MenuBoxDropDown = styled.div`
    visibility: ${(props)=> props.see ? "visible" : "hidden"};
    width: 200px;
    position: absolute;
    display: grid;
    grid-template-rows: auto;
    z-index: 1;
    right: 3px;
    border-radius: 5px;
    margin-top: -3px;
    background: white;
    box-shadow: rgba(0, 0, 250, 0.4) 0px 2px 4px, rgba(0, 0, 250, 0.3) 0px 7px 13px -3px, rgba(0, 0, 250, 0.3) 0px -3px 0px inset;

    @media (min-width: 760px){
        display: none;
    }
`;

export const MenuLogo = styled.h1`
    color: white;
    display: inline;
    grid-row:2/3;
    font-size: 21px;
    height: 30px;
    margin-top: 10px;   

`;

export const MenuButton = styled.button`
    color: white;
    font-family: 'Nanum Myeongjo', serif;
    width: auto;
    font-size: 15px;
    margin-top: 10px;
    grid-row:2/3;
    border: none;
    background: none;
    margin-left: 2px;
    height: 20px;
    &:hover{
        cursor: pointer ;
        color: #B22222;
    }
    @media (max-width: 760px){
        display: ${(props)=> props.display};
        grid-row: 5/6;
        text-align:center;
        grid-column: 1/3;
        margin-bottom: 10px;
        color:black;
    }
    
`;