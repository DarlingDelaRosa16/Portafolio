import styled from 'styled-components'

export const ContentBox = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100vh;
  
    @keyframes textAnimation {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    
`;

export const ContentAboutAndSkill = styled.div`
    display: grid;
    grid-template-columns: 1fr 30px 1fr;
    width: 80%;
    height: 80vh;
    place-items: center;
    
    @media (max-width: 440px){
        height: 90vh;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
`; 

export const ContentInfoAboutMe = styled.div`
    display: grid;
    min-height: 40vh;
    width: 100%;
    animation-name: textAnimation;
    animation-duration: 2s;

    @media (max-width: 440px){
        grid-column: 1/3;
        grid-row: 1/2;
    }
    @media (max-width: 1024px){
        grid-column: 1/4;
    }
`;

export const TitleInfoAboutMe = styled.h3`
    margin: 20px 0px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: #1C71B1;
    font-size: 30px;
    
    @media (max-width: 440px){
        margin: 10px 0px;
        font-size: 25px;
    }
`;

export const InfoAboutMe = styled.p`
    margin:0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    text-align: justify;
    font-size: 21px;
    
    @media (max-width: 440px){
        font-size: 17px;
    }
    

`;

export const TitleInfoSkills = styled(TitleInfoAboutMe)``;

export const ContentAboutSkills = styled(ContentInfoAboutMe)`
    grid-column: 3/4;

    @media (max-width: 1024px){
        grid-column: 1/4;
        grid-row: 2/3;
    }
`;

export const ContentSkills = styled.div`
    font-size: 50px;
    color: black ;
    
    @media (max-width: 440px){
        font-size: 40px;
    }
    
`;

export const ContentIcons = styled.div`
    display: grid;
    place-items:center;
    grid-template-columns: repeat(5, minmax(80px, 1fr) );

    @media (max-width: 440px){
        grid-template-columns: repeat(4, minmax(60px, 1fr) );
    }

`;

export const ContentLanguage = styled.div`
    display: grid;
    width: 80px;
    height: 70px;
    font-size:30px;
    place-items: center;
    grid-template-rows: 50px 20px;
`;

export const NameLanguage = styled.p`
    grid-row: 2/3;
    margin:0px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 15px;
`;



