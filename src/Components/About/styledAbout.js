import styled from 'styled-components'

export const ContentBox = styled.div`
    width: 80%;
    margin-inline:10%;
    min-height: 268px;
    padding: 179.5px 0px 179.5px 0px;
    display: grid ;
    grid-template-rows: 160px 100px;
    grid-template-columns: 1fr 1fr;
`;

export const ContentInfoAboutMe = styled.div`
    width: 100%;
    grid-column: 1/3;
    grid-row: 1/2;
    display: grid ;
    grid-template-rows: 54px 80px; 
`;

export const TitleInfoAboutMe = styled.h3`
    grid-row: 1/2 ;
    text-align: center;
    font-size: 30px;
    margin:0;
`;

export const InfoAboutMe = styled.p`
    margin:0;
    grid-row: 2/3;
    text-align: justify;
    font-size: 23px;
`;

export const ContentAboutSkills = styled(ContentInfoAboutMe)`
    grid-row: 2/3;
    margin-top: 25px;
`;

export const ContentIcons = styled.div`
    font-size: 50px;
    text-align: center;
`;


