import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body{
        -webkit-font-smoothing: antialiased;
        background-color: #1B1B1A;
    }
    body, input, button{
        font: 16px Sans-serif;
    }

    #root{
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button{
        cursor: pointer;
    }

    @media (max-width: 700px) {
        #root{
            padding: 0px 0px;
        }
    }
`;
