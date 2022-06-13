import Document, { Html, Head, Main, NextScript } from "next/document";

const APP_NAME = 'hereIam prototype'
const APP_DESCRIPTION = 'Saving lives with better decisions'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' dir='ltr'>
        <Head>
            <link rel="manifest" href="%PUBLIC_URL%/manifest.webmanifest" />
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            
            <meta name='application-name' content={APP_NAME} />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name='apple-mobile-web-app-title' content={APP_NAME} />
            <meta name='description' content={APP_DESCRIPTION} />
            <meta name='format-detection' content='telephone=no' />
            <meta name='mobile-web-app-capable' content='yes' />
            <link href='%PUBLIC_URL%/icons/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />    
            <link href='%PUBLIC_URL%/icons/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
            <link rel='apple-touch-icon' href='%PUBLIC_URL%/icon/apple-icon.png'></link>
            <meta name='theme-color' content='#DCE4EF' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;