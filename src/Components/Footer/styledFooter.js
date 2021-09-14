import styled from 'styled-components'

export const FooterContent = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #6495ED;
`;

export const ContactContentSocial = styled.p`
    width: 100%;  
    text-align: center;
    font-size: 50px;
    @media (max-width: 300px){
        font-size: 40px;
    }
`;
export const ContactSocialMedias = styled.a`  
    color: black;
    text-decoration: none;
    margin-inline: 8px;
    &:hover{
        color: #B22222 ;
    }
`;