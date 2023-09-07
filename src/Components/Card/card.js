import {title3_Defaut, text2_Defaut } from "../../styles/typography.js"
import styled, {css} from "styled-components"

export const StyledCard = styled.li`
        width: 100%;
        max-width: 29rem;
        min-height: 5.375rem;
        background-color: var(--color-grey-1);
        border-radius: 0.15rem;
        padding: 1.5rem 1.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        h2{
            ${title3_Defaut}
        }

        p{
            ${text2_Defaut}
        }

        div{
            display: flex;
            flex-direction: column;
            height: 100%;
            gap: 0.75rem;
        }

        div>button{
            height: 1.2rem;
            width: 3.5rem;
            border-radius: .125rem;
            background-color: var(--color-grey-2);
            border: none;
            font-size: 0.625rem;
            font-weight: 500;

        }

        div>button:hover{
            background-color: var(--color-grey-3);
        }

        ${({type})=>{
            if(type == "Entrada"){
                return css`
                box-shadow: -4px 0px 0px 0px var(--color-color-secondary);
            `
            }else{
                return css`
                box-shadow: -4px 0px 0px 0px var(--color-grey-2);
                `
            }
        }}

        
`