import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Base } from '../templates/Base';
// import { useTranslation } from 'next-i18next';

const Index = () => {
  // const { t } = useTranslation('common')
  return <Base />
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Index;
