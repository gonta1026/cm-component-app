import { CmContainer } from '@/components/ui-parts/Container/CmContainer';
import Link from 'next/link';
import styles from './styles.module.scss';
import { CmSpinner } from '@/components/ui-parts/Button/Spinner/CmSpinner';
import { CmCard } from '@/components/ui-parts/Card/CmCard';
import { CmInput } from '@/components/ui-parts/Input/CmInput';
import { CmPasswordInput } from '@/components/ui-parts/Input/CmPasswordInput';
import { CmLabel } from '@/components/ui-parts/Label/CmLabel';
import { CmIconInput } from '@/components/ui-parts/Input/CmIconInput';
import { MATERIAL_ICON } from '@/assets/images/materialIcon';
import Image from 'next/image';
import { CmHelpterText } from '@/components/ui-parts/Text/CmHelpterText';
import { CmErrorText } from '@/components/ui-parts/Text/CmErrorText';

export function generateMetadata() {
  return {
    title: `input | cm-component-app`,
  };
}

const { search } = MATERIAL_ICON;
const COMPONENTS = [
  {
    href: 'https://github.com/gonta1026/cm-component-app/tree/main/src/components/ui-parts/Label/CmLabel',
    name: 'CmLabel',
  },
  {
    href: 'https://github.com/gonta1026/cm-component-app/blob/main/src/components/ui-parts/Input/CmInput',
    name: 'CmInput',
  },
  {
    href: 'https://github.com/gonta1026/cm-component-app/tree/main/src/components/ui-parts/Input/CmIconInput',
    name: 'CmIconInput',
  },
  {
    href: 'https://github.com/gonta1026/cm-component-app/tree/main/src/components/ui-parts/Input/CmPasswordInput',
    name: 'CmPasswordInput',
  },
] as const;

export default function InputPage() {
  return (
    <div className={styles.input}>
      <CmContainer>
        <h2 className={styles.title}>Input</h2>
        <form>
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
              <div className='testtest'>
                <CmInput id="input2" />
              </div>
              <div>
                <CmLabel htmlFor="input">normal</CmLabel>
                <CmInput id="input" />
                <CmHelpterText>hogehogehoge</CmHelpterText>
              </div>
              <div>
                <CmLabel htmlFor="required" isRequired>
                  normal
                </CmLabel>
                <CmInput id="required" />
              </div>
              <div>
                <CmLabel htmlFor="error">error</CmLabel>
                <CmInput id="error" isError />
                <CmErrorText>fugafugafuga</CmErrorText>
              </div>
              <div>
                <CmLabel htmlFor="disabled">disabled</CmLabel>
                <CmInput id="disabled" isDisabled />
              </div>
              <div>
                <CmLabel htmlFor="password">password</CmLabel>
                <CmPasswordInput id="password" />
              </div>
              <div>
                <CmLabel htmlFor="left-icon">left icon</CmLabel>
                <CmIconInput
                  id="left-icon"
                  leftIcon={<Image src={search.src} alt={search.alt} width={18} height={18} />}
                />
              </div>
              <div>
                <CmLabel htmlFor="right-icon">right icon</CmLabel>
                <CmIconInput
                  id="right-icon"
                  rightIcon={<Image src={search.src} alt={search.alt} width={18} height={18} />}
                />
              </div>
            </CmCard>
          </div>
        </form>
        <CmSpinner />
      </CmContainer>
    </div>
  );
}
