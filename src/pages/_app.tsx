import { AppProps } from 'next/app';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { appWithTranslation } from 'next-i18next';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

// export const getStaticProps = async ({ locale }: any) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['common']),
//   },
// })

export default appWithTranslation(MyApp);
