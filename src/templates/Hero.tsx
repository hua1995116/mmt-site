import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';

const Hero = () => { 
  const router = useRouter()
  const { t } = useTranslation('common');
  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={null}>
          <li>
            <Link href="https://github.com/hua1995116/mmt">
              <a>GitHub</a>
            </Link>
          </li>
          <li>
            <Link href="/" locale={router.locale === 'en' ? 'zh_cn' : 'en'}>
              <a>{router.locale === 'en' ? '中文' : 'en'}</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>
  
      <Section yPadding=" pb-32">
        <div className={`flex justify-center mt-10 mb-10`}>
          <Logo xl />
        </div>
        <HeroOneButton
          title={
            <>
              { t('title1')} {'\n'}
              <span className="text-primary-500">{t('title2')}</span>
            </>
          }
          description={ t('sub-title') }
          button={
            <Link href="https://github.com/hua1995116/mmt">
              <a>
                <Button xl>{ t('start-btn') }</Button>
              </a>
            </Link>
          }
        />
      </Section>
    </Background>
  );
}

export { Hero };
