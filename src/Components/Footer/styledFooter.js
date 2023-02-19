import styled from 'styled-components'

export const FooterContent = styled.div`
    display: grid;
    width: 100%; 
    place-items: center;
    height: 10vh;
    background-color: #1C71B1;
`;

export const ContactContentSocial = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    margin:0px;
    width: 30%;  
    text-align: center;
    font-size: 50px;

    @media (max-width: 440px){
        font-size: 40px;
        width: 80%;
    }
`;
export const ContactSocialMedias = styled.a`
    color: white;
    margin-top:10px;
    text-decoration: none;

    &:hover{
        color: #1EF1DC ;
    }
`;