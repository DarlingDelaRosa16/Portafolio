import styled from 'styled-components'

export const AppContent = styled.div`
    width: 100%;
    min-height: 657px;
    @media (min-width: 1366px){
        width: 1366px;
        margin-left: ${(props)=> props.width}
    }
`;

export const HeaderContent = styled.div`
    width: 100%;
    background: #6495ED;
`;

export const InfoHeaderContent = styled.div`
    width: 90%;
    margin-inline: 5%;
    display: grid;
    grid-template-rows: 1px 566px;
    grid-template-columns: 35% 65%;
    min-height: 566px;

    @media (max-width: 700px){
        width: 94%;
        margin-inline: 3%;
    }
`;


export const ImgContent = styled.div`
    grid-row: 2/3;
    grid-column: 1/2;
    background-image: url("https://i.imgur.com/c9mct83.jpg");
    background-repeat: no-repeat;
    background-position: -25px -75px;
    border-radius: 5px;
    margin: 0px 5px 5px 0px;
    border: 2px solid blue;

    @media (max-width: 1100px){
        display: none;
        margin: 0;
    }
`;

export const InfoMainContent = styled.div`
    grid-row: 2/3;
    grid-column: 2/3;
    display: grid;
    height: 360px;
    grid-template-rows: auto;
    margin: 50px 0px 0px 50px;

    @media (max-width: 1100px){
        grid-column: 1/3;
    }
    @media (max-width: 610px){
        margin: 50px 0px 0px 0px;
    }
    
`;


export const NameContent = styled.h1`
    font-size: 70px;
    grid-row: 2/3;
    margin:0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: white;
    @media (max-width: 610px){
        font-size: 50px;
    }
    @media (max-width: 450px){
        font-size: 35px;
    }
    @media (max-width: 290px){
        font-size: 25px;
    }
`;

export const GreetingsContent = styled(NameContent)`
    font-size: 40px;
    grid-row: 1/2;
    @media (max-width: 610px){
        font-size: 30px;
    }
    @media (max-width: 450px){
        font-size: 25px;
    }
    @media (max-width: 352px){
        font-size: 19px;
    }
`;

export const CareerContent = styled(NameContent)`
    font-size: 50px;
    grid-row: 3/4;
    @media (max-width: 610px){
        font-size: 40px;
    }
    @media (max-width: 450px){
        font-size: 30px;
    }
    @media (max-width: 352px){
        font-size: 23px;
    }
    
`;

export const TouchMe = styled.button`
    width: 140px;
    height: 40px;
    color: white;
    margin-top: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    font-size: 20px;
    background: black;
    border: none;
    border-radius: 5px; 
    
    &:hover{
        cursor: pointer;
        color: #B22222;
    }
    @media (max-width: 610px){
        font-size: 17px;
        height: 30px;
        width: 120px;
    }
`;