import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
         :root {
            --color-color-primary: #fd377e;
            --color-color-primary-2: #e34981;
            --color-color-secondary: #03b898;
            --color-grey-5: #212529;
            --color-grey-4: #343a40;
            --color-grey-3: #868E96;
            --color-grey-2: #e9ecef;
            --color-grey-1: #f8f9fa;
            
            --general-font: "Nunito", sans-serif;
        }

        body{
                background-color: #ffffff;
                font-family: var(--general-font);
                color: var(--color-grey-5)
        }

        main{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
        }

        main>div{
                width: 100%;
                max-width:56.25rem;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                margin: 0 2rem;
                gap: 2rem;
        }

        main>div>span{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 2rem;
        }

`