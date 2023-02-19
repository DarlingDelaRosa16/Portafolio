import styled from 'styled-components'

export const ContentBox = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    min-height: 100vh;
    
`;

export const ContentProjects = styled.div`
    display: grid;
    grid-template-rows: 10vh auto;
    width: 80%;
    min-height: 100vh;
`;

export const ContentCardProjects = styled.div`
    display: grid;
    width: 100%;
`;


export const TitleProjects = styled.h3`
    margin:0px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    text-align: center;
    font-size: 30px;
    color: #1C71B1;

    @media (max-width: 440px){
        font-size: 25px;
    }
`;

export const ProjectsCard = styled.div`
    display: grid;
    margin-bottom: 15px;
    place-items: center;
    grid-template-columns: 60% 40%;
    width:100%;
    height: 40vh;
    border-radius: 5px;
    box-shadow: #1C71B1 0px 2px 4px, rgba(0, 0, 250, 0.3) 0px 7px 13px -3px, rgba(0, 0, 250, 0.2) 0px -3px 0px inset;
    
    @media (max-width: 1000px){
        grid-template-rows: 1fr 1fr;
        height: 85vh;
        grid-template-rows: 35vh 50vh;
    }
`;

export const ProjectsImg = styled.div`
    width: 90%;
    height: 36vh;
    border-radius: 5px;
    grid-column:1/2 ;
    background-image:url(${(props)=> props.url});
    background-size: cover;

    @media (max-width: 1000px){
        margin:0;
        height: 35vh;
        grid-column:1/3;
    }
`;

export const ProjectsInfo = styled.div`
    width:80%;
    height: 36vh;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 7vh 22vh 7vh;
    grid-column: 2/3;
    border-radius: 5px;
    color: #1C71B1;
    
    @media (max-width: 1000px){
        margin:0;
        height: 50vh;
        grid-column:1/3 ;
        grid-template-rows: 5vh 35vh 10vh;
    }
`;

export const ProjectsTitle = styled.h1`
    margin: 0;
    grid-column: 1/3;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 20px;
`;

export const ProjectsDescription = styled.p`
    grid-column: 1/3;
    margin: 0;
    text-align: justify;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 15px;
    
    @media (max-width: 380px){
        font-size: 13px;
    }
`;

export const ProjectsLink = styled.a`
    
    padding: 10px;
    width: 80px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 14px;
    color: white;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    background: #1C71B1;

    &:hover{
        cursor: pointer;
        color: #1EF1DC;
   }
`;
