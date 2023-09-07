import styled from "styled-components";
import { text1_Defaut, text2_Defaut } from "../../styles/typography";

export const StyledForm = styled.form`
        width: 100%;
        max-width: 22.20rem;
        height: 27.125rem;
        border: .0625rem solid rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        padding: 2rem 1rem;
        gap: 1rem;

    input, select{
        border: none;
        height: 3.3rem;
        width: 100%;
        max-width: 19.6rem;
        border-radius: 0.5rem;
        padding: 0 1rem;   
    }

    input:hover, input:focus{
        border: .0625rem solid var(--color-grey-4);
    }

    label,p{
        ${text2_Defaut}
    }

    p{
        color: var( --color-grey-3);
    }

    button{
        height: 3rem;
        width: 100%;
        max-width: 19.6rem;
        border-radius: 0.5rem;
        padding: .8125rem 1.25rem .8125rem 1.25rem;
        background-color: var(--color-color-primary);
        border: none;
        color: var(--color-grey-1);
        ${text1_Defaut};
    }

    button:hover{
        background-color: var(--color-color-primary-2);
    }

    @media only screen and (max-width: 21.875rem){
        width: fit-content;
    }
        
`