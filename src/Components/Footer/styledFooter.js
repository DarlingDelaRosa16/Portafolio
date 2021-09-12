import styled from 'styled-components'

export const FooterContent = styled.div`
    height: 90px;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: rgb(0,0,250, 0.6);
`;

export const ContactContentSocial = styled.div`
    width: 100%;  
    
    text-align: center;
    font-size: 50px;
`;
export const ContactSocialMedias = styled.a`  
    color: black;
    &:hover{
        transform: scale(1.05, 1.05);
    }
`;