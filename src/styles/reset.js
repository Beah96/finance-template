import { createGlobalStyle } from "styled-components";


export const Reset = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
    }
    ul{
        list-style: none;
    }
    input, select{
        background-color: var(--color-grey-1);
        cursor: pointer;
    }
`