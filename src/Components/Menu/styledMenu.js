import styled from 'styled-components'

export const MenuBox = styled.div`
    display: grid;
    font-family: 'Nanum Myeongjo', serif;
    grid-column:1/3 ;
    color: white;
    grid-row: 1/2;
    width: 92%;
    height: 90px;
    grid-template-rows: 40px 50px;
    grid-template-columns: 1fr auto auto auto auto;
    margin-inline: 4%;
   
    @media screen and (max-width: 1220px){
        grid-template-columns: 1fr auto auto auto auto auto 50px ;
    }
    @media (max-width: 920px){
        grid-template-columns: 1fr auto auto auto auto auto 20px ;
    }  
    @media (max-width: 880px){
        grid-template-columns: 1fr auto auto auto auto auto 5px ;
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
    width: 300px;
    position: absolute;
    display: grid;
    grid-template-rows: auto auto auto;
    z-index: 1;
    right: -1px;
    margin-top: -3px;
    border: 1px solid black;
    background: ${(props)=> props.generalTheme !== "white" ? "linear-gradient(white, rgb(218, 220, 221))" : "linear-gradient(gray, black)" } ;
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

    @media (max-width: 1220px){
        margin-left: 50px;
    }
    @media (max-width: 920px){
        margin-left: 20px;
    }
    @media (max-width: 388px){
        grid-row:1/3;
    }
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
        grid-row: 4/5;
        margin-bottom: 10px;
    }
    
`;