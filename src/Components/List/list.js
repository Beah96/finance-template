import styled from "styled-components";
import { title3_Defaut } from "../../styles/typography";

export const StyledListSection = styled.section`
    width: 100%;
    max-width: 30rem;
    height: 35.125rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content:start;
    gap:1.5rem;
    padding: 0.2rem;

    h2{
        ${title3_Defaut}
    }

    ul{
        width: 100%;
        height: fit-content;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    li:hover{
        box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.25);
        background-color: #ffffff;
    }

`