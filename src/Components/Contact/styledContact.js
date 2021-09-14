import styled from 'styled-components'

export const ContentBox = styled.div`
    width: 100%;
    height: 657px;
    display: flex;
    align-items: center;
`;

export const ContactContent = styled.div`
    display: grid;
    grid-template-rows: 90px auto ;
    width: 80%;
    margin-inline:10%;
    height: 430px;
    border-radius: 5px;
    
    @media (max-width: 1178px){
        width: 90%;
        margin-inline:5%;
    }
    @media (max-width: 700px){
        width: 94%;
        margin-inline: 3%;
    }
    @media (max-width: 500px){
        height: 500px;
    }
    
`;

export const ContactTitle = styled.h3`
    font-size: 30px;
    font-family: 'Nanum Myeongjo', serif;
    width:100%;
    grid-row:auto;
    text-align:center;
    grid-column: 1/3;
    @media (max-width: 420px){
        font-size: 25px;
    }
`;

export const ContactTextBox = styled.input`
    font-family: 'Noto Serif', serif;
    grid-column:${(props)=> props.gridColumn} ;
    grid-row:${(props)=> props.gridRow} ;
    font-size:20px;
    width: 95%;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 250, 0.4) 0px 2px 4px, rgba(0, 0, 250, 0.3) 0px 7px 13px -3px, rgba(0, 0, 250, 0.2) 0px -3px 0px inset;
    border: none;

    &:focus{
        outline:none;
        box-shadow: rgba(178, 34, 34, 0.7) 0px 2px 4px, rgba(178, 34, 34, 0.4) 0px 7px 13px -3px, rgba(178, 34, 34, 0.2) 0px -3px 0px inset; 
    }
    
    @media (max-width: 700px){
        grid-column:1/3;
    }
`;

export const ContactLabel = styled.label`
    font-size: 20px;
    font-family: 'Nanum Myeongjo', serif;
    grid-column:${(props)=> props.gridColumn} ;
    grid-row:${(props)=> props.gridRow} ;
    
    @media (max-width: 700px){
        grid-column:${(props)=> props.gridC} ;
        grid-row:${(props)=> props.gridR} ;
    }
`;

export const ContactTextArea = styled.textarea`
    grid-column: 2/3;
    font-family: 'Noto Serif', serif;
    font-size:20px;
    grid-row: 2/5;
    width: 95%;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 250, 0.4) 0px 2px 4px, rgba(0, 0, 250, 0.3) 0px 7px 13px -3px, rgba(0, 0, 250, 0.2) 0px -3px 0px inset;
    border: none;

    &:focus{
        outline:none;
        box-shadow: rgba(178, 34, 34, 0.7) 0px 2px 4px, rgba(178, 34, 34, 0.4) 0px 7px 13px -3px, rgba(178, 34, 34, 0.2) 0px -3px 0px inset; 
    }
    
    @media (max-width: 700px){
        width: 95%;
        grid-column:1/3;
        grid-row: 7/8;
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
    grid-row :auto;
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

    @media (max-width: 700px){
        grid-column:1/3;
        grid-row: 8/9;
    }
    @media (max-width: 380px){
        grid-column:1/2;
        grid-row: 8/10;
        width: 94%;
    } 
`;