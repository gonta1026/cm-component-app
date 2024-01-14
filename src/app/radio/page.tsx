import { CmContainer } from '@/components/ui-parts/Container/CmContainer';
import Link from 'next/link';
import styles from './styles.module.scss';
import { CmSpinner } from '@/components/ui-parts/Button/Spinner/CmSpinner';
import { CmCard } from '@/components/ui-parts/Card/CmCard';
import { CmRadio } from '@/components/ui-parts/Radio/CmRadio';

export function generateMetadata() {
  return {
    title: `radio | cm-component-app`,
  };
}

const COMPONENTS = [
  {
    href: 'https://github.com/gonta1026/cm-component-app/blob/main/src/components/ui-parts/Radio/CmRadio',
    name: 'CmRadio',
  },
] as const;

export default function Input() {
  return (
    <div className={styles.radio}>
      <CmContainer>
        <h2 className={styles.title}>Radio</h2>
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
                href={'https://github.com/gonta1026/cm-component-app/tree/main/src/app/radio'}
              >
                sample page
              </a>
            </div>
            {COMPONENTS.map((component) => (
              <div key={component.href} className={styles.showLink}>
                <a target="_blank" rel="noopener noreferrer" className={styles.link} href={component.href}>
                  - {component.name}
                </a>
              </div>
            ))}
          </div>
          <CmCard className={styles.card}>
            <CmRadio id="radio-one">one</CmRadio>
            <CmRadio id="radio-two" isChecked>
              two
            </CmRadio>
          </CmCard>
        </div>
        <CmSpinner />
      </CmContainer>
    </div>
  );
}
