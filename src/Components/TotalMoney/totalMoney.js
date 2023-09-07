import styled, { css } from "styled-components";
import { text2_Defaut, title3_Defaut } from "../../styles/typography";

export const StyledDiv = styled.div`
        height: 6rem;
        width: 22.1875rem;
        border-radius: .25rem;
        border: 1px solid var(--color-grey-2);
        display: flex;
        flex-direction: column;
        padding: 1.5rem 2rem;
        justify-content: space-between;

        span{
            display: flex;
            justify-content: space-between;
        }

        h3{
            ${title3_Defaut}
        }
        
        span>p{
            ${title3_Defaut};
            color: var(--color-color-primary);
        }

        p{
            ${text2_Defaut}
        }

        ${({message})=>{
            if(message == "none"){
                return css`
                border:none;
                background-color: transparent;
                                
            `
            }
        }}
`
