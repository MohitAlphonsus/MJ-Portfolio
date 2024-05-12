import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --font-display:"Bitter", serif;
  --font-body: "Lato", sans-serif;

  --dark : #020617;
  --light: #f4f4f6;
  --border-color:#303033;

  --radius-sm:1rem;
  --radius-md:2rem;
  --radius-lg:3rem;

  --gradient : linear-gradient(to right, rgb(196, 232, 107),rgb(0, 188, 180) );

}

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    height:100%;
    width:100%;
  }

  body {
    font-family: var(--font-body);
    background-color: var(--dark);
    color: var(--light);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
  }
`;
