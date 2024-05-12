import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --font-display:"Bitter", serif;
  --font-body: "Lato", sans-serif;

  --dark : #020617;
   --light: #f4f4f6; 


  --accent-1:#FFE7D5;
  --accent-2:#FF8A5E;

  --border-color:#303033;
 
  --radius-xs:.5rem;
  --radius-sm:1rem;
  --radius-md:2rem;
  --radius-lg:3rem;

  --gradient : linear-gradient(to right, var(--accent-1), var(--accent-2));

  --gradient-1 : linear-gradient(to right bottom,#FF8A5E ,#F66F7A);
  --gradient-2 : linear-gradient(to right bottom,#DB6195 ,#AE5FA9);
  --gradient-3 : linear-gradient(to right bottom,#7361AF ,#1860A6);

}

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    scrollbar-width: none;
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
    line-height: 1.3; 
    letter-spacing: 1px;
  }

  a {
    text-decoration: none;
  }
`;
