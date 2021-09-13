import styled from 'styled-components'

export const ContentBox = styled.div`
    width: 100%;
    min-height: 657px;
    display: flex;
    align-items: center;
`;

export const ContactContent = styled.div`
    display: grid;
    grid-template-rows: 100px 330px ;
    width: 80%;
    margin-inline:10%;
    height: 430px;
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

export const ContactTitle = styled.h1`
    font-size: 30px;
    font-family: 'Nanum Myeongjo', serif;
    width:100%;
    grid-row:1/2;
    text-align:center;
    grid-column: 1/3;

    @media (max-width: 690px){
        margin: 0;
        width: 100%;
    } 
`;

export const ContactTextBox = styled.input`
    font-family: 'Noto Serif', serif;
    grid-column:${(props)=> props.gridColumn} ;
    grid-row:${(props)=> props.gridRow} ;
    font-size:20px;
    width: 95%;
    margin-top: 10px;
    height: 70px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 250, 0.4) 0px 2px 4px, rgba(0, 0, 250, 0.3) 0px 7px 13px -3px, rgba(0, 0, 250, 0.2) 0px -3px 0px inset;
    border: none;

    &:focus{
        outline:none;
        box-shadow: rgba(178, 34, 34, 0.7) 0px 2px 4px, rgba(178, 34, 34, 0.4) 0px 7px 13px -3px, rgba(178, 34, 34, 0.2) 0px -3px 0px inset; 
    }
    
    @media (max-width: 690px){
        grid-column:1/3;
        margin: 0% 2% 2% 2%;
    }
`;

export const ContactLabel = styled.label`
    font-size: 20px;
    font-family: 'Nanum Myeongjo', serif;
    grid-column:${(props)=> props.gridColumn} ;
    grid-row:${(props)=> props.gridRow} ;
    
    @media (max-width: 690px){
        grid-column:${(props)=> props.gridC} ;
        grid-row:${(props)=> props.gridR} ;
    }
`;

export const ContactTextArea = styled.textarea`
    grid-column: 2/3;
    font-family: 'Noto Serif', serif;
    font-size:20px;
    grid-row: 2/5;
    width: 100%;
    margin-top: 10px;
    height: 205px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 250, 0.4) 0px 2px 4px, rgba(0, 0, 250, 0.3) 0px 7px 13px -3px, rgba(0, 0, 250, 0.2) 0px -3px 0px inset;
    border: none;

    &:focus{
        outline:none;
        box-shadow: rgba(178, 34, 34, 0.7) 0px 2px 4px, rgba(178, 34, 34, 0.4) 0px 7px 13px -3px, rgba(178, 34, 34, 0.2) 0px -3px 0px inset; 
    }
    
    @media (max-width: 690px){
        grid-column:1/3;
        grid-row: 7/8;
        margin: 0% 2% 2% 2%;
        height: 100px;
    }
    
`;

export const ContactButton = styled.button` 
    width: 130px;
    font-family: 'Nanum Myeongjo', serif;
    font-size: 20px;
    background: none;
    border: none;
    border-radius: 5px; 
    grid-column:1/2;
    grid-row :5/6;
    height: 40px;
    box-shadow: rgba(0, 0, 250, 0.4) 0px 2px 4px, rgba(0, 0, 250, 0.3) 0px 7px 13px -3px, rgba(0, 0, 250, 0.2) 0px -3px 0px inset;

    &:hover{
        cursor: pointer;
        box-shadow: rgba(178, 34, 34, 0.7) 0px 2px 4px, rgba(178, 34, 34, 0.4) 0px 7px 13px -3px, rgba(178, 34, 34, 0.2) 0px -3px 0px inset; 
       /* animation-name: back-animation;
        animation-duration: 3s;
        animation-iteration-count: infinite; */
    }

    @keyframes back-animation {
        0% { box-shadow: rgba(0, 250, 0, 0.4) 0px 2px 4px, rgba(0, 250, 0, 0.3) 0px 7px 13px -3px, rgba(0, 250, 0, 0.2) 0px -3px 0px inset; }
        50% { box-shadow: rgba(250, 0, 0, 0.4) 0px 2px 4px, rgba(250, 0, 0, 0.3) 0px 7px 13px -3px, rgba(250, 0, 0, 0.2) 0px -3px 0px inset; }
        100% { box-shadow: rgba(0, 0, 250, 0.4) 0px 2px 4px, rgba(0, 0, 250, 0.3) 0px 7px 13px -3px, rgba(0, 0, 250, 0.2) 0px -3px 0px inset; }
    }

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