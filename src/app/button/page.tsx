import { CmContainer } from '@/components/ui-parts/Container/CmContainer';
import Link from 'next/link';
import styles from './styles.module.scss';
import { CmButton } from '@/components/ui-parts/Button/CmButton';
import { COLOR } from '@/styles/const';
import { AddIcon } from '@/components/ui-parts/Icon/AddIcon';
import { ChevronRightIcon } from '@/components/ui-parts/Icon/ChevronRight';
import { CmSpinner } from '@/components/ui-parts/Button/Spinner/CmSpinner';

export function generateMetadata() {
  return {
    title: `button | cm-component-app`,
  };
}

export default function Button() {
  return (
    <div className={styles.button}>
      <CmContainer>
        <h2 className={styles.title}>Button</h2>
        <div className={styles.content}>
          <Link href={'/'}>← TopPage</Link>
          <div>
            Check it on{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              href={'https://github.com/gonta1026/cm-component-app/tree/main/src/app/button'}
            >
              sample page
            </a>{' '}
            and{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              href={
                'https://github.com/gonta1026/cm-component-app/blob/main/src/components/ui-parts/Button/CmButton/index.tsx'
              }
            >
              component
            </a>
          </div>
          <CmButton leftIcon={<AddIcon color={'#fff'} />}>button</CmButton>
          <CmButton variant="solid" leftIcon={<AddIcon color={COLOR.PRIMARY} />}>
            button
          </CmButton>
          <CmButton variant="solid" rightIcon={<ChevronRightIcon color={COLOR.PRIMARY} />}>
            ボタン
          </CmButton>
          <CmButton variant="outline" leftIcon={<CmSpinner />}>
            Loading...
          </CmButton>
          <CmButton color="red">Danger</CmButton>
        </div>
        <CmSpinner />
      </CmContainer>
    </div>
  );
}
