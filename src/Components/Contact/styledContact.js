import styled from 'styled-components'

export const ContentBox = styled.div`
    width: 100%;
    min-height: 400px;
    display: grid;
    margin-top: 100px;
`;

export const ContactContent = styled.div`
    display: grid;
    grid-template-rows: auto 1fr ;
    width: 80%;
    margin-top: 40px;
    margin-inline:10%;
    height: 400px;
    border-radius: 5px;
    
    @media screen and (max-width: 1220px){
        width: 90%;
        margin-inline:5%;
    }
    @media (max-width: 920px){
        width: 96%;
        margin-inline:2%;
    }  
    @media (max-width: 690px){
        grid-template-rows: 50px auto auto ;
        min-height: 520px;
    }   
`;
export const ContactContentSocial = styled.div`
    display: grid;
    grid-column:1/2;
    grid-row :5/6;
    width: 50%;
    height: 100%;  
    margin-inline: 5%; 
    grid-template-columns: repeat(auto-fill, minmax(55px, 1fr) );
    @media (max-width: 690px){
        grid-column:2/3;
        grid-row: 8/10;
        width: 100%;
    } 
    @media (max-width: 380px){
        grid-column:1/3;
        grid-row: 10/11;
        width: 100%;        
        margin-top: 10px;
    } 
`;
export const ContactSocialMedias = styled.a`
    width: 45px;
    height: 45px;   
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    background-image:url(${(props)=> props.url}); 
    background-position-x: ${(props)=> props.posX}; 
    background-position-y: ${(props)=> props.posY}; 
    background-size: cover;
    color: black;
    &:hover{
        transform: scale(1.05, 1.05);
    }
    
`;

export const ContactTitle = styled.h1`

    font-size: 25px;
    width:80%;
    margin-inline:10%;
    grid-column: 2/3;
    grid-row:1/2;
    text-align:center;
    grid-column: 1/3;

    @media (max-width: 690px){
        margin: 0;
        width: 100%;
    } 
`;

export const ContactTextBox = styled.input`
    grid-column:${(props)=> props.gridColumn} ;
    grid-row:${(props)=> props.gridRow} ;
    margin: 2% 5% 5% 5%;
    font-size:20px;
    width: 90%;
    background:rgb(218, 220, 221);
    padding: 5px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border: none;
    @media (max-width: 690px){
        grid-column:1/3;
        margin: 0% 2% 2% 2%;
    }
`;

export const ContactLabel = styled.label`
    font-size: 20px;
    margin-left: 5%;
    grid-column:${(props)=> props.gridColumn} ;
    grid-row:${(props)=> props.gridRow} ;
    
    @media (max-width: 690px){
        grid-column:${(props)=> props.gridC} ;
        grid-row:${(props)=> props.gridR} ;
    }
`;

export const ContactTextArea = styled.textarea`
    grid-column: 2/3;
    font-size:20px;
    grid-row: 2/5;
    padding: 5px;
    margin: 2% 5% 5% 5%;
    width: 90%;
    border-radius: 5px;
    background:rgb(218, 220, 221);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border: none;
    @media (max-width: 690px){
        grid-column:1/3;
        grid-row: 7/8;
        margin: 0% 2% 2% 2%;
        height: 100px;
    }
    
`;

export const ContactButton = styled.a` 

    color: black;
    width: 130px;
    font-size: 20px;
    text-align: center;
    margin-left: 5%;
    background: none;
    padding-top: 5px;
    text-decoration: none;
    grid-column: 2/3;
    border-radius: 5px;
    grid-row: 5/6;
    height: 40px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    
    @media (max-width: 690px){
        grid-column:1/2;
        grid-row: 8/10;
    }
    @media (max-width: 380px){
        grid-column:1/2;
        margin-top: 10px;
        grid-row: 8/10;
        width: 96%;
    } 
`;