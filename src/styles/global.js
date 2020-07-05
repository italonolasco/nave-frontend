import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }
  
  body {
    background: #fff;
    --webkit-font-smoothing: antialised;
    color: #212121;
  }
  
  body,
  input,
  button {
    font-family: Montserrat, Arial, sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  
  button, li {
    cursor: pointer;
  }
  
`;
