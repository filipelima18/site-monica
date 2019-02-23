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
    font-family: "Open Sans","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif";
    font-size: 22px;
    font-weight: 700;
    flex: 1 1 auto;
    margin-top: 40px;
    padding: 20px 50px;
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
  .separator {
    height: 20px;
  }
`

export default GlobalStyle
