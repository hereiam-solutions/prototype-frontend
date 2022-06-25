import { createGlobalStyle } from 'styled-components';

// the styled-components global styles object
// import in App.tsx and inserted as a Component
// applies every style defined in here to all elements (can still be overwritten)

// css improvements based on: https://github.com/AllThingsSmitty/css-protips
export const GlobalStyles = createGlobalStyle`
  *{
     box-sizing: border-box;
     margin: 0;
     padding: 0;
   }
   *:focus {
    outline: none;
   }

   :root {
    --base-light: #DCE4EF;
    --base: #494440;
    --base-dark: #212121;
    --gray-500: #323A45;
    --gray-400: #5B616B;
    --gray-300: #AEB0B5;
    --gray-200: #D6D7D9;
    --gray-150: #E4E2E0;
    --gray-100: #F1F1F1;
    --cta-100: #0071BC;
    --cta-200: #205493;
    --cta-300: #112E51;
    --attention: #F8DE00;
    --alert: #D2251E;
    --ready: #4CBA4B;
    --whiter: #fffff8;
  }

   *, *::before, *::after {
    margin: 0;
    border: 0;
    padding: 0;
    -moz-box-sizing: inherit;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  html{
    font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    color: var(--base-dark);
  }

  img {
    border: 0;
    display: block;
    max-width: 100%;
    height: auto;
    image-rendering: -webkit-optimize-contrast
  }

  svg:not(:root) {
    overflow: hidden
  }

  figure {
    margin: 0
  }

  button, html input[type="button"], input[type="reset"], input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer
  }

  input {
    line-height: normal
  }

  textarea {
    overflow: auto
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {...}

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {...}

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {...}

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {...}

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {...}
`;

export const globalDarkThemeValues = {};

export const globalLightThemeValues = {};
