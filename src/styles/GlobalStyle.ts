import { createGlobalStyle } from 'styled-components';

// the styled-components global styles object
// import in App.tsx and inserted as a Component
// applies every style defined in here to all elements (can still be overwritten)

// css improvements based on: https://github.com/AllThingsSmitty/css-protips
export const GlobalStyles = createGlobalStyle`

  :root {
    --base-light: #DCE4EF;
    --base: #494440;
    --base-text: #212121;
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
    font-size: calc(1vw + 1vh + .5vmin);
  }

  html{
    box-sizing: border-box;
    color: var(--base-dark);
  }

  *,
  *::before,
  *::after {
    margin: 0;
    border: 0;
    padding: 0;
    -moz-box-sizing: inherit;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  body {
    height: 100%;
    margin: 0;
    font-family: -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 100;
  }

  /* center elements vertically */
  .centered {
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-flex;
    display: flex;
  }

  /* Display links when the <a> element has no text value but the href attribute has a link */
  a[href^="http"]:empty::before {
    content: attr(href);
  }

  /* Add a style for "default" links without a class attribute */
  a[href]:not([class]) {
    color: var(--base-text);
    text-decoration: underline;
  }

  h1, h2, h3 {
    font-weight: 400;
  }

  h4, h5, h6 {
    font-weight: 300;
    text-transform: uppercase;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.8em;
  }

  h3 {
    font-size: 1.5em;
  }

  h4 {
    font-size: 1.3em;
  }

  h5 {
    font-size: 1.5em;
  }

  h6 {
    font-size: 1.2em;
  }

  p {
    font-size: 1rem;
  }

  button {
    all: unset;
  }

  button, html input[type="button"], input[type="reset"], input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer
  }

  .button-disabled {
    opacity: .5;
    pointer-events: none;
  }

  a:focus,
  button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    box-shadow: none;
    outline: var (--gray-400) dotted 2px;
    outline-offset: .05em;
  }

  /* avoid mobile browsers from zooming in on HTML form elements */
  input[type="text"],
  input[type="number"],
  select,
  textarea {
    font-size: 16px;
    line-height: normal
  }

  textarea {
    overflow: auto
  }

  img {
    display: block;
    border: 0;
    height: auto;
    max-width: 100%;
    position: relative;
    image-rendering: -webkit-optimize-contrast;
    font-family: sans-serif;
    font-weight: 300;
    line-height: 2;
    text-allign: center;
  }

  /* pseudo-elements rules to display a user message and URL reference of the broken image */
  img::before {
    content: "We're sorry, the image below is broken :(";
    display: block;
    margin-bottom: 1em;
  }

  img::after {
    content: "(url: " attr(src) ")";
    display: block;
    font-size: 1em;
  }

  svg:not(:root) {
    overflow: hidden
  }

  /* SVG icon-only buttons for sighted users and the SVG fails to load, this will help maintain accessibility */
  .no-svg .icon-only::after {
    content: attr(aria-label);
  }

  figure {
    margin: 0
  }

  code,
  pre {
    background-color: var(--gray-400);
    border-radius: 3px;
    font-family: monospace;
    padding: 3px;
  }

  code {
    white-space: nowrap;
  }

  em {
    background-color: var(--gray-200);
    font-style: normal;
    padding: .1em .2em;
  }

  }
  /* portrait and phones */
  @media (max-width: 43em), screen or (orientation: portrait) {

  }

  /* Tablett */
  @media (44em <= width <= 62em), screen {

  }

  /* Desktop */
  @media (63em <= width <= 87em), screen {

  }

  /* Widescreen */
  @media (min-width: 88em), screen {

  }

  /* Wearable */
  @media (max-width: 25em), screen {

  }

  @media (prefers-reduced-motion: reduce) {
    .animation {
      animation: none;
    }
  }
`;

export const globalDarkThemeValues = {};
export const globalLightThemeValues = {};

/*
export const globalDarkThemeValues = createDarkStyle`
:root {
  --background: #494440;
  --text-light: #DCE4EF;
  --text: #F1F1F1;
}
`;

export const globalLightThemeValues = createLightStyle`
  :root {
    --background: #DCE4EF;
    --text-light: #494440;
    --text: #212121;
  }
`;
*/
