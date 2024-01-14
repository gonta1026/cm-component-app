import { CmContainer } from '@/components/ui-parts/Container/CmContainer';
import Link from 'next/link';
import styles from './styles.module.scss';
import { CmButton } from '@/components/ui-parts/Button/CmButton';
import { COLOR } from '@/styles/const';
import { ChevronRightIcon } from '@/components/ui-parts/Icon/ChevronRight';
import { CmSpinner } from '@/components/ui-parts/Button/Spinner/CmSpinner';
import { AddIcon } from '@/components/ui-parts/Icon/AddIcon';
import { CmCard } from '@/components/ui-parts/Card/CmCard';

export function generateMetadata() {
  return {
    title: `button | cm-component-app`,
  };
}

const COMPONENTS = [
  {
    href: 'https://github.com/gonta1026/cm-component-app/blob/main/src/components/ui-parts/Input/CmButton',
    name: 'CmButton',
  },
] as const;

export default function Button() {
  return (
    <div className={styles.button}>
      <CmContainer>
        <h2 className={styles.title}>Button</h2>
        <div className={styles.content}>
          <div className={styles.topBlock}>
            <Link href={'/'} className={styles.prevLink}>
              ← TopPage
            </Link>
            <div className={styles.showLink}>
              Check it on{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                href={'https://github.com/gonta1026/cm-component-app/tree/main/src/app/button'}
              >
                sample page
              </a>
              {COMPONENTS.map((component) => (
                <div key={component.href} className={styles.showLink}>
                  <a target="_blank" rel="noopener noreferrer" className={styles.link} href={component.href}>
                    - {component.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <CmCard className={styles.card}>
            <CmButton>Outline</CmButton>
            <CmButton variant="solid">Solid</CmButton>
            <CmButton variant="solid" rightIcon={<ChevronRightIcon color={COLOR.PRIMARY} />}>
              Next
            </CmButton>
            <CmButton variant="solid" leftIcon={<AddIcon color={COLOR.PRIMARY} />}>
              Add
            </CmButton>
            <CmButton variant="outline" leftIcon={<CmSpinner />}>
              Loading...
            </CmButton>
            <CmButton color="red">Danger</CmButton>
          </CmCard>
        </div>
        <CmSpinner />
      </CmContainer>
    </div>
  );
}
