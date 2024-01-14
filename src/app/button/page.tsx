import { CmContainer } from '@/components/ui-parts/Container/CmContainer';
import Link from 'next/link';
import styles from './styles.module.scss';
import { CmButton } from '@/components/ui-parts/Button/CmButton';
import { COLOR } from '@/styles/const';
import { AddIcon } from '@/components/ui-parts/Icon/AddIcon';
import { ChevronRightIcon } from '@/components/ui-parts/Icon/ChevronRight';

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
        <Link href={'/'}>to TopPage</Link>
        <div className={styles.content}>
          <CmButton leftIcon={<AddIcon color={'#fff'} />}>button</CmButton>
          <CmButton buttonStyle="solid" leftIcon={<AddIcon color={COLOR.PRIMARY} />}>
            button
          </CmButton>
          <CmButton buttonStyle="solid" rightIcon={<ChevronRightIcon color={COLOR.PRIMARY} />}>
            ボタン
          </CmButton>
          <CmButton color="red">Danger</CmButton>
        </div>
      </CmContainer>
    </div>
  );
}
