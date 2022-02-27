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
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title={t('feature-2')}
        description={t('feature-2-c')}
        image="/assets/images/feature2.svg"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title={t('feature-4')}
        description={t('feature-4-c')}
        image="/assets/images/feature3.svg"
        imageAlt="Third feature alt text"
      />
    </Section>
  )
};

export { VerticalFeatures };
