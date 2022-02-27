import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
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
