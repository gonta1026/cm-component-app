import { CmContainer } from '@/components/ui-parts/Container/CmContainer';
import Link from 'next/link';
import styles from './styles.module.scss';
import { CmSpinner } from '@/components/ui-parts/Button/Spinner/CmSpinner';
import { CmCard } from '@/components/ui-parts/Card/CmCard';
import { CmLabel } from '@/components/ui-parts/Label/CmLabel';
import { MATERIAL_ICON } from '@/assets/images/materialIcon';
import { CmHelpterText } from '@/components/ui-parts/Text/CmHelpterText';
import { CmErrorText } from '@/components/ui-parts/Text/CmErrorText';
import { CmSelect } from '@/components/ui-parts/Select/CmSelect';

export function generateMetadata() {
  return {
    title: `select | cm-component-app`,
  };
}

const { search } = MATERIAL_ICON;
const COMPONENTS = [
  {
    href: 'https://github.com/gonta1026/cm-component-app/tree/main/src/components/ui-parts/Label/CmLabel',
    name: 'CmLabel',
  },
  {
    href: 'https://github.com/gonta1026/cm-component-app/tree/main/src/components/ui-parts/Select/CmSelect',
    name: 'CmSelect',
  },
] as const;

export default function SelectPage() {
  return (
    <div className={styles.select}>
      <CmContainer>
        <h2 className={styles.title}>Input</h2>
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
                href={'https://github.com/gonta1026/cm-component-app/tree/main/src/app/select'}
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
              <CmLabel htmlFor="input">normal</CmLabel>
              <CmSelect id="input">
                <option value="1">1</option>
                <option value="2">2</option>
              </CmSelect>
              <CmHelpterText>hogehogehoge</CmHelpterText>
            </div>
            <div>
              <CmLabel htmlFor="required" isRequired>
                normal
              </CmLabel>
              <CmSelect id="required">
                <option value="1">1</option>
                <option value="2">2</option>
              </CmSelect>
            </div>
            <div>
              <CmLabel htmlFor="error">error</CmLabel>
              <CmSelect id="error" isError>
                <option value="1">1</option>
                <option value="2">2</option>
              </CmSelect>
              <CmErrorText>fugafugafuga</CmErrorText>
            </div>
            <div>
              <CmLabel htmlFor="disabled">disabled</CmLabel>
              <CmSelect id="disabled" isDisabled>
                <option value="1">1</option>
                <option value="2">2</option>
              </CmSelect>
            </div>
          </CmCard>
        </div>
        <CmSpinner />
      </CmContainer>
    </div>
  );
}
