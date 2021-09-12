import styled from 'styled-components'

export const ContentBox = styled.div`
    width: 80%;
    margin-inline:10%;
    height: 260px;
    display: grid ;
    grid-template-rows: 160px 100px;
    grid-template-columns: 1fr 1fr;
`;

export const ContentInfoAboutMe = styled.div`
    width: 100%;
    grid-column: 1/3;
    grid-row: 1/2;
    display: grid ;
    grid-template-rows: 50px 80px; 
`;

export const TitleInfoAboutMe = styled.h3`
    grid-row: 1/2 ;
    text-align: center;
    font-size: 30px;
`;

export const InfoAboutMe = styled.p`
    grid-row: 2/3;
    text-align: justify;
    font-size: 23px;
`;

export const ContentAboutSkills = styled(ContentInfoAboutMe)`
    grid-row: 2/3;
    grid-column: 1/3;
    margin-bottom:250px;
    display:grid;
    grid-template-rows: 50px 80px;
`;

export const ContentIcons = styled.div`
    font-size: 50px;
    text-align: center;
`;


