import styled from 'styled-components'

export const AppContent = styled.div`
    width: 100%;
    min-height: 657px;
`;

export const HeaderContent = styled.div`
    width: 100%;
    background: blue;
`;

export const InfoHeaderContent = styled.div`
    width: 80%;
    margin-inline: 10%;
    display: grid;
    grid-template-rows: 1px 566px;
    grid-template-columns: 35% 65%;
    min-height: 566px;
`;

export const ImgContent = styled.div`
    grid-row: 2/3;
    grid-column: 1/2;
    background-image: url("https://i.imgur.com/SFUXtXn.png");
    background-repeat: no-repeat;
    background-position: -50px -75px;
    border-radius: 5px;
    margin: 0px 5px 5px 0px;
`;

export const WhoAmICotent = styled.h1`
    grid-row: 2/3;
    grid-column: 2/3;
    font-size: 100px;
    margin-left: 50px;
    color: #C0C0C0;
`;