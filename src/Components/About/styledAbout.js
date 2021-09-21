import styled from 'styled-components'

export const ContentBox = styled.div`
    width: 80%;
    margin-inline:10%;
    height: 657px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media (max-width: 1178px){
        width: 90%;
        margin-inline:5%;
    }
    
`;

export const ContentAboutAndSkill = styled.div`
    display: grid;
    grid-template-rows: auto;
    height:350px;
    @media (max-width: 700px){
        height:450px;
    }
`; 

export const ContentInfoAboutMe = styled.div`
    width: 100%;
    grid-row: auto;
    display: grid ;
    grid-template-rows: auto; 
`;

export const TitleInfoAboutMe = styled.h3`
    grid-row: auto;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    text-align: center;
    font-size: 30px;
    margin:0;
    @media (max-width: 420px){
        font-size: 25px;
    }
`;

export const InfoAboutMe = styled.p`
    margin:0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    grid-row: auto;
    text-align: justify;
    font-size: 22px;
    @media (max-width: 420px){
        font-size: 18px;
    }
`;

export const ContentAboutSkills = styled(ContentInfoAboutMe)`
    grid-row: auto;
    margin-top: 25px;
`;

export const ContentIcons = styled.div`
    font-size: 50px;
    text-align: center;
    @media (max-width: 420px){
        font-size: 40px;
    }
    @media (max-width: 300px){
        font-size: 35px;
    }
`;


