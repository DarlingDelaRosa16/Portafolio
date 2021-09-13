import styled from 'styled-components'

export const ContentBox = styled.div`
    width: 80%;
    margin-left:10%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr) );
    grid-template-rows: auto;
    min-height: 657px;
    @media (max-width: 399px){
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) );
    }
`;

export const TitleProjects = styled.h3`
    grid-row: 1/2 ;
    font-family: 'Nanum Myeongjo', serif;
    text-align: center;
    font-size: 25px;
`;

export const ProjectsCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    background: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 250, 0.4) 0px 2px 4px, rgba(0, 0, 250, 0.3) 0px 7px 13px -3px, rgba(0, 0, 250, 0.2) 0px -3px 0px inset;
    width:95%;
    height: 285px;
    margin: 10px;
    
    @media (max-width: 426px){
        grid-template-rows: 1fr 1fr;
    }
`;

export const ProjectsImg = styled.div`
    width: 100%;
    margin:2px 0px 7px 2px;
    border-radius: 5px 0px 0px 5px;
    grid-column:1/5 ;
    background-image:url(${(props)=> props.url}); 
    background-size: cover;
    @media (max-width: 426px){
        margin:0;
        border-radius: 5px 5px 0 0;
        grid-column:1/8 ;
        grid-row:1/2;
    }
`;

export const ProjectsInfo = styled.p`
    grid-column:5/8 ;
    display: grid;
    grid-template-rows: auto auto 40px;
    grid-template-columns: 1fr 1fr;
    border-radius: 0px 5px 5px 0px;
    margin: 2px 2px 7px 5px;
    color: ${(props)=> props.generalTheme};
    background:linear-gradient(#ddd,rgb(218, 220, 221), #ffffff) ;
    @media (max-width: 426px){
        margin:0;
        border-radius: 0 0 5px 5px ;
        grid-column:1/8 ;
        grid-row:2/3;
    }
`;

export const ProjectsTitle = styled.h1`
    grid-row: 1/2;
    font-family: 'Nanum Myeongjo', serif;
    margin: 5px;
    grid-column: 1/3;
    font-size: 20px;
    text-align:center;
`;

export const ProjectsDescription = styled.p`
    grid-row: 2/3;
    font-family: 'Noto Serif', serif;
    margin-top: 0;
    grid-column: 1/3;
    font-size: 15px;
    text-align:center;
`;

export const ProjectsLink = styled.button`
    color:  "black";
    grid-column: ${(props)=> props.column};
    margin: 5px;
    grid-row: 3/4;
    &:hover{
        cursor: pointer;
        transform: scale(1.04, 1.04);
    }
`;
