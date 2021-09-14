import styled from 'styled-components'

export const AppContent = styled.div`
    width: 100%;
    min-height: 657px;
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
`;


export const ImgContent = styled.div`
    grid-row: 2/3;
    grid-column: 1/2;
    background-image: url("https://i.imgur.com/c9mct83.jpg");
    background-repeat: no-repeat;
    background-position: -30px -75px;
    border-radius: 5px;
    margin: 0px 5px 5px 0px;
    border: 2px solid blue;
`;

export const InfoMainContent = styled.div`
    grid-row: 2/3;
    grid-column: 2/3;
    display: grid;
    grid-template-rows: 50px 170px 60px 80px;
    margin: 50px 0px 0px 50px;
`;


export const NameContent = styled.h1`
    font-size: 70px;
    grid-row: 2/3;
    margin:0;
    font-family: 'Nanum Myeongjo', serif;
    color: white;
`;

export const GreetingsContent = styled(NameContent)`
    font-size: 40px;
    grid-row: 1/2;
`;

export const CareerContent = styled(NameContent)`
    font-size: 50px;
    grid-row: 3/4;
`;

export const TouchMe = styled.button`
    width: 130px;
    height: 40px;
    color: white;
    margin-top: 20px;
    font-family: 'Nanum Myeongjo', serif;
    font-size: 20px;
    background: black;
    border: none;
    border-radius: 5px; 
    
    &:hover{
        cursor: pointer;
        color: #B22222;
    }
`;