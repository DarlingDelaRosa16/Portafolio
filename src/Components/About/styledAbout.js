import styled from 'styled-components'

export const ContentBox = styled.div`
    width: 80%;
    margin-inline:10%;
    margin-top:153.5px;
    margin-bottom: 153.5px;
    height: 350px;
    @media (max-width: 1178px){
        width: 90%;
        margin-inline:5%;
    }
    @media (max-width: 700px){
        height:450px;
        width: 94%;
        margin-inline: 3%;
        margin-top: 103.5px ;
        margin-bottom: 103.5px;
    }
    @media (max-width: 420px){
        height:500px;
        margin-top:78.5px; 
        margin-bottom: 78.5px;      
    }
    @media (max-width: 300px){
        height:550px;
        margin-top: 53.53.px;
        margin-bottom: 53.5px;
    }
`;

export const ContentAboutAndSkill = styled.div`
    display: grid;
    grid-template-rows: auto;
    height:350px;
    @media (max-width: 700px){
        height:450px;
    }
    @media (max-width: 420px){
        height:500px;
    }
    @media (max-width: 300px){
        height:550px;
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
    font-family: 'Nanum Myeongjo', serif;
    text-align: center;
    font-size: 30px;
    margin:0;
    @media (max-width: 420px){
        font-size: 25px;
    }
`;

export const InfoAboutMe = styled.p`
    margin:0;
    font-family: 'Noto Serif', serif;
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


