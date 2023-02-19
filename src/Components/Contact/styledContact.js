import styled from 'styled-components'

export const ContentBox = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    place-items: center;
`;

export const ContactContent = styled.div`
    display: grid;
    grid-template-rows: 15vh 5vh 65vh 15vh;
    width: 80%;
    height: 100vh;
    
    @media (max-width: 1024px){
        width: 100%;
        grid-template-rows: 5vh 10vh 75vh ;
    }
    
`;

export const ContactTitle = styled.h3`
    margin: 0px;
    grid-row: 2/3;
    width:100%;
    text-align:center;
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    font-weight: 500;
    color: #1C71B1;

    @media (max-width: 440px){
        font-size: 25px;
    }
`;

export const LabelAndBox = styled.span`
    grid-column: ${(props)=> props.gridCol};

    @media (max-width: 1024px){
        grid-column: ${(props)=> props.gridSmCol};
    }
`;


export const ContactTextBox = styled.input`
    width: 100%;
    height:45px;
    margin-top: 5px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    font-size: 19px;
    box-shadow: #1C71B1 0px 2px 4px, rgba(0, 0, 250, 0.3) 0px 7px 13px -3px, rgba(0, 0, 250, 0.2) 0px -3px 0px inset;
    border-radius: 5px;
    border: none;

    &:focus{
        outline:none;
    }
`;

export const ContactLabel = styled.label`
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
`;

export const ContactTextArea = styled.textarea`
    width: 100%;
    height: 175px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    font-size:20px;
    border-radius: 5px;
    box-shadow: #1C71B1 0px 2px 4px, rgba(0, 0, 250, 0.3) 0px 7px 13px -3px, rgba(0, 0, 250, 0.2) 0px -3px 0px inset;
    border: none;

    &:focus{
        outline:none;
    }
    @media (max-width: 380px){
        height: 155px;
    }
    
`;

export const ContactButton = styled.button` 
    width: 130px;
    height: 40px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 20px;
    border-radius: 5px; 
    box-shadow: #1C71B1 0px 2px 4px, rgba(0, 0, 250, 0.3) 0px 7px 13px -3px, rgba(0, 0, 250, 0.2) 0px -3px 0px inset;
    background: none;
    border: none;

    &:hover{
        cursor: pointer;
        background: #1C71B1 ;
        color: white;
    }
`;