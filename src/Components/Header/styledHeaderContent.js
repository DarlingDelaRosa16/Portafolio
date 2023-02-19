import styled from 'styled-components'

export const AppContent = styled.div`
    width: 100%;
    min-height: 100vh;
`;

export const HeaderContent = styled.div`
    width: 100%;
    background: #1C71B1;

    @media (max-width: 540px){
        height: 80vh;
    }
`;

export const InfoHeaderContent = styled.div`
    margin: auto;
    width: 90%;
    display: grid;
    grid-template-columns: 65% 35%;
    min-height: 90vh;

    @keyframes titleAnimation {
        0% { opacity: 0; left: 50%; }
        100% { opacity: 1; left: 0%;}
    }

    @keyframes imgAnimation {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`;


// export const ImgContent = styled.div`
//     grid-column: 1/2;
//     background-image: url("https://i.imgur.com/c9mct83.jpg");
//     background-repeat: no-repeat;
//     background-position: -25px -75px;
//     border-radius: 5px;
//     margin: 0px 5px 5px 0px;
//     border: 1px solid black;
//     animation-name: imgAnimation;
//     animation-duration: 3s;

//     @media (max-width: 1100px){
//         display: none;
//         margin: 0;
//     }
//     @media (min-width: 1395px){
//         background-position: -15px -75px;
//     }

// `;

export const SocialMediaContent = styled.div`
    grid-column: 2/3;
    display: grid;
    place-items: end;
    padding-bottom: 10vh;
    margin-right: 10%;
    
    @media (max-width: 760px){
        display: none;
    }
    
`;

export const MySocialMedias = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    min-height: 90px;
    border: 1px solid #1EF1DC;
    border-radius: 5px;
    font-size: 50px;
    position: relative;
    animation-name: titleAnimation;
    animation-duration: 2s;
    
    @media (max-width: 760px){
        display: none;
    }
    
    @media (max-width: 1024px){
        width: 100%;
    }
    
`;

export const InfoMainContent = styled.div`
    grid-column: 1/2;
    display: grid;
    height: 380px;
    margin: 50px 0px 0px 50px;

    @media (max-width: 440px){
        margin: 70px 0px 0px 0px;
        grid-template-rows: 5vh 15vh 5vh;
    }

    @media (max-width: 1100px){
        grid-column: 1/3;
    }
    
`;


export const NameContent = styled.h1`
    margin:0;
    font-size: 70px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: white;
    position: relative;
    animation-name: titleAnimation;
    animation-duration: 2s;

    @media (max-width: 540px){
        font-size: 35px;
    }
    
`;

export const GreetingsContent = styled(NameContent)`
    font-size: 40px;
    animation-name: titleAnimation;
    animation-duration: 1.5s;

    @media (max-width: 440px){
        font-size: 25px;
    }
   
`;

export const CareerContent = styled(NameContent)`
    color: #1EF1DC;
    font-size: 50px;
    animation-name: titleAnimation;
    animation-duration: 2.5s;

    @media (max-width: 440px){
        font-size: 30px;
    }
`;

export const TouchMe = styled.button`
    width: 140px;
    height: 40px;
    color: white;
    margin-top: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    font-size: 18px;
    background: none;
    border-radius: 5px; 
    border: 1px solid #1EF1DC ;
    position: relative;
    animation-name: titleAnimation;
    animation-duration: 3s;   
    
    &:hover{
        cursor: pointer;
        color: #1EF1DC;
    }
    @media (max-width: 440px){
        height: 30px;
        width: 130px;
    }
`;