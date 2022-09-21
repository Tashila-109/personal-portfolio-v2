import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='keywords' content='Personal Portfolio' />
          <meta name='description' content='This is my personal portfolio' />
          <meta name='author' content='' />
          <link rel='shortcut icon' href='/img/favicon.ico' />
          <link href='https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap' rel='stylesheet' />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
        </Head>

        <body>
          <Main />
          <NextScript />
          <Script strategy='beforeInteractive' id='splitting' src='/js/splitting.min.js'></Script>
          <Script id='isotope' strategy='beforeInteractive' src='/js/isotope.pkgd.min.js'></Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
