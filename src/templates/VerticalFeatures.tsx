import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { useTranslation } from 'next-i18next';

const VerticalFeatures = () => {
  const { t } = useTranslation('common');

  return (
    <Section
      title={t('feature-over')}
      description={t('feature-over-sub')}
    >
      <VerticalFeatureRow
        title={t('feature-1')}
        description={t('feature-1-c')}
        url="https://cdn.mdedit.online/mmt/feature-1.gif"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title={t('feature-2')}
        description={t('feature-2-c')}
        url="https://cdn.mdedit.online/mmt/feature-2.gif"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title={t('feature-4')}
        description={t('feature-4-c')}
        url="https://cdn.mdedit.online/mmt/feature-3.gif"
        imageAlt="Third feature alt text"
      />
    </Section>
  )
};

export { VerticalFeatures };
