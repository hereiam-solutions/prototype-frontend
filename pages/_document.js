import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="manifest" href="%PUBLIC_URL%/manifest.webmanifest" />
            <meta charset='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
            <meta name='description' content='Description' />
            <meta name='keywords' content='Keywords' />
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