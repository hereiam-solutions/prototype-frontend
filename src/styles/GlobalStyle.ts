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
    --whiter: #fffff8;
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
	  font-size: calc(1vw + 1vh + .5vmin);
  }

  /* Display links when the <a> element has no text value but the href attribute has a link */
  a[href^="https"]:empty::before {
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

  button {
    all: unset;
  }

  button, html input[type="button"], input[type="reset"], input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer
  }

  ul {
    margin: 1rem;

  }
  
  ol {
    margin: 1rem;

  }

  li {
    padding-top: 0.5rem;
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
    text-align: center;
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

  @media (prefers-reduced-motion: reduce) {
    .animation {
      animation: none;
    }  }

`;

const colors = {
  attentionColor: '#F8DE00',
  alertColor: '#D2251E',
  readyColor: '#4CBA4B',
  navIconOverlay: 'var(--gray-300)',
};

const borderConstants = {
  primaryBorderRadius: '10px',
  drawerBorderRadius: '15px',
  buttonBorderRadius: '5px',
};

const mediaQueries = {
  mediaQueryPhone: '(max-width: 43em), screen or (orientation: portrait)',
  mediaQueryTablet: '(44em <= width <= 62em), screen',
  mediaQueryDesktop: '(63em <= width <= 87em), screen',
  mediaQueryWidescreen: '(min-width: 88em), screen',
  mediaQueryWearable: '(max-width: 25em), screen',
};

const font = {
  calculatedFontSize: 'calc(1vw + 1vh + .5vmin)',
  primaryLineHeight: '1.6rem',
};

const margins = {
  insideDrawMargin: '1rem',
};

const paddings = {
  insideButtonPadding: '0.2rem 0.5rem 0.2rem 0.5rem',
  sectionHeadlinePadding: '0.2rem 0 0.2rem 1rem',
};

export const darkTheme = {
  primaryBackgroundColor: 'var(--base)',
  secondaryBackgroundColor: 'var(--base-text)',
  sectionHeadlineBackgroundColor: 'var(--gray-500)',
  sectionHeadlineColor: 'var(--base)',
  primaryFontColor: 'var(--whiter)',
  secondaryFontColor: 'var(--base-light)',
  navIconColor: 'var(--base-light)',
  mapControlBackground: 'var(--gray-300)',
  mapControlColor: 'var(--base)',
  formFieldBackground: 'var(--gray-500)',
  formFieldColor: 'var(--gray-200)',
  formSubmitFillColor: '#F8DE00',
  formSubmitTextColor: 'var(--base-text)',
  formSubmitBorderColor: 'var(--base-text))',
  ...borderConstants,
  ...colors,
  ...mediaQueries,
  ...font,
  ...margins,
  ...paddings,
};

export const lightTheme = {
  primaryBackgroundColor: 'var(--base-light)',
  secondaryBackgroundColor: 'var(--gray-300)',
  sectionHeadlineBackgroundColor: 'var(--gray-400)',
  sectionHeadlineColor: 'var(--base-light)',
  primaryFontColor: 'var(--base-text)',
  secondaryFontColor: 'var(--base)',
  navIconColor: 'var(--base-light)',
  mapControlBackground: 'var(--gray-200)',
  mapControlColor: 'var(--base)',
  formFieldBackground: 'var(--gray-200)',
  formFieldColor: 'var(--base)',
  formSubmitFillColor: 'var(--gray-400)',
  formSubmitTextColor: 'var(--gray-150)',
  formSubmitBorderColor: 'var(--gray-150)',
  ...borderConstants,
  ...colors,
  ...mediaQueries,
  ...font,
  ...margins,
  ...paddings,
};

// Example
// const StyledMapContainer = styled(MapContainer)`
//   height: 100vh;
//   width: 100vw;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: -1;
//   background-color: ${(props) => props.theme.primaryBackgroundColor};
//   border-radius: ${(props) => props.theme.primaryBorderRadius};

//   @media (max-width: ${(props) => props.theme.mediaQueryPhone}) {

//   }

//   @media (max-width: ${(props) => props.theme.mediaQueryTablet}) {

// }

// `;
