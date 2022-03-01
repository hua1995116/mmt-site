import Document, { Html, Head, Main, NextScript } from 'next/document';
import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2PMZYB5X0C"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2PMZYB5X0C');
            `
        }}>
        </script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// export const getStaticProps = async ({ locale }: any) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['common']),
//   },
// })

export default MyDocument;
