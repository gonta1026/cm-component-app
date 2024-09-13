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
        {/* form1 */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
          <form style={{ display: 'block' }}>
            <label>
              checkbox1
              <input type="checkbox" name="Purpose" value="1" />
            </label>
            <label>
              checkbox2
              <input type="checkbox" name="Purpose" value="2" />
            </label>
            <label>
              checkbox3
              <input type="checkbox" name="Purpose" value="3" />
            </label>
            <label>
              checkbox4（name属性無）
              <input type="checkbox" value="4" />
            </label>
            <label>
              checkbox4（name属性あり）
              <input type="checkbox" name="only" value="1" />
            </label>
            <div>
              <label>
                ラジオ１（name属性無）
                <input type="radio" />
              </label>
            </div>
            <div>
              {/*  */}
              <label>
                ラジオ２
                <input type="radio" name="hogehoge" />
              </label>
              <label>
                ラジオ３
                <input type="radio" name="hogehoge" />
              </label>
            </div>
            <div>
              <label htmlFor="mukankei-0">無関係0</label>
              <input id="mukankei-0" type="text" name="mukankei-0" />
            </div>
            <div>
              <label htmlFor="email-0">メール</label>
              <input type="text" id="email-0" name="email-0" />
            </div>
            <div>
              <label htmlFor="sei-0">姓</label>
              <input type="text" id="sei-0" name="sei-0" />
            </div>
            <div>
              <label htmlFor="mei-0">名</label>
              <input type="text" id="mei-0" name="mei-0" />
            </div>
          </form>
          <form style={{ display: 'block' }}>
            <div>
              <label htmlFor="mukankei-1">無関係1</label>
              <input type="text" id="mukankei-1" name="mukankei-1" />
            </div>
            <div>
              <label htmlFor="email-1">メール*</label>
              <input type="text" id="email-1" name="email-1" />
            </div>
            <div>
              <label htmlFor="sei-1">姓*</label>
              <input type="text" id="sei-1" name="sei-1" />
            </div>
            <div>
              <label htmlFor="mei-1">名*</label>
              <input type="text" id="mei-1" name="mei-1" />
            </div>
          </form>
          <form>
            <div>
              <label htmlFor="mukankei-2">無関係2</label>
              <input type="text" id="mukankei-2" name="mukankei-2" />
            </div>
            <div>
              <label htmlFor="lastname">セイ*</label>
              <input type="text" id="lastname" name="lastname" />
            </div>
            <div>
              <label htmlFor="firstname">メイ*</label>
              <input type="text" id="firstname" name="firstname" />
            </div>
          </form>

          <form>
            <div>
              <label htmlFor="name">名前*</label>
              <input type="text" id="name" name="name" />
            </div>
          </form>

          <form>
            <div>
              <label htmlFor="email">めーる</label>
              <input type="text" id="email" name="email" />
            </div>
          </form>
          <form>
            <div>
              <label htmlFor="email-2">メールアドレス</label>
              <input type="text" id="email-2" name="email-2" />
            </div>
          </form>
        </div>

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

        <CmSpinner />
      </CmContainer>
    </div>
  );
}
