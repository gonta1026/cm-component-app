import { CmContainer } from '@/components/ui-parts/Container/CmContainer';
import Link from 'next/link';
import styles from './styles.module.scss';
import { CmSpinner } from '@/components/ui-parts/Button/Spinner/CmSpinner';
import { CmCard } from '@/components/ui-parts/Card/CmCard';
import { CmLabel } from '@/components/ui-parts/Label/CmLabel';
import { CmHelpterText } from '@/components/ui-parts/Text/CmHelpterText';
import { CmErrorText } from '@/components/ui-parts/Text/CmErrorText';
import { CmTextarea } from '@/components/ui-parts/Textarea/CmTextarea';

export function generateMetadata() {
  return {
    title: `input | cm-component-app`,
  };
}

const COMPONENTS = [
  {
    href: 'https://github.com/gonta1026/cm-component-app/tree/main/src/components/ui-parts/Label/CmLabel',
    name: 'CmLabel',
  },
  {
    href: 'https://github.com/gonta1026/cm-component-app/blob/main/src/components/ui-parts/Textarea/CmTextarea',
    name: 'CmTextarea',
  },
] as const;

export default function Textarea() {
  return (
    <div className={styles.textarea}>
      <CmContainer>
        <h2 className={styles.title}>Textarea</h2>
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
                href={'https://github.com/gonta1026/cm-component-app/tree/main/src/app/input'}
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
            <div>
              <CmLabel htmlFor="textarea">normal</CmLabel>
              <CmTextarea id="textarea" />
              <CmHelpterText>hogehogehoge</CmHelpterText>
            </div>
            <div>
              <CmLabel htmlFor="required" isRequired>
                normal
              </CmLabel>
              <CmTextarea id="required" />
            </div>
            <div>
              <CmLabel htmlFor="error">error</CmLabel>
              <CmTextarea id="error" isError />
              <CmErrorText>fugafugafuga</CmErrorText>
            </div>
            <div>
              <CmLabel htmlFor="disabled">disabled</CmLabel>
              <CmTextarea id="disabled" isDisabled />
            </div>
          </CmCard>
        </div>
        <CmSpinner />
      </CmContainer>
    </div>
  );
}
