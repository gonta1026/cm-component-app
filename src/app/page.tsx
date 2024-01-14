import Link from 'next/link';
import { CmContainer } from '@/components/ui-parts/Container/CmContainer';
import styles from './styles.module.scss';

export function generateMetadata() {
  return {
    title: `トップページ | cm-component-app`,
  };
}

export default function Home() {
  return (
    <div className={styles.home}>
      <CmContainer>
        <Link href={'/button'}>ボタンへ</Link>
      </CmContainer>
    </div>
  );
}
