import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #161719;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  a {
    color: #e07628;
    text-decoration: none;
  }
  a.button {
    flex: 1 1 auto;
    margin-top: 40px;
    padding: 25px 50px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: #ffffff;
    border-radius: 900px;
    background-image: linear-gradient(to right, #c21500 0%, #ffc500 100%);
  }
  a.button:hover {
    background-position: right center;
    cursor: pointer;
  }
`

export default GlobalStyle
